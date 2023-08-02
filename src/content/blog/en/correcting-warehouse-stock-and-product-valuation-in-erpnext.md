---
title: Correcting Warehouse Stock and Product Valuation in ERPNext

draft: false
author: Admin
tags:
    - how-to
    - monolithon
    - erpnext
image:
    src: /krystal.jpg
    alt: ERPNext
snippet: ""
publishDate: 2023-07-17 11:39
category:
    - how-to
---

<div class="ql-editor read-mode"><p>During the use of ERPNext, you may encounter special cases like the following:</p><p><br></p><p>When implementing ERPNext, you entered a purchase order in a foreign currency (at a net price), but later found out that you didn't receive the goods. However, the goods still appear in your warehouse. Additionally, other items were received at different prices before and after this incident, and the product valuation should also include shipping and other costs, which are handled by the "Landing Cost" option in ERPNext.</p><p><br></p><p>If you were to perform a simple stock adjustment, it would affect the product valuation, as ERPNext does not allow you to enter a custom value. Instead, it would use the automatically calculated value. In this case, since the stock valuation has two components (the stock value and the supplier value), a simple stock adjustment wouldn't reconcile the supplier value, as it was recorded at a different price.</p><p><br></p><p>A possible solution is to create a Material Issue within the warehouse (Stock) to remove the items from the inventory. For the difference amount, use the supplier invoice as a contra entry or, alternatively, use a technical account and then transfer it to the supplier account. Here's the essence of the solution: use a custom exchange rate to eliminate the difference. This custom exchange rate should not be booked as a usual exchange gain or loss. This approach might also work for warehouse stock adjustments. :)</p></div>
