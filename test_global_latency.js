/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 */

import fs from 'fs';
import path from 'path';

// Helper to sleep for polling
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function triggerMeasurement(target) {
    const payload = {
        type: 'ping',
        target: target,
        locations: [
            { country: 'US' },
            { country: 'DE' },
            { country: 'IN' }
        ],
        limit: 9 // up to 3 probes per country
    };

    const res = await fetch('https://api.globalping.io/v1/measurements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to trigger measurement for ${target}: ${res.statusText} - ${text}`);
    }

    return await res.json();
}

async function getMeasurementResults(id) {
    const res = await fetch(`https://api.globalping.io/v1/measurements/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch results for ${id}: ${res.statusText}`);
    }
    return await res.json();
}

async function runLatencyTest() {
    const targets = {
        github: 'gemsphere-ai.github.io',
        vm: 'gemsphere.in'
    };

    console.log(`\n=============================================================`);
    console.log(`GemSphere Global Latency Performance comparison`);
    console.log(`=============================================================`);
    console.log(`Target 1 (GitHub Pages): ${targets.github}`);
    console.log(`Target 2 (GCP US-Central VM): ${targets.vm}`);
    console.log(`Triggering global tests via Globalping API...`);

    try {
        const t1Trigger = await triggerMeasurement(targets.github);
        const t2Trigger = await triggerMeasurement(targets.vm);

        console.log(`GitHub Pages Test ID: ${t1Trigger.id}`);
        console.log(`US-Central VM Test ID: ${t2Trigger.id}`);
        console.log(`\nWaiting for results from global probes...`);

        let t1Done = false;
        let t2Done = false;
        let t1Data = null;
        let t2Data = null;

        // Poll for up to 20 seconds
        for (let i = 0; i < 20; i++) {
            await sleep(1500);

            if (!t1Done) {
                t1Data = await getMeasurementResults(t1Trigger.id);
                if (t1Data.status === 'finished') t1Done = true;
            }

            if (!t2Done) {
                t2Data = await getMeasurementResults(t2Trigger.id);
                if (t2Data.status === 'finished') t2Done = true;
            }

            process.stdout.write(`Polling... GitHub status: ${t1Data?.status || 'checking'} | VM status: ${t2Data?.status || 'checking'}\r`);

            if (t1Done && t2Done) break;
        }

        console.log('\n\nGlobal probe measurements completed!');
        
        // Group and summarize results by country
        const summarizeData = (data) => {
            const summary = { US: [], DE: [], IN: [] };
            if (!data || !data.results) return summary;

            data.results.forEach(item => {
                const country = item.probe.country; // 'US', 'DE', 'IN'
                if (summary[country] !== undefined && item.result && item.result.stats) {
                    summary[country].push(item.result.stats.avg);
                }
            });

            // Calculate average for each country
            const averages = {};
            for (const country of ['US', 'DE', 'IN']) {
                const list = summary[country];
                if (list.length > 0) {
                    averages[country] = (list.reduce((sum, v) => sum + v, 0) / list.length).toFixed(1) + ' ms';
                } else {
                    averages[country] = 'N/A';
                }
            }
            return averages;
        };

        const githubSummary = summarizeData(t1Data);
        const vmSummary = summarizeData(t2Data);

        console.log(`\n=============================================================`);
        console.log(`LATENCY RESULTS SUMMARY (ROUND-TRIP PING TIME)`);
        console.log(`=============================================================`);
        console.log(`  Location   |   GitHub Pages   |   GCP VM (US-Central)   |  Winner`);
        console.log(`-------------+------------------+-------------------------+----------`);

        const countriesMap = {
            'US': 'USA        ',
            'DE': 'Germany    ',
            'IN': 'India      '
        };

        for (const code of ['US', 'DE', 'IN']) {
            const ghValStr = githubSummary[code];
            const vmValStr = vmSummary[code];
            
            const ghVal = parseFloat(ghValStr);
            const vmVal = parseFloat(vmValStr);
            
            let winner = 'Draw';
            if (!isNaN(ghVal) && !isNaN(vmVal)) {
                if (ghVal < vmVal) {
                    winner = 'GitHub Pages';
                } else if (vmVal < ghVal) {
                    winner = 'GCP VM';
                }
            }

            console.log(`  ${countriesMap[code]} |   ${ghValStr.padEnd(14)} |   ${vmValStr.padEnd(21)} |  ${winner}`);
        }
        console.log(`=============================================================\n`);

        // Check raw connection latency differences
        const ghUS = parseFloat(githubSummary['US']);
        const vmUS = parseFloat(vmSummary['US']);
        const ghIN = parseFloat(githubSummary['IN']);
        const vmIN = parseFloat(vmSummary['IN']);

        console.log(`Key Observations:`);
        if (vmUS < ghUS) {
            console.log(`- In the USA, the dedicated GCP VM outperforms GitHub Pages CDN by ${(ghUS - vmUS).toFixed(1)} ms.`);
        } else if (ghUS < vmUS) {
            console.log(`- In the USA, GitHub Pages CDN outperforms the GCP VM by ${(vmUS - ghUS).toFixed(1)} ms.`);
        }
        
        if (ghIN < vmIN) {
            console.log(`- In India, GitHub Pages edge CDN reduces latency significantly (averaging ${githubSummary['IN']} vs ${vmSummary['IN']} for VM) due to local edge nodes.`);
        } else if (vmIN < ghIN) {
            console.log(`- In India, the GCP VM latency is ${vmSummary['IN']} which is faster than GitHub Pages by ${(ghIN - vmIN).toFixed(1)} ms.`);
        }
        console.log(`\nLatency is highly dependent on CDN caching. GitHub Pages routes through Fastly/GitHub CDN edge locations globally, whereas a standard single-region VM routes directly to the US Central data center.`);
        console.log(`=============================================================\n`);

    } catch (err) {
        console.error('Error running latency test:', err);
    }
}

runLatencyTest();
