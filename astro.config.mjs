import { defineConfig } from "astro/config";

// 静态输出：astro build -> dist/，Vercel 自动构建（npm run build，输出 dist）
export default defineConfig({
  output: "static",
});
