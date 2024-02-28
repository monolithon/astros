---
title: Letölthető dokumentum használata ERPNext email sablonban

draft: false
author: By Tibor Gede
tags:
  - erpnext
image:
  src: /krystal.jpg
  alt: ERPNext
snippet: ""
publishDate: 2023-05-9 11:39
category:
  - telepítés-és-beállítás
---

Példa (Delivery Note-hoz):

```python
{{frappe.get_url()}}/delivery_note/{{doc.name}}?key={{frappe.get_doc(doc.doctype, doc.name).get_signature()}}
```

Forrás:

[https://discuss.frappe.io/t/how-to-add-document-link-in-email-template/47853/6](https://discuss.frappe.io/t/how-to-add-document-link-in-email-template/47853/6)
