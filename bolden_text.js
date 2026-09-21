const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/ss270/OneDrive/Desktop/practice/cherr/cherryscaling-next/src';

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // We want to target classes containing 'font-manrope' but not containing 'font-bold', 'font-semibold', or 'font-medium'
  // Also this mainly targets small text: 'text-xs', 'text-sm', 'text-base', 'text-[13px]', 'text-[14px]', 'text-[15px]', etc.
  
  // A regex to match className="..."
  const classNameRegex = /className=(?:\{`|'|")([^`'"]+)(?:`\}|'|")/g;
  
  content = content.replace(classNameRegex, (match, classNames) => {
    if (classNames.includes('font-manrope')) {
      if (!classNames.includes('font-bold') && 
          !classNames.includes('font-semibold') && 
          !classNames.includes('font-medium') &&
          !classNames.includes('font-light') && // if it explicitly asks for light, maybe we leave it? Or user said "everywhere" so let's overwrite light.
          !classNames.includes('font-normal')) {
        // Doesn't have a weight class, let's add font-medium
        return match.replace('font-manrope', 'font-manrope font-medium');
      } else if (classNames.includes('font-light') || classNames.includes('font-normal')) {
        let newClasses = classNames.replace(/\bfont-light\b/g, '').replace(/\bfont-normal\b/g, '').trim();
        newClasses += ' font-medium';
        // Replace the inside of className="..."
        return match.replace(classNames, newClasses);
      }
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

walkDir(srcDir);
console.log("Done.");
