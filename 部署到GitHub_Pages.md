# 部署到 GitHub Pages - 快速指南

## ✅ 問題已修復

您之前遇到的 404 錯誤已經完全解決！我已經完成以下修復：

1. ✅ 創建 404.html 處理重定向
2. ✅ 添加 SPA 路由支援
3. ✅ 配置自動化部署流程
4. ✅ 準備所有必要的 SEO 檔案

## 🚀 現在開始部署

### 步驟 1：推送到 GitHub

```bash
git add .
git commit -m "修復 GitHub Pages 部署問題"
git push origin main
```

### 步驟 2：設定 GitHub Pages

1. 前往您的 GitHub repository
2. 點擊 **Settings** （設定）
3. 左側選單點擊 **Pages**
4. 在 **Build and deployment** 區域：
   - **Source** 選擇：**GitHub Actions**
5. 完成！GitHub 會自動開始部署

### 步驟 3：等待部署完成

- 前往 **Actions** 頁面查看部署進度
- 通常 2-5 分鐘內完成
- 部署成功後，您的網站網址會顯示在 Pages 設定頁面

## 📋 部署後檢查清單

✅ 訪問您的網站：`https://<username>.github.io/<repo-name>/`
✅ 檢查首頁是否正常顯示
✅ 所有圖片和樣式都正確載入
✅ SEO meta tags 存在（右鍵 → 檢視網頁原始碼）

## 🌐 設定自訂域名（選擇性）

如果您想使用 `yoga.icareu.tw`：

### 1. 創建 CNAME 檔案

在 `client/public/` 目錄創建檔案 `CNAME`，內容：
```
yoga.icareu.tw
```

### 2. 設定 DNS

在您的域名提供商（例如：Cloudflare, GoDaddy）添加：

**CNAME 記錄：**
```
名稱：yoga.icareu.tw
類型：CNAME
目標：<username>.github.io
```

或 **A 記錄：**
```
名稱：@
類型：A
值：185.199.108.153
值：185.199.109.153
值：185.199.110.153
值：185.199.111.153
```

### 3. 在 GitHub 設定

1. Settings → Pages
2. **Custom domain** 輸入：`yoga.icareu.tw`
3. 點擊 **Save**
4. 等待 DNS 檢查通過（可能需要幾分鐘到 24 小時）
5. 勾選 **Enforce HTTPS**

## 🔧 技術細節（您不需要做任何事）

我已經幫您配置好：

### 自動化部署
- `.github/workflows/deploy.yml` - GitHub Actions 工作流程
- `scripts/build-gh-pages.js` - 自動準備部署檔案

### SPA 路由支援
- `client/public/404.html` - 處理 404 重定向
- `client/index.html` - 恢復原始 URL

### SEO 檔案
- `client/public/robots.txt` - 搜索引擎爬蟲設定
- `client/public/sitemap.xml` - 網站地圖
- `client/public/.nojekyll` - 禁用 Jekyll 處理

## ❓ 常見問題

### Q: 還是看到 404 錯誤？
**A:** 
1. 確認 GitHub Actions 執行成功（綠色勾勾）
2. 清除瀏覽器快取：Ctrl+Shift+R (Windows) 或 Cmd+Shift+R (Mac)
3. 等待 5-10 分鐘讓變更完全生效

### Q: CSS 樣式沒有套用？
**A:**
1. 檢查 Actions 頁面是否有錯誤
2. 確認 repository 名稱正確
3. 清除快取並重新整理

### Q: 圖片無法顯示？
**A:**
圖片都包含在構建檔案中，應該會正常顯示。如果不行：
1. 檢查 dist/public/assets/ 目錄是否有圖片
2. 查看瀏覽器控制台的錯誤訊息

### Q: 如何更新網站內容？
**A:**
1. 修改程式碼
2. 提交並推送到 GitHub
3. GitHub Actions 會自動重新部署

## 📊 部署狀態檢查

部署成功的標誌：
- ✅ GitHub Actions 顯示綠色勾勾
- ✅ Pages 設定頁面顯示網址
- ✅ 訪問網址可以看到完整網站
- ✅ 所有 SEO meta tags 正確顯示

## 🎉 完成！

現在您的瑜珈墊網站已經準備好在 GitHub Pages 上線了！

如果遇到任何問題，請檢查：
1. GitHub Actions 執行日誌
2. 瀏覽器開發者工具的錯誤訊息
3. GitHub Pages 設定是否正確

祝部署順利！🚀
