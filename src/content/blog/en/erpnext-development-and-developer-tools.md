---
title: ERPNext Development and Developer Tools
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-fejlesztés-és-ejlesztői-eszközök.png
  alt: ERPNext
snippet: There are some important things to know about ERPNext development. ERPNext is easily customizable and extensible, allowing users to tailor the system to their unique business needs.
publishDate: 2023-02-18 11:39
category:
  - news
language: en-us
---

I have gathered some information about ERPNext development and useful ERPNext-specific developer tools that can help in understanding the fundamentals of an ERPNext development project. However, whether ERPNext development is worth considering and the conditions for it will be revealed towards the end of this post. Let's explore some key pillars of ERPNext development:

1. Python and Frappé Framework: ERPNext is written in Python and built on the Frappé Framework. The Frappé Framework is an easily learnable framework that enables quick and efficient development of business applications. ERPNext developers must have a thorough understanding of Python and the Frappé Framework and its usage.
1. Database Engine: ERPNext uses MariaDB as its default database engine, which is considered a fork of MySQL. MariaDB is an open-source relational database engine that enables efficient data management. A well-designed database schema, tables, indexes, and relationships contribute to the system's smooth functioning, and developers should be familiar with them and consider them during development.
1. Modules: ERPNext is built with various modules that handle different business processes. These modules include financial, procurement, sales, and CRM modules, among others. To add new modules or modify existing ones in ERPNext, developers need a comprehensive understanding of the specific processes and the ERPNext module architecture.
1. Integrations: ERPNext can be integrated with other business applications, such as financial applications, webshops, CRM systems, and many more. Integrations are designed using the Frappé Framework, allowing easy and efficient management of data connections between applications.
1. UI Development: The ERPNext user interface consists of various modules with different functions. UI development in ERPNext is carried out using the Frappé Framework and JavaScript frameworks like Vue.js. UI developers must have a good understanding of these frameworks and principles of user experience design.
1. Version Control: ERPNext development requires the use of version control systems. Version control systems allow developers to track changes in the codebase, fix bugs, test new features, and compare different versions. Git is the most commonly used version control system in ERPNext development.
1. Documentation: Thorough documentation is essential during ERPNext development, as it enables developers to understand the code's functioning and how to modify it. The ERPNext documentation includes development guides, API documentation, data model descriptions, and much more, specific to each version.
1. Testing: Comprehensive testing is crucial during ERPNext development. There are two main types of testing: manual and automated. Manual testing involves human testers testing individual functions and databases within the system to ensure they meet the expectations. Automated testing involves using automated testing tools, allowing more efficient test execution and faster bug identification. Continuous integration testing is also important during ERPNext development. Continuous integration testing automatically checks codebase changes and immediately notifies developers of any issues, helping identify and resolve bugs quickly. Proper testing ensures that the ERPNext system is reliable, stable, and satisfies end-users with its performance.
1. ERPNext development is an exciting challenge that allows developers to customize the system according to specific business needs. However, successful ERPNext development requires not only high-level ERPNext and programming knowledge but also domain-specific expertise, such as financial and accounting knowledge for bookkeeping, or logistics knowledge for inventory management, along with a systems-thinking approach due to the complexity of the system. It's important to note that developing core program code or forking from the main codebase is almost never recommended for long-term maintainability. Best practices involve overriding with custom modules, which also requires careful consideration. When executed properly, ERPNext application can be even more tailored to meet customer needs and improve the efficiency of business processes.

ERPNext, however, offers an alternative to custom development and coding by allowing customization through the user interface. For instance, you can customize the purchase order to associate it with a cost center or project at the header or line item level. But there's no direct option to link it to tasks, which can be useful, especially if ERPNext suggests certain expenses for certain conditions.

### Customization Without Development!

When faced with this situation, there's no need to worry, as you can add custom fields to your system without writing any code. Without your own code, you can still follow the main version updates and version changes easily, as your system remains a "vanilla" ERPNext, free from modifications.

The following screenshot shows how to add this extra field. Of course, if you want other automations, you might need client or server-side scripts, but you still don't have to develop your own module.

<img src="./images/files/5cYQcrj.png">

However, if you do decide to opt for full custom development, you can use the following Frappé and ERPNext developer tools:

<a href="https://chrome.google.com/webstore/detail/frappeerpnext-tools/mfpfeokebfgddkaemagjigbjkmohmpab" rel="noopener noreferrer">https://chrome.google.com/webstore/detail/frappeerpnext-tools/mfpfeokebfgddkaemagjigbjkmohmpab</a>
<a href="https://github.com/ElasticRun/barista" rel="noopener noreferrer">https://github.com/ElasticRun/barista</a>
<a href="https://github.com/ankush/frappe-test-runner" rel="noopener noreferrer">https://github.com/ankush/frappe-test-runner</a>
<a href="https://github.com/barredterra/frappe_server_performance" rel="noopener noreferrer">https://github.com/barredterra/frappe_server_performance</a>
