import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {},
  optimizeDeps: {
    include: ["swiper"], // Ép Vite tối ưu Swiper
  },
});
