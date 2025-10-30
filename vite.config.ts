import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "node:fs";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Detect custom domain if a CNAME file is in the repo root
const hasCNAME = fs.existsSync(path.resolve(import.meta.dirname, "CNAME"));
const repoBase = "/bananacam-site/"; // used when served under username.github.io/<repo>/

// Allow override via env (set CUSTOM_DOMAIN=true in Actions if you prefer)
const isCustomDomain = hasCNAME || process.env.CUSTOM_DOMAIN === "true";

export default defineConfig({
  base: isCustomDomain ? "/" : (process.env.GITHUB_PAGES_BASE || repoBase),

  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer()),
          await import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner()),
        ]
      : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  root: path.resolve(import.meta.dirname, "client"),

  build: {
    outDir: path.resolve(
      import.meta.dirname,
      process.env.GITHUB_PAGES ? "docs" : "dist/public"
    ),
    emptyOutDir: true,
  },

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
