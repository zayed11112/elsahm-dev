import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { splitVendorChunkPlugin } from 'vite';

// Import visualizer conditionally to prevent build failures
let visualizer: any = null;
try {
  // Try to dynamically import the visualizer
  visualizer = await import('rollup-plugin-visualizer').catch(() => null);
} catch (error) {
  console.log('Visualizer plugin not available, skipping...');
}

// Plugin to handle preloading of critical assets - now disabled to prevent content decoding issues
function preloadAssetsPlugin() {
  return {
    name: 'vite-plugin-preload-assets',
    transformIndexHtml: {
      enforce: 'post',
      transform(html) {
        // Do not add preload links to avoid content decoding issues
        return html;
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base URL - always use root for Netlify
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    splitVendorChunkPlugin(),
    // Disable preload plugin since it's causing issues
    // mode === 'production' && preloadAssetsPlugin(),
    // Only add visualizer if it's available and mode is 'analyze'
    mode === 'analyze' && visualizer && visualizer.visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode !== 'production',
    minify: 'terser',
    target: 'es2015',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React modules
          if (id.includes('node_modules/react/') || 
              id.includes('node_modules/react-dom/')) {
            return 'react-core';
          }
          
          // Radix UI components
          if (id.includes('node_modules/@radix-ui/')) {
            return 'ui-components';
          }
          
          // Icons
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
          
          // Router
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          
          // Form libraries
          if (id.includes('node_modules/react-hook-form') || 
              id.includes('node_modules/@hookform/') || 
              id.includes('node_modules/zod/')) {
            return 'forms';
          }
          
          // Data fetching
          if (id.includes('node_modules/@tanstack/react-query')) {
            return 'data-fetching';
          }
          
          // Utility libraries
          if (id.includes('node_modules/date-fns') || 
              id.includes('node_modules/clsx') || 
              id.includes('node_modules/tailwind-merge')) {
            return 'utils';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log', 'console.debug', 'console.info'] : []
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
}));
