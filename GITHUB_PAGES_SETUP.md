# GitHub Pages 部署指南

## ✅ 已修復的問題

### 問題 1: 空白頁面
**原因**: 資源使用絕對路徑，在子路徑部署時無法載入

**解決方案**: 
- 創建 `vite.config.gh-pages.ts` 使用相對路徑 (`base: './'`)
- 更新 GitHub Actions 使用新配置構建

### 問題 2: 資源載入 404 錯誤
**原因**: 舊的 404.html 使用 sessionStorage 重定向，干擾了 CSS/JS 檔案的載入

**解決方案**:
- 移除 `client/index.html` 中的 SPA 重定向腳本
- 簡化 `client/public/404.html`（構建時會自動複製 index.html）

## 🚀 部署步驟

### 1. 推送程式碼到 GitHub

```bash
git add .
git commit -m "修復 GitHub Pages 資源載入問題"
git push origin main
```

### 2. 等待 GitHub Actions 部署

1. 前往 `https://github.com/<username>/<repo-name>/actions`
2. 等待 workflow 完成（約 2-5 分鐘）
3. 看到綠色 ✓ 表示成功

### 3. 訪問網站並清除快取

**重要！必須清除瀏覽器快取：**

- **Windows/Linux**: `Ctrl + Shift + R`
- **Mac**: `Cmd + Shift + R`

或使用無痕模式訪問。

## 🔍 驗證部署成功

### 1. 檢查開發者工具（F12）

**Console 標籤應該：**
- ✅ 沒有紅色錯誤訊息
- ✅ 沒有 "Failed to load resource" 錯誤
- ✅ 沒有 404 錯誤

**Network 標籤應該：**
- ✅ `index-*.js` - 狀態碼 200
- ✅ `index-*.css` - 狀態碼 200
- ✅ 圖片檔案 - 狀態碼 200

### 2. 檢查頁面顯示

- ✅ 看到完整的瑜珈墊網站內容
- ✅ 所有樣式和顏色正確顯示
- ✅ 圖片正常載入
- ✅ 按鈕可以點擊
- ✅ FAQ 可以展開/收合

### 3. 檢查資源路徑

右鍵 → 檢視網頁原始碼，應該看到：

```html
<script type="module" crossorigin src="./assets/index-*.js"></script>
<link rel="stylesheet" crossorigin href="./assets/index-*.css">
```

注意開頭是 `./` （相對路徑），不是 `/`（絕對路徑）。

## 📋 故障排除

### 問題：還是顯示空白頁

**解決步驟：**

1. **確認 GitHub Actions 成功**
   - 前往 Actions 標籤
   - 最新的 workflow 應該顯示綠色 ✓

2. **強制清除快取**
   - 按 `Ctrl + Shift + Delete` (Windows/Linux)
   - 按 `Cmd + Shift + Delete` (Mac)
   - 選擇「快取的圖片和檔案」
   - 點擊「清除資料」

3. **使用無痕模式測試**
   - Windows/Linux: `Ctrl + Shift + N`
   - Mac: `Cmd + Shift + N`
   - 訪問您的 GitHub Pages 網址

4. **檢查開發者工具**
   - 按 `F12` 打開開發者工具
   - 查看 Console 標籤的錯誤訊息
   - 查看 Network 標籤，確認所有資源狀態碼都是 200

### 問題：看到 404 錯誤

**可能原因：**

1. **GitHub Pages 尚未啟用**
   - 前往 repository Settings
   - 點擊 Pages
   - 確認 Source 設定為 "GitHub Actions"

2. **workflow 檔案錯誤**
   - 檢查 `.github/workflows/deploy.yml` 是否存在
   - 確認 Actions 權限已啟用

3. **等待時間不足**
   - GitHub Pages 部署可能需要額外 1-2 分鐘
   - 稍等片刻後重試

### 問題：樣式或圖片缺失

**檢查項目：**

1. **確認資源檔案存在**
   ```bash
   # 本地檢查
   ls dist/public/assets/
   ```

2. **檢查 Network 標籤**
   - 按 `F12` → Network 標籤
   - 重新整理頁面
   - 查看哪些資源載入失敗（紅色）
   - 點擊失敗的資源查看詳細錯誤

3. **清除快取並重試**

## 🔧 技術細節

### 構建配置

**vite.config.gh-pages.ts:**
```typescript
export default defineConfig({
  base: './',  // 使用相對路徑
  // ...
});
```

這確保所有資源使用相對路徑，適用於任何 repository 名稱。

### GitHub Actions Workflow

構建命令：
```bash
vite build --config vite.config.gh-pages.ts
```

後處理：
```bash
node scripts/build-gh-pages.js
```

這個腳本會：
1. 將 `index.html` 複製為 `404.html`
2. 創建 `robots.txt` 和 `sitemap.xml`
3. 創建 `.nojekyll` 檔案

### 為什麼複製 index.html 為 404.html？

對於單頁應用（SPA），當用戶訪問 `/some-path` 時：

1. GitHub Pages 找不到該路徑，返回 404.html
2. 404.html 實際上是完整的應用
3. React 應用啟動
4. Wouter 路由處理該路徑
5. 如果路徑無效，顯示 NotFound 頁面

這種方法：
- ✅ 不干擾資源載入
- ✅ SPA 路由正常工作
- ✅ 簡單且可靠

## 📚 相關檔案

- `vite.config.gh-pages.ts` - GitHub Pages 構建配置
- `.github/workflows/deploy.yml` - 自動部署 workflow
- `scripts/build-gh-pages.js` - 構建後處理腳本
- `client/public/404.html` - SPA 404 處理（源文件）

## ✨ 現在可以部署了！

執行以下命令：

```bash
git add .
git commit -m "修復 GitHub Pages 資源載入問題"
git push origin main
```

然後等待 2-5 分鐘，清除瀏覽器快取後訪問您的網站！🎉
