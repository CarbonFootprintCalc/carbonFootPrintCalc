import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: "localhost" // 强制 Vite 绑定到 localhost，而不是 127.0.0.1
  }
})
