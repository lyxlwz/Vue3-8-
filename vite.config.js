import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    //配置别名 @为src 引入
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
