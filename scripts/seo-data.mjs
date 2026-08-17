import { BLOG_POSTS } from './blogPosts.mjs';
import { escapeHtml } from './escapeHtml.mjs';

export const SITE_URL = 'https://www.vatsalverma.in';
export const SITE_NAME = 'Vatsal Verma';
export const EMAIL = 'vatsalverma999@gmail.com';
export const TWITTER_HANDLE = '@ellipsecircle';
export const LANGUAGE = 'en';
export const OG_LOCALE = 'en_IN';
export const RSS_URL = `${SITE_URL}/rss.xml`;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/Logo.png`;
export const OG_IMAGE_ALT = 'Vatsal Verma';
export const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
export const NOINDEX_ROBOTS = 'noindex, nofollow';

export const DEFAULT_DESCRIPTION =
  'Vatsal Verma is a software engineer at Amdocs writing about Java, Spring Boot, Elasticsearch, and JVM systems. Portfolio, projects, blog, and contact.';

const SAME_AS = [
  'https://www.linkedin.com/in/vatsalverma999/',
  'https://github.com/vatsal259',
  'https://leetcode.com/u/vatsalverma999/',
  'https://www.behance.net/vatsalverma',
  'https://www.youtube.com/@walkinthecraziestway',
  'https://instagram.com/vatsalastav',
  'https://x.com/ellipsecircle',
];

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
  worksFor: { '@type': 'Organization', name: 'Amdocs' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'VIT Vellore' },
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
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

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
    })),
  };
}

function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || undefined,
    image: DEFAULT_OG_IMAGE,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    inLanguage: LANGUAGE,
    author: PERSON_REF,
    publisher: { ...PERSON_REF, image: DEFAULT_OG_IMAGE },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    isPartOf: {
      '@type': 'Blog',
      name: `${SITE_NAME} Blog`,
      url: `${SITE_URL}/blog`,
    },
    url: `${SITE_URL}/blog/${post.slug}`,
  };
}

const NAV_LINKS =
  '<nav><a href="/">Home</a> · <a href="/about">About</a> · <a href="/work">Work &amp; Life</a> · <a href="/blog">Blog</a> · <a href="/contact">Contact</a></nav>';

const BLOG_LIST_HTML = BLOG_POSTS.map(
  (post) =>
    `<li><a href="/blog/${post.slug}">${escapeHtml(post.title)}</a>${
      post.excerpt ? ` - ${escapeHtml(post.excerpt)}` : ''
    }</li>`
).join('');

export const PAGE_SEO = {
  '/': {
    title: 'Vatsal Verma | Software Engineer in Java & Spring',
    description: DEFAULT_DESCRIPTION,
    jsonLd: [
      PERSON_SCHEMA,
      WEBSITE_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: 'Vatsal Verma | Software Engineer in Java & Spring',
        url: `${SITE_URL}/`,
        mainEntity: { '@id': `${SITE_URL}/#person` },
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      breadcrumb([{ name: 'Home', path: '/' }]),
    ],
    body: `<h1>Vatsal Verma</h1><p>Software engineer at Amdocs. Java, Spring Boot, Kafka, Elasticsearch, and JVM systems. Biker and photographer.</p>${NAV_LINKS}<h2>Writing</h2><ul>${BLOG_LIST_HTML}</ul>`,
  },
  '/about': {
    title: 'About | Vatsal Verma',
    description:
      'Meet Vatsal Verma, software developer at Amdocs and VIT Vellore alum. Java, Spring, and Kafka by day; motorcycles and photography off the clock.',
    jsonLd: [
      PERSON_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: 'About | Vatsal Verma',
        url: `${SITE_URL}/about`,
        mainEntity: { '@id': `${SITE_URL}/#person` },
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]),
    ],
    body: `<h1>About Vatsal Verma</h1><p>Software developer at Amdocs and VIT Vellore alum. Java, Spring, Kafka, distributed systems, plus a Royal Enfield Hunter 350 and a camera.</p>${NAV_LINKS}`,
  },
  '/work': {
    title: 'Work & Life | Vatsal Verma',
    description:
      'Selected software projects including ArwenForge and docube-db, plus motorcycle rides, wildlife photography, and YouTube films by Vatsal Verma.',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Work & Life | Vatsal Verma',
        url: `${SITE_URL}/work`,
        about: { '@id': `${SITE_URL}/#person` },
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Work & Life', path: '/work' },
      ]),
    ],
    body: `<h1>Work &amp; Life</h1><p>Projects such as ArwenForge and docube-db, wildlife photography, motorcycle rides, and films on YouTube.</p>${NAV_LINKS}`,
  },
  '/blog': {
    title: 'Engineering Blog | Vatsal Verma',
    description:
      'Guides on Spring Boot, Elasticsearch, JVM internals, SOLID, design patterns, LangChain, and JVM AI agents, written from production work.',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Vatsal Verma Blog',
        url: `${SITE_URL}/blog`,
        description:
          'Guides on Spring Boot, Elasticsearch, JVM internals, SOLID, design patterns, LangChain, and JVM AI agents, written from production work.',
        author: PERSON_REF,
        blogPost: BLOG_POSTS.map((post) => articleSchema(post)),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Vatsal Verma articles',
        itemListElement: BLOG_POSTS.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${SITE_URL}/blog/${post.slug}`,
          name: post.title,
        })),
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ]),
    ],
    body: `<h1>Engineering Blog</h1><p>Guides on Spring Boot, Elasticsearch, JVM internals, SOLID, design patterns, and JVM AI agents.</p><ul>${BLOG_LIST_HTML}</ul>${NAV_LINKS}`,
  },
  '/contact': {
    title: 'Contact | Vatsal Verma',
    description:
      'Email Vatsal Verma for engineering collaborations, Java and Spring work, or conversations about software, product, and growth.',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact | Vatsal Verma',
        url: `${SITE_URL}/contact`,
        mainEntity: {
          '@id': `${SITE_URL}/#person`,
          email: EMAIL,
        },
      },
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
    ],
    body: `<h1>Contact</h1><p>Email <a href="mailto:${EMAIL}">${EMAIL}</a> for collaborations and engineering conversations.</p>${NAV_LINKS}`,
  },
  '/secrets': {
    title: 'Secrets | Vatsal Verma',
    description: 'A quieter page about who Vatsal Verma is beyond the portfolio.',
    robots: NOINDEX_ROBOTS,
    jsonLd: [],
    body: `<h1>Secrets</h1><p>A private page. It is not part of the public site index.</p>${NAV_LINKS}`,
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
    ogType: 'article',
    publishedTime: date,
    modifiedTime: date,
    jsonLd: [
      articleSchema({
        slug,
        title,
        excerpt: description,
        date,
      }),
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: title, path: `/blog/${slug}` },
      ]),
    ],
    body: `<h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p><p><a href="/blog">All articles</a></p>${NAV_LINKS}`,
  };
}
