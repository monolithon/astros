import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeSlug from "rehype-slug";
import NetlifyCMS from "astro-netlify-cms";
import astroI18next from "astro-i18next";
import alpinejs from "@astrojs/alpinejs";
import AstroPWA from "@vite-pwa/astro";
import cookieconsent from "@jop-software/astro-cookieconsent";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/blog/hirek/új-nyomtatási-nézet-szerkesztő-app-a-frappe-től-az-erpnext-hez':'/hu/új-nyomtatási-nézet-szerkesztő-app-a-frappe-től-az-erpnext-hez'














  },
  site: "https://www.monolithon.com",
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    }
  },
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), NetlifyCMS({
    config: {
      backend: {
        name: "github",
        repo: "warpsi/astros",
        branch: "main",
        base_url: "https://astros-7h0.pages.dev",
        auth_endpoint: "/api/auth"
      },
      media_folder: "public/images",
      public_folder: "/images",
      i18n: {
        structure: "multiple_folders",
        locales: ["en", "hu"],
        default_locale: "en"
      },
      collections: [
      // Content collections
      {
        name: "posts",
        i18n: true,
        label: "Blog Posts",
        folder: "src/content/blog",
        create: true,
        delete: true,
        fields: [{
          name: "title",
          widget: "string",
          label: "Post Title",
          i18n: true
        }, {
          label: "Draft",
          name: "draft",
          widget: "boolean",
          i18n: "duplicate"
        }, {
          label: "Author",
          name: "author",
          widget: "string",
          i18n: "duplicate"
        }, {
          label: "Tags",
          name: "tags",
          widget: "list",
          i18n: true
        }, {
          label: "Image",
          name: "image",
          widget: "object",
          i18n: true,
          fields: [{
            label: "Source",
            name: "src",
            widget: "image",
            i18n: "duplicate"
          }, {
            label: "Alt Text",
            name: "alt",
            widget: "string",
            i18n: true
          }]
        }, {
          label: "Snippet",
          name: "snippet",
          widget: "text",
          i18n: true
        }, {
          label: "Publish Date",
          name: "publishDate",
          widget: "datetime",
          format: "YYYY-MM-DD HH:mm",
          i18n: "duplicate"
        }, {
          label: "Category",
          name: "category",
          widget: "select",
          options: ["Tutorials", "News", "Reviews", "Frameworks"],
          i18n: "duplicate"
        }, {
          name: "body",
          widget: "markdown",
          label: "Post Body",
          i18n: true
        }]
      }]
    },
    disableIdentityWidgetInjection: true
  }), astroI18next(), alpinejs(), AstroPWA({
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
  }), cookieconsent({
    // ...
    gui_options: {
      consent_modal: {
        layout: 'cloud',
        // box/cloud/bar
        position: 'bottom right',
        // bottom/middle/top + left/right/center
        transition: 'slide',
        // zoom/slide
        swap_buttons: false // enable to invert buttons
      },

      settings_modal: {
        layout: 'box',
        // box/bar
        // position: 'left',           // left/right
        transition: 'slide' // zoom/slide
      }
    }
    // ...
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