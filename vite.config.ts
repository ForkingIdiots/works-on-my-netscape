import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve, relative, extname } from 'path'
import { fileURLToPath } from 'url'
import { glob } from 'glob'
const __dirname = fileURLToPath(new URL('.', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(
    {
      insertTypesEntry: true,

      include: resolve(__dirname, 'lib/**/*.{ts,tsx}')
    }
  )],
  resolve: {
    alias: {
      "@": "/lib"
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es']
    }
    ,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob.sync(resolve(__dirname, 'lib/**/*.{ts,tsx}')).map((file) => [
          relative('lib', file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'chunks/[name].[hash].js',
        entryFileNames: '[name].js',
      },
    }
  }
})
