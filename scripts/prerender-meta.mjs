import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchBlogSlugs } from './fetchBlogSlugs.mjs';
import { BLOG_SLUGS } from './blogPosts.mjs';
import {
  PAGE_SEO,
  SITE_URL,
  buildArticleSeo,
} from './seo-data.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = path.join(__dirname, '../build');
const BLOG_RAW_BASE =
  'https://raw.githubusercontent.com/vatsal259/contents/main/blog';

function routeToOutputPath(route) {
  if (route === '/') {
    return path.join(BUILD_DIR, 'index.html');
  }

  const segments = route.replace(/^\//, '').split('/').filter(Boolean);
  return path.join(BUILD_DIR, ...segments, 'index.html');
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};

  const block = match[1];
  const data = {};

  block.split('\n').forEach((line) => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  });

  return data;
}

async function fetchArticleFrontmatter(slug) {
  try {
    const response = await fetch(`${BLOG_RAW_BASE}/${slug}.md`);
    if (!response.ok) return {};
    const raw = await response.text();
    return parseFrontmatter(raw);
  } catch {
    return {};
  }
}

function injectSeo(baseHtml, route, seo) {
  const canonical = `${SITE_URL}${route}`;
  const jsonLdScripts = (seo.jsonLd || [])
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    )
    .join('\n    ');

  let html = baseHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${seo.title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*">/,
      `<meta name="description" content="${seo.description}">`
    )
    .replace(
      /<link rel="canonical" href="[^"]*">/,
      `<link rel="canonical" href="${canonical}">`
    )
    .replace(
      /<meta property="og:title" content="[^"]*">/,
      `<meta property="og:title" content="${seo.title}">`
    )
    .replace(
      /<meta property="og:description" content="[^"]*">/,
      `<meta property="og:description" content="${seo.description}">`
    )
    .replace(
      /<meta property="og:url" content="[^"]*">/,
      `<meta property="og:url" content="${canonical}">`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*">/,
      `<meta name="twitter:title" content="${seo.title}">`
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*">/,
      `<meta name="twitter:description" content="${seo.description}">`
    );

  if (route !== '/') {
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/,
      ''
    );
  }

  if (jsonLdScripts) {
    html = html.replace('</head>', `    ${jsonLdScripts}\n</head>`);
  }

  const fallback = `<main id="seo-prerender" hidden aria-hidden="true">${seo.body}</main>`;
  html = html.replace('<div id="root"></div>', `${fallback}\n    <div id="root"></div>`);

  return html;
}

async function writeRouteHtml(baseHtml, route, seo) {
  const html = injectSeo(baseHtml, route, seo);
  const outputPath = routeToOutputPath(route);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html, 'utf8');
  console.log(`SEO shell: ${route} -> ${path.relative(BUILD_DIR, outputPath)}`);
}

async function main() {
  const baseHtml = await fs.readFile(path.join(BUILD_DIR, 'index.html'), 'utf8');
  const fetchedSlugs = await fetchBlogSlugs();
  const slugs = [...new Set([...BLOG_SLUGS, ...fetchedSlugs])];

  for (const [route, seo] of Object.entries(PAGE_SEO)) {
    await writeRouteHtml(baseHtml, route, seo);
  }

  for (const slug of slugs) {
    const frontmatter = await fetchArticleFrontmatter(slug);
    const seo = buildArticleSeo(slug, frontmatter);
    await writeRouteHtml(baseHtml, `/blog/${slug}`, {
      ...seo,
      ogType: 'article',
    });
  }

  console.log(
    `SEO prerender complete (${Object.keys(PAGE_SEO).length + slugs.length} routes).`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
