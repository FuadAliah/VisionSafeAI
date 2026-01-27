import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// If you host at https://FuadAliah.github.io/VisionSafeAI/
// set base to '/VisionSafeAI/'. If you plan to publish as a user site
// (FuadAliah.github.io repository), set base to '/'.
export default defineConfig({
  base: '/VisionSafeAI/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
