import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../src/assets');

const filesToConvert = [
    { name: 'Screen2_Main.PNG', quality: 75 },
    { name: 'hero-bg.jpg', quality: 75 },
    { name: 'Christe.png', quality: 80 },
    { name: '3D.png', quality: 80 },
    { name: 'Galalite.png', quality: 80 },
    { name: '4K.png', quality: 80 },
    { name: 'Logo_main.png', quality: 80 },
    { name: 'Dolby.png', quality: 80 },
    { name: 'Qube.png', quality: 80 },
    { name: 'Barco.png', quality: 80 },
    { name: 'Screen2.png', quality: 80 },
    { name: 'Mobile_HEROGB.jpg', quality: 90 }
];

async function optimizeImages() {
    console.log('Starting image optimization...');

    for (const file of filesToConvert) {
        const inputPath = path.join(ASSETS_DIR, file.name);
        const outputPath = path.join(ASSETS_DIR, `${path.parse(file.name).name}.webp`);

        if (!fs.existsSync(inputPath)) {
            console.warn(`Warning: ${file.name} not found, skipping.`);
            continue;
        }

        try {
            const info = await sharp(inputPath)
                .webp({ quality: file.quality })
                .toFile(outputPath);

            const originalStats = fs.statSync(inputPath);
            const savings = ((originalStats.size - info.size) / originalStats.size * 100).toFixed(2);

            console.log(`✅ Converted ${file.name}`);
            console.log(`   Original: ${(originalStats.size / 1024).toFixed(2)} KB`);
            console.log(`   WebP: ${(info.size / 1024).toFixed(2)} KB`);
            console.log(`   Savings: ${savings}%`);
            console.log('-------------------');
        } catch (error) {
            console.error(`❌ Error converting ${file.name}:`, error);
        }
    }

    console.log('Optimization complete!');
}

optimizeImages();
