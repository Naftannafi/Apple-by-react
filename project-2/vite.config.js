import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source maps
  },
  server: {
    open: true, // Automatically open the app in the browser
  },
});