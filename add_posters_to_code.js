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

  // We look for <video src="/vids/1.mp4" ... >
  // Or src={activeContent.videoSrc} in HeroVideoSequence
  
  // First handle hardcoded src="...mp4"
  const hardcodedRegex = /<video([^>]*)src=["'](\/vids\/([0-9]+)\.mp4)["']([^>]*)>/g;
  content = content.replace(hardcodedRegex, (match, p1, p2, p3, p4) => {
    let newMatch = match;
    if (!newMatch.includes('poster=')) {
      newMatch = newMatch.replace('preload="auto"', `preload="auto"\n          poster="/vids/${p3}-poster.jpg"`);
      // Just in case it doesn't have preload (though we just added it)
      if (newMatch === match) {
         newMatch = newMatch.replace('playsInline', `playsInline\n          poster="/vids/${p3}-poster.jpg"`);
      }
      changed = true;
    }
    return newMatch;
  });

  if (file.includes('HeroVideoSequence.tsx')) {
    // Handling dynamic src in HeroVideoSequence
    const dynamicRegex = /<video([^>]*)src=\{seq\.videoUrl\}([^>]*)>/g;
    content = content.replace(dynamicRegex, (match, p1, p2) => {
      let newMatch = match;
      if (!newMatch.includes('poster=')) {
        newMatch = newMatch.replace('preload="auto"', `preload="auto"\n          poster={seq.videoUrl.replace('.mp4', '-poster.jpg')}`);
        changed = true;
      }
      return newMatch;
    });
  }
  
  if (file.includes('HoverVideo.tsx')) {
      const dynamicRegex = /<video([^>]*)src=\{videoSrc\}([^>]*)>/g;
      content = content.replace(dynamicRegex, (match, p1, p2) => {
        let newMatch = match;
        if (!newMatch.includes('poster=')) {
          newMatch = newMatch.replace('playsInline', `playsInline\n        poster={videoSrc.replace('.mp4', '-poster.jpg')}`);
          changed = true;
        }
        return newMatch;
      });
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated posters for:', file);
  }
});
