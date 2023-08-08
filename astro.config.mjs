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
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.monolithon.com",
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    }
  },
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), astroI18next(), alpinejs(), AstroPWA({
    mode: "production",
    base: "/",
    scope: "/",
    includeAssets: ["favicon.svg"],
    registerType: "autoUpdate",
    manifest: {
      name: "Astros - Starter Template for Astro with Tailwind CSS",
      short_name: "Astros",
      theme_color: "#ffffff",
      icons: [{
        src: "monolithon-fav.png",
        sizes: "192x192",
        type: "image/png"
      }, {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }, {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }]
    },
    workbox: {
      navigateFallback: "/404",
      globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"]
    },
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\/404$/]
    }
  }), partytown(), react()],
  markdown: {
    rehypePlugins: [rehypeSlug,
    // This adds links to headings
    [rehypeAutolinkHeadings, autolinkConfig]]
  },
  experimental: {
    assets: true,
    redirects:true,
  }
});
// astro.config.mjs