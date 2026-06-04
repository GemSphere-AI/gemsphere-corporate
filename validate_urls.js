/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Batch size to prevent socket exhaustion or server overload
const BATCH_SIZE = 500;

async function checkUrl(url) {
    const startTime = Date.now();
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        const response = await fetch(url, {
            method: 'GET',
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) GemSphereUrlValidator/1.0'
            }
        });

        clearTimeout(timeoutId);
        const latency = Date.now() - startTime;
        return { url, status: response.status, ok: response.ok, latency };
    } catch (err) {
        const latency = Date.now() - startTime;
        return { url, status: 0, ok: false, error: err.message, latency };
    }
}

async function main() {
    const args = process.argv.slice(2);
    const useProd = args.includes('--prod');
    const filename = useProd ? 'urls_production.txt' : 'urls_local.txt';
    const filePath = path.join(__dirname, filename);

    if (!fs.existsSync(filePath)) {
        console.error(`Error: Link list file not found: ${filename}`);
        console.error('Please run "node generate_url_list.js" first.');
        process.exit(1);
    }

    const urls = fs.readFileSync(filePath, 'utf-8')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

    console.log(`\n==========================================`);
    console.log(`GemSphere URL Validator`);
    console.log(`==========================================`);
    console.log(`Testing targets from: ${filename}`);
    console.log(`Total URLs to check: ${urls.length}`);
    console.log(`Batch size: ${BATCH_SIZE} concurrent requests`);
    console.log(`==========================================\n`);

    const start = Date.now();
    const results = [];
    const broken = [];

    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
        const batch = urls.slice(i, i + BATCH_SIZE);
        const batchPromises = batch.map(url => checkUrl(url));
        
        const batchResults = await Promise.all(batchPromises);
        results.push(...batchResults);

        batchResults.forEach(res => {
            if (!res.ok) {
                broken.push(res);
                console.log(`[\x1b[31mFAIL\x1b[0m] Status: ${res.status || 'ERR'} | Latency: ${res.latency}ms - ${res.url} ${res.error ? `(${res.error})` : ''}`);
            }
        });

        const checkedCount = i + batch.length;
        const pct = ((checkedCount / urls.length) * 100).toFixed(1);
        process.stdout.write(`Progress: ${checkedCount}/${urls.length} checked (${pct}%) | Broken: ${broken.length}\r`);
    }

    const duration = ((Date.now() - start) / 1000).toFixed(2);
    console.log(`\n\n==========================================`);
    console.log(`Validation Complete!`);
    console.log(`==========================================`);
    console.log(`Time elapsed: ${duration}s`);
    console.log(`Checked: ${results.length}`);
    console.log(`Healthy (2xx): ${results.length - broken.length}`);
    console.log(`Broken (non-2xx/error): ${broken.length}`);
    console.log(`==========================================\n`);

    // Write report file
    const reportPath = path.join(__dirname, 'url_validation_report.txt');
    let reportContent = `======================================================================\n`;
    reportContent += `GEMSPHERE URL VALIDATION REPORT\n`;
    reportContent += `======================================================================\n`;
    reportContent += `Generated at: ${new Date().toISOString()}\n`;
    reportContent += `Source File:  ${filename}\n`;
    reportContent += `Total Checked: ${results.length}\n`;
    reportContent += `Healthy (2xx): ${results.length - broken.length}\n`;
    reportContent += `Broken/Failed: ${broken.length}\n`;
    reportContent += `Duration:      ${duration} seconds\n`;
    reportContent += `======================================================================\n\n`;

    if (broken.length > 0) {
        reportContent += `BROKEN LINKS SUMMARY (${broken.length} items):\n`;
        broken.forEach((item, index) => {
            reportContent += `[${index + 1}] Status: ${item.status || 'ERR'} | Latency: ${item.latency}ms | ${item.url} ${item.error ? `(Error: ${item.error})` : ''}\n`;
        });
        reportContent += `\n======================================================================\n\n`;
    } else {
        reportContent += `✓ Success: All checked URLs are healthy and returned successful status codes!\n\n`;
        reportContent += `======================================================================\n\n`;
    }

    reportContent += `FULL TABULAR URL REGISTRY AND RESULTS:\n`;
    reportContent += `| Index | Status | Latency | Result | Target URL |\n`;
    reportContent += `|-------|--------|---------|--------|------------|\n`;

    results.forEach((item, index) => {
        const resultText = item.ok ? 'OK' : 'FAILED';
        reportContent += `| ${index + 1} | ${item.status || 'ERR'} | ${item.latency}ms | ${resultText} | ${item.url} |\n`;
    });

    fs.writeFileSync(reportPath, reportContent, 'utf-8');
    console.log(`Saved detailed validation report to: url_validation_report.txt\n`);
}

main().catch(err => {
    console.error('Fatal error running validator:', err);
});
