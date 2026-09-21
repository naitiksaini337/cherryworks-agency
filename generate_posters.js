const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const vidsDir = path.join(__dirname, 'public', 'vids');
const files = fs.readdirSync(vidsDir).filter(f => f.endsWith('.mp4'));

for (const file of files) {
  const input = path.join(vidsDir, file);
  // Remove .mp4 and add -poster.jpg
  const basename = file.substring(0, file.lastIndexOf('.'));
  const output = path.join(vidsDir, `${basename}-poster.jpg`);
  
  if (!fs.existsSync(output)) {
    console.log(`Generating poster for ${file}...`);
    // Extract first frame (-vframes 1) keeping high quality (-q:v 2)
    execSync(`"${ffmpeg}" -i "${input}" -vframes 1 -q:v 2 "${output}"`);
  }
}
console.log('All posters generated successfully!');
