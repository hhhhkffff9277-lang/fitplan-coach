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

## 添加到主屏幕

### iPad Safari

1. 用 Safari 打开局域网访问地址，例如 `http://192.168.1.20:4173/`。
2. 点击分享按钮。
3. 选择“添加到主屏幕”。
4. 确认名称为 FitPlan 后添加。

### Android Chrome

1. 用 Chrome 打开局域网访问地址。
2. 点击右上角菜单。
3. 选择“添加到主屏幕”或“安装应用”。
4. 确认安装。

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

## 清理缓存

### Chrome / Edge

1. 打开开发者工具。
2. 进入 Application。
3. 在 Service Workers 中点击 Unregister。
4. 在 Storage 中点击 Clear site data。
5. 刷新页面。

### Safari / iPad Safari

1. 进入系统“设置”。
2. 找到 Safari。
3. 进入“高级” > “网站数据”。
4. 搜索当前访问的局域网地址或站点。
5. 删除对应网站数据。

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
