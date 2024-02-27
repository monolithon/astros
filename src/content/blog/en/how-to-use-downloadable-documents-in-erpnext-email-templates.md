---
title: How to Use Downloadable Documents in ERPNext Email Templates

draft: false
author: Tibor Gede
tags:
  - erpnext
image:
  src: /krystal.jpg
  alt: ERPNext
snippet: In this example (for Delivery Note), you can use the following code to include a link to download the document in your email template
publishDate: 2023-05-9 11:39
category:
  - how-to
---

Example (for Delivery Note):

```python
{{frappe.get_url()}}/delivery_note/{{doc.name}}?key={{frappe.get_doc(doc.doctype, doc.name).get_signature()}}
```

Source:<a href="https://discuss.frappe.io/t/how-to-add-document-link-in-email-template/47853/6" rel="noopener noreferrer">https://discuss.frappe.io/t/how-to-add-document-link-in-email-template/47853/6</a>
