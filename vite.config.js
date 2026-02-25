import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // PNG optimization
      optipng: {
        optimizationLevel: 7,
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
      // JPEG optimization
      mozjpeg: {
        quality: 80,
      },
      // WebP conversion
      webp: {
        quality: 75,
      },
    }),
  ],
})
