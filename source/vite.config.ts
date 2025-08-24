import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "@images": path.resolve(__dirname, "public/images"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  base: '/',
  server: {
    port: 5173,
    open: true,
  },
})

