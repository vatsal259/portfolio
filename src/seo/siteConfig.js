import { BLOG_POSTS } from './blogPosts';

export const SITE_URL = 'https://www.vatsalverma.in';
export const SITE_NAME = 'Vatsal Verma';
export const DEFAULT_DESCRIPTION =
  'Vatsal Verma - software engineer at Amdocs, biker, and photographer. Portfolio, projects, blog, and contact.';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/Logo.png`;

export const SAME_AS = [
  'https://www.linkedin.com/in/vatsalverma999/',
  'https://github.com/vatsal259',
  'https://www.behance.net/vatsalverma',
  'https://www.youtube.com/@walkinthecraziestway',
  'https://instagram.com/vatsalastav',
  'https://x.com/ellipsecircle',
];

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vatsal Verma',
  url: SITE_URL,
  jobTitle: 'Software Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Amdocs',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'VIT Vellore',
  },
  sameAs: SAME_AS,
  knowsAbout: [
    'Software Engineering',
    'Java',
    'Spring',
    'Kafka',
    'React',
    'Distributed Systems',
    'Photography',
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  author: {
    '@type': 'Person',
    name: 'Vatsal Verma',
    url: SITE_URL,
  },
};

export const PAGE_SEO = {
  home: {
    fullTitle: 'Vatsal Verma - Software Engineer',
    description: DEFAULT_DESCRIPTION,
    path: '/',
  },
  about: {
    title: 'About',
    description:
      'Software engineer at Amdocs. Story, work history, and obsessions - code, rides, and photography.',
    path: '/about',
  },
  work: {
    title: 'Work & Life',
    description:
      'Selected projects, life outside code, and YouTube stories - engineering builds, biking, photography, and more.',
    path: '/work',
  },
  blog: {
    title: 'Blog',
    description:
      'Technical essays on SOLID principles, GoF design patterns, JVM AI agents (Embabel), systems design, and lessons from building in production.',
    path: '/blog',
  },
  contact: {
    title: 'Contact',
    description:
      'Get in touch for collaborations, engineering conversations, or thoughtful ideas around software and product.',
    path: '/contact',
  },
};

export function buildArticleSchema(post) {
  if (!post?.slug) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || undefined,
    datePublished: post.date || undefined,
    author: {
      '@type': 'Person',
      name: 'Vatsal Verma',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Vatsal Verma',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    url: `${SITE_URL}/blog/${post.slug}`,
  };
}

export function buildBlogListingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    description: PAGE_SEO.blog.description,
    author: {
      '@type': 'Person',
      name: 'Vatsal Verma',
      url: SITE_URL,
    },
    blogPost: BLOG_POSTS.map((post) => buildArticleSchema(post)),
  };
}
