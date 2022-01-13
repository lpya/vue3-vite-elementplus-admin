import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: './',
  define: {
    'process.env': {}
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      views: path.resolve(__dirname, 'src/views'),
      interface: path.resolve(__dirname, 'src/interface')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables";'
      }
    }
  }
})
