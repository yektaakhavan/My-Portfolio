import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// مسیر زیر باید نام ریپازیتوری‌ت باشه
export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/',
})
