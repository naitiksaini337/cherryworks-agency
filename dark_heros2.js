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

  // Find the first section that looks like a hero
  const heroRegex = /(<section[^>]*min-h-\[85vh\][^>]*>[\s\S]*?)<\/section>/;
  const heroMatch = content.match(heroRegex);
  
  if (heroMatch) {
    let hero = heroMatch[1] + '</section>';

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

    // Replace the hero in the content
    content = content.replace(heroMatch[0], hero);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  }
}

walkDir(baseDir);
console.log("Done.");
