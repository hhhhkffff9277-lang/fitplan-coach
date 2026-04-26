# FitPlan Coach PWA

这是一个纯 HTML/CSS/JavaScript 的训练计划平板演示应用。项目没有后端、没有框架、没有构建步骤，训练记录继续保存在浏览器 `localStorage` 的 `fitplan-records` 中。

## 本地运行

不要使用 `file://` 打开。PWA 的 Service Worker 需要在 `http://localhost` 或 HTTPS 环境下工作。

在项目目录运行：

```bash
python3 -m http.server 4173
```

然后在电脑浏览器打开：

```text
http://127.0.0.1:4173/
```

## 手机和平板访问

电脑和手机/平板需要连接同一个 Wi-Fi。

先查看电脑局域网 IP：

```bash
ipconfig getifaddr en0
```

假设返回 `192.168.1.20`，在手机或平板浏览器打开：

```text
http://192.168.1.20:4173/
```

如果无法访问，检查 macOS 防火墙是否允许 Python/终端接受局域网连接。

页面已针对移动端和平板端适配：

- 屏幕宽度小于 900px 时启用移动布局。
- 左侧导航会变为底部 Tab。
- 主内容区改为单列显示。
- 阶段计划中的训练详情会移动到训练日列表下方。
- iPhone、iPad 和 Android 设备会自动适配安全区域，避免被底部手势条或刘海遮挡。

## 添加到主屏幕

### iPad Safari

1. 用 Safari 打开局域网访问地址，例如 `http://192.168.1.20:4173/`，不要用 `file://` 打开。
2. 点击分享按钮。
3. 选择“添加到主屏幕”。
4. 确认名称为 FitPlan 后添加。
5. 从主屏幕打开后会以独立应用窗口运行。

### Android Chrome

1. 用 Chrome 打开局域网访问地址。
2. 点击右上角菜单。
3. 选择“添加到主屏幕”或“安装应用”。
4. 确认安装。
5. 如果 Chrome 没有立刻显示安装入口，刷新一次页面，等待 Service Worker 注册完成后再打开菜单。

## 离线缓存内容

PWA 会缓存：

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `service-worker.js`
- `assets/icons/` 图标
- `assets/exercises/` 下的动作图片素材

训练记录仍保存在 `localStorage`，清理浏览器站点数据会删除训练记录。

## 数据保存与备份

当前版本使用双层本地数据策略：

- IndexedDB：作为主要数据层，保存训练记录、用户设置和训练计划自定义数据。
- `localStorage`：继续保留 `fitplan-records`，作为旧版本兼容备份。

首次启动时，如果浏览器里已有旧版 `localStorage.fitplan-records`，应用会自动迁移到 IndexedDB。迁移完成后不会删除原来的 `localStorage` 数据。

### 导出备份

1. 打开“训练记录”。
2. 点击“导出备份”。
3. 浏览器会下载一个 `fitplan-backup-日期.json` 文件。

备份文件包含：

- 用户基础设置
- 训练计划自定义数据
- 训练记录

### 导入备份

1. 打开“训练记录”。
2. 点击“导入备份”。
3. 选择之前导出的 `.json` 文件。
4. 应用会先校验文件格式。
5. 确认覆盖后，会恢复数据并刷新页面 UI。

导入会覆盖当前设备里的训练记录、用户设置和训练计划自定义数据。导入前建议先导出当前数据留档。

### 换设备迁移

1. 在旧设备打开 FitPlan Coach。
2. 进入“训练记录”，点击“导出备份”。
3. 将 JSON 文件发送到新设备。
4. 在新设备用浏览器打开 FitPlan Coach。
5. 进入“训练记录”，点击“导入备份”并选择 JSON 文件。
6. 确认覆盖后完成迁移。

## 清理缓存

### Chrome / Edge

1. 打开开发者工具。
2. 进入 Application。
3. 在 Service Workers 中点击 Unregister。
4. 在 Storage 中点击 Clear site data。
5. 刷新页面。

注意：Clear site data 会同时清理 PWA 缓存、IndexedDB 和 `localStorage`。清理前请先导出 JSON 备份。

### Safari / iPad Safari

1. 进入系统“设置”。
2. 找到 Safari。
3. 进入“高级” > “网站数据”。
4. 搜索当前访问的局域网地址或站点。
5. 删除对应网站数据。

注意：删除网站数据会同时清理 PWA 缓存、IndexedDB 和 `localStorage`。清理前请先导出 JSON 备份。

也可以直接换一个端口重新启动本地服务器，例如：

```bash
python3 -m http.server 4174
```

## 文件结构

```text
index.html
styles.css
app.js
manifest.webmanifest
service-worker.js
assets/
  exercises/
  icons/
```
