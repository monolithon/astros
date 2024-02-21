---
title: Data Synchronization Made Easy with ERPNext's Data Import c
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /adatszinkronizálás-egyszerűen-az-erpnext-adatimport-funkciójának-érdekességei.png
  alt: ERPNext
snippet: Most ERP implementations aim to minimize the use of Excel and automate manual work. But without a (good) data import feature, there is no ERP.
publishDate: 2021-08-23 11:39
category:
  - news
---

Why is this post a continuation of the one about form creation? Because I wouldn't recommend using external software alongside ERPNext if it doesn't meet two requirements:

1. Offer a quality solution, and ideally the best one available
1. Provide an easy integration solution if needed

In the free version of the form creator presented, there is an option to automatically save the responses received in a Google Sheet spreadsheet.

Why is this interesting and how does it relate?

Because like all (good) ERP/Business/Management software, ERPNext allows for easy data import and export. This is also the case with ERPNext, but the developers have taken it a step further. Instead of just uploading a spreadsheet as seen in competing products, ERPNext provides a truly innovative solution.

Of course, you can stick with the classic and well-established method where you first create a dataset with example data in the ERP interface, for example, a lead in the CRM module, and then export it to use it as an import template.

But what is the extra? Drumroll, please:

In ERPNext, you have the option to import data from an online Google Sheet spreadsheet by simply providing the URL of the online spreadsheet.

Yes, using the <a href="https://tally.so/?ref=monolithon" rel="noopener noreferrer">Tally.so</a> example again, imagine creating a form where visitors can fill it out, and based on their answers, they receive a rating or some useful content. At the same time, the leadscore technique evaluates the visitors, and a lead is created in the aforementioned Google Sheet spreadsheet. With one click, we can import this new lead into our ERPNext system, along with all the data of the form filler, and from there, the sales colleagues can take the process further within ERPNext.

In addition to the traditional data import process, the import from Google Sheet is also thoroughly documented at the following link:

<a href="https://docs.erpnext.com/docs/v13/user/manual/en/setting-up/data/data-import" rel="noopener noreferrer">https://docs.erpnext.com/docs/v13/user/manual/en/setting-up/data/data-import</a>
