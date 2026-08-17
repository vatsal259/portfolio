import { useEffect, useMemo } from 'react';
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  OG_IMAGE_ALT,
  OG_LOCALE,
  TWITTER_HANDLE,
  INDEX_ROBOTS,
  NOINDEX_ROBOTS,
} from '../../seo/siteConfig';

function upsertMetaByName(name, content) {
  let element = document.head.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertMetaByProperty(property, content) {
  let element = document.head.querySelector(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function removeMetaByProperty(property) {
  document.head.querySelector(`meta[property="${property}"]`)?.remove();
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertJsonLd(schemas) {
  document
    .querySelectorAll('script[type="application/ld+json"]')
    .forEach((node) => node.remove());

  schemas.forEach((schema, index) => {
    if (!schema) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-jsonld', 'true');
    script.setAttribute('data-seo-jsonld-index', String(index));
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

const ARTICLE_META = [
  'article:published_time',
  'article:modified_time',
  'article:author',
];

const Seo = ({
  title,
  fullTitle,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  imageAlt = OG_IMAGE_ALT,
  type = 'website',
  publishedTime,
  modifiedTime,
  noindex = false,
  jsonLd,
}) => {
  const pageTitle = fullTitle || (title ? `${title} | ${SITE_NAME}` : SITE_NAME);
  const canonical = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const robots = noindex ? NOINDEX_ROBOTS : INDEX_ROBOTS;
  const jsonLdSerialized = useMemo(
    () => JSON.stringify(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []),
    [jsonLd]
  );

  useEffect(() => {
    document.title = pageTitle;
    document.documentElement.lang = 'en-IN';

    upsertMetaByName('description', description);
    upsertMetaByName('robots', robots);
    upsertMetaByName('author', SITE_NAME);
    upsertLink('canonical', canonical);

    upsertMetaByProperty('og:type', type);
    upsertMetaByProperty('og:site_name', SITE_NAME);
    upsertMetaByProperty('og:title', pageTitle);
    upsertMetaByProperty('og:description', description);
    upsertMetaByProperty('og:url', canonical);
    upsertMetaByProperty('og:image', image);
    upsertMetaByProperty('og:image:alt', imageAlt);
    upsertMetaByProperty('og:locale', OG_LOCALE);

    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:site', TWITTER_HANDLE);
    upsertMetaByName('twitter:creator', TWITTER_HANDLE);
    upsertMetaByName('twitter:title', pageTitle);
    upsertMetaByName('twitter:description', description);
    upsertMetaByName('twitter:image', image);
    upsertMetaByName('twitter:image:alt', imageAlt);

    if (type === 'article' && publishedTime) {
      upsertMetaByProperty('article:published_time', publishedTime);
      upsertMetaByProperty('article:modified_time', modifiedTime || publishedTime);
      upsertMetaByProperty('article:author', SITE_NAME);
    } else {
      ARTICLE_META.forEach(removeMetaByProperty);
    }

    upsertJsonLd(JSON.parse(jsonLdSerialized));
  }, [
    pageTitle,
    description,
    canonical,
    robots,
    type,
    image,
    imageAlt,
    publishedTime,
    modifiedTime,
    jsonLdSerialized,
  ]);

  return null;
};

export default Seo;
