import { blogConfig } from './blogConfig';
import { parsePost, parsePostSummary } from './parsePost';
import { BLOG_POSTS } from '../seo/blogPosts';

/** @type {Map<string, { sha: string, summary: object }>} */
const fileCache = new Map();

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}): ${url}`);
  }
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('json')) {
    const preview = (await response.clone().text()).trimStart().slice(0, 40);
    throw new Error(
      `Expected JSON from ${url}, got ${contentType || 'unknown type'} (${preview}…)`
    );
  }
  return response.json();
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
  const activeSlugs = new Set();
  const posts = [];

  for (const file of files) {
    const slug = file.name.replace(/\.md$/i, '');
    activeSlugs.add(slug);

    const cached = fileCache.get(slug);
    if (cached && cached.sha === file.sha) {
      posts.push(cached.summary);
      continue;
    }

    const raw = await fetchText(file.download_url);
    const summary = parsePostSummary(raw, slug);
    fileCache.set(slug, { sha: file.sha, summary });
    posts.push(summary);
  }

  for (const slug of fileCache.keys()) {
    if (!activeSlugs.has(slug)) {
      fileCache.delete(slug);
    }
  }

  return posts;
}

async function loadPostsFromLocalIndex() {
  const posts = await fetchJson(blogConfig.indexUrl);
  if (!Array.isArray(posts)) {
    throw new Error('Blog index must be a JSON array');
  }
  return posts;
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

  try {
    return await loadPostsFromGithubFolder();
  } catch (error) {
    console.warn(
      'GitHub Contents API unavailable; falling back to static blog manifest.',
      error
    );
    return loadPostsFromStaticManifest();
  }
}

export async function fetchPost(slug, manifestMeta = {}) {
  const raw = await fetchText(blogConfig.postUrl(slug));
  return parsePost(raw, { ...manifestMeta, slug });
}
