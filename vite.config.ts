import { defineConfig, ServerOptions } from 'vite'
import react from '@vitejs/plugin-react'

const serverConfig : ServerOptions = {
  proxy: {
    "/api" : {
      target: "http://localhost:5092",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, "")
      
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: serverConfig,
  preview: serverConfig
})
