---
title: How to Use Downloadable Documents in ERPNext Email Templates

draft: false
author: Tibor Gede
tags:
    - how-to
    - monolithon
    - erpnext
image:
    src: /krystal.jpg
    alt: ERPNext
snippet: In this example (for Delivery Note), you can use the following code to include a link to download the document in your email template
publishDate: 2023-07-17 11:39
category:
    - how-to
---

<div class="ql-editor read-mode"><p>Example (for Delivery Note):</p><pre class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">{{frappe.get_url()}}/delivery_note/{{doc.name}}?key={{frappe.get_doc(doc.doctype, doc.name).get_signature()}}</div></pre><p><br></p><p>Source:</p><p><a href="https://discuss.frappe.io/t/how-to-add-document-link-in-email-template/47853/6" rel="noopener noreferrer">https://discuss.frappe.io/t/how-to-add-document-link-in-email-template/47853/6</a> </p><p><br></p><p><br></p></div>
