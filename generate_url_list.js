/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRODUCT_ECOSYSTEM, slugify } from './src/data/productEcosystem.js';
import { generateCompositeSlugs } from './src/data/seoRegistry.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES = ['en-us', 'en-gb', 'en-ae', 'en-in', 'de-de'];
const PROD_BASE = 'https://gemsphere.ai';
const LOCAL_BASE = 'http://localhost:3000';

function main() {
    console.log('Generating URL lists for GemSphere Corporate website...');

    // 1. Compile all paths
    const paths = {
        pages: [
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
            '/demo',
            '/privacy',
            '/terms',
            '/security',
            '/cookie-policy'
        ],
        industries: PRODUCT_ECOSYSTEM.industries.map(ind => `/industries/${ind.slug}`),
        products: [
            ...PRODUCT_ECOSYSTEM.categories.flatMap(c => [
                `/products/${c.id}`,
                ...c.modules.map(m => `/products/${slugify(m.name)}`)
            ]),
            ...generateCompositeSlugs('products').map(slugStr => `/products/${slugStr}`)
        ],
        services: [
            ...PRODUCT_ECOSYSTEM.services.map(s => `/services/${s.slug}`),
            ...generateCompositeSlugs('services').map(slugStr => `/services/${slugStr}`)
        ],
        comparisons: generateCompositeSlugs('comparisons').map(slugStr => `/compare/${slugStr}`)
    };

    const allUrlsProd = [];
    const allUrlsLocal = [];
    const categoriesData = {};

    // Multiply by locales
    for (const [category, routePaths] of Object.entries(paths)) {
        categoriesData[category] = [];
        routePaths.forEach(routePath => {
            LOCALES.forEach(locale => {
                const prodUrl = `${PROD_BASE}/${locale}${routePath}/`;
                const localUrl = `${LOCAL_BASE}/${locale}${routePath}/`;

                allUrlsProd.push(prodUrl);
                allUrlsLocal.push(localUrl);

                categoriesData[category].push({
                    locale,
                    path: routePath,
                    prodUrl,
                    localUrl
                });
            });
        });
    }

    // Sort lists alphabetically for easier tracking
    allUrlsProd.sort();
    allUrlsLocal.sort();

    // 2. Write text files
    const prodFilePath = path.join(__dirname, 'urls_production.txt');
    const localFilePath = path.join(__dirname, 'urls_local.txt');

    fs.writeFileSync(prodFilePath, allUrlsProd.join('\n') + '\n', 'utf-8');
    fs.writeFileSync(localFilePath, allUrlsLocal.join('\n') + '\n', 'utf-8');

    console.log(`Saved ${allUrlsProd.length} production URLs to urls_production.txt`);
    console.log(`Saved ${allUrlsLocal.length} local URLs to urls_local.txt`);

    // 3. Generate HTML Interactive Dashboard
    const totalCount = allUrlsProd.length;
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GemSphere Links Registry</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-dark: #070b19;
            --bg-card: #0d1527;
            --border-color: #1e293b;
            --cyan: #00d4ff;
            --indigo: #6366f1;
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --text-muted: #475569;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-dark);
            color: var(--text-primary);
            min-height: 100vh;
            padding: 2rem;
            line-height: 1.5;
        }

        .header {
            max-width: 1400px;
            margin: 0 auto 2rem auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 1.5rem;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo-g {
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, var(--cyan), var(--indigo));
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Outfit', sans-serif;
            font-weight: 900;
            font-size: 24px;
            color: #070b19;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }

        .brand-text h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 24px;
            font-weight: 900;
            letter-spacing: -0.02em;
        }

        .brand-text h1 span {
            color: var(--cyan);
        }

        .brand-text p {
            font-size: 11px;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.15em;
            font-weight: 700;
            margin-top: 2px;
        }

        .summary-badge {
            background: rgba(0, 212, 255, 0.1);
            border: 1px solid rgba(0, 212, 255, 0.2);
            color: var(--cyan);
            padding: 8px 16px;
            border-radius: 12px;
            font-weight: 700;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .summary-badge span {
            font-family: 'Outfit', sans-serif;
            font-weight: 900;
            font-size: 18px;
        }

        .controls {
            max-width: 1400px;
            margin: 0 auto 2rem auto;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            box-shadow: 0 10px 35px rgba(0,0,0,0.3);
        }

        .filters-row {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            align-items: center;
        }

        .filter-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .filter-label {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--text-secondary);
        }

        .filter-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .btn-filter {
            background: rgba(255,255,255,0.03);
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
            padding: 8px 16px;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.25s ease;
        }

        .btn-filter:hover {
            background: rgba(255,255,255,0.08);
            color: var(--text-primary);
        }

        .btn-filter.active {
            background: linear-gradient(135deg, var(--cyan), var(--indigo));
            color: #070b19;
            border-color: transparent;
            font-weight: 700;
            box-shadow: 0 4px 15px rgba(0, 212, 255, 0.2);
        }

        .search-container {
            position: relative;
            flex-grow: 1;
        }

        .search-input {
            width: 100%;
            background: #070b19;
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 12px 16px 12px 42px;
            color: var(--text-primary);
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .search-input:focus {
            outline: none;
            border-color: var(--cyan);
            box-shadow: 0 0 10px rgba(0, 212, 255, 0.1);
        }

        .search-icon {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
        }

        .toggle-env-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid rgba(255,255,255,0.05);
            padding-top: 1rem;
        }

        .results-container {
            max-width: 1400px;
            margin: 0 auto;
        }

        .results-count {
            font-size: 13px;
            color: var(--text-secondary);
            margin-bottom: 1rem;
            font-weight: 500;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
            gap: 16px;
        }

        .card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 12px;
            transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .card:hover {
            transform: translateY(-2px);
            border-color: rgba(0, 212, 255, 0.3);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .tag-locale {
            background: rgba(99, 102, 241, 0.12);
            border: 1px solid rgba(99, 102, 241, 0.25);
            color: #818cf8;
            font-weight: 700;
            font-size: 10px;
            padding: 2px 8px;
            border-radius: 6px;
            text-transform: uppercase;
        }

        .tag-category {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: var(--text-secondary);
            font-weight: 600;
            font-size: 10px;
            padding: 2px 8px;
            border-radius: 6px;
            text-transform: uppercase;
        }

        .path-title {
            font-family: 'Outfit', sans-serif;
            font-size: 15px;
            font-weight: 700;
            word-break: break-all;
            margin-top: 4px;
        }

        .card-actions {
            display: flex;
            gap: 8px;
            margin-top: 8px;
        }

        .btn-link {
            flex: 1;
            text-align: center;
            padding: 10px;
            border-radius: 10px;
            font-size: 12px;
            font-weight: 700;
            text-decoration: none;
            transition: opacity 0.2s ease;
        }

        .btn-link-prod {
            background: var(--cyan);
            color: #070b19;
        }

        .btn-link-local {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-primary);
            border: 1px solid var(--border-color);
        }

        .btn-link:hover {
            opacity: 0.9;
        }

        /* Responsive */
        @media (max-width: 768px) {
            body {
                padding: 1rem;
            }
            .grid {
                grid-template-columns: 1fr;
            }
            .header {
                flex-direction: column;
                gap: 1rem;
                align-items: flex-start;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="brand">
            <div class="logo-g">G</div>
            <div class="brand-text">
                <h1>Gem<span>Sphere</span> Links</h1>
                <p>Corporate Website Links Registry</p>
            </div>
        </div>
        <div class="summary-badge">
            Total Compiled URLs: <span id="total-count">${totalCount}</span>
        </div>
    </div>

    <div class="controls">
        <div class="filters-row">
            <div class="filter-group">
                <div class="filter-label">Filter by Language</div>
                <div class="filter-buttons" id="locale-filters">
                    <button class="btn-filter active" data-locale="all">All</button>
                    ${LOCALES.map(l => `<button class="btn-filter" data-locale="${l}">${l}</button>`).join('\n')}
                </div>
            </div>

            <div class="filter-group">
                <div class="filter-label">Filter by Category</div>
                <div class="filter-buttons" id="category-filters">
                    <button class="btn-filter active" data-category="all">All</button>
                    <button class="btn-filter" data-category="pages">Standard Pages</button>
                    <button class="btn-filter" data-category="products">Products & modules</button>
                    <button class="btn-filter" data-category="services">Services</button>
                    <button class="btn-filter" data-category="comparisons">Comparisons</button>
                    <button class="btn-filter" data-category="industries">Industries</button>
                </div>
            </div>
        </div>

        <div class="filters-row">
            <div class="search-container">
                <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" class="search-input" id="search-box" placeholder="Search by URL path or slug name (e.g. restaurant-pos)...">
            </div>
        </div>
    </div>

    <div class="results-container">
        <div class="results-count" id="results-count">Showing all ${totalCount} links</div>
        <div class="grid" id="links-grid"></div>
    </div>

    <script>
        const data = ${JSON.stringify(categoriesData)};
        
        let activeLocale = 'all';
        let activeCategory = 'all';
        let searchQuery = '';

        const localeFilters = document.getElementById('locale-filters');
        const categoryFilters = document.getElementById('category-filters');
        const searchBox = document.getElementById('search-box');
        const linksGrid = document.getElementById('links-grid');
        const resultsCount = document.getElementById('results-count');

        // Setup filter click handlers
        localeFilters.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-filter')) {
                localeFilters.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                activeLocale = e.target.getAttribute('data-locale');
                render();
            }
        });

        categoryFilters.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-filter')) {
                categoryFilters.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                activeCategory = e.target.getAttribute('data-category');
                render();
            }
        });

        searchBox.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            render();
        });

        function render() {
            let filtered = [];

            for (const [category, items] of Object.entries(data)) {
                if (activeCategory !== 'all' && activeCategory !== category) continue;
                
                items.forEach(item => {
                    if (activeLocale !== 'all' && activeLocale !== item.locale) return;
                    if (searchQuery && !item.path.toLowerCase().includes(searchQuery)) return;
                    
                    filtered.push({
                        ...item,
                        category
                    });
                });
            }

            // Cap rendering to 1200 items for DOM performance reasons if unfiltered,
            // but show total search matches count.
            const displayLimit = 1000;
            const toRender = filtered.slice(0, displayLimit);

            let html = '';
            toRender.forEach(item => {
                const pathDisplay = item.path === '' ? '/' : item.path;
                html += \`
                <div class="card">
                    <div class="card-header">
                        <span class="tag-locale">\${item.locale}</span>
                        <span class="tag-category">\${item.category}</span>
                    </div>
                    <div class="path-title">\${pathDisplay}</div>
                    <div class="card-actions">
                        <a href="\${item.prodUrl}" class="btn-link btn-link-prod" target="_blank">Production</a>
                        <a href="\${item.localUrl}" class="btn-link btn-link-local" target="_blank">Local Dev</a>
                    </div>
                </div>\`;
            });

            if (filtered.length === 0) {
                linksGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary)">No matching links found.</div>';
                resultsCount.innerText = 'Showing 0 of 0 links';
            } else {
                linksGrid.innerHTML = html;
                if (filtered.length > displayLimit) {
                    resultsCount.innerText = \`Showing first \${displayLimit} of \${filtered.length} matching links (use search/filter to narrow down)\`;
                } else {
                    resultsCount.innerText = \`Showing all \${filtered.length} matching links\`;
                }
            }
        }

        // Initial render
        render();
    </script>
</body>
</html>`;

    const htmlFilePath = path.join(__dirname, 'urls_clickable.html');
    fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
    console.log(`Saved interactive links list to urls_clickable.html`);
    console.log('Successfully completed!');
}

main();
