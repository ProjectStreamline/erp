import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    port: process.env.PORT || 5173, // Default to 5173 if PORT isn't set
    host: true, // To expose the network
  },
})
