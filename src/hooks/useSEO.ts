/**
 * hooks/useSEO.ts
 *
 * Lightweight SEO hook for per-page meta tag management in this CSR (Vite/React) app.
 *
 * Sets:
 *  - document.title
 *  - <meta name="description">
 *  - <link rel="canonical"> (creates or updates)
 *  - <meta property="og:title">
 *  - <meta property="og:description">
 *  - <meta property="og:url">
 *  - <meta name="twitter:title">
 *  - <meta name="twitter:description">
 *
 * On unmount the canonical href is NOT reset intentionally — on SPA
 * navigation the next page's useSEO call will update it correctly.
 *
 * Usage:
 *   useSEO({
 *     title: 'Page Title | South India Painters',
 *     description: '150-160 char description',
 *     canonical: 'https://southindiapainters.com/page-slug',
 *   });
 */

import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | string;
  twitterImage?: string;
}

function upsertMeta(
  selector: string,
  attrName: string,
  attrValue: string,
  contentValue: string,
): void {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', contentValue);
}

function upsertCanonical(href: string): void {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSEO({
  title,
  description,
  canonical,
  ogImage,
  ogType,
  twitterCard = 'summary_large_image',
  twitterImage,
}: SEOOptions): void {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    if (description) {
      upsertMeta('meta[name="description"]', 'name', 'description', description);
      upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
      upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }

    // Canonical + og:url
    if (canonical) {
      upsertCanonical(canonical);
      upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    }

    // OG title + Twitter title
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);

    // OG Type
    if (ogType) {
      upsertMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    }

    // OG Image & Twitter Image
    const img = ogImage || twitterImage;
    if (img) {
      upsertMeta('meta[property="og:image"]', 'property', 'og:image', img);
      upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', twitterImage || img);
    }

    // Twitter Card
    if (twitterCard) {
      upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', twitterCard);
    }
  }, [title, description, canonical, ogImage, ogType, twitterCard, twitterImage]);
}

export default useSEO;
