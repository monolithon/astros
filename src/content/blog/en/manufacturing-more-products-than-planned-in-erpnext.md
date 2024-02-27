---
title: Manufacturing More Products Than Planned in ERPNext

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

As a counterpart to the previous tip, there might be situations where you need to manufacture more products than originally planned. For example, this can happen when a certain subassembly arrives in packaging that you want to fully utilize. As a result, you need to produce more finished goods to avoid wasting any partially used materials.

In such a case, you can split the manufacturing order into two steps:

1. First, close the manufacturing order with the original planned quantity.
2. Then, create a stock entry with the type "Manufacture" where you select the materials from the BOM (Bill of Materials) list. Make sure not to link it to the manufacturing order.

By following these steps, you have manufactured more products, and everything is accurately documented. If needed, you can refer to the manufacturing order and stock entry in the comment section for traceability.
