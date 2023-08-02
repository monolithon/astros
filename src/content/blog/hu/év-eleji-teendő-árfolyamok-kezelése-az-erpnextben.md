---
title: Év eleji teendő - árfolyamok kezelése az ERPNextben
draft: false
author: Admin
tags:
    - news
    - monolithon
    - erpnext
image:
      src: /év-eleji-teendő-árfolyamok-kezelése-az-erpnextben.jpg
      alt: ERPNext
snippet: Az ERPNext korábban is képes volt az aktuális árfolyamokat kezelni, azonban az aktuális átváltási árfolyamok kezelésében történ egy kis változás, amivel érdemes tervezni.
publishDate: 2023-07-17 11:39
category:
    - news
---

<p>A magyar szabályozás szerint a könyvelésünkben az árfolyamok kezelésére három lehetőség közül választhatunk:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>MNB szerinti árfolyamot használunk.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>A saját bankunk árfolyamait használjuk.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Az Európai Központi Bank árfolyama alapján számolunk el.</li></ol><p><br></p><p>Mivel az ERPNext automatikusan a <a href="exchangerate.host" rel="noopener noreferrer">exchangerate.host</a> rendszeréből tölti le az árfolyamot, ahol szerencsére elérhető az Európai Központi Bank (ECB) árfolyama (a korábban <a href="frankfurter.app" rel="noopener noreferrer">frankfurter.app</a>-ból kapott adatokkal szemben), ezért célszerű erre váltani, de erre csak évente egyszer van lehetőség, ezért most írok róla.</p><p><br></p><p>Ezzel még azonban nem vagyunk teljesen kész, mert az ECB árfolyama ugyan elérhető a <a href="https://api.exchangerate.host/latest?source=ecb" rel="noopener noreferrer">https://api.exchangerate.host/latest?source=ecb</a> API-n, de mivel az ERPNext nem azt hívja alapértelmezettként, ezért ezt még módosítani kell. Illetve az aznapi árfolyamot hívja, amit szintén finomítani kell, mert a teljesítési dátum az nem biztos, hogy aznapi.</p><p><br></p><p>Természetesen kézzel bármikor, bármilyen árfolyam rögzíthető a rendszerbe, de ha ezt is szeretnénk automatizálni, akkor ahhoz, hogy szabályosak legyünk, célszerű a fenti módszert alkalmaznunk.</p><p><br></p><p>Az exchangerate.host-ra való váltás részletei:</p><p><a href="https://github.com/frappe/erpnext/pull/26237" rel="noopener noreferrer">https://github.com/frappe/erpnext/pull/26237</a></p>

<p><span style="color: rgb(187, 187, 187);">Az oldalon található információk ajánlatnak nem minősülnek. </span></p>

