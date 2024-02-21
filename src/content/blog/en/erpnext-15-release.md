---
title: ERPNext 15.0 release
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /ERPNext-15-release.jpg
  alt: ERPNext
snippet: The release of ERPNext 15 was indeed preceded by this year's Frappeverse, the ERPNext conference, but largely, it was also about the new version.
publishDate: 2023-11-11 12:39
category:
  - news
---

The release of ERPNext 15 was indeed preceded by this year's Frappeverse, the ERPNext conference, but largely, it was also about the new version. Therefore, there won't be a separate report on this, unlike in previous years.
<img src="/images/ERPNext-15-release.jpg">

Now, however, I can not only report on the release of ERPNext 15 and the updates but am delighted to announce that from today, the ERPNext 15 version is available on the Frappe Cloud, making it easy for anyone to try out.

One striking change visible in the above ERPNext 15 screenshot is the design alteration. This was already known as those following the Twitter/GitHub ERPNext/Frappe pages could witness the concerted efforts on the <a href="https://frappeui.com/">Espresso Design System</a> components. The responsive design works swiftly, even on mobile devices.
The speed and acceleration are not solely due to this but owe much to over 800+ commits that improved stability and speed. A big thanks to Ankush Menat for this!
For a comprehensive overview, especially from the release announcement post, I am picking snippets from here: <a href="https://discuss.frappe.io/t/frappe-and-erpnext-v15-release/111702">https://discuss.frappe.io/t/frappe-and-erpnext-v15-release/111702</a>.
For those interested in the complete changelog, I recommend checking out the GitHub ERPNext and Frappe 15.0 release summaries:

<a href="https://github.com/frappe/frappe/releases/tag/v15.0.0">https://github.com/frappe/frappe/releases/tag/v15.0.0</a>
<a href="https://github.com/frappe/erpnext/releases/tag/v15.0.0">https://github.com/frappe/erpnext/releases/tag/v15.0.0</a>

What else should be highlighted regarding the new ERPNext 15 and Frappe versions?

1. Much of the focus is on speed and scalability, thus, the closure of ledger accounts is worth mentioning first. Although similar functionality existed before, primarily used annually, it will now simplify future operations.
1. We've received a new preview of the accounting entries that will be created upon submitting a particular transaction. This might be familiar from Odoo, as they've been displaying this for a while now.
1. There's now the option to reserve products/inventory during the order process.
1. Multi-level Bill of Materials management is simpler with the new editor.
1. The handling of custom serial numbers, previously cumbersome, has been standardized and streamlined.
1. The printing image editor and workflow designer, which I previously wrote about, have been integrated.

From a developer's perspective, it's interesting that they removed many outdated packages and updated several things; for instance, vue3 is now supported. From now on, submittable doctypes can be sent as background operations. Some ERPNext modules continue as separate apps (like TaxJar, Lending, and localizations).

Not only did they continue the app separation that began with the 14th version, especially in the realm of e-commerce, but new Frappe solutions were also developed, inspired by FrappeDesk - helpdesk.

While CRM still exists within ERPNext, alongside many other apps, they announced Frappe CRM, which integrates VOIP phone calls and call recording.

<img src="/images/Frappe-CRM.png">

And there are many more new features, which I'll report on in more detail later.
