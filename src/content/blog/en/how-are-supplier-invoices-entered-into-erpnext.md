---
title: How are Supplier Invoices Entered into ERPNext?
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /hogyan-kerülnek-be-a-szállítói-számlák-az-erpnext-be.jpg
  alt: ERPNext
snippet: There are several ways to do this. One of the simplest is to create a Purchase Invoice from a Purchase Order in the system.
publishDate: 2022-10-16 11:39
category:
  - news
language: en-us
---

Another solution is to create a Supplier Invoice based on the received items and the registered Delivery Note in the system.

However, I am writing this post to show the process we have developed in the Monolithon Hungarian ERPNext system, which involves using several other software but results in a very simple, stable, and efficient solution:

On Android, we use the [Microsoft Lens - PDF Scanner](https://play.google.com/store/apps/details?id=com.microsoft.office.officelens&hl=en&gl=US) app to easily and quickly create high-quality images of multi-page invoices, which we save as PDF files on our phones. We have tried many similar programs, but this one is the most user-friendly, surprisingly made by Microsoft.

From here, we don't have much to do, as the [FolderSync](https://play.google.com/store/apps/details?id=com.microsoft.office.officelens&hl=en&gl=US) Android app synchronizes the invoices to the [Nextcloud](https://nextcloud.com/) system in the background, from where [n8n](https://n8n.io/cloud?ref=monolithon&utm_source=affiliate) sends them to the email inbox reserved for receiving incoming invoices, which ERPNext scans.

This way, we can manually attach the received invoice images to the Supplier Invoice in ERPNext. This is useful, for example, when we automatically download supplier invoices from the National Tax and Customs Administration (NAV) in bulk, and they are already in the system, and we just want to attach the synchronized invoice images.

Alternatively, for lower invoice volumes, the process can be reversed. We can use the soon-to-be-ready solution, which will allow ERPNext to automatically prepare a Supplier Invoice from the email received in the inbox reserved for invoices. We can then manually select/create the supplier on the prepared document and copy the unique invoice (line) number from the received PDF document - for example, using this [chrome extension](https://chrome.google.com/webstore/detail/copyfish-%F0%9F%90%9F-free-ocr-soft/eenjdnjldapjajjofmldgmkjaienebbj) - and then automatically fetch the invoice data from the NAV system with the update button.

It may seem a bit long when written down, but you will see in the video how convenient it is in practice because we combined the processing of PDFs directly received from suppliers via email with the automatic upload of documents we photographed, and we even skipped the expensive OCR because we actually don't need it, although we could easily integrate it into n8n or ERPNext if needed.

Update:

In most cases, the Office Lens Android app includes the OCR function, as it generates searchable PDFs in most cases. Except for poor-quality images, the app won't process the text in the image. ;)
