const fs = require('fs');
const path = require('path');

const routes = {
  about: 'About',
  contact: 'Contact',
  careers: 'Careers',
  products: 'Products',
  solutions: 'Solutions',
  'ai-solutions': 'AISolutions',
  services: 'Services',
  industries: 'Industries',
  blog: 'BlogList',
  privacy: 'PrivacyPolicy',
  'cookie-policy': 'CookiePolicy',
};

const baseDir = path.join(__dirname, 'src/app');

for (const [route, componentName] of Object.entries(routes)) {
  const dirPath = path.join(baseDir, route);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
  
  const content = `import ${componentName} from '../../pages/${componentName}';

export const metadata = {
  title: '${componentName} | GemSphere Technologies',
};

export default function Page() {
  return <${componentName} />;
}
`;
  fs.writeFileSync(path.join(dirPath, 'page.jsx'), content);
}
