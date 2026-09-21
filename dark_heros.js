const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/ss270/OneDrive/Desktop/practice/cherr/cherryscaling-next/src/app';

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file === 'page.tsx') {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Only target the hero section, which usually follows {/* Hero */} and ends with </section>
  const heroMatch = content.match(/({\/\* Hero \*\/}[\s\S]*?)<\/section>/);
  if (heroMatch) {
    let hero = heroMatch[0];

    // Backgrounds and borders
    hero = hero.replace(/bg-\[#F4F0EC\]/g, 'bg-[#050505]');
    hero = hero.replace(/border-\[#E2DDD7\]/g, 'border-[#1C1417]');
    
    // Overlays
    hero = hero.replace(/bg-white\/60/g, 'bg-black/60');
    hero = hero.replace(/from-\[#F4F0EC\]/g, 'from-[#050505]');
    
    // Text colors
    hero = hero.replace(/text-\[#050505\]/g, 'text-[#FFFFFF]');
    hero = hero.replace(/text-\[#504A4C\]/g, 'text-[#F4F0EC]');
    hero = hero.replace(/text-\[#3A3537\]/g, 'text-[#F4F0EC]');

    // Let's replace button variants if needed, but they are probably okay as is.
    // Replace the hero in the content
    content = content.replace(heroMatch[0], hero);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  } else {
    // If there is no {/* Hero */} comment, maybe we look for the first section.
    const firstSectionMatch = content.match(/<section[^>]*>[\s\S]*?<\/section>/);
    if (firstSectionMatch && !filePath.includes('page.tsx')) {
        // we won't blindly apply to non-commented ones for now unless needed.
    }
  }
}

walkDir(baseDir);
console.log("Done.");
