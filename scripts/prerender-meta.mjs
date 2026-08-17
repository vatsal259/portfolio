import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchBlogSlugs } from './fetchBlogSlugs.mjs';
import { BLOG_SLUGS } from './blogPosts.mjs';
import { escapeAttr, escapeHtml } from './escapeHtml.mjs';
import {
  PAGE_SEO,
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  OG_IMAGE_ALT,
  OG_LOCALE,
  TWITTER_HANDLE,
  INDEX_ROBOTS,
  RSS_URL,
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

function replaceOrInsertByName(html, name, content) {
  const tag = `<meta name="${name}" content="${escapeAttr(content)}">`;
  const re = new RegExp(`<meta name="${name}" content="[^"]*">`);
  if (re.test(html)) return html.replace(re, tag);
  return html.replace('</head>', `    ${tag}\n</head>`);
}

function replaceOrInsertByProperty(html, property, content) {
  const tag = `<meta property="${property}" content="${escapeAttr(content)}">`;
  const re = new RegExp(`<meta property="${property}" content="[^"]*">`);
  if (re.test(html)) return html.replace(re, tag);
  return html.replace('</head>', `    ${tag}\n</head>`);
}

function injectSeo(baseHtml, route, seo) {
  const canonical = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  const robots = seo.robots || INDEX_ROBOTS;
  const ogType = seo.ogType || 'website';
  const jsonLdScripts = (seo.jsonLd || [])
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    )
    .join('\n    ');

  let html = baseHtml.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(seo.title)}</title>`
  );

  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${escapeAttr(canonical)}">`
  );

  html = replaceOrInsertByName(html, 'description', seo.description);
  html = replaceOrInsertByName(html, 'robots', robots);
  html = replaceOrInsertByName(html, 'author', SITE_NAME);
  html = replaceOrInsertByProperty(html, 'og:type', ogType);
  html = replaceOrInsertByProperty(html, 'og:site_name', SITE_NAME);
  html = replaceOrInsertByProperty(html, 'og:title', seo.title);
  html = replaceOrInsertByProperty(html, 'og:description', seo.description);
  html = replaceOrInsertByProperty(html, 'og:url', canonical);
  html = replaceOrInsertByProperty(html, 'og:image', DEFAULT_OG_IMAGE);
  html = replaceOrInsertByProperty(html, 'og:image:alt', OG_IMAGE_ALT);
  html = replaceOrInsertByProperty(html, 'og:locale', OG_LOCALE);
  html = replaceOrInsertByName(html, 'twitter:card', 'summary_large_image');
  html = replaceOrInsertByName(html, 'twitter:site', TWITTER_HANDLE);
  html = replaceOrInsertByName(html, 'twitter:creator', TWITTER_HANDLE);
  html = replaceOrInsertByName(html, 'twitter:title', seo.title);
  html = replaceOrInsertByName(html, 'twitter:description', seo.description);
  html = replaceOrInsertByName(html, 'twitter:image', DEFAULT_OG_IMAGE);
  html = replaceOrInsertByName(html, 'twitter:image:alt', OG_IMAGE_ALT);

  if (ogType === 'article' && seo.publishedTime) {
    html = replaceOrInsertByProperty(
      html,
      'article:published_time',
      seo.publishedTime
    );
    html = replaceOrInsertByProperty(
      html,
      'article:modified_time',
      seo.modifiedTime || seo.publishedTime
    );
    html = replaceOrInsertByProperty(html, 'article:author', SITE_NAME);
  }

  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g,
    ''
  );

  if (jsonLdScripts) {
    html = html.replace('</head>', `    ${jsonLdScripts}\n</head>`);
  }

  const noscript = `<noscript>${seo.body}<p><a href="${RSS_URL}">RSS feed</a></p></noscript>`;
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, noscript);

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
    await writeRouteHtml(baseHtml, `/blog/${slug}`, seo);
  }

  console.log(
    `SEO prerender complete (${Object.keys(PAGE_SEO).length + slugs.length} routes).`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
