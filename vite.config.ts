import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: "/it-nav/",  // 将此处替换为你的仓库名称或部署子路径
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [vue(), visualizer()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
