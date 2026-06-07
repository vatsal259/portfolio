import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogPostsPath = path.join(__dirname, '../src/seo/blog-posts.json');

export const BLOG_POSTS = JSON.parse(fs.readFileSync(blogPostsPath, 'utf8'));

export const BLOG_SLUGS = BLOG_POSTS.map((post) => post.slug);

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
