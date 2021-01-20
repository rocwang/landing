import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { homedir } from "os";
import { readFileSync, existsSync } from "fs";
import markdown, { Mode } from "vite-plugin-markdown";

export default defineConfig({
  plugins: [vue(), markdown({ mode: [Mode.HTML] })],
  server: {
    open: true,
    https: existsSync(`${homedir()}/.localhost_ssl/server.key`)
      ? {
          key: readFileSync(`${homedir()}/.localhost_ssl/server.key`),
          cert: readFileSync(`${homedir()}/.localhost_ssl/server.crt`),
        }
      : false,
  },
  optimizeDeps: { exclude: ["prettier"] },
});
