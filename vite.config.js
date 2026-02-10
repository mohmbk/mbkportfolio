import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standard Vite config using project root
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
