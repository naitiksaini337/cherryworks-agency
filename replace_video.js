const fs = require('fs');
const files = [
  'src/app/services/web-development/page.tsx',
  'src/app/services/branding-seo/page.tsx',
  'src/app/services/ecommerce/page.tsx',
  'src/app/work/page.tsx',
  'src/app/services/page.tsx',
  'src/app/services/social-media/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<video') && content.includes('autoPlay')) {
    // Add import statement after use client or at the top
    if (!content.includes('BackgroundVideo')) {
      content = content.replace(/import /, "import { BackgroundVideo } from '@/components/ui/BackgroundVideo';\nimport ");
    }
    // Replace <video ... autoPlay ... /> with <BackgroundVideo ... />
    content = content.replace(/<video([\s\S]*?)autoPlay([\s\S]*?)\/>/g, '<BackgroundVideo$1$2/>');
    content = content.replace(/<video([\s\S]*?)autoPlay([\s\S]*?)>([\s\S]*?)<\/video>/g, '<BackgroundVideo$1$2>$3</BackgroundVideo>');
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
