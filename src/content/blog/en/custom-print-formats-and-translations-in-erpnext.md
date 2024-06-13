---
title: Custom Print Formats and Translations in ERPNext

draft: false
author: Admin
tags:
  - erpnext
image:
  src: /krystal.jpg
  alt: ERPNext
snippet: ""
publishDate: 2022-09-29 11:39
category:
  - how-to
language: en-us
---

It is good to know that in ERPNext, custom print formats do not automatically display the header and footer. You can set the header as follows:

```
{% if letter_head and not no_letterhead -%}
{% if print_settings.repeat_header_footer %}
   <br>  <div class="letter-head">{{ letter_head }}</div>
{%- endif %}{%- endif %}
```

You should follow a similar approach for the footer.

However, one thing to keep in mind is that the system offers translations only for the built-in (Standard) print formats. If you create a custom print format (based on an existing one), the labels must be entered in English as follows:

```
{{ _("Field Label Text in English") }}
```

Later, you can use the ERPNext built-in translation tool to translate the labels into your desired language.
