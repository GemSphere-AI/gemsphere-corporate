import { PRODUCT_ECOSYSTEM, slugify } from '../data/productEcosystem';
import { generateCompositeSlugs, GEO_MAP, GUIDES_MAP, INDUSTRIES_MAP } from '../data/seoRegistry';
import { BLOG_POSTS } from '../data/blogData';
import { ACTIVE_LOCALES, HREFLANG_MAP, getBaseUrl } from '../utils/seoHelpers';

import { AUTHORS } from '../data/authorsData';

export const dynamic = 'force-static';

// Segment sitemaps into index categories to respect Google's best practices
export async function generateSitemaps() {
  return [
    { id: 'pages' },
    { id: 'products' },
    { id: 'services' },
    { id: 'comparisons' },
    { id: 'geo' },
    { id: 'guides' },
    { id: 'industries' },
    { id: 'blog' },
    { id: 'authors' }
  ];
}

export default function sitemap({ id }) {
  const baseUrl = getBaseUrl();
  const buildDate = new Date().toISOString();

  let routes = [];

  if (id === 'pages') {
    routes = [
      { path: '', changeFreq: 'daily', priority: 1.0 },
      { path: '/about', changeFreq: 'monthly', priority: 0.8 },
      { path: '/products', changeFreq: 'weekly', priority: 0.9 },
      { path: '/solutions', changeFreq: 'weekly', priority: 0.9 },
      { path: '/industries', changeFreq: 'weekly', priority: 0.9 },
      { path: '/services', changeFreq: 'weekly', priority: 0.9 },
      { path: '/contact', changeFreq: 'monthly', priority: 0.8 },
      { path: '/careers', changeFreq: 'weekly', priority: 0.7 },
      { path: '/ai-solutions', changeFreq: 'weekly', priority: 0.9 },
      { path: '/blog', changeFreq: 'daily', priority: 0.7 },
      { path: '/demo', changeFreq: 'monthly', priority: 0.8 },
      { path: '/roi-calculator', changeFreq: 'monthly', priority: 0.7 },
      { path: '/resources', changeFreq: 'weekly', priority: 0.6 },
      { path: '/privacy', changeFreq: 'yearly', priority: 0.3 },
      { path: '/terms', changeFreq: 'yearly', priority: 0.3 },
      { path: '/security', changeFreq: 'monthly', priority: 0.6 },
      { path: '/cookie-policy', changeFreq: 'yearly', priority: 0.3 },
      { path: '/solutions/enterprise-digital-transformation', changeFreq: 'weekly', priority: 0.85 },
      { path: '/solutions/omnichannel-retail-infrastructure', changeFreq: 'weekly', priority: 0.85 },
      { path: '/solutions/private-cloud-migration', changeFreq: 'weekly', priority: 0.85 },
      { path: '/solutions/intelligent-business-automation', changeFreq: 'weekly', priority: 0.85 },
    ];
  } else if (id === 'products') {
    routes = PRODUCT_ECOSYSTEM.categories.flatMap((c) => [
      { path: `/products/${c.id}`, changeFreq: 'monthly', priority: 0.85 },
      ...c.modules.map((m) => ({
        path: `/products/${slugify(m.name)}`, changeFreq: 'monthly', priority: 0.80
      }))
    ]);
    const productSlugs = generateCompositeSlugs('products');
    routes = [
      ...routes,
      ...productSlugs.map((slugStr) => ({
        path: `/products/${slugStr}`, changeFreq: 'weekly', priority: 0.75
      }))
    ];
  } else if (id === 'services') {
    routes = PRODUCT_ECOSYSTEM.services.map((s) => ({
      path: `/services/${s.slug}`, changeFreq: 'monthly', priority: 0.8,
    }));
    const serviceSlugs = generateCompositeSlugs('services');
    routes = [
      ...routes,
      ...serviceSlugs.map((slugStr) => ({
        path: `/services/${slugStr}`, changeFreq: 'weekly', priority: 0.75
      }))
    ];
  } else if (id === 'comparisons') {
    const comparisonSlugs = generateCompositeSlugs('comparisons');
    routes = comparisonSlugs.map((slugStr) => ({
      path: `/compare/${slugStr}`, changeFreq: 'weekly', priority: 0.75
    }));
  } else if (id === 'geo') {
    // GEO pages — highest-value programmatic SEO pages (best-* slugs)
    const geoSlugs = generateCompositeSlugs('geo');
    routes = geoSlugs.map((slugStr) => ({
      path: `/${slugStr}`, changeFreq: 'weekly', priority: 0.85
    }));
  } else if (id === 'guides') {
    // Problem-focused guide pages (how-to-build-* slugs)
    const guideSlugs = generateCompositeSlugs('guides');
    routes = guideSlugs.map((slugStr) => ({
      path: `/${slugStr}`, changeFreq: 'monthly', priority: 0.80
    }));
  } else if (id === 'industries') {
    // Industry vertical pages
    routes = Object.keys(INDUSTRIES_MAP).map((indKey) => ({
      path: `/industries/${indKey}`, changeFreq: 'monthly', priority: 0.80
    }));
  } else if (id === 'blog') {
    routes = BLOG_POSTS.map((post) => ({
      path: `/blog/${post.id}`, changeFreq: 'monthly', priority: 0.60
    }));
  } else if (id === 'authors') {
    routes = AUTHORS.map((author) => ({
      path: `/authors/${author.slug}`, changeFreq: 'monthly', priority: 0.70
    }));
  }

  // Deduplicate routes and enforce trailing slash formatting (matching trailingSlash: true in next.config)
  const uniqueRoutes = [];
  const seenPaths = new Set();

  for (const route of routes) {
    let cleanPath = route.path;
    if (cleanPath !== '') {
      if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
      if (!cleanPath.endsWith('/')) cleanPath = cleanPath + '/';
    } else {
      cleanPath = '/';
    }

    if (!seenPaths.has(cleanPath)) {
      seenPaths.add(cleanPath);
      uniqueRoutes.push({
        ...route,
        path: cleanPath,
      });
    }
  }

  return uniqueRoutes.flatMap((route) => {
    return ACTIVE_LOCALES.map((locale) => {
      const pathWithLocale = route.path === '/' ? `/${locale}/` : `/${locale}${route.path}`;
      const languages = {};
      ACTIVE_LOCALES.forEach((l) => {
        const key = HREFLANG_MAP[l] || l;
        languages[key] = `${baseUrl}/${l}${route.path}`;
      });
      languages['x-default'] = `${baseUrl}/en${route.path}`;

      return {
        url: `${baseUrl}${pathWithLocale}`,
        lastModified: buildDate,
        changeFrequency: route.changeFreq,
        priority: route.priority,
        alternates: {
          languages
        }
      };
    });
  });
}

