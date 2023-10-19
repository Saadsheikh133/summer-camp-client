import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  "server.hmr.overlay": false
})


// import { defineConfig } from "vite";

// export default defineConfig({
//   ...
//   optimizeDeps: {
//     exclude: ['js-big-decimal']
// }
// });