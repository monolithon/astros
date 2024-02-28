---
title: Woocommerce ERPNext integráció
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /woocommerce-erpnext-integráció.png
  alt: ERPNext
snippet: Talán azt tudjátok, hogy az ERPNext alapból egy Woocommerce integrációval érkezik. Ami nagyon jól hagzik, de az ördög itt is a részletekben rejlik.
publishDate: 2021-05-31 11:39
category:
  - hír
---

Nincs nagy titok, azért került bele a Woocommerce integráció az ERPNext-be, mert a Woocommerce az egyik legelterjedtebb blogmotorba integrált ecommerce, azaz webáruház megoldás a világon. De ez csak az egyik fele a dolognak. A másik az, hogy jelenleg az ERPNext-ben található beépített webáruház csak bizonyos korlátok között működik. B2B szolgáltatóknak már most megfelelő lehet, mert ott jellemzően olyan vevők vannak, akik előre regisztráltak, vagy mi magunk regisztráltuk őket és adtunk hozzáférést a webáruházhoz. B2C szektorban azonban zavaró lehet, hogy a vásárlási folyamatot megakasztja a kötelező regisztráció, ami nélkül nem lehet befejezni a vásárlást. És ez a kosár funkció hiányosságával együtt már nagyban rombolhatja a konverziót.

Tudják ezt az ERPNext fejlesztők is, ezért is került be az aktuális roadmapbe és már vannak is fejlesztések a témában, részletek itt: [https://discuss.erpnext.com/t/erpnext-roadmap-for-april-2021/73126/3](https://discuss.erpnext.com/t/erpnext-roadmap-for-april-2021/73126/3)

A gyári Woocommerce integráció az alap igényeket bizonyára kielégíti és mint az alaprendszer része, valószínűleg ez egy hosszútávon támogatott funkció és együttműködés lesz, így üzleti szoftverek választásakor ez egy fontos szempont lehet. Azonban azt is érdemes mérlegelni, hogy ez csupán egy alap integráció, amely a termékeket és a rendeléseket szinkronizálja. Így aki komolyabb dolgokra vágyik annak más megoldás után kell néznie.

Az egyik lehetőség az ERPNext Shopify konnektora, de mivel a Shopify fizetős platform, így nem biztos, hogy mindenkinek elnyeri a tetszését, ezért inkább egy külső fejlesztő által készített bővített Woocomerce integrációt ajánlanék. Ez már a termékvariációk és raktárkészlet szinkronizálásra is képes és a tapasztalat azt mutatja, hogy a legújabb v13 ERPNext-tel is használható.

[https://github.com/Muzzy73/WooCommerceConnector](https://github.com/Muzzy73/WooCommerceConnector)

ui: Van még néhány módszer webáruházak és ERPNext szinkronizálásra, de azokról majd egy külön bejegyzés készül.
