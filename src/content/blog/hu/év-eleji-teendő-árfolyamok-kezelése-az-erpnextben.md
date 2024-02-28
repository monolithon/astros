---
title: Év eleji teendő - árfolyamok kezelése az ERPNextben
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /év-eleji-teendő-árfolyamok-kezelése-az-erpnextben.jpg
  alt: ERPNext
snippet: Az ERPNext korábban is képes volt az aktuális árfolyamokat kezelni, azonban az aktuális átváltási árfolyamok kezelésében történ egy kis változás, amivel érdemes tervezni.
publishDate: 2022-01-9 11:39
category:
  - hír
---

A magyar szabályozás szerint a könyvelésünkben az árfolyamok kezelésére három lehetőség közül választhatunk:

1. MNB szerinti árfolyamot használunk.
2. A saját bankunk árfolyamait használjuk.
3. Az Európai Központi Bank árfolyama alapján számolunk el.

Mivel az ERPNext automatikusan a [exchangerate.host](https://exchangerate.host) rendszeréből tölti le az árfolyamot, ahol szerencsére elérhető az Európai Központi Bank (ECB) árfolyama (a korábban [frankfurter.app](https://frankfurter.app)-ból kapott adatokkal szemben), ezért célszerű erre váltani, de erre csak évente egyszer van lehetőség, ezért most írok róla.

Ezzel még azonban nem vagyunk teljesen kész, mert az ECB árfolyama ugyan elérhető a [https://api.exchangerate.host/latest?source=ecb](https://api.exchangerate.host/latest?source=ecb) API-n, de mivel az ERPNext nem azt hívja alapértelmezettként, ezért ezt még módosítani kell. Illetve az aznapi árfolyamot hívja, amit szintén finomítani kell, mert a teljesítési dátum az nem biztos, hogy aznapi.

Természetesen kézzel bármikor, bármilyen árfolyam rögzíthető a rendszerbe, de ha ezt is szeretnénk automatizálni, akkor ahhoz, hogy szabályosak legyünk, célszerű a fenti módszert alkalmaznunk.

Az exchangerate.host-ra való váltás részletei:

[https://github.com/frappe/erpnext/pull/26237](https://github.com/frappe/erpnext/pull/26237)
