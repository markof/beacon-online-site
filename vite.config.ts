import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pug from 'rollup-plugin-pug'
import * as path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as glob from 'glob'

const matchs = glob.sync('./src/**/*.html')
const htmls = matchs.map((match) => {
  return path.resolve(__dirname, match)
})

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      "@assets": "/assets",
      "@components": "/components",
      "@utils": "/utils",
      "@common": "/common",
    },
  },
  build: {
    rollupOptions: {
      input: htmls,
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]'
      },
      plugins: [ pug({}) ]
    },
    outDir: '../dist'
  },
  server: {
    proxy: {
      '/rest/beacon': {
        target: 'http://localhost:5800',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rest\/beacon/, '')
      }
    }
  },
})
