---
title: ERPNext GoCardless Module Now Available
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-gocardless-03.png
  alt: ERPNext GoCardless
snippet: ERPNext GoCardless app arrived!
publishDate: 2023-12-27 13:39
category:
  - news
language: en-us
---

ERPNext Bank Synchronization with GoCardless Integration not just for Hungarian Banks

From the beginning, it has been possible to import bank transactions into the ERPNext ERP/CRM system to ensure the reliability of our accounting by reconciling these bank transactions with the payment entries recorded in our system.

As bank transactions became available through various aggregator platforms, such as Plaid, ERPNext quickly implemented this to allow ERPNext users to synchronize bank data from available banks through the Plaid system. This still works today, but as Hungarian users, we had to acknowledge that we cannot wait for Hungarian bank data to be available in the Plaid system, as it is an American company where even Western European banks are considered special.

While more Hungarian businesses are switching to alternative banks such as Revolut or Wise, and although these are accessible through the Plaid system with some tricks, we had to wait for a convenient solution until an aggregator platform made the data available, and a necessary ERPNext module was developed.

This is where we are now. The work started with selecting the aggregator platform. We looked at many options. One of the largest and preferred by larger organizations is <a href="https://aggreg8.io/">https://aggreg8.io/</a>. We could have chosen the solution from <a href="https://docs.openbanking.klarna.com/">https://docs.openbanking.klarna.com/</a>, but we opted for the service that was then known as Nordigen, which has since been acquired and rebranded by GoCardless. We don't regret it because the service was good even before, and it's now in very capable hands at GoCardless.

To use our created GoCardless solution, you need a GoCardless bank account data account, and the free one is sufficient as it allows almost unlimited queries: <a href="https://bankaccountdata.gocardless.com/">https://bankaccountdata.gocardless.com/</a>

Afterward, you only need to generate a Secret ID and Secret key pair on the GoCardless interface, which you then provide under the ERPNext Gocardless Settings in your own ERPNext instance. The last step is to add a new GoCardless Bank, where you can choose from the list of banks available for the selected country.

Of course, you can connect this to your ERPNext bank account and manually or automatically synchronize bank transactions.
For further details and ordering, visit the dedicated page: <a href="https://www.monolithon.com/gocardless">https://www.monolithon.com/gocardless</a>
