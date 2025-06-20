import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig(() => ({
  server: {
    host: true, // or '0.0.0.0' for full exposure
    port: 5173, // optional, can specify your own port
  },
  plugins: [react(),tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/my_portfolio/',

}));
