// GET /orangeink/version.json
// 橙墨版本检查端点：构建时预渲染，供工具/脚本自动检查更新。
// 返回示例：
// {"name":"orangeink","version":"v1.0.1","released":"2026-09-19","whatsNew":[...],"download":"...","page":"...","changelog":"..."}
import type { APIRoute } from "astro";
import { getOrangeinkVersion } from "../../data/orangeink-version";

export const GET: APIRoute = () => {
  const info = getOrangeinkVersion();
  return new Response(JSON.stringify(info, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
