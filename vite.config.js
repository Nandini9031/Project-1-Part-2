import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ip from "ip";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
  // Log local and network URLs on startup
  configureServer: (server) => {
    server.httpServer?.once("listening", () => {
      console.log(`\n🚀 App running at:`);
      console.log(`👉 Local:   http://localhost:5173`);
      console.log(`👉 Network: http://${ip.address()}:5173\n`);
    });
  },
});
