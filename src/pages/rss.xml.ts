import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const get = async () => {
  const posts = await getCollection("blog", ({ data }) => {
    return !data.draft && data.publishDate < new Date();
  });
  // Sort content entries by publication date
  posts.sort(function (a, b) {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });

  const englishBlogs = posts.filter((post) => post.slug.startsWith("en/"));
  const huBlogs = posts.filter((post) => post.slug.startsWith("hu/"));

  const enRss = await rss({
    title: "Monolithon - ERPNext, Frappe, Odoo and more",
    description:
      "ERPNext, Odoo, eCommerce, Shopify, Static Site Generator, astro.build, Queue Management System, Frappe, n8n, Mautic",
    site: import.meta.env.SITE,
    customData: `<language>en-us</language>`,

    items: refactorURl(englishBlogs).map((post) => ({
      link: post.slug,
      title: post.data.title,
      description: post.data.snippet,
      content: post.body,
      pubDate: post.data.publishDate,
    })),
  });

  const huRss = await rss({
    title: "Monolithon - ERPNext, Frappe, Odoo and more",
    description:
      "ERPNext, Odoo, eCommerce, Shopify, Static Site Generator, astro.build, Queue Management System, Frappe, n8n, Mautic",
    site: import.meta.env.SITE,
    customData: `<language>hu</language>`,

    items: refactorURl(huBlogs).map((post) => ({
      link: post.slug,
      title: post.data.title,
      description: post.data.snippet,
      content: post.body,
      pubDate: post.data.publishDate,
    })),
  });

  // fs.mkdirSync("./public/rss", { recursive: true });
  // fs.writeFileSync(
  //   "./public/rss/blogs.hu.xml",
  //   Buffer.from(await huRss.arrayBuffer()),
  // );
  // fs.writeFileSync(
  //   `./public/rss/blogs.en.xml`,
  //   Buffer.from(await enRss.arrayBuffer()),
  // );

  return rss({
    title: `Astros`,
    description: "Astros - Starter Template for Astro with Tailwind CSS",
    site: import.meta.env.SITE,
    customData: `<language>en-us</language>`,

    items: [],
  });
};

function refactorURl(posts) {
  // remove all "hu/ and en/ from the slug"
  return posts.map((post) => {
    post.slug = post.slug.replace("hu/", "hu/blog/");
    post.slug = post.slug.replace("en/", "blog/");
    return post;
  });
}
