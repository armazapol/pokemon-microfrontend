//host - vote.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    (federation as any)({
      name: "shell_app",
      remotes: {
        pokemon_history_app: "http://localhost:3001/assets/pokemonHistoryEntry.js",
        pokemon_detail_app: "http://localhost:3002/assets/pokemonDetailEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    port: 3000,
    strictPort: true,
    cors: true,
  },
});