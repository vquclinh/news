import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import feedbackApi from './server/feedbackApi.js'

export default defineConfig({
  plugins: [react(), feedbackApi()],
  server: { port: 5173 },
})
