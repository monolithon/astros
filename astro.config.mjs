import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeSlug from "rehype-slug";
import astroI18next from "astro-i18next";
import alpinejs from "@astrojs/alpinejs";
import AstroPWA from "@vite-pwa/astro";
import react from "@astrojs/react";
import robots from "astro-robots";

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
		"/monolithon": "/hu/monolithon",
		"/bejelentkezes": "/hu/bejelentkezes",
		"/szoftverek": "/hu/szoftverek",
		"/tudasbazis": "/hu/tudasbazis",
		"/partnerek": "partnerek",
		"/jogok": "/hu/jogok",
	},
	integrations: [
		react(),
		tailwind(),
		sitemap({
			filter: (page) => page !== "https://www.monolithon.com/hu/titok/" && page !== "https://www.monolithon.com/secret/",
		}),
		robots({
			sitemap: "https://www.monolithon.com/sitemap-0.xml",
			policy: [
				{
					userAgent: ["*"],
					allow: ["/"],
					disallow: ["/titok", "/hu/titok", "/secret", "/hu/secret"],
				},
			],
		}),
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
						src: "pwa-192x192.png",
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
				globPatterns: ["*.js"],
			},
			devOptions: {
				enabled: false,
				navigateFallbackAllowlist: [/^\/404$/],
				suppressWarnings: true,
			},
		}),
	],
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			// This adds links to headings
			[rehypeAutolinkHeadings, autolinkConfig],
		],
	},
});
