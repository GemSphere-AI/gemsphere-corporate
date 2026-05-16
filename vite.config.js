import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss()
  ],
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
      },
      '/it': {
        target: 'http://localhost:3004',
        changeOrigin: true,
        ws: true,
      }
    }
  }
})
