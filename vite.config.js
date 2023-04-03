import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  define: {
    BASE_URL: JSON.stringify(process.env.BASE_URL),
    API_KEY: JSON.stringify(process.env.API_KEY),
  },
});
