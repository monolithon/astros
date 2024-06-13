---
title: The First New Feature of ERPNext 14
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /a-14-es-verzió-első-új-funkicója.png
  alt: ERPNext
snippet: You can track on GitHub the new features and improvements that are included in the new versions. Now, the limitation of kanban cards has been removed.
publishDate: 2022-04-12 11:39
category:
  - news
language: en-us
---

The kanban board has been very useful, as it could be used for various purposes, especially in project management. A new, frequently requested feature has now been implemented by an ERPNext development partner with the support of ERPNext/Frappe developers.

This feature addresses the limitation of what information is displayed on a kanban card. Previously, this information was fixed within ERPNext. That means on every kanban card, only the card name appeared, or in the case of tasks, the name of the task, the assignee, and the priority.

With ERPNext's new feature, we can now choose what information we want to display on the cards. This can be especially useful, as in a previous project, it would have been beneficial to show identifiers received from an external system on ERPNext kanban cards, but unfortunately, this was not possible. Now, it is possible. I'll show you how to select new fields in the image below. Of course, there are limitations, as fields with long text or HTML content cannot fit on a card, so these types of fields cannot be selected for display on the card.

![Image 1](/images/8UTvjIn.png)

![Image 2](/images/XSO3Ltr.png)

The forum post:
[https://discuss.erpnext.com/t/improved-kanban-board/88414](https://discuss.erpnext.com/t/improved-kanban-board/88414)

and the GitHub issue link:
[https://github.com/frappe/frappe/pull/16257](https://github.com/frappe/frappe/pull/16257)
