import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import robots from "astro-robots";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { autolinkConfig } from "./plugins/rehype-autolink-config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.monolithon.com",
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
  redirects: {
    "/statusz": "/hu/statusz",
    "/uzemeltetes": "/hu/uzemeltetes",
    "/szamlazas": "/hu/szamlazas",
    "/konyveles": "/hu/konyveles",
    "/bejelentkezes": "/hu/bejelentkezes",
    "/szoftverek": "/hu/szoftverek",
    "/tudasbazis": "/hu/tudasbazis",
    "/partnerek": "partnerek",
    "/hu/terms-conditions": "/terms-conditions",
    "/hu/refund-policy": "/refund-policy",
  },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) =>
        page !== "https://www.monolithon.com/hu/titok/" &&
        page !== "https://www.monolithon.com/secret/" &&
        page !== "https://www.monolithon.com/privacy-policy/" &&
        page !== "https://www.monolithon.com/hu/privacy-policy/" &&
        page !== "https://www.monolithon.com/refund-policy/" &&
        page !== "https://www.monolithon.com/hu/refund-policy/" &&
        page !== "https://www.monolithon.com/terms-conditions/" &&
        page !== "https://www.monolithon.com/hu/terms-conditions/",
    }),
    robots({
      sitemap: "https://www.monolithon.com/sitemap-0.xml",
      policy: [
        {
          userAgent: ["*"],
          allow: ["/"],
          disallow: [
            "/titok",
            "/hu/titok",
            "/secret",
            "/hu/secret",
            "/hu/privacy-policy",
            "/refund-policy",
            "/hu/refund-policy",
            "/terms-conditions",
            "/hu/terms-conditions",
            "/privacy-policy",
          ],
        },
      ],
    }),
    astroI18next(),
    alpinejs(),
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      // This adds links to headings
      [rehypeAutolinkHeadings, autolinkConfig],
    ],
  },
});
