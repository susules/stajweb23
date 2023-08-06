import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  resolve: {
    alias: {
      stream: "stream-browserify",
    },
  },
  server: {
    proxy: {
      '/staj23': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: path => path.replace('/staj23', ''),
      },

    },
  }
})
