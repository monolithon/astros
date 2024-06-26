---
title: Why is ERPNext Database Growing and What Can We Do About It?
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /mitől-hízik-az-erpnext-adatbázis-és-mit-tehetünk.png
  alt: ERPNext
snippet: Typical cloud systems, unlike ERPNext, where providers do not price based on the resources used but on other criteria, also utilize various resources...
publishDate: 2022-11-17 11:39
category:
  - news
language: en-us
---

Typical cloud systems, unlike ERPNext, where providers do not price based on the resources used but on other criteria, also utilize various resources. The details of these resource usages are often hidden from users.

ERPNext not only transparently developed the FrappeCloud platform, where the amount of resources used by the ERPNext software is visible, but it also equipped ERPNext itself with a report function so that we can see how much space is occupied in the database.

To access the report, you need to append the following URL to your own ERPNext instance domain: [/app/query-report/Database%20Storage%20Usage%20By%20Tables](/app/query-report/Database%20Storage%20Usage%20By%20Tables)

This is useful because it's simple, and if we find any factors using an unreasonable amount of resources, we can easily change them. The smaller the database, the easier it is to manage tasks such as creating backups or performing updates, which can save us money. For example, we can delete unnecessary versions and disable versioning for certain documents.

And the best part is that in some cases, we don't even need database operations since, as the meme says, in ERPNext, every doctype can be easily deleted from the interface if we no longer need it.

![Image](/images/cqblbkY.jpg)

Source:
[https://twitter.com/FrappeCloud/status/1582922893968564224](https://twitter.com/FrappeCloud/status/1582922893968564224)
