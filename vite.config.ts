import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'


// https://vitejs.dev/config/
export default defineConfig({
  base: './AdminDashboard/',
  plugins: [react()],
  optimizeDeps:{
    esbuildOptions:{
      plugins:[
        esbuildCommonjs(['react-calendar','react-date-picker'])
      ]
    }
  }
})
