import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/react-auth-otp/", // 👈 Must match your repo name exactly
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "index.html"), // 👈 Fix refresh 404s on GitHub Pages
      },
    },
  },
});
