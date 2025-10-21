# 修復 GitHub Pages 空白頁問題 - 完整解決方案

## 問題歷程

### 問題 1: 空白頁面
**原因**: 資源使用絕對路徑 `/assets/...`，在 GitHub Pages 子路徑部署時無法載入

**解決方案**: ✅ 使用相對路徑 `./assets/...`
- 創建 `vite.config.gh-pages.ts` 配置
- 設定 `base: './'`

### 問題 2: 資源載入 404 錯誤
**原因**: `client/public/404.html` 有重定向腳本，攔截了 CSS/JS 請求

**錯誤示例**:
```
Failed to load resource: index-CXQ5zgmu.css1  (檔名被破壞)
Failed to load resource: index-CXQ5zgmu.css1.js1  (完全錯誤)
```

**解決方案**: ✅ 移除重定向腳本
- 刪除 `client/index.html` 中的 sessionStorage 腳本
- 簡化 `client/public/404.html`

### 問題 3: 顯示 "404 File not found"
**原因**: `client/public/404.html` 只有簡單的重定向，內容不完整

**解決方案**: ✅ 刪除源文件，構建後自動創建
- 刪除 `client/public/404.html`（不需要源文件）
- 構建腳本會將 `index.html` 完整複製為 `404.html`

## ✅ 最終解決方案

### 1. 使用相對路徑構建
**檔案**: `vite.config.gh-pages.ts`
```typescript
export default defineConfig({
  base: './',  // 關鍵設定
  // ...
});
```

### 2. 移除干擾腳本
**檔案**: `client/index.html`
- ✅ 已移除 sessionStorage 重定向腳本
- ✅ 保持簡潔的 HTML 結構

### 3. 不使用源文件 404.html
**重要**: `client/public/` 目錄中**不應該**有 `404.html`
- 構建後腳本會自動創建
- 確保內容與 `index.html` 完全相同

### 4. 構建後處理
**檔案**: `scripts/build-gh-pages.js`
- 將 `dist/public/index.html` 複製為 `dist/public/404.html`
- 確保兩個檔案完全相同

## 🚀 部署步驟

### 1. 推送到 GitHub
```bash
git add .
git commit -m "最終修復 GitHub Pages 部署問題"
git push origin main
```

### 2. 等待自動部署
- 前往 GitHub repository → **Actions**
- 等待 workflow 完成（約 2-5 分鐘）
- 看到綠色 ✓

### 3. 清除快取並訪問
**非常重要！**
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

或使用無痕模式。

## 🔍 驗證成功

### 開發者工具檢查（F12）

**Console 標籤：**
- ✅ 沒有紅色錯誤
- ✅ 沒有 404 Not Found
- ✅ 沒有 "Failed to load resource"

**Network 標籤：**
- ✅ `index-*.js` → 200 OK
- ✅ `index-*.css` → 200 OK
- ✅ 所有圖片 → 200 OK

**頁面源碼：**
```html
<!-- 應該看到相對路徑 -->
<script src="./assets/index-B6ME9g3H.js"></script>
<link href="./assets/index-CXQ5zgmu.css">
```

### 頁面顯示
- ✅ 完整的瑜珈墊網站內容
- ✅ 所有樣式和顏色正確
- ✅ 圖片正常載入
- ✅ 按鈕可點擊
- ✅ FAQ 可展開

## 📋 故障排除

### 還是空白？

1. **確認部署成功**
   - GitHub Actions → 綠色 ✓

2. **強制清除所有快取**
   - `Ctrl + Shift + Delete`
   - 選擇「所有時間」
   - 清除「快取的圖片和檔案」

3. **使用無痕模式**
   - `Ctrl + Shift + N` (Windows)
   - `Cmd + Shift + N` (Mac)

4. **檢查錯誤訊息**
   - F12 → Console
   - 截圖給我看

### 看到 404？

1. **確認 GitHub Pages 已啟用**
   - Settings → Pages
   - Source: GitHub Actions

2. **等待傳播完成**
   - 有時需要 5-10 分鐘
   - 喝杯咖啡再回來 ☕

3. **檢查部署日誌**
   - Actions → 最新 workflow
   - 查看是否有錯誤訊息

## 🔧 技術說明

### 為什麼這樣做有效？

#### 1. 相對路徑的優勢
```
絕對路徑: /assets/index.js
→ https://username.github.io/assets/index.js ❌ (錯誤)
→ 應該是: https://username.github.io/repo-name/assets/index.js

相對路徑: ./assets/index.js
→ 相對於當前頁面，無論在哪都正確 ✅
```

#### 2. 為什麼 404.html = index.html？

**傳統網站**:
- `/about` → GitHub Pages 尋找 `about.html`
- 找不到 → 顯示 404 錯誤

**單頁應用 (SPA)**:
- `/about` → GitHub Pages 找不到，返回 404.html
- 404.html = 完整應用 → React 啟動
- Wouter 路由處理 `/about` → 顯示正確頁面 ✅

**好處**:
- ✅ 不干擾資源載入
- ✅ SPA 路由正常工作
- ✅ 用戶看不到重定向
- ✅ SEO 友善（完整 HTML）

#### 3. 為什麼刪除源文件？

**問題場景**:
1. `client/public/404.html` 有內容
2. Vite 構建時複製到 `dist/public/404.html`
3. 腳本嘗試覆蓋，但可能失敗或時機錯誤
4. 結果：錯誤的 404.html 被部署

**解決方案**:
1. `client/public/` 沒有 404.html
2. Vite 構建完成
3. 腳本創建 `dist/public/404.html`（index.html 副本）
4. 結果：正確的 404.html ✅

## 📚 相關檔案

### 構建配置
- `vite.config.gh-pages.ts` - 相對路徑配置
- `.github/workflows/deploy.yml` - 自動部署
- `scripts/build-gh-pages.js` - 後處理腳本

### 注意事項
- ❌ `client/public/404.html` - 不應存在
- ✅ `dist/public/404.html` - 構建後自動創建

## ✨ 現在應該完全正常！

執行以下命令部署：

```bash
git add .
git commit -m "最終修復 GitHub Pages 部署問題"
git push origin main
```

等待 2-5 分鐘，清除快取，享受您的瑜珈墊網站！🎉

---

**如果還有問題，請提供：**
1. 瀏覽器開發者工具 Console 截圖
2. Network 標籤截圖
3. GitHub Actions 執行結果

我會幫您進一步診斷！💪
