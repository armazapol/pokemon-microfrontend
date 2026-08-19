import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    (federation as any)({
      name: "pokemon_detail_app",
      filename: "pokemonDetailEntry.js",
      exposes: {
        "./PokemonDetail": "./src/components/PokemonDetail"
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
    port: 3002,
    strictPort: true,
    cors: true,
  },
});