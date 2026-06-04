import { PRODUCT_ECOSYSTEM, slugify } from '../data/productEcosystem';
import { generateCompositeSlugs } from '../data/seoRegistry';

export const dynamic = 'force-static';

const LOCALES = ['en-us', 'en-gb', 'en-ae', 'en-in', 'de-de'];
const DEFAULT_LOCALE = 'en-us';

// Segment sitemaps into index categories to respect Google's best practices
export async function generateSitemaps() {
  return [
    { id: 'pages' },
    { id: 'products' },
    { id: 'services' },
    { id: 'comparisons' }
  ];
}

export default function sitemap({ id }) {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN ? `https://${process.env.NEXT_PUBLIC_DOMAIN}` : 'https://gemsphere.ai';
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
      { path: '/privacy', changeFreq: 'yearly', priority: 0.3 },
      { path: '/terms', changeFreq: 'yearly', priority: 0.3 },
      { path: '/security', changeFreq: 'monthly', priority: 0.6 },
      { path: '/cookie-policy', changeFreq: 'yearly', priority: 0.3 },
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
  }

  return routes.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: buildDate,
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
