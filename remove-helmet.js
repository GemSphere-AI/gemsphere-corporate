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
            let modified = false;

            if (content.includes('react-helmet-async')) {
                // Remove import
                content = content.replace(/import \{ Helmet \} from 'react-helmet-async';\r?\n?/g, '');
                // Remove Helmet block (non-greedy)
                content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\r?\n?/g, '');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log(`Removed Helmet from: ${fullPath}`);
            }
        }
    }
}

const basePath = path.join(__dirname, 'src');
processDir(path.join(basePath, 'pages'));
processDir(path.join(basePath, 'components'));
processDir(path.join(basePath, 'layouts'));
