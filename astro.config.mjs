import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeSlug from "rehype-slug";
import astroI18next from "astro-i18next";
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";
import robots from "astro-robots";

import partytown from "@astrojs/partytown";

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
	},
	integrations: [
		react(),
		tailwind(),
		sitemap({
			filter: (page) => page !== "https://www.monolithon.com/hu/titok/" && page !== "https://www.monolithon.com/secret/" && page !== "https://www.monolithon.com/privacy-policy/" && page !== "https://www.monolithon.com/hu/privacy-policy/" && page !== "https://www.monolithon.com/refund-policy/" && page !== "https://www.monolithon.com/hu/refund-policy/" && page !== "https://www.monolithon.com/terms-conditions/" && page !== "https://www.monolithon.com/hu/terms-conditions/",
		}),
		robots({
			sitemap: "https://www.monolithon.com/sitemap-0.xml",
			policy: [
				{
					userAgent: ["*"],
					allow: ["/"],
					disallow: ["/titok", "/hu/titok", "/secret", "/hu/secret", "/hu/privacy-policy", "/refund-policy", "/hu/refund-policy", "/terms-conditions", "/hu/terms-conditions", "/privacy-policy"],
				},
			],
		}),
		astroI18next(),
		alpinejs(),
		partytown(),
	],
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			// This adds links to headings
			[rehypeAutolinkHeadings, autolinkConfig],
		],
	},
});
