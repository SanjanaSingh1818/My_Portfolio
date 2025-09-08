import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // keeping swc version (faster than @vitejs/plugin-react)
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),

    mode === 'development' &&
    componentTagger(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'Sanjana Singh - MERN Stack Developer',
        short_name: 'SS Portfolio',
        description: 'MERN Stack Developer & Frontend Engineer specializing in React.js, Node.js, MongoDB, and modern web technologies.',
        theme_color: '#3B82F6',
        background_color: '#000000',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'apple-touch-icon'
          }
        ]
      }
    }),

    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.png",
        "robots.txt",
        "apple.png",
      ],
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            // cache images in /uploads folder
            urlPattern: ({ url }) => url.pathname.startsWith("/uploads/"),
            handler: "CacheFirst",
            options: {
              cacheName: "uploads-images-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
      },
      manifest: {
        name: "Sanjana's Portfolio",
        short_name: "Portfolio",
        description:
          "Sanjana Singh - MERN Stack Developer & Frontend Engineer Portfolio",
        theme_color: "#0f172a",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        orientation: "portrait",
        icons: [
          {
            src: "/uploads/applogo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/uploads/applogo512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/uploads/apple.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "/uploads/favicon32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/uploads/favicon16.png",
            sizes: "16x16",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true, // allow testing PWA in dev mode
      },
    }),

  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
