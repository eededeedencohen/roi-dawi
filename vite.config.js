import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // <-- הוסף את השורה הזו

export default defineConfig({
  plugins: [
    react(),
    svgr(), // <-- הוסף את הקריאה לפונקציה הזו
  ],
});
