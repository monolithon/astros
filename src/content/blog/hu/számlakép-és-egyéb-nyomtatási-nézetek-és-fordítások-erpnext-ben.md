---
title: Számlakép és egyéb nyomtatási nézetek és fordítások ERPNext-ben

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
publishDate: 2022-09-29 11:39
category:
  - telepítés-és-beállítás
---

<div class="ql-editor read-mode"><p>Jó tudni, hogy az ERPNext-ben egyedi nyomtatási formátumoknál nem jelenik meg automatikusan a fejléc és lábléc. A fejlécet így lehet beállítani: </p><pre class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">{% if letter_head and not no_letterhead -%}</div><div class="ql-code-block">{% if print_settings.repeat_header_footer %}</div><div class="ql-code-block"> &nbsp; &lt;br&gt; &nbsp;&lt;div class="letter-head"&gt;{{ letter_head }}&lt;/div&gt;</div><div class="ql-code-block">{%- endif %}{%- endif %}</div></pre><p><br></p><p>Hasonlóan kell eljárni a lábléccel is. </p><p><br></p><p>Ami viszotn még csalóka, hogy a rendszer alapból csak a gyári (Standard) nyomtatási képekhez kínál fordítást. Így ha saját, egyedi nyomtatási képet készítünk (akár egy meglévő alapján), akkor a címkéket az alábbi módon kell megadnunk angolul: </p><p><br></p><pre class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">{{ _("Field Label Text in English") }}</div></pre><p><br></p><p>Majd az ERPNextbe beépített fordítási varázslóval lefordítnai a kívánt nyelvre. </p></div>
