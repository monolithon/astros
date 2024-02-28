---
title: Importing Master Data into ERPNext

draft: false
author: Admin
tags:
  - erpnext
image:
  src: /krystal.jpg
  alt: ERPNext
snippet: ""
publishDate: 2022-06-30 11:39
category:
  - how-to
---

There is a detailed description of the general import and export functionality, and also a blog post about it as an appetizer (<a href="https://www.monolithon.com/blog/hirek/adatszinkroniz%C3%A1l%C3%A1s-egyszer%C5%B1en-az-erpnext-adatimport-funkci%C3%B3j%C3%A1nak-%C3%A9rdekess%C3%A9gei" rel="noopener noreferrer">link here</a>), but now we will focus on an interesting aspect:

Let's take customer import as an example! In ERPNext, a customer, whether an individual or an organization, is an entity that can have multiple addresses and contacts. Since these are separate entities in ERPNext, they need to be imported separately, and what makes it even more complicated is that they need to be linked together, which can only be done if the entity we want to link to already exists in the system, i.e., it has been created/imported first.

However, there is an exception, which is also a useful tip: If there is a primary contact and address that you want to import for a customer, you can upload it directly during the customer import, so you don't have to import three separate spreadsheets.

But if a customer has multiple contacts and/or addresses, it is important to follow the following steps:

The "Link Name" column is the key to link these entities. It won't be filled in the example downloadable spreadsheet (which is recommended to use for importing), but you can fill it manually.

First, create the contacts and customers. Then, using the spreadsheet editor, perform the magic so that when importing the addresses, the "Link Name" column gets populated, linking the imported address to the customer (you enter the customer in this column).

So, first import the customers, then import the addresses.

Fortunately, the import tool tells you quite well what the problem is in case of an error, so you have the opportunity to correct it and try again.
