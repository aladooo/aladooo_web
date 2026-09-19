// 作品数据（方案 v0.4 · 第 4/5 节）
// 状态集（与方案一致）：维护中 | 即将上线 | 实验 | 已停
// lab: true 的作品归入首页「实验室 Lab」分区，不入「产品 / 作品」

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
}

export const SITE = {
  name: "AladoooWu",
  tagline: "把想法，做成能用的东西。",
  email: "aladooo.wu@gmail.com",
  github: "https://github.com/aladooo",
  now: "打磨橙墨、筹备外脑（个人知识库），顺手把 AI 塞进日常工作流。",
};

export const products: Product[] = [
  {
    name: "橙墨 orangeink",
    tagline:
      "单文件公众号排版器。Markdown 进，合规富文本出；把公众号排版这件烦事，按下去一个按钮。",
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
    name: "个人知识库（外脑）",
    tagline: "一个我跟 AI 共享的大脑；开口之前，先把「你是谁、要什么」喂给它。",
    status: "即将上线",
    links: [], // 首页仅占位，无订阅入口
    order: 2,
  },
  {
    name: "KDay",
    tagline: "AI 1000 天档案馆，一场持续一千天的记录实验。",
    status: "实验",
    lab: true,
    links: [{ label: "访问", url: "https://kday.world/", external: true }],
    order: 3,
  },
  {
    name: "Pindoo",
    tagline: "实验项目，小想法的快速落地场。",
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
