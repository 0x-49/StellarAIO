import { useEffect } from 'react';

// Lightweight SEO head manager. Sets <title>, <meta>, OG, Twitter, canonical,
// and inline JSON-LD without pulling in react-helmet. Cleans up on unmount.

type SEOProps = {
  title: string;
  description: string;
  path: string; // route path starting with /
  type?: 'website' | 'article';
  schemaJson?: object | object[];
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
};

const CANONICAL_ORIGIN = 'https://stellaraio.io';
const DEFAULT_IMAGE = `${CANONICAL_ORIGIN}/og-card.jpg`;

const setMeta = (selector: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
  return el;
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
  return el;
};

const SEO = ({
  title,
  description,
  path,
  type = 'website',
  schemaJson,
  publishedTime,
  modifiedTime,
  image = DEFAULT_IMAGE,
}: SEOProps) => {
  useEffect(() => {
    const url = `${CANONICAL_ORIGIN}${path}`;
    document.title = title;

    setMeta('meta[name="description"]', { name: 'description', content: description });
    setLink('canonical', url);

    setMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    setMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    setMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' });
    setMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' });
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: title });
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Stellar AIO' });
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' });

    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });
    setMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: title });
    setMeta('meta[name="twitter:site"]', { name: 'twitter:site', content: '@stellaraio' });
    setMeta('meta[name="twitter:creator"]', { name: 'twitter:creator', content: '@stellaraio' });
    setMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' });

    if (publishedTime) {
      setMeta('meta[property="article:published_time"]', { property: 'article:published_time', content: publishedTime });
    }
    if (modifiedTime) {
      setMeta('meta[property="article:modified_time"]', { property: 'article:modified_time', content: modifiedTime });
    }

    // Schema JSON-LD: remove any previously injected script then add fresh.
    document.head.querySelectorAll('script[data-stellaraio-schema]').forEach(s => s.remove());
    if (schemaJson) {
      const blocks = Array.isArray(schemaJson) ? schemaJson : [schemaJson];
      blocks.forEach(block => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-stellaraio-schema', '1');
        script.textContent = JSON.stringify(block);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.head.querySelectorAll('script[data-stellaraio-schema]').forEach(s => s.remove());
    };
  }, [title, description, path, type, schemaJson, publishedTime, modifiedTime, image]);

  return null;
};

export default SEO;
