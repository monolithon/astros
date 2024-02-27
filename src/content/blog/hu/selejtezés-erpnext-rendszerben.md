---
title: Selejtezés ERPNext rendszerben

draft: false
author: Admin
tags:
  - erpnext
image:
  src: /krystal.jpg
  alt: ERPNext
snippet: ""
publishDate: 2022-06-30 11:39
category:
  - telepítés-és-beállítás
---

A selejtezés az ERPNextben többéleképpen megoldható.

Az egyik legegyszerűbb a gyártás során történő selejtezés, mert ezt alapból kezeli az ERPNext. De ehhez előtte egy selejt raktárat létre kell hozni ahova a selejtezésre kerülő árukat át lehet a gyártás közben mozgatni.

A másik megoldás a leltározás, készletkiigazítás, de ilyenkor nem lesznek meg a leselejtezett áruk a selejt raktárban, csak kikerülnek az eredeti helyükről és az értékükkel is módosításra kerül a készletérték.

A harmadik megoldás, ami miatt ezt a trükköt írjuk a következő:

Ahogy az első esetben, itt is szükségünk van egy selejt raktárra, de itt nem leltár, sem gyártást nem alkalmazunk, hanem egy értkesítést csinálunk egy alacsonyabb vagy nulla értéken. :)
