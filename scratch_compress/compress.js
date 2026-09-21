const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const inputDir = path.join(__dirname, '../public/vids');
const outputDir = path.join(__dirname, '../public/vids-opt');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.mp4'));

async function compressVideo(file) {
  return new Promise((resolve, reject) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    
    console.log(`Compressing ${file}...`);
    
    ffmpeg(inputPath)
      // .size('?x720') // Scale down to 720p if needed
      .videoCodec('libx264')
      .outputOptions([
        '-crf 30', // Constant Rate Factor (higher = more compression, lower quality)
        '-preset veryfast', // Faster encoding
        '-an' // Remove audio since these are background videos
      ])
      .on('end', () => {
        console.log(`Finished ${file}`);
        resolve();
      })
      .on('error', (err) => {
        console.error(`Error processing ${file}:`, err);
        reject(err);
      })
      .save(outputPath);
  });
}

async function main() {
  for (const file of files) {
    try {
      await compressVideo(file);
    } catch (e) {
      console.log('Skipping due to error');
    }
  }
  console.log('All videos compressed!');
}

main();
