---
title: New ERPNext Feature Zero Downtime Operations
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /zero-downtime.jpg
  alt: ERPNext
snippet: For an ERP and business management system, it is critical to be always available and functional when needed. The need for this depends on the peculiarities of the business.
publishDate: 2022-09-10 11:39
category:
  - news
language: en-us
---

![Image](/images/zero-downtime.jpg)

For an ERP and business management system, it is critical to be always available and functional when needed. The need for this depends on the peculiarities of the business. In the industry, we have been talking about 24/7 operations for a long time, but when is it possible to keep a continuously evolving system up-to-date without missing out on emerging and useful features?

This is where the integrated solution in the Frappe framework, which is also used by ERPNext, comes into play by introducing the read-only mode for systems under maintenance.

What does this mean?

Traditionally, during updates and maintenance, ERPNext and Frappe were not accessible to users. This new feature now allows limited access to the system even during maintenance. Users can log in and access data but cannot make any changes or enter new transactions to maintain data consistency.

So, is this a true zero-downtime solution?

Indeed, it is not entirely zero-downtime, but we mention it this way because previously, even backing up larger websites could take longer, and the site was completely unavailable during that time. However, this new solution addresses such issues. It also makes backup processes safer, as there will not be situations where data is being entered while backups are taking place, which could result in faulty backups that would be difficult to use if needed.

Regardless of the new solution, it is still advisable to schedule updates and maintenance carefully and conduct experiments on a test system first. Only perform changes on the live system once you have a working backup.
