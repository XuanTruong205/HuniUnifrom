import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('src/data/huni-master-data.ts', 'utf8');
const regex = /['"]\/images\/([^'"]+)['"]/g;
let match;
let mismatches = [];
let checked = 0;

while ((match = regex.exec(content)) !== null) {
  checked++;
  const relPath = match[1];
  const parts = relPath.split('/');
  let currentDir = 'public/images';
  for (let part of parts) {
    const files = fs.readdirSync(currentDir);
    if (!files.includes(part)) {
      mismatches.push({ requested: part, inDir: currentDir, fullRequested: relPath, actualCandidates: files.filter(f => f.toLowerCase() === part.toLowerCase()) });
      break;
    }
    currentDir = path.join(currentDir, part);
  }
}

console.log('Total checked:', checked);
console.log('Case mismatches count:', mismatches.length);
if (mismatches.length > 0) {
  console.log('Mismatches:', JSON.stringify(mismatches, null, 2));
}
