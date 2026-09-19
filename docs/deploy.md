# 部署说明 · aladooo.com

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 产出 dist/
npm run preview  # 本地预览 dist/
```

## Vercel 部署（首次）

1. 在 GitHub 建仓库并推送本项目（主分支）。
2. Vercel → Add New Project → 导入该仓库。
3. 构建设置：Framework Preset 选 Astro（自动识别）；Build Command `npm run build`；Output Directory `dist`。
4. 部署成功后：Project → Settings → Domains → 添加 `aladooo.com`（按提示在域名 DNS 加 CNAME/A 记录）。
5. 此后 `git push` → 自动构建上线。

## 上线前检查清单

`src/data/products.ts` 的 `SITE` 常量已填入：

| 字段 | 值 |
| --- | --- |
| `SITE.github` | https://github.com/aladooo |
| 橙墨仓库 | https://github.com/aladooo/orangeink |
| 本站仓库 | https://github.com/aladooo/aladooo_web.git |
| 分享图 | `public/og.png`（1200x630，改内容后跑 `scripts/make_og.py` 重新生成） |

橙墨产品页（`src/pages/orangeink.astro`）：

- 「界面截图」用 `example/orangeink-html-preview.png`（首图，即时加载）。
- 「排版成品示例」用 `example/demo-preview-*.jpg`（含「中登行走中」文章品牌，已确认可保留；如需更换替换 `public/orangeink-shot-*.jpg`）。

## 目录速览

```
src/pages/          index / orangeink / about
src/components/     Card.astro
src/layouts/        Base.astro
src/data/products.ts  作品数据 + 站点常量（SITE）
public/             favicon.svg、orangeink.html（橙墨单文件下载）
docs/               本文档、方案 plan-v0.4.md
```
