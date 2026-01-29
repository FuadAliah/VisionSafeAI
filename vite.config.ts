import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Use '/' for custom domain (e.g. Hostinger) or user site at root.
// Use '/VisionSafeAI/' only if hosting at https://<user>.github.io/VisionSafeAI/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
