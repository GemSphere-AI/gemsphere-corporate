import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN ? `https://${process.env.NEXT_PUBLIC_DOMAIN}` : 'https://gemsphere.ai';
  
  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/solutions',
    '/industries',
    '/services',
    '/contact',
    '/careers',
    '/ai-solutions',
    '/blog',
    '/privacy',
    '/terms',
    '/security',
    '/cookie-policy'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  const productRoutes = PRODUCT_ECOSYSTEM.categories.map((c) => ({
    url: `${baseUrl}/products/${c.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const industryRoutes = PRODUCT_ECOSYSTEM.industries.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const serviceRoutes = PRODUCT_ECOSYSTEM.services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes, ...industryRoutes, ...serviceRoutes];
}
