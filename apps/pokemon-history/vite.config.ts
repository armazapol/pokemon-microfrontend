import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    (federation as any)({
      name: "pokemon_history_app",
      filename: "pokemonHistoryEntry.js",
      exposes: {
         "./PokemonHistory": "./src/features/history/components/PokemonHistory.tsx"
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
    port: 3001,
    strictPort: true,
    cors: true,
  },
});