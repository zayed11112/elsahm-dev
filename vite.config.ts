import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { splitVendorChunkPlugin } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

// Plugin to handle preloading of critical assets
function preloadAssetsPlugin() {
  return {
    name: 'vite-plugin-preload-assets',
    transformIndexHtml: {
      enforce: 'post',
      transform(html, ctx) {
        // Skip during development mode to avoid 404 errors
        if (!ctx.bundle) return html;
        
        // Extract JS and CSS filenames from bundle
        const jsFiles = Object.keys(ctx.bundle || {})
          .filter(key => key.endsWith('.js') && key.includes('index'))
          .map(key => '/' + key);
          
        const cssFiles = Object.keys(ctx.bundle || {})
          .filter(key => key.endsWith('.css'))
          .map(key => '/' + key);

        // Add preload links
        let preloadLinks = '';
        
        jsFiles.forEach(file => {
          preloadLinks += `<link rel="preload" href="${file}" as="script" crossorigin>\n`;
        });
        
        cssFiles.forEach(file => {
          preloadLinks += `<link rel="preload" href="${file}" as="style">\n`;
        });

        // Add favicon preload
        preloadLinks += `<link rel="preload" href="/favicon.ico" as="image">\n`;
        
        // Insert preload links after the first <head> tag
        return html.replace(/<head>/, `<head>\n${preloadLinks}`);
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
    mode === 'production' && preloadAssetsPlugin(),
    mode === 'analyze' && visualizer({
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
