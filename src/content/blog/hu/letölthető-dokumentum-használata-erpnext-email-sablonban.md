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

<div class="ql-editor read-mode"><p>Példa (Delivery Note-hoz):</p><pre class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">{{frappe.get_url()}}/delivery_note/{{doc.name}}?key={{frappe.get_doc(doc.doctype, doc.name).get_signature()}}</div></pre><p><br></p><p>Forrás:</p><p><a href="https://discuss.frappe.io/t/how-to-add-document-link-in-email-template/47853/6" rel="noopener noreferrer">https://discuss.frappe.io/t/how-to-add-document-link-in-email-template/47853/6</a> </p><p><br></p><p><br></p></div>
