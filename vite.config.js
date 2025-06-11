// This is a simplified fallback configuration for environments where vite.config.ts fails
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { splitVendorChunkPlugin } from 'vite';

// Simple preload assets plugin - but this is now disabled to prevent warnings
function simplePreloadAssetsPlugin() {
  return {
    name: 'vite-plugin-simple-preload',
    transformIndexHtml(html) {
      // Don't add preload links to avoid issues with content decoding
      // Just return the HTML as is
      return html;
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
    // Disable preload plugin since it's causing issues
    // mode === 'production' && simplePreloadAssetsPlugin(),
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