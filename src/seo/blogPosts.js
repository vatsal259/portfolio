import blogPosts from './blog-posts.json';

export const BLOG_POSTS = blogPosts;

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug, limit = 3) {
  return BLOG_POSTS.filter((post) => post.slug !== slug).slice(0, limit);
}
