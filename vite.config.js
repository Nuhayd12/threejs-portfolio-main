import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0', // Bind to all available IPs, necessary for Render
    port: parseInt(process.env.PORT) || 4173, // Use the PORT environment variable from Render or default to 4173
  },
});
