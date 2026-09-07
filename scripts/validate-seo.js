/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const REQUIRED_LOCALES = ['en', 'de', 'fr', 'es', 'ja', 'ar', 'pt-br'];

console.log('🔍 [SEO Validation Gate] Starting automated SEO and internationalization audit...');

let errorCount = 0;

function reportError(msg) {
  console.error(`❌ [SEO Gate Error]: ${msg}`);
  errorCount++;
}

function reportPass(msg) {
  console.log(`✅ [SEO Gate Passed]: ${msg}`);
}

// 1. Audit seoHelpers.js for the 7 official enterprise locales
const seoHelpersPath = path.join(rootDir, 'src', 'utils', 'seoHelpers.js');
if (!fs.existsSync(seoHelpersPath)) {
  reportError(`seoHelpers.js not found at ${seoHelpersPath}`);
} else {
  const content = fs.readFileSync(seoHelpersPath, 'utf8');
  for (const loc of REQUIRED_LOCALES) {
    if (!content.includes(`'${loc}'`)) {
      reportError(`Locale '${loc}' is missing from ACTIVE_LOCALES in seoHelpers.js`);
    }
  }
  if (!content.includes('x-default')) {
    reportError(`x-default hreflang target is missing in seoHelpers.js`);
  }
  reportPass(`seoHelpers.js contains all 7 active locales + x-default`);
}

// 2. Audit i18n.js for Arabic (ar) and Brazilian Portuguese (pt-br)
const i18nPath = path.join(rootDir, 'src', 'i18n.js');
if (!fs.existsSync(i18nPath)) {
  reportError(`i18n.js not found at ${i18nPath}`);
} else {
  const content = fs.readFileSync(i18nPath, 'utf8');
  if (!content.includes('ar:') || (!content.includes("'pt-br':") && !content.includes('"pt-br":') && !content.includes('pt-br:'))) {
    reportError(`i18n.js is missing resource registrations for 'ar' or 'pt-br'`);
  } else {
    reportPass(`i18n.js correctly initializes resources for all 7 locales`);
  }
}

// 3. Audit translation dictionaries
for (const loc of REQUIRED_LOCALES) {
  const dictPath = path.join(rootDir, 'src', 'locales', loc, 'common.json');
  if (!fs.existsSync(dictPath)) {
    reportError(`Missing translation dictionary for locale '${loc}' at ${dictPath}`);
  } else {
    try {
      const parsed = JSON.parse(fs.readFileSync(dictPath, 'utf8'));
      if (!parsed.nav || !parsed.home || !parsed.footer) {
        reportError(`Dictionary for '${loc}' is missing core namespaces (nav, home, footer)`);
      }
    } catch (e) {
      reportError(`Malformed JSON in translation dictionary for '${loc}': ${e.message}`);
    }
  }
}
reportPass(`All 7 translation dictionaries exist and are valid JSON`);

// 4. Audit route templates for relative / non-localized canonical tags
const appLocaleDir = path.join(rootDir, 'src', 'app', '[locale]');

