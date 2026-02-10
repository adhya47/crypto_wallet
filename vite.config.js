import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import wasm from "vite-plugin-wasm"
import topLevelAwait from "vite-plugin-top-level-await"
import { nodePolyfills } from "vite-plugin-node-polyfills"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    wasm(),
    topLevelAwait(),
    nodePolyfills({
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      protocolImports: true
    })
  ],
  build: {
    outDir: "dist",
    target: "es2020",
    sourcemap: false,
    minify: "terser",
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {
      external: ["tiny-secp256k1", "bitcoinjs-lib", "bip174"],
      onwarn() {
        return // Silence all warnings
      }
    }
  },
  define: {
    global: "globalThis"
  },
  optimizeDeps: {
    exclude: ["tiny-secp256k1", "bitcoinjs-lib", "bip174"],
    include: ["buffer", "stream", "crypto", "process"]
  },
  resolve: {
    alias: {
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      buffer: "buffer",
      vm: "vm-browserify",
      "tiny-secp256k1": path.resolve(__dirname, "mock-crypto.js"),
      "bitcoinjs-lib": path.resolve(__dirname, "node_modules/bitcoinjs-lib/dist/bitcoinjs-lib.min.js"),
      process: "process/browser"
    }
  }
})
