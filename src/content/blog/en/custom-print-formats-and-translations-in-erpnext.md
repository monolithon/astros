---
title: Custom Print Formats and Translations in ERPNext

draft: false
author: Admin
tags:
    - how-to
    - monolithon
    - erpnext
image:
    src: /krystal.jpg
    alt: ERPNext
snippet: ""
publishDate: 2023-07-17 11:39
category:
    - how-to
---

<div class="ql-editor read-mode"><p>It is good to know that in ERPNext, custom print formats do not automatically display the header and footer. You can set the header as follows:</p><pre class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">{% if letter_head and not no_letterhead -%}</div><div class="ql-code-block">{% if print_settings.repeat_header_footer %}</div><div class="ql-code-block"> &nbsp; &lt;br&gt; &nbsp;&lt;div class="letter-head"&gt;{{ letter_head }}&lt;/div&gt;</div><div class="ql-code-block">{%- endif %}{%- endif %}</div></pre><p><br></p><p>You should follow a similar approach for the footer.</p><p><br></p><p>However, one thing to keep in mind is that the system offers translations only for the built-in (Standard) print formats. If you create a custom print format (based on an existing one), the labels must be entered in English as follows:</p><p><br></p><pre class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">{{ _("Field Label Text in English") }}</div></pre><p><br></p><p>Later, you can use the ERPNext built-in translation tool to translate the labels into your desired language.</p></div>
