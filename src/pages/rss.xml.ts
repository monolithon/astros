import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { Feed } from "feed";
import fs from "fs";
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

  const englishBlogs = cloneDeep(posts).filter((post) =>
    post.slug.startsWith("en/"),
  );
  const huBlogs = cloneDeep(posts).filter((post) =>
    post.slug.startsWith("hu/"),
  );

  const enFeed = new Feed({
    title: "Monolithon - ERPNext, Frappe, Odoo and more",
    description:
      "ERPNext, Odoo, eCommerce, Shopify, Static Site Generator, astro.build, Queue Management System, Frappe, n8n, Mautic",
    id: import.meta.env.SITE,
    link: import.meta.env.SITE,
    language: "us-en",
    copyright: "Monolithon",
  });

  refactorURl(englishBlogs).forEach((post) => {
    enFeed.addItem({
      link: post.slug,
      title: post.data.title,
      description: post.data.snippet,
      content: post.body,
      date: post.data.publishDate,
    });
  });

  // items: refactorURl(englishBlogs).map((post) => ({
  //   link: post.slug,
  //   title: post.data.title,
  //   description: post.data.snippet,
  //   content: post.body,
  //   pubDate: post.data.publishDate,
  // })),
  const huFeed = new Feed({
    title: "Monolithon - ERPNext, Frappe, Odoo and more",
    description:
      "ERPNext, Odoo, eCommerce, Shopify, Static Site Generator, astro.build, Queue Management System, Frappe, n8n, Mautic",
    // site: import.meta.env.SITE,
    language: "hu",
    id: import.meta.env.SITE,
    link: import.meta.env.SITE,
    copyright: "Monolithon",
  });

  refactorURl(huBlogs).forEach((post) => {
    huFeed.addItem({
      link: post.slug,
      title: post.data.title,
      description: post.data.snippet,
      content: post.body,
      date: post.data.publishDate,
    });
  });
  // items: refactorURl(huBlogs).map((post) => ({
  //   link: post.slug,
  //   title: post.data.title,
  //   description: post.data.snippet,
  //   content: post.body,
  //   pubDate: post.data.publishDate,
  // })),

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/blogs.hu.xml", huFeed.rss2());
  fs.writeFileSync(`./public/rss/blogs.en.xml`, enFeed.rss2());

  return rss({
    title: `Astros`,
    description: "Astros - Starter Template for Astro with Tailwind CSS",
    site: import.meta.env.SITE,
    customData: `<language>en-us</language>`,

    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.snippet,
      link: post.slug,
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
