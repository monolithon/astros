import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeSlug from "rehype-slug";
// import NetlifyCMS from "astro-netlify-cms";
import astroI18next from "astro-i18next";
import alpinejs from "@astrojs/alpinejs";
import AstroPWA from "@vite-pwa/astro";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";

import robots from "astro-robots";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/statusz": "/hu/statusz",
    "/uzemeltetes": "/hu/uzemeltetes",
    "/szamlazas": "/hu/szamlazas",
    "/konyveles": "/hu/konyveles",
    "/monolithon": "/hu/monolithon",
    "/bejelentkezes": "/hu/bejelentkezes",
    "/szoftverek": "/hu/szoftverek",
    "/tudasbazis": "/hu/tudasbazis",
    "/partnerek": "partnerek",
    "/jogok": "/hu/jogok",
  },
  site: "https://www.monolithon.com",
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
    __DATE__: `'${new Date().toISOString()}'`,
  },
  integrations: [
    tailwind(),
    robots(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    astroI18next(),
    alpinejs(),
    AstroPWA({
      mode: "production",
      base: "/",
      scope: "/",
      includeAssets: ["favicon.svg"],
      registerType: "autoUpdate",
      manifest: {
        name: "Astros - Starter Template for Astro with Tailwind CSS",
        short_name: "Astros",
        theme_color: "#ffffff",
        icons: [
          {
            src: "monolithon-fav.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        navigateFallback: "/404",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\/404$/],
      },
    }),
    partytown(),
    react(),
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      // This adds links to headings
      [rehypeAutolinkHeadings, autolinkConfig],
    ],
  },
  experimental: {
    assets: true,
    redirects: true,
  },
});
