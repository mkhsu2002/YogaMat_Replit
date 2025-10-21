# 修復 GitHub Pages 空白頁問題

## 問題原因

GitHub Pages 顯示空白頁是因為資源路徑問題。當您的 repository 名稱不是 `<username>.github.io` 時，網站會部署在 `https://<username>.github.io/<repo-name>/`，但 Vite 預設從根路徑載入資源，導致 CSS 和 JS 檔案找不到。

## ✅ 已完成的修復

我已經創建了專門的 GitHub Pages 構建配置：

### 1. 新增 `vite.config.gh-pages.ts`
- 使用相對路徑 `base: './'`
- 適用於任何 repository 名稱
- 確保所有資源正確載入

### 2. 更新 GitHub Actions Workflow
- 使用新的配置文件構建
- 自動處理路徑問題

## 🚀 部署步驟

### 方式一：使用 GitHub Actions（推薦）

1. **推送更新到 GitHub**
   ```bash
   git add .
   git commit -m "修復 GitHub Pages 路徑問題"
   git push origin main
   ```

2. **GitHub Actions 自動部署**
   - 前往 repository 的 **Actions** 頁面
   - 等待 workflow 執行完成
   - 約 2-5 分鐘後網站就會正常顯示

### 方式二：本地構建測試

如果您想先在本地測試：

```bash
# 使用 GitHub Pages 配置構建
vite build --config vite.config.gh-pages.ts

# 運行準備腳本
node scripts/build-gh-pages.js

# 檢查 dist/public 目錄
ls dist/public
```

## 🔍 驗證修復

部署完成後，檢查以下項目：

1. **瀏覽器開發者工具（F12）**
   - Console 標籤：不應該有 404 錯誤
   - Network 標籤：所有資源（CSS、JS、圖片）都應該成功載入（狀態碼 200）

2. **頁面顯示**
   - ✅ 看到完整的瑜珈墊內容
   - ✅ 樣式正確套用（有顏色、排版）
   - ✅ 圖片正常顯示
   - ✅ 按鈕可以點擊

3. **SEO 標籤**
   - 右鍵 → 檢視網頁原始碼
   - 應該看到完整的 meta tags

## 📋 故障排除

### 問題：還是空白頁

**檢查步驟：**

1. **確認部署成功**
   ```
   GitHub → Actions → 最新的 workflow 應該顯示綠色 ✓
   ```

2. **清除快取**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

3. **檢查開發者工具**
   - 按 `F12` 打開開發者工具
   - 查看 Console 標籤的錯誤訊息
   - 查看 Network 標籤，確認資源載入狀態

### 問題：圖片或樣式缺失

**解決方案：**
- 確認 GitHub Actions 構建成功
- 檢查 dist/public/assets/ 目錄是否包含所有檔案
- 清除瀏覽器快取

### 問題：需要設定特定的 base path

如果您的 repository 名稱是固定的，可以在 `vite.config.gh-pages.ts` 修改：

```typescript
// 例如 repository 名稱是 yoga-mat-landing
base: '/yoga-mat-landing/',
```

然後重新推送：
```bash
git add vite.config.gh-pages.ts
git commit -m "更新 base path"
git push origin main
```

## 🔧 技術說明

### 為什麼使用相對路徑？

```typescript
base: './'  // 相對路徑
```

**優點：**
- ✅ 適用於任何 repository 名稱
- ✅ 不需要手動配置
- ✅ 可以在子目錄中運作

### 資源載入方式

**原本（錯誤）：**
```html
<script src="/assets/index-abc123.js"></script>
<!-- 在 GitHub Pages 變成：https://username.github.io/assets/... -->
<!-- 但實際在：https://username.github.io/repo-name/assets/... -->
```

**修復後（正確）：**
```html
<script src="./assets/index-abc123.js"></script>
<!-- 相對於當前頁面，無論在哪裡都能正確載入 -->
```

## ✨ 現在可以做什麼

1. **推送程式碼**
   ```bash
   git add .
   git commit -m "修復 GitHub Pages 空白頁"
   git push origin main
   ```

2. **等待部署**
   - 前往 GitHub Actions 查看進度
   - 約 2-5 分鐘完成

3. **訪問網站**
   ```
   https://<username>.github.io/<repo-name>/
   ```

4. **享受您的瑜珈墊網站！** 🎉

## 📚 相關檔案

- `vite.config.gh-pages.ts` - GitHub Pages 專用構建配置
- `.github/workflows/deploy.yml` - 自動部署流程
- `scripts/build-gh-pages.js` - 構建準備腳本

如有任何問題，請檢查 GitHub Actions 的執行日誌或瀏覽器開發者工具的錯誤訊息。
