import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        sourceMap: true,
        additionalData: `@use "sass:math"; @use "sass:map";`
      },
    },
  },
  // scss: {
  //   devSourcemap: true,
  //   preprocessorOptions: {
  //     scss: {
  //       sourceMap: true,
  //     }
  //   }
  // },
  build: {
    sourcemap: true
  },
  server: {
    force: true,
    historyApiFallback: true,
    host: true,
  },
  base: "/"
})
