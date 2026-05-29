/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 */
import fs from 'fs';
import path from 'path';
import sitemap from './src/app/sitemap.js';

try {
    const routes = sitemap();
    const paths = routes.map(r => {
        const urlObj = new URL(r.url);
        return urlObj.pathname;
    });
    
    const destDir = path.resolve('../../scratch');
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }
    
    const destFile = path.join(destDir, 'seo_routes_list.txt');
    fs.writeFileSync(destFile, paths.join('\n'), 'utf8');
    console.log(`Successfully generated ${paths.length} paths in ${destFile}`);
} catch (err) {
    console.error('Failed to export urls:', err);
}
