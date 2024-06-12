---
title: Frappe Insights az ERPNext csapattól
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /frappe-insights-az-erpnext-csapattól.png
  alt: ERPNext
snippet: Korábbi ERPNext, BI és üzleti intelligencia+Metabase című blogbejegyzésben direkt nem említettem, hogy a Frappe csapatnak is van hasonló megoldása, mert ezt a külön bejegyzést terveztem neki.
publishDate: 2023-05-9 11:39
category:
  - hír
language: hu
---

## Mi is az a Frappe Insights?

A Frappe Insights GitHub tárolójában és a Frappe Marketplace-n az alábbi meghatározás található: "Free and Open Source Data Analytics Tool for your Frappe Apps" - azaz ingyenes és nyílt forrású adatelemző eszköz a Frappe alkalmazásokhoz.

Oké, de mit is jelent ez pontosan? Aki ismeri az ERPNext-et, az bizonyára már találkozott a Frappe Framework-kel, amit néhány blogbejegyzésben már én is említettem. Ez a egy rugalmas keretrendszer, amin sokféle alkalmazást fel lehet építeni. Ilyen alkalmazás az ERPNext is. Gyakorlatilag az ERPNext is egy app, amit a Frappe Framework-re kell telepíteni, ha használni szeretnénk.

Ebből következik hogy ezt az Insigths appot is a Frappe Framework-re telepíthetjük és akár az ERPNextből, vagy vagy más Frappe-n futó alkalmazásunkból. (és akár más, külső adatforrásokból) is képes adatokat használni.

## Mire lehet használni a Frappe Insights-ot?

A fő funkciók a következők:

1. Több adatforrás - Csatlakozz több adatforráshoz és kérdezd le azokat egy helyen.
2. Komplex lekérdezések - Írj bonyolult lekérdezéseket és kapd meg az eredményeket táblázatos formátumban.
3. Adatok megjelenítése - Jelenítsd meg az adataidat diagramok formájában.
4. Irányítópultok - Hozz létre irányítópultokat az fontos mutatók automatikus nyomon követéséhez.

Hogy mire lehet egy ilyen elemző eszközt használni most részletesen nem mennék bele, ezt a Metabase bejegyzésben már érintettük, nézzünk inkább további érdekességeket a Frappe Insights-ról a továbbiakban, de aki mégis gyakorlati tudásra szomjazik, annak ajánlom a Frappe konferencián elhangzott előadás videófelvételét, amely az alábbi témákból állt:

1. Telepítés
2. Csatlakozás az adatbázishoz
3. ERPNext adatbázis
4. Helyi SQLite adatbázis
5. Távoli MySQL/MariaDB adatbázis
6. Lekérdezések létrehozása
7. Csatlakozások (JOIN)
8. Szűrők
9. Egyéni kifejezések
10. Pivot transzformáció
11. Diagramok készítése
12. Áttekintőképernyők létrehozása

Forrás: [https://frappe.io/events/frappe-insights](https://frappe.io/events/frappe-insights)

Akit a Frappe Insights születése is érdekel és szeretne néhány műhelytitkot is, annak ajánlom a fejelsztővel készült interjút:

[https://frappe.io/blog/product-stories/the-journey-to-insights](https://frappe.io/blog/product-stories/the-journey-to-insights)
