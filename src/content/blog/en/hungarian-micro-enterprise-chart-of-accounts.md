---
title: How to fix incorrect product valuation in ERPNext
draft: false
author: Admin
tags:
  - how-to
  - monolithon
  - erpnext
image:
  src: /krystal.jpg
  alt: ERPNext
snippet: During the initial implementation of ERPNext, we entered a purchase order in a foreign currency (at a net price). Later, it turned out that we did not receive the goods, but they are still present in our warehouse. Additionally,
publishDate: 2023-07-28 11:39
category:
  - How-to
---


During the use of ERPNext, a special scenario may occur, as follows:

During the initial implementation of ERPNext, we entered a purchase order in a foreign currency (at a net price). Later, it turned out that we did not receive the goods, but they are still present in our warehouse. Additionally, before and after this, various products arrived at different prices, and the product's value should also include shipping and other costs, which ERPNext handles using the "Landing Cost" option.

If we were to simply perform a stock adjustment, it would affect the product's value because ERPNext does not allow us to specify a unique value. Instead, it would use the calculated value. (Since accounting always has two sides, the stock value and the supplier's side, in this case, the calculated stock value wouldn't match, and it wouldn't "zero out" the supplier's side as it was recorded with a different value.)

To solve this, one approach is to create a Material Issue within the warehouse (Stock) and use it to remove the goods from our inventory. We can use the supplier's invoice as a differential entry, or we can create a technical invoice and then link it to the supplier's invoice. The crucial point here is that by using a custom exchange rate, the discrepancy can be eliminated. (Of course, we don't book this under the usual exchange rate loss/gain account. And this approach might even work better than a regular stock adjustment. :)