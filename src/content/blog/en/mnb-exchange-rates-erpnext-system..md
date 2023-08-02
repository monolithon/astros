---
title: MNB Exchange Rates in ERPNext System
draft: false
author: Admin
tags:
    - news
    - monolithon
    - erpnext
image:
      src: /mnb-árfolyamok-erpnext-rendszerben.png
      alt: ERPNext
snippet: The use of ERPNext system in Hungarian and compliance with Hungarian regulations involve various localization tasks. One of these tasks is handling MNB exchange rates. Let's explore the solution!
publishDate: 2023-07-17 11:39
category:
    - news
---

<p><img src="/mnb-árfolyamok-erpnext-rendszerben.png"></p><p><br></p><p>There was a previous post about exchange rates where I presented the basic ERPNext exchange rate API connections, which was particularly useful for those who want to use the exchange rates from the European Central Bank since they declared it in their accounting policy and to the National Tax and Customs Administration (NAV). There can be advantages and disadvantages to this, just as with using your own bank's exchange rates. The important thing is that ERPNext offers options for everything, as you can manually enter any exchange rate, but who wants to manually enter exchange rates when they can be automatically retrieved from the appropriate source, such as the MNB webservice, and it's free?</p><p><br></p><p>Since most companies use MNB exchange rates, you can say it's the standard, so even though I recommended the simpler EKB solution, we can't avoid the MNB exchange rates. Therefore, one of the first steps in implementing the features of my ERPNext Hungarian invoicing solution was to develop MNB integration. As stated on the website, the ERPNext Hungarian invoicing solution will be available soon, and one of its components is the management of MNB exchange rates. This post is to announce that this feature is already working. Currently, it works on SI/PI (Sales Invoice/Purchase Invoice) documents, which means sales and purchase invoices, but the essential part is the established API connection, which can be easily integrated into other places, such as recording payments, etc. This is more like a proof of concept, i.e., a feasibility study, so it doesn't block the entire invoicing service if it cannot be realized for some reason. However, it is completed and working, and it can be done. What's even better is that I made this optional at the company level, meaning that for those who have multiple companies, domestic or even foreign ones, they can work with two separate exchange rate providers for the two companies.</p><p><br></p><p>Here's the setting where you can choose which provider to use instead of the default exchange rate provider:</p><p><br></p><p><img src="/5qr71Fp.jpg"></p>

<p><span style="color: rgb(187, 187, 187);">The information on this page is not an offer.</span></p>
