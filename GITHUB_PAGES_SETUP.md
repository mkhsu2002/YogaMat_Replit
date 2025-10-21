# GitHub Pages 部署修復指南

## 問題說明

您遇到的 404 錯誤是因為 GitHub Pages 不支援單頁應用（SPA）的客戶端路由。當用戶直接訪問網址時，GitHub Pages 會嘗試尋找對應的 HTML 檔案，但找不到所以返回 404。

## 解決方案

我已經為您完成以下修復：

### 1. ✅ 創建 404.html 處理重定向
- 位置：`public/404.html`
- 功能：當 GitHub Pages 找不到檔案時，會自動載入這個頁面並重定向到首頁

### 2. ✅ 更新 index.html 處理重定向
- 在 `client/index.html` 添加了腳本，可以恢復原始 URL
- 這樣用戶就不會注意到重定向過程

### 3. ✅ 創建自動化構建腳本
- 位置：`scripts/build-gh-pages.js`
- 功能：自動將 index.html 複製為 404.html

### 4. ✅ 創建 GitHub Actions Workflow
- 位置：`.github/workflows/deploy.yml`
- 功能：自動構建和部署到 GitHub Pages

## 部署步驟

### 方式一：使用 GitHub Actions（推薦）

1. **推送程式碼到 GitHub**
   ```bash
   git add .
   git commit -m "修復 GitHub Pages 部署問題"
   git push origin main
   ```

2. **設定 GitHub Pages**
   - 前往您的 repository 設定
   - 點擊左側的 **Pages**
   - 在 **Build and deployment** 區域選擇：
     - Source: **GitHub Actions**
   - 儲存設定

3. **等待自動部署**
   - GitHub Actions 會自動執行
   - 可以在 **Actions** 頁面查看進度
   - 部署完成後，網站會在幾分鐘內上線

### 方式二：本地構建後手動上傳

1. **本地構建**
   ```bash
   npm run build
   node scripts/build-gh-pages.js
   ```

2. **上傳到 gh-pages 分支**
   ```bash
   git checkout -b gh-pages
   git add dist/public -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist/public origin gh-pages
   ```

3. **設定 GitHub Pages**
   - 在 repository 設定中選擇 gh-pages 分支作為來源

## 檔案說明

### `.github/workflows/deploy.yml`
這個 GitHub Actions workflow 會：
1. 檢出程式碼
2. 安裝 Node.js 和依賴
3. 執行構建
4. 運行準備腳本（複製 404.html）
5. 上傳構建檔案
6. 部署到 GitHub Pages

### `scripts/build-gh-pages.js`
這個腳本會：
- 將 `index.html` 複製為 `404.html`
- 檢查必要檔案是否存在（robots.txt, sitemap.xml, .nojekyll）
- 顯示準備狀態

### `public/404.html`
當 GitHub Pages 找不到檔案時：
1. 載入這個 404.html
2. 將當前 URL 存入 sessionStorage
3. 重定向到首頁
4. 首頁的腳本會恢復原始 URL

### `client/index.html` 的修改
添加了一個小腳本：
- 檢查是否有重定向的 URL
- 如果有，使用 history API 恢復 URL
- 用戶不會看到 URL 變化

## 驗證部署

部署完成後：

1. **檢查首頁**
   ```
   https://<username>.github.io/<repo-name>/
   ```

2. **測試直接訪問**
   - 首頁應該正常顯示
   - 所有內容都能載入

3. **檢查網頁源碼**
   - 右鍵 → 檢視網頁原始碼
   - 應該看到完整的 HTML 和 SEO 標籤

## 常見問題排查

### 問題：還是顯示 404
**解決方案：**
- 確認 GitHub Actions 執行成功（查看 Actions 頁面）
- 等待 5-10 分鐘讓變更生效
- 清除瀏覽器快取並重新整理

### 問題：CSS/JS 無法載入
**解決方案：**
- 檢查 repository 名稱
- 如果不是 `<username>.github.io`，需要設定 base path（但目前配置應該可以正常工作）

### 問題：圖片無法顯示
**解決方案：**
- 確認圖片在 `attached_assets/stock_images/` 目錄
- 檢查 vite 別名設定是否正確

## 自訂域名設定（選擇性）

如果您想使用 `yoga.icareu.tw`：

1. **創建 CNAME 檔案**
   在 `public/` 目錄創建 `CNAME` 檔案，內容：
   ```
   yoga.icareu.tw
   ```

2. **設定 DNS**
   在您的域名提供商添加 CNAME 記錄：
   ```
   Type: CNAME
   Name: yoga.icareu.tw
   Value: <username>.github.io
   ```

3. **在 GitHub 設定**
   - 前往 Settings → Pages
   - 在 Custom domain 輸入 `yoga.icareu.tw`
   - 勾選 Enforce HTTPS

## 下一步

1. 推送程式碼到 GitHub
2. 設定 GitHub Pages 使用 GitHub Actions
3. 等待自動部署完成
4. 訪問您的網站！

如有任何問題，請檢查 GitHub Actions 的執行日誌。
