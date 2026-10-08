// ============================================================
// 橙墨版本数据源
// 版本号在【构建时】从 public/orangeink.html 内提取（f-ver 字段），
// 单一数据源：更新工具文件 → 重新构建 → version.json / version 页自动跟上。
// 发布日期与更新要点为手工维护表（新版本发布时在此补一行即可）。
// ============================================================
import fs from "node:fs";
import path from "node:path";

const RELEASE_DATES: Record<string, string> = {
  "v1.2.3": "2026-10-09",
  "v1.2.2": "2026-10-09",
  "v1.2.1": "2026-10-08",
  "v1.2.0": "2026-09-30",
  "v1.1.0": "2026-09-27",
  "v1.0.1": "2026-09-19",
  "v1.0.0": "2026-09-16",
};

const WHATS_NEW: Record<string, string[]> = {
  "v1.2.3": [
    "Agent Skill 安装即用：jsdom 依赖随包声明，对拍护栏支持独立安装环境",
    "skill 包 vendor 换未压缩发行版，通过安全审计",
  ],
  "v1.2.2": [
    "修复长 URL 链接在窄容器内横向溢出：链接文字为完整 URL 时自动断行（普通文字链接不受影响）",
  ],
  "v1.2.1": [
    "修复自动链接把紧贴 URL 的全角标点与中文吸进链接导致的坏链",
    "自检器新增「代码内含链接」检测；CLI 自检补齐「加粗/斜体未生效」规则",
  ],
  "v1.2.0": [
    "内置 Agent Skill（oimd）：AI 助手接上即可把 Markdown 一键排版成可直接发布公众号的内容（合规 HTML / 一键复制页 / 草稿箱 API 请求体）",
    "一键复制页自带二次微调栏（主题 / 字号 / 边距 / 深色 / 手机预览）",
  ],
  "v1.1.0": [
    "版本检查与升级提示：联网发现新版时页脚亮橙徽标，点击直达下载页",
    "修复列表项加粗开头 → 后续文字被微信强制换行",
  ],
  "v1.0.1": ["自检器新增「加粗 / 斜体未生效」检测"],
  "v1.0.0": ["首个公开发布版本"],
};

export interface OrangeinkVersionInfo {
  name: "orangeink";
  version: string;
  released: string | null;
  whatsNew: string[];
  download: string;
  page: string;
  changelog: string;
}

export function getOrangeinkVersion(): OrangeinkVersionInfo {
  let version = "unknown";
  try {
    const html = fs.readFileSync(
      path.resolve(process.cwd(), "public/orangeink.html"),
      "utf-8",
    );
    const m = html.match(/f-ver">([^<]+)</);
    if (m) version = m[1];
  } catch {
    // 工具文件缺失时保持 unknown，不阻塞构建
  }
  return {
    name: "orangeink",
    version,
    released: RELEASE_DATES[version] ?? null,
    whatsNew: WHATS_NEW[version] ?? [],
    download: "https://www.aladooo.com/orangeink.html",
    page: "https://www.aladooo.com/orangeink/",
    changelog:
      "https://github.com/aladooo/orangeink/blob/main/CHANGELOG.md",
  };
}
