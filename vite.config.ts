import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Define a base correta
  build: {
    outDir: 'dist',
    assetsDir: '',
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
      },
      output: {
        assetFileNames: '[name][extname]',
        chunkFileNames: '[name].js',
        entryFileNames: 'main.js',
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          vendor: ['@emailjs/browser', 'styled-components', 'zod'],
        },
      }
    }
  }
})
