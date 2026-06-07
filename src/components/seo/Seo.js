import { useEffect, useMemo } from 'react';
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
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
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-jsonld', 'true');
    script.setAttribute('data-seo-jsonld-index', String(index));
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

const Seo = ({
  title,
  fullTitle,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}) => {
  const pageTitle = fullTitle || (title ? `${title} | ${SITE_NAME}` : SITE_NAME);
  const canonical = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';
  const jsonLdSerialized = useMemo(
    () => JSON.stringify(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []),
    [jsonLd]
  );

  useEffect(() => {
    document.title = pageTitle;

    upsertMetaByName('description', description);
    upsertMetaByName('robots', robots);
    upsertLink('canonical', canonical);

    upsertMetaByProperty('og:type', type);
    upsertMetaByProperty('og:site_name', SITE_NAME);
    upsertMetaByProperty('og:title', pageTitle);
    upsertMetaByProperty('og:description', description);
    upsertMetaByProperty('og:url', canonical);
    upsertMetaByProperty('og:image', image);
    upsertMetaByProperty('og:locale', 'en_IN');

    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', pageTitle);
    upsertMetaByName('twitter:description', description);
    upsertMetaByName('twitter:image', image);

    upsertJsonLd(JSON.parse(jsonLdSerialized));
  }, [pageTitle, description, canonical, robots, type, image, jsonLdSerialized]);

  return null;
};

export default Seo;
