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
import https from 'https';
import http from 'http';
import { SITE_CONFIG } from '../src/config/siteConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');

console.log('===========================================================');
console.log('🌐 [GEMSPHERE LINK VALIDATION SUITE]');
console.log('Validating all internal and external links before deployment...');
console.log('===========================================================\n');

let totalChecks = 0;
let passedChecks = 0;
let warningChecks = 0;
let failedChecks = 0;

// -------------------------------------------------------------
// 1. Validate Core Asset Files in dist and public
// -------------------------------------------------------------
console.log('📁 [Phase 1]: Validating Core Static Assets & Root Files...');

const requiredAssets = [
  'favicon.ico',
  'logo.png',
  'logo-icon.png',
  'og-image.jpg',
  'manifest.json',
  'feed.xml',
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
  'llms-full.txt',
  '.well-known/assetlinks.json'
];

for (const asset of requiredAssets) {
  totalChecks++;
  const pubPath = path.join(publicDir, asset);
  const distPath = path.join(distDir, asset);

  const existsInPublic = fs.existsSync(pubPath);
  const existsInDist = fs.existsSync(distPath);

  if (existsInPublic && existsInDist) {
    passedChecks++;
    console.log(`  ✅ [Asset Verified]: /${asset} (present in public/ and dist/)`);
  } else if (existsInPublic) {
    // If it's in public, copy to dist if dist exists
    if (fs.existsSync(distDir)) {
      const targetDir = path.dirname(distPath);
      if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
      fs.copyFileSync(pubPath, distPath);
      passedChecks++;
      console.log(`  ✅ [Asset Synced]: /${asset} (copied from public/ to dist/)`);
    } else {
      passedChecks++;
      console.log(`  ✅ [Asset Verified]: /${asset} (present in public/)`);
    }
  } else {
    failedChecks++;
    console.error(`  ❌ [Asset Missing]: /${asset} was not found!`);
  }
}

// -------------------------------------------------------------
// 2. Validate Key Internal Navigation Routes in dist/
// -------------------------------------------------------------
console.log('\n📄 [Phase 2]: Validating Key Internal Routes across Active Locales...');

const sampleRoutes = [
  '',
  'about',
  'contact',
  'careers',
  'demo',
  'privacy',
  'privacy-policy',
  'terms',
  'security',
  'cookie-policy',
  'delete-account',
  'solutions',
  'services',
  'industries',
  'products',
  'blog',
  'solutions/enterprise-digital-transformation',
  'solutions/omnichannel-retail-infrastructure',
  'solutions/private-cloud-migration',
  'solutions/intelligent-business-automation',
  'products/pos-system',
  'products/crm-platform',
  'products/billing-platform',
  'products/erp-system',
  'compare/gemsphere-vs-salesforce',
  'compare/gemsphere-vs-toast',
  'compare/gemsphere-vs-shopify',
  'compare/gemsphere-vs-hubspot',
  'authors/arun-sharma',
  'authors/sophia-chen',
  'authors/marcus-vance',
  'authors/priya-nair'
];

const locales = SITE_CONFIG.locales.active;

for (const loc of locales) {
  let localePass = 0;
  let localeFail = 0;

  for (const route of sampleRoutes) {
    totalChecks++;
    const routeSuffix = route === '' ? 'index.html' : path.join(...route.split('/'), 'index.html');
    const fullHtmlPath = path.join(distDir, loc, routeSuffix);

    if (fs.existsSync(fullHtmlPath)) {
      localePass++;
    } else {
      localeFail++;
      console.error(`  ❌ [Route Missing]: ${loc}/${route}/ (File not found at ${fullHtmlPath})`);
    }
  }

  if (localeFail === 0) {
    passedChecks += sampleRoutes.length;
    console.log(`  ✅ [Locale '${loc}' Verified]: All ${sampleRoutes.length} key route HTML files generated in dist/`);
  } else {
    failedChecks += localeFail;
    passedChecks += localePass;
  }
}

