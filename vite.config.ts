import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind CSS v4 — CSS-first, no tailwind.config.js needed
  ],

  resolve: {
    alias: {
      // Allow absolute imports like: import X from '@/components/...'
      '@': resolve(__dirname, './src'),
    },
  },

  build: {
    // Output directory for production build
    outDir: 'dist',

    // Split vendor libraries into separate chunks for better caching
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion'
          }
        },
      },
    },
  },

  server: {
    port: 5173,
    open: false,
  },
})
