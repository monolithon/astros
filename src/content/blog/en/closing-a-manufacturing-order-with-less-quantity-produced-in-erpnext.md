---
title: Closing a Manufacturing Order with Less Quantity Produced in ERPNext

draft: false
author: Admin
tags:
    - how-to
    - monolithon
    - erpnext
image:
    src: /krystal.jpg
    alt: ERPNext
snippet: ''
publishDate: 2022-06-30 11:39
category:
    - how-to

---
<div class="ql-editor read-mode"><p>In ERPNext, when creating a manufacturing order, we need to decide how much we want to produce. The system can help us with determining the quantity to produce, but that's not what we are looking at right now.</p><p><br></p><p>Let's assume that we want to manufacture 100 pieces of a certain item because that's usually the quantity we produce. However, during the day, we were only able to manufacture 90 pieces, and we do not want to produce the remaining 10 pieces anymore. After closing the production for the 90 pieces with the "Cancel" button, we don't want to see this production in the "Cancelled" status. Since we have completed 90 pieces, we want to have it in a "Completed" status.</p><p><br></p><p>To achieve this, you can use a clever trick by utilizing multiple warehouses during the manufacturing process. Use a "Finished Goods" warehouse and a "Cancelled" warehouse. In the manufacturing order, move the 90 produced pieces to the "Finished Goods" warehouse and the remaining 10 to the "Cancelled" warehouse. This way, you can have the production in the "Completed" status while indicating that 10 pieces have been cancelled.</p></div>