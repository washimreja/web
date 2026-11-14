import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Builds the whole site into one self-contained HTML file (scripts, styles and fonts inlined)
// so it can be opened or shared without a server: `npm run build:single`.
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile({ removeViteModuleLoader: true })],
  build: { outDir: 'single', assetsInlineLimit: 100_000_000, cssCodeSplit: false },
})
