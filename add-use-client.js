const fs = require('fs');
const path = require('path');

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (!content.startsWith('"use client";') && !content.startsWith("'use client';")) {
                fs.writeFileSync(fullPath, '"use client";\n' + content);
            }
        }
    }
}

const basePath = path.join(__dirname, 'src');
processDir(path.join(basePath, 'components'));
processDir(path.join(basePath, 'pages'));
processDir(path.join(basePath, 'layouts'));
