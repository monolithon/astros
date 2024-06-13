---
title: Odoo and ERPNext together with Frappe
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /odoo-és-erpnext-a-frappe-vel-együtt.png
  alt: ERPNext
snippet: The Odoo print view editor is not nearly as user-friendly as what Frappe offers for ERPNext, especially the revamped version showcased in the previous post.
publishDate: 2023-07-17 11:39
category:
  - news
language: en-us
---

The Odoo print view editor is not nearly as user-friendly as what Frappe offers for ERPNext, especially the revamped version showcased in the previous post. However, we don't intend to foster competition, and it's not an either-or situation. As we have mentioned on the blog several times, Monolithon uses and supports various software, including Odoo and n8n, alongside ERPNext and Frappe. We believe in finding the right software for the right task, as there is no one-size-fits-all solution.

Hence, this post is more of a report on a humorous PoC (Proof of Concept) about feasibility, created by a colleague who works with Odoo and ERPNext, specifically for designing the aforementioned print image.

The essence of the solution is that in Odoo (in the free Community edition), there is no straightforward way to edit or create new print images. (The paid Odoo Enterprise version offers a solution, but it differs from the straightforward functionality of Frappe.)

To address this situation, the "solution" developed here simply involves using an app to automatically transfer the data to be displayed in the print image from Odoo to Frappe, with just a one-time "linking" of the two systems. Then, in Frappe, the print image created with the mentioned designer solution can be assembled and set up, enabling the automatic generation of the super print image or PDF produced by Frappe when printing from Odoo. (So, there's no need to leave Odoo.)

The practical benefit of this development is doubtful, but we find it interesting and amusing, considering its simplicity and efficiency. As a team supporting Odoo, we have dealt with customizing print images and documents before, and just as we did in the past, we will choose a different path in the future as well. However, it's good to know that there is an alternative to Odoo, not only for print images but also for the entire business management.

For further details about the Odoo module and Frappe's solution, visit: https://ecosoft.frappe.cloud/blog/general/odoo-frappe-print-form
