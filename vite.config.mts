import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // TODO add when GH pages are set
  // base: "/X/",
  plugins: [react()]
});
