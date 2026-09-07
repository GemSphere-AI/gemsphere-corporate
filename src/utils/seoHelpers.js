/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

import { SITE_CONFIG } from '../config/siteConfig';

// All 7 officially supported global enterprise locales sourced from SITE_CONFIG
export const ACTIVE_LOCALES = SITE_CONFIG.locales.active;
export const DEFAULT_LOCALE = SITE_CONFIG.locales.default;
export const HREFLANG_MAP = SITE_CONFIG.locales.hreflangMap;
export const OG_LOCALE_MAP = SITE_CONFIG.locales.ogLocaleMap;
export const getBaseUrl = () => SITE_CONFIG.brand.getBaseUrl();

/**
 * Generates deterministic, fully-qualified self-referencing canonical URL and reciprocal hreflang alternates.
 * Enforces strict trailing-slash consistency matching Next.js output export configuration.
 *
 * @param {string} pathname - Route path (e.g., '/products/crm-software', 'about', '')
 * @param {string} locale - Current active locale ('en', 'de', 'fr', 'es', 'ja', 'ar', 'pt-br')
 * @returns {{ canonical: string, languages: Record<string, string> }}
 */
export function getCanonicalAndHreflang(pathname = '', locale = 'en') {
  const baseUrl = getBaseUrl();
  const validLocale = ACTIVE_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;

  let cleanPath = pathname || '';
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
  if (!cleanPath.endsWith('/')) cleanPath = cleanPath + '/';
  if (cleanPath === '//') cleanPath = '/';

  const pathSuffix = cleanPath === '/' ? '/' : cleanPath;
  const canonical = `${baseUrl}/${validLocale}${pathSuffix}`;

  const languages = {};
  ACTIVE_LOCALES.forEach((loc) => {
    const key = HREFLANG_MAP[loc] || loc;
    languages[key] = `${baseUrl}/${loc}${pathSuffix}`;
  });
  languages['x-default'] = `${baseUrl}/en${pathSuffix}`;

  return {
    canonical,
    languages
  };
}

/**
 * Builds a complete, compliant metadata configuration for Next.js 15 App Router pages across all 7 locales.
 */
export function buildPageMetadata({
  title,
  description,
  pathname = '',
  locale = 'en',
  keywords = [],
  ogImage = '/og-image.jpg',
  openGraphType = 'website',
  noindex = false
}) {
  const baseUrl = getBaseUrl();
  const validLocale = ACTIVE_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  const { canonical, languages } = getCanonicalAndHreflang(pathname, validLocale);

  const fullTitle = title.includes('GemSphere') ? title : `${title} | GemSphere Technologies`;

  return {
    title: fullTitle,
    description,
    keywords: Array.isArray(keywords) && keywords.length > 0 ? keywords : [
      'enterprise software', 'AI platform', 'cloud ERP', 'custom enterprise engineering', 'GemSphere'
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical,
      languages
    },
    robots: {
      index: !noindex,
      follow: true,
      googleBot: {
        index: !noindex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    openGraph: {
      title: fullTitle,
      description,
      type: openGraphType,
      url: canonical,
      locale: OG_LOCALE_MAP[validLocale] || 'en_US',
      siteName: 'GemSphere Technologies',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: '@GemSphereAI',
      images: [ogImage]
    }
  };
}
