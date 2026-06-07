import { BLOG_POSTS } from './blogPosts.mjs';

export const SITE_URL = 'https://www.vatsalverma.in';
export const SITE_NAME = 'Vatsal Verma';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/Logo.png`;

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vatsal Verma',
  url: SITE_URL,
  jobTitle: 'Software Developer',
  worksFor: { '@type': 'Organization', name: 'Amdocs' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'VIT Vellore' },
  sameAs: [
    'https://www.linkedin.com/in/vatsalverma999/',
    'https://github.com/vatsal259',
    'https://www.behance.net/vatsalverma',
    'https://www.youtube.com/@walkinthecraziestway',
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'Vatsal Verma - software engineer at Amdocs, biker, and photographer. Portfolio, projects, blog, and contact.',
  author: { '@type': 'Person', name: 'Vatsal Verma', url: SITE_URL },
};

export const PAGE_SEO = {
  '/': {
    title: 'Vatsal Verma - Software Engineer',
    description:
      'Vatsal Verma - software engineer at Amdocs, biker, and photographer. Portfolio, projects, blog, and contact.',
    jsonLd: [PERSON_SCHEMA, WEBSITE_SCHEMA],
    body: '<h1>Vatsal Verma</h1><p>Software Engineer at Amdocs. Biker and photographer. Explore my work, blog, and contact.</p>',
  },
  '/about': {
    title: 'About | Vatsal Verma',
    description:
      'Software engineer at Amdocs. Story, work history, and obsessions - code, rides, and photography.',
    body: '<h1>About Vatsal Verma</h1><p>Software engineer at Amdocs with a story shaped by code, rides, and photography.</p>',
  },
  '/work': {
    title: 'Work & Life | Vatsal Verma',
    description:
      'Selected projects, life outside code, and YouTube stories - engineering builds, biking, photography, and more.',
    body: '<h1>Work &amp; Life</h1><p>Projects, personal pursuits, and stories from the road.</p>',
  },
  '/blog': {
    title: 'Blog | Vatsal Verma',
    description:
      'Technical essays on SOLID principles, GoF design patterns, JVM AI agents (Embabel), systems design, and lessons from building in production.',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Vatsal Verma Blog',
        url: `${SITE_URL}/blog`,
        description:
          'Technical essays on SOLID principles, GoF design patterns, JVM AI agents (Embabel), systems design, and lessons from building in production.',
        author: { '@type': 'Person', name: 'Vatsal Verma', url: SITE_URL },
        blogPost: BLOG_POSTS.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          url: `${SITE_URL}/blog/${post.slug}`,
          author: { '@type': 'Person', name: 'Vatsal Verma', url: SITE_URL },
        })),
      },
    ],
    body: `<h1>Blog</h1><ul>${BLOG_POSTS.map(
      (post) =>
        `<li><a href="/blog/${post.slug}">${post.title}</a> - ${post.excerpt}</li>`
    ).join('')}</ul>`,
  },
  '/contact': {
    title: 'Contact | Vatsal Verma',
    description:
      'Get in touch for collaborations, engineering conversations, or thoughtful ideas around software and product.',
    body: '<h1>Contact</h1><p>Reach out via email or social channels.</p>',
  },
};

export function buildArticleSeo(slug, frontmatter = {}) {
  const known = BLOG_POSTS.find((post) => post.slug === slug);
  const title = frontmatter.title || known?.title || slug;
  const description =
    frontmatter.excerpt ||
    known?.excerpt ||
    `Article by Vatsal Verma: ${title}`;
  const date = frontmatter.date || known?.date;

  return {
    title: `${title} | Vatsal Verma`,
    description,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: description || undefined,
        datePublished: date || undefined,
        author: { '@type': 'Person', name: 'Vatsal Verma', url: SITE_URL },
        publisher: { '@type': 'Person', name: 'Vatsal Verma', url: SITE_URL },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/blog/${slug}`,
        },
        url: `${SITE_URL}/blog/${slug}`,
      },
    ],
    body: `<h1>${title}</h1><p>${description}</p>`,
  };
}