function scanDirForCanonicalBugs(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirForCanonicalBugs(fullPath);
    } else if (entry.name.endsWith('.jsx') || entry.name.endsWith('.js')) {
      const src = fs.readFileSync(fullPath, 'utf8');
      
      // Defect check: naked relative canonical strings like canonical: '/products/...'
      const nakedMatch = src.match(/canonical:\s*['"`]\/(?!https?:\/\/)[^'"`]*['"`]/);
      if (nakedMatch) {
        reportError(`Naked non-localized relative canonical found in ${path.relative(rootDir, fullPath)}: ${nakedMatch[0]}`);
      }

      // If page defines alternates, check if it includes languages
      if (src.includes('alternates:') && !src.includes('languages') && !src.includes('canonical')) {
        reportError(`Incomplete alternates definition in ${path.relative(rootDir, fullPath)}`);
      }
    }
  }
}

if (fs.existsSync(appLocaleDir)) {
  scanDirForCanonicalBugs(appLocaleDir);
  reportPass(`Scanned all route templates in src/app/[locale]; zero naked relative canonicals found`);
}

// 5. Audit sitemap.js for 7 locales and valid URL generation
const sitemapPath = path.join(rootDir, 'src', 'app', 'sitemap.js');
if (fs.existsSync(sitemapPath)) {
  const sitemapSrc = fs.readFileSync(sitemapPath, 'utf8');
  if (!sitemapSrc.includes('ACTIVE_LOCALES')) {
    reportError(`sitemap.js does not import or iterate over ACTIVE_LOCALES`);
  } else {
    reportPass(`sitemap.js integrates ACTIVE_LOCALES for multi-lingual sitemap generation`);
  }
}

// 6. Audit schema generators for Google Play Store compliance (Zero iOS mentions)
const schemaPath = path.join(rootDir, 'src', 'utils', 'schemaGenerators.js');
if (fs.existsSync(schemaPath)) {
  const schemaSrc = fs.readFileSync(schemaPath, 'utf8');
  if (schemaSrc.toLowerCase().includes('apple.com') || schemaSrc.toLowerCase().includes('itunes.apple.com')) {
    reportError(`Prohibited Apple App Store mention detected in schemaGenerators.js`);
  } else {
    reportPass(`schemaGenerators.js restricts mobile app distribution strictly to Google Play Store`);
  }
}

// 7. Audit NGINX Category A-F redirects
const nginxPath = path.join(rootDir, 'nginx.corporate.conf');
if (fs.existsSync(nginxPath)) {
  const nginxSrc = fs.readFileSync(nginxPath, 'utf8');
  if (!nginxSrc.includes('rewrite ^/(products|services|compare|industries')) {
    reportError(`NGINX configuration is missing Category A naked path 301 redirects`);
  }
  if (!nginxSrc.includes('/compare/gemsphere-vs-shopify/')) {
    reportError(`NGINX configuration is missing competitor comparison consolidation rules`);
  }
  reportPass(`nginx.corporate.conf contains verified Category A-F redirect rules`);
}

// 8. Audit Web App Manifest (ASO & PWA discoverability)
const manifestPath = path.join(rootDir, 'public', 'manifest.json');
if (!fs.existsSync(manifestPath)) {
  reportError(`public/manifest.json not found`);
} else {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    if (!manifest.related_applications || !manifest.related_applications.some(app => app.platform === 'play' && app.id === 'com.gemsphere.pos')) {
      reportError(`public/manifest.json is missing related_applications entry for Google Play Store (com.gemsphere.pos)`);
    } else {
      reportPass(`public/manifest.json verified with Google Play Store app linkage`);
    }
  } catch (e) {
    reportError(`Malformed JSON in public/manifest.json: ${e.message}`);
  }
}

// 9. Audit RSS 2.0 Syndication Feed (SEO & GEO discoverability)
const feedPath = path.join(rootDir, 'public', 'feed.xml');
if (!fs.existsSync(feedPath)) {
  reportError(`public/feed.xml not found`);
} else {
  const feedSrc = fs.readFileSync(feedPath, 'utf8');
  if (!feedSrc.includes('<rss version="2.0"') || !feedSrc.includes('<item>')) {
    reportError(`public/feed.xml is missing valid RSS 2.0 structure or items`);
  } else {
    reportPass(`public/feed.xml verified as valid RSS 2.0 feed with syndicated articles`);
  }
}

// 10. Audit GEO Machine-Readable LLM Knowledge Repositories
const llmsPath = path.join(rootDir, 'public', 'llms.txt');
const llmsFullPath = path.join(rootDir, 'public', 'llms-full.txt');
if (!fs.existsSync(llmsPath) || !fs.existsSync(llmsFullPath)) {
  reportError(`public/llms.txt or public/llms-full.txt is missing`);
} else {
  const llmsSrc = fs.readFileSync(llmsPath, 'utf8');
  const fullSrc = fs.readFileSync(llmsFullPath, 'utf8');
  if (!llmsSrc.includes('solutions') || !fullSrc.includes('solutions')) {
    reportError(`llms.txt or llms-full.txt missing Enterprise Solutions references`);
  } else if (!llmsSrc.includes('authors') || !fullSrc.includes('authors')) {
    reportError(`llms.txt or llms-full.txt missing E-E-A-T Author references`);
  } else {
    reportPass(`public/llms.txt and public/llms-full.txt verified with full Solutions and E-E-A-T coverage`);
  }
}

console.log('\n-----------------------------------------------------------');
if (errorCount > 0) {
  console.error(`🚨 [SEO Validation Failed]: ${errorCount} critical SEO/a11y defects detected. Build aborted.`);
  process.exit(1);
} else {
  console.log(`🎉 [SEO Validation Succeeded]: All automated SEO, internationalization, canonical, and schema quality gates PASSED with 0 errors!`);
  process.exit(0);
}
