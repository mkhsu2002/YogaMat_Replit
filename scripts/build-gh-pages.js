#!/usr/bin/env node

import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist', 'public');

console.log('📦 準備 GitHub Pages 部署檔案...');

// 確保 dist/public 目錄存在
if (!existsSync(distDir)) {
  console.error('❌ dist/public 目錄不存在，請先執行 npm run build');
  process.exit(1);
}

// 複製 index.html 到 404.html
const indexPath = join(distDir, 'index.html');
const notFoundPath = join(distDir, '404.html');

if (existsSync(indexPath)) {
  copyFileSync(indexPath, notFoundPath);
  console.log('✅ 已將 index.html 複製到 404.html');
} else {
  console.error('❌ index.html 不存在');
  process.exit(1);
}

// 確認必要檔案存在
const requiredFiles = [
  'robots.txt',
  'sitemap.xml',
  '.nojekyll'
];

for (const file of requiredFiles) {
  const filePath = join(distDir, file);
  if (existsSync(filePath)) {
    console.log(`✅ ${file} 已存在`);
  } else {
    console.warn(`⚠️  ${file} 不存在`);
  }
}

console.log('✨ GitHub Pages 檔案準備完成！');
console.log(`📁 部署目錄: ${distDir}`);
