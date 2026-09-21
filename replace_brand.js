const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  content = content.replace(/Cherryblossom/g, 'Cherryworks');
  content = content.replace(/cherryblossom/g, 'cherryworks');
  content = content.replace(/CHERRYBLOSSOM/g, 'CHERRYWORKS');
  
  content = content.replace(/Cherryscaling/g, 'Cherryworks');
  content = content.replace(/cherryscaling/g, 'cherryworks');
  content = content.replace(/CHERRYSCALING/g, 'CHERRYWORKS');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js') || fullPath.endsWith('.json') || fullPath.endsWith('.md')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(srcDir);
console.log('Replacement complete.');
