import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
      '/retail': {
        target: 'http://localhost:3006',
        changeOrigin: true,
        ws: true,
      },
      '/crm': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        ws: true,
      },
      '/marketing': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        ws: true,
      },
      '/booking': {
        target: 'http://localhost:3003',
        changeOrigin: true,
        ws: true,
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // React, @emotion, and framer-motion MUST be in the same chunk
            // because they access React internals at module evaluation time
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router') ||
                id.includes('@emotion') || id.includes('framer-motion')) {
              return 'vendor-react';
            }
            if (id.includes('@mui')) {
              return 'vendor-mui';
            }
            return 'vendor';
          }
        }
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})

