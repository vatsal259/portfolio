import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchBlogSlugs } from './fetchBlogSlugs.mjs';
import { BLOG_POSTS } from './blogPosts.mjs';
import { SITE_URL } from './seo-data.mjs';
import { escapeXml } from './escapeHtml.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = path.join(__dirname, '../build');

const STATIC_ROUTES = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/about', changefreq: 'monthly', priority: '0.9' },
  { loc: '/work', changefreq: 'monthly', priority: '0.8' },
  { loc: '/blog', changefreq: 'weekly', priority: '0.9' },
  { loc: '/contact', changefreq: 'yearly', priority: '0.6' },
];

function lastmodForSlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug)?.date;
}

function toUrlEntry({ loc, changefreq, priority, lastmod }) {
  const lastmodTag = lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : '';
  return `  <url>
    <loc>${escapeXml(`${SITE_URL}${loc === '/' ? '/' : loc}`)}</loc>${lastmodTag}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function main() {
  const slugs = await fetchBlogSlugs();
  const blogRoutes = slugs.map((slug) => ({
    loc: `/blog/${slug}`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: lastmodForSlug(slug),
  }));

  const entries = [...STATIC_ROUTES, ...blogRoutes].map(toUrlEntry).join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

  await fs.writeFile(path.join(BUILD_DIR, 'sitemap.xml'), sitemap, 'utf8');
  console.log(`Sitemap written with ${STATIC_ROUTES.length + blogRoutes.length} URLs.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
