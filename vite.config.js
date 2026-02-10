import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configure Vite to use `src` as the project root and `public` one level up
export default defineConfig({
  plugins: [react()],
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
