const GITHUB_API =
  'https://api.github.com/repos/vatsal259/contents/contents/blog?ref=main';

const FALLBACK_SLUGS = ['embabel-agent-framework'];

export async function fetchBlogSlugs() {
  try {
    const response = await fetch(GITHUB_API, {
      headers: { Accept: 'application/vnd.github+json' },
    });

    if (!response.ok) {
      console.warn(`Blog slug fetch failed (${response.status}); using fallback slugs.`);
      return FALLBACK_SLUGS;
    }

    const files = await response.json();
    if (!Array.isArray(files)) {
      return FALLBACK_SLUGS;
    }

    const slugs = files
      .filter(
        (entry) =>
          entry.type === 'file' &&
          entry.name.endsWith('.md') &&
          entry.name.toLowerCase() !== 'readme.md'
      )
      .map((entry) => entry.name.replace(/\.md$/i, ''));

    return slugs.length > 0 ? slugs : FALLBACK_SLUGS;
  } catch (error) {
    console.warn(`Blog slug fetch error: ${error.message}; using fallback slugs.`);
    return FALLBACK_SLUGS;
  }
}
