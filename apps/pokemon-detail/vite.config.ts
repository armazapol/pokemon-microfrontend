import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    (federation as any)({
      name: "pokemon_detail_app",
      filename: "pokemonDetailEntry.js",
      exposes: {
        "./PokemonDetail": "./src/remote/PokemonDetailRemote.tsx"
      },
      shared: ["react", "react-dom", "@tanstack/react-query"],
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