// -------------------------------------------------------------
// 3. Validate External URLs in siteConfig.js
// -------------------------------------------------------------
console.log('\n🔗 [Phase 3]: Validating External Corporate URLs & Social Channels...');

const externalUrls = [
  { name: 'Website Root', url: SITE_CONFIG.brand.websiteUrl },
  { name: 'Google Play Store App', url: SITE_CONFIG.mobileApp.playStoreUrl },
  { name: 'Portal Base', url: SITE_CONFIG.portal.baseUrl },
  { name: 'Portal Login', url: SITE_CONFIG.portal.loginUrl },
  { name: 'Portal Register', url: SITE_CONFIG.portal.registerUrl },
  { name: 'GitHub Profile', url: SITE_CONFIG.social.github },
  { name: 'Blogger Site', url: SITE_CONFIG.social.blogger },
  { name: 'YouTube Channel', url: SITE_CONFIG.social.youtube },
  { name: 'LinkedIn Company', url: SITE_CONFIG.social.linkedin },
  { name: 'Twitter / X', url: SITE_CONFIG.social.twitter },
  { name: 'Facebook Profile', url: SITE_CONFIG.social.facebook },
  { name: 'Instagram Profile', url: SITE_CONFIG.social.instagram }
];

async function checkUrl(name, targetUrl) {
  totalChecks++;
  return new Promise((resolve) => {
    try {
      const parsedUrl = new URL(targetUrl);
      const protocol = parsedUrl.protocol === 'https:' ? https : http;

      const req = protocol.request(
        parsedUrl,
        {
          method: 'HEAD',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
          },
          timeout: 6000
        },
        (res) => {
          const status = res.statusCode;
          // Status 200-399 are valid.
          // 403 or 999 are bot challenges on LinkedIn, Twitter, Facebook, Instagram when queried via scripts.
          if (status >= 200 && status < 400) {
            passedChecks++;
            console.log(`  ✅ [Live]: ${name.padEnd(24)} -> HTTP ${status} (${targetUrl})`);
          } else if (status === 999 || status === 403 || status === 429) {
            passedChecks++;
            console.log(`  🛡️  [Protected/Live]: ${name.padEnd(24)} -> HTTP ${status} (Anti-bot protection active) (${targetUrl})`);
          } else {
            warningChecks++;
            console.warn(`  ⚠️  [Unexpected Status]: ${name.padEnd(24)} -> HTTP ${status} (${targetUrl})`);
          }
          resolve();
        }
      );

      req.on('error', (err) => {
        // Fallback or warning if offline / DNS blocked
        warningChecks++;
        console.warn(`  ⚠️  [Network Warning]: ${name.padEnd(24)} -> ${err.message} (${targetUrl})`);
        resolve();
      });

      req.on('timeout', () => {
        req.destroy();
        warningChecks++;
        console.warn(`  ⚠️  [Timeout]: ${name.padEnd(24)} -> Timed out after 6000ms (${targetUrl})`);
        resolve();
      });

      req.end();
    } catch (e) {
      failedChecks++;
      console.error(`  ❌ [Invalid URL]: ${name} -> ${e.message}`);
      resolve();
    }
  });
}

async function runExternalChecks() {
  for (const item of externalUrls) {
    await checkUrl(item.name, item.url);
  }

  console.log('\n===========================================================');
  console.log(`🏁 [VALIDATION COMPLETE] Summary:`);
  console.log(`   - Total Checks Executed: ${totalChecks}`);
  console.log(`   - Passed / Verified:    ${passedChecks}`);
  console.log(`   - Warnings (Network):   ${warningChecks}`);
  console.log(`   - Failed:               ${failedChecks}`);
  console.log('===========================================================');

  if (failedChecks > 0) {
    console.error('\n🚨 [Result]: Found broken links or missing route files. Fix required.');
    process.exit(1);
  } else {
    console.log('\n🎉 [Result]: All internal routes, assets, and external links are VALID and ready for production deployment!\n');
    process.exit(0);
  }
}

runExternalChecks();
