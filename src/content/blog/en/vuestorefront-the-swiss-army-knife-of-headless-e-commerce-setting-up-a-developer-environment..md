---
title: VueStoreFront - the Swiss Army Knife of Headless E-commerce - Setting Up a Developer Environment
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /vuestorefront-a-headless-webáruház-svájcibicska-fejlesztői-környezet-kialakítása.png
  alt: ERPNext
snippet: I have already showcased the flexibility and feature-richness of ERPNext, but I've also mentioned that it's beneficial to use it alongside other software. One such solution is VueStoreFront, a headless e-commerce platform.
publishDate: 2023-02-25 11:39
category:
  - news
---

The essence of VueStoreFront is that it's not a standalone e-commerce platform like Magento or WooCommerce, but it can function as an extension of any software, even non-e-commerce ones, where the necessary e-commerce data is available. This can include an ERP system, like ERPNext. This is very useful because it allows us to quickly build and customize our e-commerce store separately from other systems, gaining a competitive advantage in terms of speed and technology. At the same time, there's no need to interfere with our business processes as they continue to operate seamlessly in the background. This can also be reversed, as the newer generation of entrepreneurs might start with e-business and launch an online store before establishing a traditional physical store, and they can obtain a complete business software package for that purpose (free and open-source!). The trick is that they all form a unified system, and there's no synchronization between the two systems. Instead, VueStoreFront directly utilizes and interacts with the data from the backend systems, like product information, images, orders, etc.

You might wonder why VueStoreFront and headless e-commerce are being discussed on the Hungarian ERPNext and Frappe blog. I'm writing about it because I not only consider the entire headless technology very innovative, but it seems that, as I mentioned in previous posts, ERPNext and Frappe developers also like it and are exploring this direction. That's enough about VueStoreFront and its advantages. Let's see how to set up a VueStoreFront developer environment in a Debian 11 virtual machine. (Disclaimer: there might be more suitable systems for development, but the Chromebook I use comes with this system, making my life easier. The Chromebook deserves another blog post, or maybe more, which I'm also preparing, but let's get back to setting up the VueStoreFront developer environment.)

Since the required software versions are not available in the Debian 11 repositories, we need to download some of them.

Install nvm:

```bash
sudo curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc
nvm install node
nvm install --lts / nvm install 18.14.2 / nvm install 16.13.0
```

The last line is enough, as we use version 18.x for the current test project:

```bash
nvm use 18.14.2
```

Install npm:

```bash
nvm install-latest-npm
```

Install yarn:

```bash
npm install --global yarn
```

Don't forget about environment settings if you have any. After turning off/restarting the virtual machine, you need to add them again, e.g.:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

Set up the project in the appropriate git directory/branch:

```bash
yarn
yarn dev
```

After this, the VueStoreFront e-commerce store webpage is accessible by default at the following address:

```
http://localhost:3000/
```

You might need these two commands if something doesn't work due to version issues:

```bash
node -v
npm rebuild node-sass
rm -rf node_modules/
```
