const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Regex to find video tags and add attributes if they don't exist
  // We look for <video ... playsInline ... />
  const videoRegex = /<video([\s\S]*?)playsInline([\s\S]*?)>/g;
  
  content = content.replace(videoRegex, (match, p1, p2) => {
    let newMatch = match;
    if (!newMatch.includes('preload="auto"')) {
      newMatch = newMatch.replace('playsInline', 'playsInline\n          preload="auto"');
      changed = true;
    }
    // Note: React 18+ typings don't officially support fetchPriority on <video> in standard HTML DOM sometimes, so let's stick to preload="auto" to be safe. But wait, we can add a style to hide until loaded, or just add a comment.
    return newMatch;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
  }
});
