import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { BLOG_POSTS } from './blogPosts.mjs';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  EMAIL,
  RSS_URL,
} from './seo-data.mjs';
import { escapeXml } from './escapeHtml.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = path.join(__dirname, '../build');

function toRfc822(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return '';
  return date.toUTCString();
}

async function main() {
  const items = [...BLOG_POSTS]
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))
    .map((post) => {
      const link = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = toRfc822(post.date);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      ${pubDate ? `<pubDate>${pubDate}</pubDate>` : ''}
      <description>${escapeXml(post.excerpt || post.title)}</description>
    </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE_NAME} Blog`)}</title>
    <link>${escapeXml(`${SITE_URL}/blog`)}</link>
    <description>${escapeXml(DEFAULT_DESCRIPTION)}</description>
    <language>en-in</language>
    <managingEditor>${escapeXml(`${EMAIL} (${SITE_NAME})`)}</managingEditor>
    <atom:link href="${escapeXml(RSS_URL)}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  await fs.writeFile(path.join(BUILD_DIR, 'rss.xml'), rss, 'utf8');
  console.log(`RSS written with ${BLOG_POSTS.length} items.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
