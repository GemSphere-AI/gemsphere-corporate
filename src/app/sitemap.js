import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';

export const dynamic = 'force-static';

const LOCALES = ['en-us', 'en-gb', 'en-ae', 'en-in', 'de-de'];
const DEFAULT_LOCALE = 'en-us';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN ? `https://${process.env.NEXT_PUBLIC_DOMAIN}` : 'https://gemsphere.ai';
  
  const staticRoutes = [
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
    { path: '/privacy', changeFreq: 'yearly', priority: 0.3 },
    { path: '/terms', changeFreq: 'yearly', priority: 0.3 },
    { path: '/security', changeFreq: 'monthly', priority: 0.6 },
    { path: '/cookie-policy', changeFreq: 'yearly', priority: 0.3 },
  ];

  const dynamicRoutes = [
    ...PRODUCT_ECOSYSTEM.categories.map((c) => ({
      path: `/products/${c.id}`, changeFreq: 'monthly', priority: 0.85,
    })),
    ...PRODUCT_ECOSYSTEM.industries.map((i) => ({
      path: `/industries/${i.slug}`, changeFreq: 'monthly', priority: 0.8,
    })),
    ...PRODUCT_ECOSYSTEM.services.map((s) => ({
      path: `/services/${s.slug}`, changeFreq: 'monthly', priority: 0.8,
    })),
  ];

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return allRoutes.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route.changeFreq,
      priority: locale === DEFAULT_LOCALE ? route.priority : route.priority * 0.9,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${baseUrl}/${l}${route.path}`])
        ),
      },
    }))
  );
}
