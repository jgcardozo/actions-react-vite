import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://jgcardozo.github.io/actions-react-vite/',
  plugins: [react()]
})
