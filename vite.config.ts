import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '', //makes paths relative
  root: 'src',
  assetsInclude: ['/assets/**/*.*'],
  build: {
    emptyOutDir: true,
    outDir: '../dist',
  },
  plugins: [vue()],
  server: {
    host: true,
    port: 8080,
    https: false,
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src'),
      '@styles': resolve(__dirname, './src/styles'),
    },
    extensions: ['.js', '.ts', '.json', '.vue', '.svg', 'scss'],
  },
})
