const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const CANVAS_W = 800;
const CANVAS_H = 1000;

/**
 * Normalizes an image onto an 800x1000 (4:5) canvas
 * @param {string} inputFile - Path to input file
 * @param {string} outputFile - Path to output file
 * @param {object} options - Sizing and alignment options
 */
async function normalizeProductImage(inputFile, outputFile, options = {}) {
  const {
    targetHeightRatio = 0.88, // % of canvas height the subject should occupy
    targetWidthRatio = 0.90,  // % of canvas width the subject should occupy
    verticalAlign = 'center', // 'center', 'top', or 'bottom'
    topPaddingRatio = 0.06,   // when verticalAlign is 'top'
    bottomPaddingRatio = 0.06 // when verticalAlign is 'bottom'
  } = options;

  if (!fs.existsSync(inputFile)) {
    console.error(`File not found: ${inputFile}`);
    return;
  }

  // 1. Trim transparent borders to get exact subject
  const trimmedBuffer = await sharp(inputFile)
    .trim()
    .toBuffer({ resolveWithObject: true });

  const subjectW = trimmedBuffer.info.width;
  const subjectH = trimmedBuffer.info.height;

  // 2. Compute scale factor
  const maxAllowedH = CANVAS_H * targetHeightRatio;
  const maxAllowedW = CANVAS_W * targetWidthRatio;

  const scaleH = maxAllowedH / subjectH;
  const scaleW = maxAllowedW / subjectW;
  const scale = Math.min(scaleH, scaleW);

  const scaledW = Math.round(subjectW * scale);
  const scaledH = Math.round(subjectH * scale);

  // Resize the trimmed subject
  const resizedSubject = await sharp(trimmedBuffer.data)
    .resize(scaledW, scaledH, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();

  // 3. Compute coordinates on CANVAS
  const left = Math.round((CANVAS_W - scaledW) / 2);
  let top = Math.round((CANVAS_H - scaledH) / 2);

  if (verticalAlign === 'top') {
    top = Math.round(CANVAS_H * topPaddingRatio);
  } else if (verticalAlign === 'bottom') {
    top = Math.round(CANVAS_H - scaledH - (CANVAS_H * bottomPaddingRatio));
  }

  // 4. Composite onto transparent 800x1000 canvas
  await sharp({
    create: {
      width: CANVAS_W,
      height: CANVAS_H,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([
      {
        input: resizedSubject,
        left: Math.max(0, left),
        top: Math.max(0, top)
      }
    ])
    .png()
    .toFile(outputFile);

  console.log(`✓ Processed ${path.basename(inputFile)} -> ${path.basename(outputFile)} (${scaledW}x${scaledH} on ${CANVAS_W}x${CANVAS_H})`);
}

async function run() {
  const dir = 'public/images/catalog';

  console.log('--- Processing Category 3: HDC Kids ---');
  // 1. Set Sơ Mi Gile Vest Cúc Vàng
  await normalizeProductImage(
    `${dir}/page12_obj134_452x452.png`,
    `${dir}/crop_kids_gile_cuc_vang.png`,
    { targetHeightRatio: 0.88, verticalAlign: 'center' }
  );

  // 2. Set Gile Ghi Xám Cà Vạt Tím
  await normalizeProductImage(
    `${dir}/page12_obj135_452x452.png`,
    `${dir}/crop_kids_gile_xam.png`,
    { targetHeightRatio: 0.88, targetWidthRatio: 0.92, verticalAlign: 'center' }
  );

  // 3. Set Váy Yếm Xanh Rêu (CRITICAL FIX - was 1152x648 tiny)
  await normalizeProductImage(
    `${dir}/page12_obj136_1152x648.png`,
    `${dir}/crop_kids_yem_xanh_reu.png`,
    { targetHeightRatio: 0.90, targetWidthRatio: 0.88, verticalAlign: 'center' }
  );

  // 4. Set Polo + Quần/Váy Kaki Be (CRITICAL FIX - was offset by 107px top space)
  await normalizeProductImage(
    `${dir}/page00_obj132_395x593.png`,
    `${dir}/crop_kids_polo_kaki_be.png`,
    { targetHeightRatio: 0.88, targetWidthRatio: 0.88, verticalAlign: 'top', topPaddingRatio: 0.06 }
  );

  console.log('\n--- Processing Category 3 Extra: Polo Kids ---');
  await normalizeProductImage(
    `${dir}/page00_obj124_450x600.png`,
    `${dir}/crop_polo_kids_trang.png`,
    { targetHeightRatio: 0.88, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/page11_obj128_683x1024.png`,
    `${dir}/crop_polo_kids_navy.png`,
    { targetHeightRatio: 0.88, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/page11_obj129_342x455.png`,
    `${dir}/crop_polo_kids_do.png`,
    { targetHeightRatio: 0.88, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/page11_obj127_360x480.png`,
    `${dir}/crop_polo_kids_vang.png`,
    { targetHeightRatio: 0.88, verticalAlign: 'center' }
  );

  console.log('\n--- Processing Category 1: Sơ mi & Vest ---');
  await normalizeProductImage(
    `${dir}/crop_sm_ngan_tay.png`,
    `${dir}/norm_sm_ngan_tay.png`,
    { targetHeightRatio: 0.85, targetWidthRatio: 0.88, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/crop_sm_dai_tay.png`,
    `${dir}/norm_sm_dai_tay.png`,
    { targetHeightRatio: 0.88, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/crop_sm_set_seamless.png`,
    `${dir}/norm_sm_set_seamless.png`,
    { targetHeightRatio: 0.85, targetWidthRatio: 0.88, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/crop_sm_trang.png`,
    `${dir}/norm_sm_trang.png`,
    { targetHeightRatio: 0.85, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/page05_obj70_360x360.png`,
    `${dir}/norm_sm_hoa_tiet.png`,
    { targetHeightRatio: 0.85, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/page05_obj78_750x750.png`,
    `${dir}/norm_vest_doanh_nhan.png`,
    { targetHeightRatio: 0.88, targetWidthRatio: 0.90, verticalAlign: 'center' }
  );

  console.log('\n--- Processing Category 2: Polo Anti-UV ---');
  await normalizeProductImage(
    `${dir}/page06_obj90_576x768.png`,
    `${dir}/norm_polo_do_do.png`,
    { targetHeightRatio: 0.85, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/page06_obj89_384x512.png`,
    `${dir}/norm_polo_navy.png`,
    { targetHeightRatio: 0.85, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/page06_obj86_576x768.png`,
    `${dir}/norm_polo_trang_3_soc.png`,
    { targetHeightRatio: 0.85, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/page06_obj87_482x512.png`,
    `${dir}/norm_polo_xanh_bien.png`,
    { targetHeightRatio: 0.85, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/page06_obj88_384x512.png`,
    `${dir}/norm_polo_den.png`,
    { targetHeightRatio: 0.85, verticalAlign: 'center' }
  );

  console.log('\n--- Processing Category 4: Phụ Kiện ---');
  await normalizeProductImage(
    `${dir}/page04_obj63_256x224.png`,
    `${dir}/norm_ca_vat.png`,
    { targetHeightRatio: 0.82, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/page04_obj64_514x386.png`,
    `${dir}/norm_vi_da.png`,
    { targetHeightRatio: 0.75, targetWidthRatio: 0.88, verticalAlign: 'center' }
  );
  await normalizeProductImage(
    `${dir}/page04_obj62_256x228.png`,
    `${dir}/norm_that_lung_da.png`,
    { targetHeightRatio: 0.75, targetWidthRatio: 0.88, verticalAlign: 'center' }
  );

  console.log('\nAll products normalized successfully!');
}

run().catch(console.error);
