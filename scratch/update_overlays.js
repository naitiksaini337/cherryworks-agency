const fs = require('fs');
const path = require('path');

const targetStr = 'className="absolute inset-0 z-10 bg-black/60 bg-gradient-to-t from-[#050505] via-transparent to-transparent"';
const replaceStr = 'className="absolute inset-0 z-10 bg-black/35 bg-gradient-to-t from-[#050505] via-black/40 to-transparent sm:bg-none transition-opacity duration-1000"';

const files = [
  'src/app/work/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/services/page.tsx',
  'src/app/services/web-development/page.tsx',
  'src/app/services/social-media/page.tsx',
  'src/app/services/ecommerce/page.tsx',
  'src/app/services/branding-seo/page.tsx',
  'src/app/about/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(targetStr)) {
      content = content.replace(targetStr, replaceStr);
      fs.writeFileSync(filePath, content);
      console.log('Updated ' + file);
    }
  } else {
    console.log('Not found: ' + filePath);
  }
});
