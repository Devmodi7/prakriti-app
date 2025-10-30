import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: { port: 3001, open: true },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  build: { outDir: 'dist' }
});
