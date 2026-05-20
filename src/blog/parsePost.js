function parseFrontmatter(rawMarkdown) {
  const match = rawMarkdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: rawMarkdown };
  }

  const data = {};
  match[1].split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  });

  return { data, content: match[2] };
}

function slugToTitle(slug) {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function estimateReadingMinutes(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function parsePostSummary(rawMarkdown, slug) {
  const { data, content } = parseFrontmatter(rawMarkdown);

  return {
    slug,
    title: data.title || slugToTitle(slug),
    date: data.date || '',
    excerpt: data.excerpt || '',
    readingMinutes: estimateReadingMinutes(content),
  };
}

export function parsePost(rawMarkdown, manifestMeta = {}) {
  const { data, content } = parseFrontmatter(rawMarkdown);

  const body = content.trim();

  return {
    title: data.title || manifestMeta.title || 'Untitled',
    date: data.date || manifestMeta.date || '',
    excerpt: data.excerpt || manifestMeta.excerpt || '',
    slug: manifestMeta.slug || data.slug || '',
    readingMinutes:
      manifestMeta.readingMinutes || estimateReadingMinutes(body),
    content: body,
  };
}
