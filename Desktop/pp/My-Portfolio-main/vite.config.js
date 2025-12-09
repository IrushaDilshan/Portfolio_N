import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 70 },
      pngquant: { quality: [0.65, 0.80], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: true }
        ]
      }
    })
  ],
  base: '/Portfolio_N/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'project-images': [
            './src/Images/feedback.png',
            './src/Images/ServSync.png',
            './src/Images/veego.png',
            './src/Images/habbit.png',
            './src/Images/delivery.png'
          ]
        }
      }
    }
  }
})
