import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/CampusCrack/', 
  content: ["./index.html", "./src/**/*.{js,jsx}"]
})