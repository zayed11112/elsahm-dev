// This is a simplified fallback configuration for environments where vite.config.ts fails
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { splitVendorChunkPlugin } from 'vite';

// Simple preload assets plugin
function simplePreloadAssetsPlugin() {
  return {
    name: 'vite-plugin-simple-preload',
    transformIndexHtml(html) {
      // Insert simple preload hints
      const preloadLinks = `
        <link rel="preload" href="/assets/index.css" as="style">
        <link rel="preload" href="/assets/index.js" as="script" crossorigin>
      `;
      return html.replace(/<head>/, `<head>${preloadLinks}`);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base URL - always use root for Netlify
  base: '/',
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    mode === 'production' && simplePreloadAssetsPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    target: 'es2015',
    rollupOptions: {
      output: {
        // Simple chunking strategy
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})); 