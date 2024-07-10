import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "@assets", replacement: resolve(__dirname, "src/assets") },
      { find: "@axios", replacement: resolve(__dirname, "src/axios") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@layout", replacement: resolve(__dirname, "src/layout") },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      { find: "@recoil", replacement: resolve(__dirname, "src/recoil") },
    ],
  },
});
