// 作品数据（方案 v0.4 · 第 4/5 节）
// 状态集（与方案一致）：维护中 | 即将上线 | 实验 | 已停
// lab: true 的作品归入首页「实验室 Lab」分区，不入「在做」

export type Status = "维护中" | "即将上线" | "实验" | "已停";

export interface ProductLink {
  label: string;
  url: string;
  /** 站外链接，新窗口打开 */
  external?: boolean;
  /** 触发浏览器下载（用于站内单文件下载） */
  download?: boolean;
}

export interface Product {
  name: string;
  tagline: string;
  status: Status;
  links: ProductLink[];
  order: number;
  /** 详情页路由（如 /orangeink/），有则卡片主标题可点进详情 */
  detail?: string;
  /** 实验室项目（KDay / Pindoo 等） */
  lab?: boolean;
  /** 首页主推（大卡置顶） */
  featured?: boolean;
  /** 天数计数起始日（YYYY-MM-DD），tagline 中的 {day} 会被替换为动态天数 */
  dayCounter?: string;
}

export const SITE = {
  name: "AladoooWu",
  tagline: "把想法，做成能用的东西。",
  email: "aladooo.wu@gmail.com",
  github: "https://github.com/aladooo",
  now: "橙墨补细节，外脑搭骨架，顺手把 AI 揉进每天的活儿里。",
};

export const products: Product[] = [
  {
    name: "橙墨 orangeink",
    tagline:
      "单文件公众号排版器——Markdown 进，合规富文本出，把公众号排版这件烦事按一下按钮就过去。",
    status: "维护中",
    links: [
      { label: "产品页", url: "/orangeink/" },
      { label: "下载", url: "/orangeink.html", download: true },
      {
        label: "GitHub",
        url: "https://github.com/aladooo/orangeink",
        external: true,
      },
    ],
    order: 1,
    detail: "/orangeink/",
    featured: true,
  },
  {
    name: "外脑（个人知识库）",
    tagline: "一个我和 AI 共用的大脑——开口之前，先让它知道你是谁、要什么。",
    status: "即将上线",
    links: [
      {
        label: "上线时通知我",
        // mailto 预填主题，无需后端订阅
        url: "mailto:aladooo.wu@gmail.com?subject=外脑上线通知",
      },
    ],
    order: 2,
  },
  {
    name: "KDay",
    // {day} 会在前端按 KDAY_START 动态计算填充
    tagline: "一场持续一千天的 AI 记录实验——今天是第 {day} 天。",
    dayCounter: "2026-01-01",
    status: "实验",
    lab: true,
    links: [{ label: "访问", url: "https://kday.world/", external: true }],
    order: 3,
  },
  {
    name: "Pindoo",
    tagline: "上传一张图，自动配好色卡，秒出拼豆图纸和珠子采购清单。",
    status: "实验",
    lab: true,
    links: [
      { label: "访问", url: "https://pindoo.vercel.app/", external: true },
    ],
    order: 4,
  },
];

/** 按展示顺序排列 */
export const orderedProducts = [...products].sort((a, b) => a.order - b.order);

/** 首页「产品 / 作品」：非实验室、未停运 */
export const homeProducts = orderedProducts.filter(
  (p) => !p.lab && p.status !== "已停",
);

/** 首页「实验室 Lab」 */
export const labProducts = orderedProducts.filter(
  (p) => p.lab && p.status !== "已停",
);
