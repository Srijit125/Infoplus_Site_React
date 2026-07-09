import { defineConfig, type Plugin } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

const path = require("path");

// Replaces Unicode curly quotes (U+201C / U+201D) with ASCII " before Babel
// parses TSX/TS files. Skips occurrences preceded by U+00E2 or U+20AC —
// those are part of garbled UTF-8 sequences in comment/string content and
// must be left intact. Only standalone curly quotes (JSX attribute delimiters,
// module specifier strings, etc.) are replaced.
const normalizeQuotes: Plugin = {
  name: "normalize-quotes",
  enforce: "pre",
  transform(code: string, id: string) {
    if (!/\.(tsx?|jsx?)$/.test(id)) return null;
    let out = "";
    let changed = false;
    for (let i = 0; i < code.length; i++) {
      const cp = code.charCodeAt(i);
      if (cp === 0x201c || cp === 0x201d) {
        const prev = i > 0 ? code.charCodeAt(i - 1) : 0;
        if (prev === 0x00e2 || prev === 0x20ac) {
          out += code[i]; // part of garbled sequence – keep
        } else {
          out += '"';     // standalone curly quote – normalise
          changed = true;
        }
      } else {
        out += code[i];
      }
    }
    return changed ? { code: out, map: null } : null;
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    normalizeQuotes,
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      "X-Frame-Options": "DENY",
      "Content-Security-Policy": "frame-ancestors 'none'",
    },
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
  preview: {
    headers: {
      "X-Frame-Options": "DENY",
      "Content-Security-Policy": "frame-ancestors 'none'",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "./",
});
