const sharp = require('sharp');
const fs = require('fs');

const items = [
  // Kids
  'page12_obj134_452x452.png',
  'page12_obj135_452x452.png',
  'page12_obj136_1152x648.png',
  'page00_obj132_395x593.png',
  // Polo Kids
  'page00_obj124_450x600.png',
  'page11_obj128_683x1024.png',
  'page11_obj129_342x455.png',
  'page11_obj127_360x480.png',
  // Shirts
  'crop_sm_ngan_tay.png',
  'crop_sm_dai_tay.png',
  'crop_sm_set_seamless.png',
  'crop_sm_trang.png',
  'page05_obj70_360x360.png',
  'page05_obj78_750x750.png',
  // Polos
  'page06_obj90_576x768.png',
  'page06_obj89_384x512.png',
  'page06_obj86_576x768.png',
  'page06_obj87_482x512.png',
  'page06_obj88_384x512.png',
  // Accessories
  'page04_obj63_256x224.png',
  'page04_obj64_514x386.png',
  'page04_obj62_256x228.png'
];

async function run() {
  for (const f of items) {
    const p = 'public/images/catalog/' + f;
    if (!fs.existsSync(p)) {
      console.log('MISSING:', f);
      continue;
    }
    const meta = await sharp(p).metadata();
    const tr = await sharp(p).trim().toBuffer({ resolveWithObject: true });
    const w = meta.width;
    const h = meta.height;
    const tw = tr.info.width;
    const th = tr.info.height;
    const left = -tr.info.trimOffsetLeft;
    const top = -tr.info.trimOffsetTop;
    const right = w - (left + tw);
    const bottom = h - (top + th);
    console.log(f.padEnd(28) + ' orig: ' + (w + 'x' + h).padEnd(10) + ' trim: ' + (tw + 'x' + th).padEnd(10) + ' padding(L,T,R,B): ' + left + ', ' + top + ', ' + right + ', ' + bottom);
  }
}
run();
