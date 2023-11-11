---
title: Switch to astro.build SSG (Static Site Generator)
draft: false
author: Admin
tags:
    - astro.build
image:
    src: /astro-build-static-website.jpg
    alt: ERPNext
snippet: A monolithon.com still runs on the ERPNext system, but we have separated the public website and now use astro.build for it.
publishDate: 2023-11-11 11:39
category:
    - news
---

<p>The blog hasn't ceased to exist, but instead of publishing it in the usual manner, I decided to first announce the transformation of the monolithon.com website.</p>
<p>What is this transformation?</p>
<p>We considered several aspects, such as: easy launch/migration, developer-friendly functionality, speed, customization, available features. Eventually, we concluded that the ERPNext-powered monolithon.com's ERPNext and Odoo blog should be detached from our own ERPNext system. While it performed well and greatly facilitated our work, allowing us to achieve much without coding, it wasn't the responsibility of an enterprise management system - which we regard as the "single source of truth" - to function as a public website.</p>
<p>It could be used as a content management system (CMS), but the chosen <a href="https://www.monolithon.com/static-site-generator">astro.build</a> solution for content management in Git is very convenient, or even the DecapCMS solution can be used from a browser, ensuring if we're separating, it's full independence, and the content doesn't come through an API, as in the case of a Headless CMS; instead, we've implemented a completely static page technology.</p>
<p>Why?</p>
<p>Because this guarantees the fastest page experience. This is important for visitors and for Google and other systems as well. After all, no one likes to wait. From a security standpoint, it's reassuring to keep our business data and public website separate. We still believe in using integrated systems like ERPNext or Odoo, but we recognize that in every case, there's a need for another software alongside them. So the question is where to draw the line about what to keep within them and what to use another software for.</p>
<p>In order to keep our business data "clean" while having appropriate data supporting sales, this separation was a good decision: the marketing and sales activities related to the website were addressed by integrating the Mautic system into astro.build.</p>
<p>This enabled us to collect and analyze as much data as possible - according to consent or legal basis - to provide even better service and support our automated marketing activities. Data then only enters the next phase of sales in ERPNext, which we can do directly between ERPNext and Mautic or using n8n.</p>
<p>Astro.build lived up to the attached hopes</p>
<p>The development was fast, and the results are great, something visitors can feel during quick browsing. We managed to further improve the Google rankings for the first <a href="https://www.monolithon.com/blog">Hungarian ERPNext blog</a>, transferring the page structure and link structure in several steps, making only minor modifications and supporting this with an appropriate sitemap. Our other goal was also achieved, as our English content now reaches a wider audience.</p>
<p>I must mention that astro.build is continuously and rapidly evolving, so in the second step, we updated our already finished astro.build page to the latest version, which also happened smoothly and quickly.</p>
<p>The translation of content into English and the creation of new menu and content structures took priority, but as I mentioned in the introduction, from now on, blog posts and news from the world of ERPNext, Odoo, and other software are back.</p>
Would you like a similarly fast website? <a href="https://www.monolithon.com/contact">Let's talk!</a></p></p>


<p><span style="color: rgb(187, 187, 187);">. </span></p>
