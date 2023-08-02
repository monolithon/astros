---
title: Year-End Task - Managing Exchange Rates in ERPNext
draft: false
author: Admin
tags:
    - news
    - monolithon
    - erpnext
image:
    src: /év-eleji-teendő-árfolyamok-kezelése-az-erpnextben.jpg
    alt: ERPNext
snippet: ERPNext was already capable of managing current exchange rates, but there's a small change in handling the current conversion rates that is worth considering for planning.
publishDate: 2023-07-17 11:39
category:
    - news
---

<p>According to Hungarian regulations, there are three options for managing exchange rates in our accounting:</p>
<ol>
<li data-list="bullet">Using the exchange rates defined by the Hungarian National Bank (MNB).</li>
<li data-list="bullet">Using our bank's exchange rates.</li>
<li data-list="bullet">Settling based on the exchange rates of the European Central Bank (ECB).</li>
</ol>
<p><br></p>
<p>Since ERPNext automatically fetches exchange rates from the <a href="exchangerate.host" rel="noopener noreferrer">exchangerate.host</a> system, where the exchange rates of the European Central Bank (ECB) are available (unlike the data obtained from <a href="frankfurter.app" rel="noopener noreferrer">frankfurter.app</a>), it is advisable to switch to using ECB rates. However, this switch can only be done once a year, so I am writing about it now.</p>
<p><br></p>
<p>However, we are not entirely ready yet, as ERPNext does not call the ECB rates by default, so some modifications are required. Additionally, it fetches the rates for the current date, which also needs some refinement since the settlement date might not always be the same as the current date.</p>
<p><br></p>
<p>Of course, you can manually enter any exchange rate into the system at any time, but if you want to automate this process, it's advisable to follow the method mentioned above to ensure compliance.</p>
<p><br></p>
<p>Details of the switch to exchangerate.host:</p>
<p><a href="https://github.com/frappe/erpnext/pull/26237" rel="noopener noreferrer">https://github.com/frappe/erpnext/pull/26237</a></p>
