---
title: Periodic or Real-Time Inventory Valuation in ERPNext

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
publishDate: 2022-06-30 11:39
category:
    - how-to
---

<div class="ql-editor read-mode"><p>When using ERPNext, we need to choose between two options: Periodic or Real-Time Inventory Valuation. It is not recommended to switch between these options during operation, so let's understand what these mean:</p><p><br></p><p>Real-Time Inventory Valuation (perpetual inventory) continuously updates the value of our inventory based on recorded economic events (such as procurement, incoming stock, depreciation, sales, etc.). While some companies may require this level of accuracy, for most companies, it is sufficient to perform inventory valuations only a few times a year.</p><p><br></p><p>This periodic inventory valuation can be performed anytime, and in some cases, it is mandatory, such as during the annual closing when we need to know the current value of our inventory at that specific point in time. However, it can be done quarterly, monthly, or at any suitable interval.</p><p><br></p><p>How does this work in practice?</p><p><br></p><p>With periodic inventory valuation, the final inventory value is manually entered into the books after a physical inventory count. As a consequence, until the next physical count, we will see the value that was entered during the previous count, not the current value.</p><p><br></p><p>On the other hand, with real-time inventory valuation, the following happens:</p><p><br></p><p>Every purchase value (including shipping and other costs - landing costs) is automatically recorded in both the procurement and warehouse value. When the warehouse inventory changes, the value recorded on the purchase invoice transfers to the warehouse inventory, thus updating it to match the closing (current) inventory value.</p><p><br></p><p>The calculation is roughly as follows for periodic inventory valuation:</p><p>Opening Inventory + Purchases = Inventory Value, which is available for sale.</p><p>Available Inventory for Sale - Closing Inventory = Value of sold goods.</p></div>
