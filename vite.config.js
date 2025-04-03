import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Allow access from all IPs
    port: 5173,       // Ensure correct port
    strictPort: true, // Ensures Vite doesn't switch ports
    allowedHosts: ["casiḅom820.com", "www.casiḅom820.com"], // Add allowed domains
    cors: {
      origin: ["http://casiḅom820.com", "http://www.casiḅom820.com"], // Allow frontend domain
      credentials: true, // Allow cookies & authentication headers
    },
  },
});
