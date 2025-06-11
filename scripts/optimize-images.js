import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');
const srcDir = path.join(__dirname, '../src');

// Supported image formats
const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];

// Scan directory recursively for images
async function scanDirectory(dir) {
  let imageFiles = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      imageFiles = [...imageFiles, ...(await scanDirectory(itemPath))];
    } else {
      const ext = path.extname(item).toLowerCase();
      if (imageExtensions.includes(ext)) {
        imageFiles.push(itemPath);
      }
    }
  }
  
  return imageFiles;
}

// Process images using sharp
async function optimizeImages(imagePaths) {
  console.log(`Found ${imagePaths.length} images to optimize`);
  
  for (const imagePath of imagePaths) {
    const ext = path.extname(imagePath).toLowerCase();
    const dir = path.dirname(imagePath);
    const basename = path.basename(imagePath, ext);
    const webpOutputPath = path.join(dir, `${basename}.webp`);
    
    // Skip if already a WebP and avoid duplicates
    if (ext === '.webp' || fs.existsSync(webpOutputPath)) {
      continue;
    }
    
    try {
      // Optimize original format
      await sharp(imagePath)
        .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
        .toBuffer()
        .then(data => fs.writeFileSync(imagePath, data));
      
      // Convert to WebP (better compression, modern format)
      await sharp(imagePath)
        .webp({ quality: 80 })
        .toFile(webpOutputPath);
      
      console.log(`✅ Optimized: ${path.relative(process.cwd(), imagePath)}`);
      console.log(`✅ Created WebP: ${path.relative(process.cwd(), webpOutputPath)}`);
    } catch (err) {
      console.error(`❌ Error processing ${imagePath}:`, err.message);
    }
  }
}

// Main process
(async () => {
  try {
    // Find all images in public and src directories
    const publicImages = await scanDirectory(publicDir);
    const srcImages = await scanDirectory(srcDir);
    const allImages = [...publicImages, ...srcImages];
    
    if (allImages.length === 0) {
      console.log('No images found to optimize');
      return;
    }
    
    await optimizeImages(allImages);
    console.log('Image optimization complete!');
  } catch (err) {
    console.error('Error during image optimization:', err);
    process.exit(1);
  }
})(); 