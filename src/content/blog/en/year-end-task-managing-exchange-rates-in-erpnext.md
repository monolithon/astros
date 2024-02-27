---
title: Year-End Task - Managing Exchange Rates in ERPNext
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /év-eleji-teendő-árfolyamok-kezelése-az-erpnextben.jpg
  alt: ERPNext
snippet: ERPNext was already capable of managing current exchange rates, but there's a small change in handling the current conversion rates that is worth considering for planning.
publishDate: 2022-01-9 11:39
category:
  - news
---

According to Hungarian regulations, there are three options for managing exchange rates in our accounting:

1. Using the exchange rates defined by the Hungarian National Bank (MNB).
1. Using our bank's exchange rates.
1. Settling based on the exchange rates of the European Central Bank (ECB).

Since ERPNext automatically fetches exchange rates from the [exchangerate.host](exchangerate.host) system, where the exchange rates of the European Central Bank (ECB) are available (unlike the data obtained from [frankfurter.app](frankfurter.app)), it is advisable to switch to using ECB rates. However, this switch can only be done once a year, so I am writing about it now.

However, we are not entirely ready yet, as ERPNext does not call the ECB rates by default, so some modifications are required. Additionally, it fetches the rates for the current date, which also needs some refinement since the settlement date might not always be the same as the current date.

Of course, you can manually enter any exchange rate into the system at any time, but if you want to automate this process, it's advisable to follow the method mentioned above to ensure compliance.

Details of the switch to exchangerate.host:
[https://github.com/frappe/erpnext/pull/26237](https://github.com/frappe/erpnext/pull/26237)
