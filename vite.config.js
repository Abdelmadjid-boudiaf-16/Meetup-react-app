import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    // You can directly use import.meta.env to access environment variables
    define: {
      'process.env.SOME_KEY': JSON.stringify(env.VITE_FIREBASE_URL),
    },
  }
})
