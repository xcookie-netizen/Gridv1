import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'apple-touch-icon.png', 'splash-1170x2532.png', 'splash-1284x2778.png', 'splash-1290x2796.png'],
      manifest: {
        id: '/',
        name: 'Grid — Train. Study. Perform.',
        short_name: 'Grid',
        description: 'A private planner for university, functional fitness, daily focus and performance tracking.',
        theme_color: '#08090A',
        background_color: '#08090A',
        display: 'standalone',
        display_override: ['standalone', 'minimal-ui'],
        orientation: 'any',
        start_url: '/',
        scope: '/',
        categories: ['productivity', 'fitness', 'education'],
        icons: [
          {src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any'},
          {src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any'},
          {src: 'icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable'},
        ],
        shortcuts: [
          {name: 'Open schedule', short_name: 'Schedule', url: '/schedule', icons: [{src: 'icon-192.png', sizes: '192x192'}]},
          {name: 'Quick add', short_name: 'Add', url: '/add', icons: [{src: 'icon-192.png', sizes: '192x192'}]},
          {name: 'Build a WOD', short_name: 'WOD Lab', url: '/wod', icons: [{src: 'icon-192.png', sizes: '192x192'}]},
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        navigateFallback: 'index.html',
        cleanupOutdatedCaches: true,
      },
    }),
  ],
});
