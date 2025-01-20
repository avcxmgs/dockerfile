import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 base: "/",
 plugins: [react()],
 preview: {
  port: 7775,
  strictPort: true,
 },
 server: {
  port: 7775,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:7775",
 },
});