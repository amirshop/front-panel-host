import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    UnoCSS(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      manifest: {
        name: 'پنل مدیریت | فروشگاه امیر',
        short_name: 'فروشگاه امیر',
        description: 'مدیریت و فروش محصولات با امکانات کامل',
        theme_color: '#ffffff',
        background_color: '#000000',
        display: 'fullscreen',
        start_url: '/',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    federation({
      name: 'host-amirshop',
      filename: 'hostEntry.js',
      exposes: {
        './hostPanelStore': './src/stores/panelSettings.store.ts',
      },
      remotes: {
        remotePermissions: 'http://localhost:5901/assets/permissionsEntry.js',
      },
      shared: ['vue', 'pinia', 'vue-router'],
    }),
  ],
  server: {
    port: 5900,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
