# GitHub Pages 部署指南

這個專案已經完整配置好，可以直接部署到 GitHub Pages。

## ✅ 404 問題已修復

專案已包含完整的 SPA (單頁應用) 支援，解決了 GitHub Pages 的 404 錯誤問題。

## 部署步驟

### 1. 推送到 GitHub

```bash
git init
git add .
git commit -m "Initial commit: Yoga mat landing page"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. 配置 GitHub Pages

1. 前往你的 GitHub repository
2. 點擊 **Settings**
3. 在左側選單找到 **Pages**
4. 在 **Build and deployment** 區域：
   - Source: 選擇 **GitHub Actions**
5. Workflow 文件已經在 `.github/workflows/deploy.yml`

### 3. 自動部署

GitHub Actions workflow 已經包含在專案中（`.github/workflows/deploy.yml`），會自動：
1. 構建專案
2. 運行 `scripts/build-gh-pages.js` 準備部署文件
3. 將 index.html 複製為 404.html
4. 部署到 GitHub Pages

### 4. 自訂域名（選擇性）

如果你想使用自訂域名 `yoga.icareu.tw`：

1. 在 GitHub Pages 設定中，在 **Custom domain** 欄位輸入 `yoga.icareu.tw`
2. 在你的 DNS 提供商添加以下記錄：

```
Type: CNAME
Name: yoga.icareu.tw
Value: <your-github-username>.github.io
```

或使用 A 記錄指向 GitHub Pages IP：

```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

3. 創建 `public/CNAME` 文件，內容為：

```
yoga.icareu.tw
```

## Vite 配置說明

如果你的 repository 名稱不是 `<username>.github.io`，你需要在 `vite.config.ts` 添加 base 路徑：

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... 其他配置
});
```

## SEO 優化已配置

本專案已包含完整的 SEO 優化：

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML5
- ✅ 語言標記 (zh-TW)
- ✅ Canonical URLs

## 檢查清單

部署前請確認：

- [ ] 所有圖片已優化
- [ ] Meta tags 資訊正確
- [ ] 所有外部連結正確
- [ ] Sitemap.xml 日期更新
- [ ] 測試響應式設計
- [ ] 測試所有 CTA 按鈕
- [ ] 確認 Google Search Console 設定（部署後）
- [ ] 提交 sitemap 到 Google Search Console

## 性能優化建議

1. 使用 WebP 格式圖片
2. 啟用 HTTPS (GitHub Pages 自動提供)
3. 添加 Google Analytics（如需要）
4. 監控 Core Web Vitals
5. 定期更新內容保持 SEO 排名

## 問題排查

### 頁面顯示 404

- 確認 GitHub Actions workflow 成功執行
- 檢查 GitHub Pages 設定是否正確
- 確認 base path 配置

### CSS/JS 無法載入

- 檢查 vite.config.ts 中的 base 路徑
- 確認 build 產出在 dist 目錄

### 自訂域名無法訪問

- 檢查 DNS 設定是否正確
- 等待 DNS 傳播（最多 48 小時）
- 確認 CNAME 文件存在於 public 目錄
