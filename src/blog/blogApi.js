import { blogConfig } from './blogConfig';
import { parsePost, parsePostSummary } from './parsePost';
import { BLOG_POSTS } from '../seo/blogPosts';

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}): ${url}`);
  }
  const contentType = response.headers.get('content-type') || '';
  // raw.githubusercontent.com often serves JSON as text/plain
  if (
    contentType.includes('json') ||
    contentType.includes('text/plain') ||
    contentType.includes('javascript')
  ) {
    return response.json();
  }
  const preview = (await response.clone().text()).trimStart().slice(0, 40);
  throw new Error(
    `Expected JSON from ${url}, got ${contentType || 'unknown type'} (${preview}…)`
  );
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load content (${response.status})`);
  }
  return response.text();
}

function githubHeaders() {
  const headers = {
    Accept: 'application/vnd.github+json',
  };
  if (blogConfig.github.token) {
    headers.Authorization = `Bearer ${blogConfig.github.token}`;
  }
  return headers;
}

function normalizeSlugList(data) {
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('Blog index must be a non-empty JSON array');
  }

  return data
    .map((entry) => {
      if (typeof entry === 'string') return entry;
      if (entry && typeof entry.slug === 'string') return entry.slug;
      return null;
    })
    .filter(Boolean);
}

async function loadPostsFromSlugList(slugs) {
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const raw = await fetchText(blogConfig.postUrl(slug));
      return parsePostSummary(raw, slug);
    })
  );
  return posts;
}

/** Live list from contents/blog/index.json via raw.githubusercontent (no API quota). */
async function loadPostsFromRemoteIndex() {
  const data = await fetchJson(blogConfig.indexUrl);
  const slugs = normalizeSlugList(data);
  return loadPostsFromSlugList(slugs);
}

async function listGithubMarkdownFiles() {
  const data = await fetchJson(blogConfig.githubContentsUrl, {
    headers: githubHeaders(),
  });

  if (!Array.isArray(data)) {
    throw new Error('Unexpected GitHub folder response');
  }

  return data.filter(
    (entry) =>
      entry.type === 'file' &&
      entry.name.endsWith('.md') &&
      entry.name.toLowerCase() !== 'readme.md'
  );
}

async function loadPostsFromGithubFolder() {
  const files = await listGithubMarkdownFiles();
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.name.replace(/\.md$/i, '');
      const raw = await fetchText(file.download_url || blogConfig.postUrl(slug));
      return parsePostSummary(raw, slug);
    })
  );
  return posts;
}

async function loadPostsFromLocalIndex() {
  const data = await fetchJson(blogConfig.indexUrl);
  const slugs = normalizeSlugList(data);
  return loadPostsFromSlugList(slugs);
}

async function loadPostsFromStaticManifest() {
  const posts = await Promise.all(
    BLOG_POSTS.map(async (manifestPost) => {
      try {
        const raw = await fetchText(blogConfig.postUrl(manifestPost.slug));
        return parsePostSummary(raw, manifestPost.slug);
      } catch {
        return {
          slug: manifestPost.slug,
          title: manifestPost.title,
          date: manifestPost.date || '',
          pinned: Boolean(manifestPost.pinned),
          excerpt: manifestPost.excerpt,
          fact: manifestPost.fact || '',
          readingMinutes: 0,
        };
      }
    })
  );

  return posts;
}

export async function fetchPostIndex() {
  if (blogConfig.isLocal) {
    return loadPostsFromLocalIndex();
  }

  // 1) contents/blog/index.json over raw CDN — no GitHub API rate limit
  try {
    return await loadPostsFromRemoteIndex();
  } catch (indexError) {
    console.warn('Remote blog index unavailable; trying GitHub Contents API.', indexError);
  }

  // 2) GitHub Contents API (rate-limited when unauthenticated)
  try {
    return await loadPostsFromGithubFolder();
  } catch (apiError) {
    console.warn(
      'GitHub Contents API unavailable; using static portfolio manifest.',
      apiError
    );
  }

  // 3) Last resort baked into the portfolio build
  return loadPostsFromStaticManifest();
}

export async function fetchPost(slug, manifestMeta = {}) {
  const raw = await fetchText(blogConfig.postUrl(slug));
  return parsePost(raw, { ...manifestMeta, slug });
}
