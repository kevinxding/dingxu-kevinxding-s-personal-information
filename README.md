# 丁旭个人主页

这是丁旭（Kevin X. Ding）的静态个人主页，用于部署到 Cloudflare Pages，并绑定到 `kevinxding.com`。

## 内容

- `index.html`：页面结构与个人信息
- `style.css`：响应式视觉样式
- `script.js`：荣誉筛选、证书预览与动态年份
- `assets/honors/`：公开荣誉证书与 PDF 材料

## 本地预览

直接用浏览器打开 `index.html` 即可预览。也可以使用任意静态服务器：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## Cloudflare Pages 部署

1. 在 Cloudflare Pages 中连接此 GitHub 仓库。
2. Framework preset 选择 `None`。
3. Build command 留空。
4. Build output directory 填写 `/`。
5. 部署完成后，在 Pages 项目的 Custom domains 中绑定 `kevinxding.com`。

本项目不依赖复杂框架，也不需要 Node.js 构建流程。
