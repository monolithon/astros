---
title: Frappe Insights from the ERPNext Team
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /frappe-insights-az-erpnext-csapattól.png
  alt: ERPNext
snippet: In a previous blog post about ERPNext, BI, and Business Intelligence+Metabase, I intentionally didn't mention that the Frappe team also has a similar solution, which is why I planned this separate entry.
publishDate: 2023-05-9 11:39
category:
  - news
language: en-us
---

## What is Frappe Insights?

In the Frappe Insights GitHub repository and the Frappe Marketplace, you can find the following definition:

"Free and Open Source Data Analytics Tool for your Frappe Apps" - which means it is a free and open-source data analytics tool for Frappe applications.

Alright, but what does that exactly mean? Those familiar with ERPNext have likely encountered the Frappe Framework, which I mentioned in a few blog posts before. This is a flexible framework on which various applications can be built. ERPNext is one such application. Essentially, ERPNext is an app that needs to be installed on the Frappe Framework if you want to use it.

From this, it follows that we can install this Insights app on the Frappe Framework and use it either from ERPNext or from other applications running on Frappe (and even from external data sources).

## What can Frappe Insights be used for?

The main features include:

1. Multiple data sources - Connect to multiple data sources and query them in one place.
2. Complex queries - Write complex queries and get the results in tabular format.
3. Data visualization - Display your data in the form of charts and dashboards.
4. Dashboards - Create dashboards for automatic monitoring of key metrics.

I won't go into detail about the specific use cases of such an analytics tool, as we already covered that in the Metabase blog post. Instead, let's explore more interesting aspects of Frappe Insights in the following sections. However, for those thirsty for practical knowledge, I recommend watching the recording of the presentation from the Frappe conference, covering the following topics:

1. Installation
2. Connecting to the database
3. ERPNext database
4. Local SQLite database
5. Remote MySQL/MariaDB database
6. Creating queries
7. Connections (JOIN)
8. Filters
9. Custom expressions
10. Pivot transformation
11. Creating charts
12. Creating summary screens

Source: [https://frappe.io/events/frappe-insights](https://frappe.io/events/frappe-insights)

For those interested in the birth of Frappe Insights and wanting to learn some behind-the-scenes secrets, I recommend the interview with the developer:

[https://frappe.io/blog/product-stories/the-journey-to-insights](https://frappe.io/blog/product-stories/the-journey-to-insights)
