# 丁旭 / Kevin X. Ding 个人作品展示网站

这是 `kevinxding.com` 的静态个人主页，定位为高信息密度的个人作品展示网站，重点呈现能源工程、AI 自动化、Sui Move/Web3、固态电池创新项目、Bitcoin 长期投资研究与公开荣誉材料。

## 文件结构

- `index.html`：单页网站结构、SEO 元信息、锚点导航
- `style.css`：深色工程感视觉系统与响应式布局
- `script.js`：核心方向、项目、荣誉、时间线的数据渲染与证书预览
- `assets/profile.jpg`：公开头像图片
- `assets/honors/`：公开证书图片与 PDF 材料

## 本地预览

可以直接打开 `index.html`。推荐用本地静态服务器预览：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## Cloudflare Pages 部署

1. 在 Cloudflare Pages 中连接 GitHub 仓库 `kevinxding/dingxu-kevinxding-s-personal-information`。
2. Framework preset 选择 `None`。
3. Build command 留空。
4. Build output directory 填 `/`。
5. 部署成功后，在 Custom domains 中绑定 `kevinxding.com`。

本项目是纯 HTML/CSS/JS 静态站点，不需要 Node.js 构建流程，也不包含密钥、Token 或私密账号信息。
