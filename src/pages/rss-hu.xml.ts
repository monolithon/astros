import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import pkg from "lodash";
const { cloneDeep } = pkg;

export const get = async () => {
  const blogPosts = await getCollection("blog", ({ data }) => {
    return !data.draft && data.publishDate < new Date();
  });
  // Sort content entries by publication date
  const posts = blogPosts.sort(function (a, b) {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });

  const huBlogs = cloneDeep(posts).filter((post) =>
    post.slug.startsWith("hu/"),
  );

  return await rss({
    title: "Monolithon - ERPNext, Frappe, Odoo and more",
    description:
      "ERPNext, Odoo, eCommerce, Shopify, Static Site Generator, astro.build, Queue Management System, Frappe, n8n, Mautic",
    site: import.meta.env.SITE,
    customData: "<language>hu</language>",
    items: refactorURl(huBlogs).map((post) => ({
      title: post.data.title,
      description: post.data.snippet,
      link: post.slug,
      content: post.body,
      pubDate: post.data.publishDate,
    })),
  });
};

function refactorURl(posts: any[]): any[] {
  // remove all "hu/ and en/ from the slug"
  return posts.map((post) => {
    post.slug = post.slug.replace("hu/", "hu/blog/");
    post.slug = post.slug.replace("en/", "blog/");
    return post;
  });
}
