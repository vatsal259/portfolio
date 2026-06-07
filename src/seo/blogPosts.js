import blogPosts from './blog-posts.json';

export const BLOG_POSTS = blogPosts;

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
