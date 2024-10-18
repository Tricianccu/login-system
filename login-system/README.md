# login-system

簡單的登入系統，使用 Flask 作為後端框架和 Vue.js 作為前端框架。
該系統允許用戶使用預設的帳號和密碼登入。

## 技術棧

- **前端**: Vue.js, Quasar Framework
- **後端**: Flask
- **資料庫**: SQLite

## 功能

- 使用者登入
- 錯誤處理：無效憑證
- CORS 支援

## 安裝指南

### 1.  Clone a repository

```bash
git clone <https://github.com/Tricianccu/login-system.git>
cd login-system-demo
```

### 2. 安裝後端依賴

在 backend 目錄下，創建虛擬環境並安裝所需的庫：

```bash
cd backend
python -m venv venv
source venv/bin/activate  # 在 macOS/Linux 上
venv\Scripts\activate  # 在 Windows 上
pip install -r requirements.txt
cd login-system-demo
```

### 3. 初始化資料庫

運行 app.py 來初始化資料庫並創建用戶資料表：

```bash
python app.py
```

### 4. 安裝前端依賴

在 frontend 目錄下，安裝所需的 npm 套件：

```bash
cd ../frontend
npm install
```

### 5. 啟動前端應用

在 frontend 目錄下啟動開發伺服器：

```bash
quasar dev
```

### 6. 啟動後端應用

如果後端應用尚未啟動，請在 backend 目錄下運行：

```bash
python app.py
```

## 使用說明

1. 打開瀏覽器，訪問 http://localhost:9000/login。

2. 使用以下帳號和密碼進行登入：
- 用戶名: admin
- 密碼: admin123

或者

- 用戶名: user
- 密碼: user123

## 錯誤處理

- 若登入失敗，將會顯示 "Invalid credentials!" 提示。
- 若遇到 CORS 問題，請檢查後端的 CORS 設置。

## 貢獻
如果你有任何建議或改進，歡迎提交 Pull Request 或開啟 Issue。

## 授權
此專案使用 MIT License 授權。

### 說明

- 這個 `README.md` 包含了專案的簡介、技術棧、安裝指南、使用說明以及貢獻和授權資訊。
- 根據你的實際情況，你可以對內容進行調整或擴展。

如果你需要更改或添加任何內容，隨時告訴我！




