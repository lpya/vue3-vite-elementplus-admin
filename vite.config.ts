import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  define: {
    'process.env': {
      VUE_APP_SITE_NAME: 'Vue3-Element-Admin',
      VUE_APP_PREFIX_ROUTE: 'sys.blog'
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      views: path.resolve(__dirname, 'src/views')
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
