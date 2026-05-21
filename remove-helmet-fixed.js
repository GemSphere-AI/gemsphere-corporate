const fs = require('fs');
const path = require('path');

function processDir(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let initialContent = content;

            // Simple string replacement for import
            content = content.replace("import { Helmet } from 'react-helmet-async';\r\n", "");
            content = content.replace("import { Helmet } from 'react-helmet-async';\n", "");
            content = content.replace("import { Helmet } from 'react-helmet-async';", "");

            // Regex for <Helmet> tags
            content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\r?\n?/g, "");

            if (content !== initialContent) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

const basePath = path.join(__dirname, 'src');
processDir(path.join(basePath, 'pages'));
processDir(path.join(basePath, 'components'));
processDir(path.join(basePath, 'layouts'));
