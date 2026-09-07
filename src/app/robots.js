/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 */

import { SITE_CONFIG } from '../config/siteConfig';

/**
 * robots.js — Next.js App Router robots.txt generator.
 * Tells crawlers which paths to index and where to find sitemaps.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export const dynamic = 'force-static';

export default function robots() {
  const baseUrl = SITE_CONFIG.brand.getBaseUrl();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap/pages.xml`,
      `${baseUrl}/sitemap/products.xml`,
      `${baseUrl}/sitemap/services.xml`,
      `${baseUrl}/sitemap/comparisons.xml`,
      `${baseUrl}/sitemap/geo.xml`,
      `${baseUrl}/sitemap/guides.xml`,
      `${baseUrl}/sitemap/industries.xml`,
      `${baseUrl}/sitemap/blog.xml`,
      `${baseUrl}/sitemap/authors.xml`,
    ],
    host: baseUrl,
  };
}
