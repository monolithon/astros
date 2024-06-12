---
title: Analytical Accounting, Cost Centers, and Profit Centers in ERPNext

draft: false
author: Admin
tags:
  - erpnext
image:
  src: /krystal.jpg
  alt: ERPNext
snippet: ""
publishDate: 2022-09-10 11:39
category:
  - how-to
language: en-us
---

This is just a short note in response to a frequently asked question about how to correct the cost center fields on submitted documents, typically on invoices, when they are missing or set incorrectly.

The general answer to this is that it cannot be done. This is because ERPNext is based on a double-entry accounting system, which must ensure the integrity of the data. Also, these documents should ideally be submitted after careful review by someone familiar with the specific area to ensure they are error-free. Alternatively, you can set up the automation correctly to allow users without specific knowledge to submit documents they are entitled to. Thus, correcting the cost center setting of the original transaction is not possible.

What options do we have to handle this limitation then?

One option is to void the incorrect document and create a new one with the correct cost center information, keeping the original date. However, this can be done correctly only if the period has not been closed yet.

Another option is to create a journal entry that corrects the error.

Tip: The third option, which is the reason for the existence of this short ERPNext Hungarian knowledge base article, is to use the "Accounting Dimensions" feature as an alternative. This feature allows us to make changes to submitted documents retroactively. This is a good solution because, in fact, the cost center is one of these accounting dimensions, just a special one. Therefore, we can easily achieve the desired goal by using the "Accounting Dimensions" feature, but it requires setting up the appropriate accounting dimensions for our organization in advance, beyond just cost centers.
