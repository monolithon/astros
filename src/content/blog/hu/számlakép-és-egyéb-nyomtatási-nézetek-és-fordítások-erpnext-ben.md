---
title: Számlakép és egyéb nyomtatási nézetek és fordítások ERPNext-ben

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
  - telepítés-és-beállítás
---

Jó tudni, hogy az ERPNext-ben egyedi nyomtatási formátumoknál nem jelenik meg automatikusan a fejléc és lábléc. A fejlécet így lehet beállítani:

```jinja
{% if letter_head and not no_letterhead -%}
{% if print_settings.repeat_header_footer %}
  &nbsp; &lt;br&gt; &nbsp;&lt;div class="letter-head"&gt;{{ letter_head }}&lt;/div&gt;
{%- endif %}
{%- endif %}
```

Hasonlóan kell eljárni a lábléccel is.

Ami viszotn még csalóka, hogy a rendszer alapból csak a gyári (Standard) nyomtatási képekhez kínál fordítást. Így ha saját, egyedi nyomtatási képet készítünk (akár egy meglévő alapján), akkor a címkéket az alábbi módon kell megadnunk angolul:

```jinja
{{ _("Field Label Text in English") }}
Majd az ERPNextbe beépített fordítási varázslóval lefordítnai a kívánt nyelvre.
```
