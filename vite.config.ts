import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), EnvironmentPlugin('all')],
  resolve: {
    alias: [
      {
        find: /^@webapp(.+)$/,
        replacement: `${path.resolve(__dirname, '.')}/src/$1`,
      },
    ],
  },
})
