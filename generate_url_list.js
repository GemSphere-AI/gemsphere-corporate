import fs from 'fs';
import { PRODUCT_ECOSYSTEM, slugify } from './src/data/productEcosystem.js';
import { generateCompositeSlugs } from './src/data/seoRegistry.js';
import { BLOG_POSTS } from './src/data/blogData.js';

const domain = 'https://gemsphere.ai';
const urls = [];

// 1. Core pages
const corePages = [
  '/',
  '/about',
  '/products',
  '/solutions',
  '/industries',
  '/services',
  '/contact',
  '/careers',
  '/ai-solutions',
  '/blog',
  '/demo',
  '/privacy',
  '/terms',
  '/security',
  '/cookie-policy',
];
corePages.forEach(p => urls.push(domain + p));

// 2. Blog posts
BLOG_POSTS.forEach(post => {
  urls.push(domain + `/blog/${post.id}`);
});

// 3. Comparisons
const comparisonSlugs = generateCompositeSlugs('comparisons');
comparisonSlugs.forEach(slug => {
  urls.push(domain + `/compare/${slug}`);
});

// 4. Industries
PRODUCT_ECOSYSTEM.industries.forEach(ind => {
  urls.push(domain + `/industries/${ind.slug}`);
});

// 5. Services
PRODUCT_ECOSYSTEM.services.forEach(srv => {
  urls.push(domain + `/services/${srv.slug}`);
});
const serviceSlugs = generateCompositeSlugs('services');
serviceSlugs.forEach(slug => {
  urls.push(domain + `/services/${slug}`);
});

// 6. Products
PRODUCT_ECOSYSTEM.categories.forEach(cat => {
  urls.push(domain + `/products/${cat.id}`);
  cat.modules.forEach(mod => {
    urls.push(domain + `/products/${slugify(mod.name)}`);
  });
});
const productSlugs = generateCompositeSlugs('products');
productSlugs.forEach(slug => {
  urls.push(domain + `/products/${slug}`);
});

// 7. GEO Pages (Tier 4)
const geoSlugs = generateCompositeSlugs('geo');
geoSlugs.forEach(slug => {
  urls.push(domain + `/${slug}`);
});

// 8. Guides (Problem-focused)
const guideSlugs = generateCompositeSlugs('guides');
guideSlugs.forEach(slug => {
  urls.push(domain + `/${slug}`);
});

// Write to files
fs.writeFileSync('all_urls.txt', urls.join('\n'), 'utf-8');

const localUrls = urls.map(u => u.replace('https://gemsphere.ai', 'http://localhost:3000'));
fs.writeFileSync('urls_local.txt', localUrls.join('\n'), 'utf-8');

fs.writeFileSync('urls_production.txt', urls.join('\n'), 'utf-8');

console.log(`Successfully generated all_urls.txt, urls_local.txt, and urls_production.txt with ${urls.length} URLs!`);
