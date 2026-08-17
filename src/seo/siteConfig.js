import { BLOG_POSTS } from './blogPosts';
import { sortPostsByDate } from '../blog/formatDate';

export const SITE_URL = 'https://www.vatsalverma.in';
export const SITE_NAME = 'Vatsal Verma';
export const EMAIL = 'vatsalverma999@gmail.com';
export const TWITTER_HANDLE = '@ellipsecircle';
export const LANGUAGE = 'en';
export const OG_LOCALE = 'en_IN';
export const RSS_PATH = '/rss.xml';
export const RSS_URL = `${SITE_URL}${RSS_PATH}`;

export const DEFAULT_DESCRIPTION =
  'Vatsal Verma is a software engineer at Amdocs writing about Java, Spring Boot, Elasticsearch, and JVM systems. Portfolio, projects, blog, and contact.';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/Logo.png`;
export const OG_IMAGE_ALT = 'Vatsal Verma';

export const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
export const NOINDEX_ROBOTS = 'noindex, nofollow';

export const LEETCODE_PROFILE_URL = 'https://leetcode.com/u/vatsalverma999/';

export const SAME_AS = [
  'https://www.linkedin.com/in/vatsalverma999/',
  'https://github.com/vatsal259',
  LEETCODE_PROFILE_URL,
  'https://www.behance.net/vatsalverma',
  'https://www.youtube.com/@walkinthecraziestway',
  'https://instagram.com/vatsalastav',
  'https://x.com/ellipsecircle',
];

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

const PERSON_REF = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: SITE_NAME,
  url: SITE_URL,
};

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: SITE_NAME,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  email: EMAIL,
  description: DEFAULT_DESCRIPTION,
  jobTitle: 'Software Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Amdocs',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'VIT Vellore',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: SAME_AS,
  knowsAbout: [
    'Software Engineering',
    'Java',
    'Spring Boot',
    'Apache Kafka',
    'Elasticsearch',
    'JVM',
    'Distributed Systems',
    'React',
    'Artificial Intelligence',
    'Photography',
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  inLanguage: LANGUAGE,
  publisher: PERSON_REF,
  author: PERSON_REF,
};

export const PAGE_SEO = {
  home: {
    fullTitle: 'Vatsal Verma | Software Engineer in Java & Spring',
    description: DEFAULT_DESCRIPTION,
    path: '/',
  },
  about: {
    title: 'About',
    description:
      'Meet Vatsal Verma, software developer at Amdocs and VIT Vellore alum. Java, Spring, and Kafka by day; motorcycles and photography off the clock.',
    path: '/about',
  },
  work: {
    title: 'Work & Life',
    description:
      'Selected software projects including ArwenForge and docube-db, plus motorcycle rides, wildlife photography, and YouTube films by Vatsal Verma.',
    path: '/work',
  },
  blog: {
    title: 'Engineering Blog',
    description:
      'Guides on Spring Boot, Elasticsearch, JVM internals, SOLID, design patterns, LangChain, and JVM AI agents, written from production work.',
    path: '/blog',
  },
  contact: {
    title: 'Contact',
    description:
      'Email Vatsal Verma for engineering collaborations, Java and Spring work, or conversations about software, product, and growth.',
    path: '/contact',
  },
};

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildArticleSchema(post) {
  if (!post?.slug) return null;

  const url = `${SITE_URL}/blog/${post.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || undefined,
    image: DEFAULT_OG_IMAGE,
    datePublished: post.date || undefined,
    dateModified: post.dateModified || post.date || undefined,
    inLanguage: LANGUAGE,
    author: PERSON_REF,
    publisher: {
      ...PERSON_REF,
      image: DEFAULT_OG_IMAGE,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    isPartOf: {
      '@type': 'Blog',
      name: `${SITE_NAME} Blog`,
      url: `${SITE_URL}/blog`,
    },
    url,
  };

  if (post.readingMinutes > 0) {
    schema.timeRequired = `PT${post.readingMinutes}M`;
  }

  return schema;
}

export function buildArticleJsonLd(post) {
  const article = buildArticleSchema(post);
  if (!article) return [];

  return [
    article,
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];
}

export function buildBlogListingSchema() {
  const posts = sortPostsByDate(BLOG_POSTS);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: `${SITE_NAME} Blog`,
      url: `${SITE_URL}/blog`,
      description: PAGE_SEO.blog.description,
      inLanguage: LANGUAGE,
      author: PERSON_REF,
      publisher: PERSON_REF,
      blogPost: posts.map((post) => buildArticleSchema(post)),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${SITE_NAME} articles`,
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
  ];
}

export function buildHomeJsonLd() {
  return [
    PERSON_SCHEMA,
    WEBSITE_SCHEMA,
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      name: PAGE_SEO.home.fullTitle,
      url: absoluteUrl('/'),
      mainEntity: { '@id': `${SITE_URL}/#person` },
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
    buildBreadcrumbSchema([{ name: 'Home', path: '/' }]),
  ];
}

export function buildAboutJsonLd() {
  return [
    PERSON_SCHEMA,
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      name: `About | ${SITE_NAME}`,
      description: PAGE_SEO.about.description,
      url: absoluteUrl('/about'),
      mainEntity: { '@id': `${SITE_URL}/#person` },
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ]),
  ];
}

export function buildWorkJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `Work & Life | ${SITE_NAME}`,
      description: PAGE_SEO.work.description,
      url: absoluteUrl('/work'),
      inLanguage: LANGUAGE,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
    },
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Work & Life', path: '/work' },
    ]),
  ];
}

export function buildContactJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: `Contact | ${SITE_NAME}`,
      description: PAGE_SEO.contact.description,
      url: absoluteUrl('/contact'),
      inLanguage: LANGUAGE,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: {
        '@id': `${SITE_URL}/#person`,
        '@type': 'Person',
        name: SITE_NAME,
        email: EMAIL,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'professional',
          email: EMAIL,
          availableLanguage: ['English', 'Hindi'],
        },
      },
    },
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  ];
}
