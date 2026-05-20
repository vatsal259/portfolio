// Default: load posts from GitHub (vatsal259/contents). Set REACT_APP_BLOG_SOURCE=local
// only if you mirror posts under portfolio/public/blog/ (index.json + .md files).
const folder = process.env.REACT_APP_BLOG_FOLDER || 'blog';
const branch = process.env.REACT_APP_BLOG_BRANCH || 'main';
const githubOwner = process.env.REACT_APP_BLOG_REPO_OWNER || 'vatsal259';
const githubRepo = process.env.REACT_APP_BLOG_REPO_NAME || 'contents';
const isLocal = process.env.REACT_APP_BLOG_SOURCE === 'local';

const repoRawBase = `https://raw.githubusercontent.com/${githubOwner}/${githubRepo}/${branch}`;
const rawBase = `${repoRawBase}/${folder}`;
const resumeFile = process.env.REACT_APP_RESUME_FILE || 'Resume_Vatsal_Verma.pdf';

// jsDelivr mirrors the contents repo with Content-Type: application/pdf (raw.githubusercontent
// serves application/octet-stream, which forces a download instead of in-browser viewing).
const resumeCdnBase = `https://cdn.jsdelivr.net/gh/${githubOwner}/${githubRepo}@${branch}`;
export const resumeUrl = `${resumeCdnBase}/${resumeFile}`;

export const blogConfig = {
  folder,
  branch,
  pollIntervalMs: Number(process.env.REACT_APP_BLOG_POLL_MS) || 30000,
  isLocal,
  github: {
    owner: githubOwner,
    repo: githubRepo,
    branch,
    token: process.env.REACT_APP_GITHUB_TOKEN || '',
  },
  indexUrl: isLocal ? `/${folder}/index.json` : `${rawBase}/index.json`,
  postUrl: (slug) => (isLocal ? `/${folder}/${slug}.md` : `${rawBase}/${slug}.md`),
  githubContentsUrl: `https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/${folder}?ref=${branch}`,
};
