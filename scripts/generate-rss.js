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
import { BLOG_POSTS } from '../src/data/blogData.js';
import { SITE_CONFIG } from '../src/config/siteConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const baseUrl = SITE_CONFIG.brand.getBaseUrl();
const buildDate = new Date().toUTCString();

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const itemsXml = BLOG_POSTS.map((post) => {
  const postUrl = `${baseUrl}/en/blog/${post.id}/`;
  let pubDate = buildDate;
  try {
    pubDate = new Date(post.date).toUTCString();
  } catch (e) {
    // fallback
  }

  const categoryXml = post.category ? `<category>${escapeXml(post.category)}</category>` : '';
  const authorXml = post.author?.name ? `<dc:creator>${escapeXml(post.author.name)}</dc:creator>` : '<dc:creator>GemSphere Editorial Team</dc:creator>';

  return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      ${authorXml}
      ${categoryXml}
    </item>`;
}).join('\n');

const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_CONFIG.brand.legalName)} — Technical Insights &amp; Architecture</title>
    <link>${baseUrl}/en/blog/</link>
    <description>${escapeXml(SITE_CONFIG.brand.description)}</description>
    <language>en-US</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/logo-icon.png</url>
      <title>${escapeXml(SITE_CONFIG.brand.name)}</title>
      <link>${baseUrl}/en/</link>
    </image>
${itemsXml}
  </channel>
</rss>
`;

const outputPath = path.join(rootDir, 'public', 'feed.xml');
fs.writeFileSync(outputPath, rssXml.trim() + '\n', 'utf8');

console.log(`✅ [RSS Generator] Successfully generated ${outputPath} with ${BLOG_POSTS.length} articles.`);
