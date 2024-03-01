import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://JesusRamirezB.github.io/react-rick-and-morty/",
  plugins: [react()],
})

