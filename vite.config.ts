import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    hmr:{
      clientPort: 3000,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  test: {
    globals: true,
    setupFiles: './src/setupTests.ts',
    environment: 'jsdom',
  },
})