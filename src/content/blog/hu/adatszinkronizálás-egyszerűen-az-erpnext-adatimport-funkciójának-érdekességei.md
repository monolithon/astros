---
title: Adatszinkronizálás egyszerűen az ERPNext adatimport funkciójának érdekességei
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-és-az-új-shopify-ecommerce-integráció-webáruházakhoz.png
  alt: ERPNext
snippet: A legtöbb ERP bevezetés azt a célt szolgálja, hogy minimalizálja az excelek használatát és a sok manuális munkát automatizálja. De adatimport funkció nélkül nincs (jó) ERP.
publishDate: 2021-08-23 11:39
category:
  - hír
language: hu
---

Miért is folytatása ez a bejegyzés az űrlap készítésről szólónak? Mert nem ajánlanék külső szoftver használatot az ERPNext mellett, ha az nem teljesítene két feltételt:

1. Nyújtson minőségi megoldást, mégpedig a jelenleg elérhető legjobbat
2. Legyen megoldás az egyszerű összekapcsolásra, ha az szükséges

A bemutatott űrlapkészítő ingyenes változatában is lehetőség van arra, hogy az űrlapon beérkezett válaszokat automatikusan egy Google Sheet táblázatba mentsük.

Miért érdekes ez és hogy jön ide?

Úgy, hogy mint minden (valamire való) ERP/Üzleti/Ügyviteli szoftver lehetővé teszi az adatok könnyű importálását és exportálását. Így van ez az ERPNext esetében is, azonban itt egy lépéssel továbbmentek a fejlesztők, ugyanis, nem csak feltölthetünk egy táblázatot, mint a konkurenseknél, hanem egy merőben újszerű megoldással is szolgál a rendszer.

Persze maradhatunk a klasszikus, jól bevált módszernél, ahol előbb az ERP felületén létrehozunk egy példa adatokat tartalmazó adathalmazt, például egy leadet a CRM modulban, majd ezt exportáljuk, hogy ezt a utána import sablonként használhassuk.

De mi ez az extra? Dobpergés:

Az ERPNext-ben lehetőség van arra, hogy egy Google Sheet táblázat online elérhető URL-jét megadva, az online táblázatból importáljunk adatot az ERPNext-be.

Igen, a [Tally.so](https://tally.so/?ref=monolithon) példánál maradva, ahol például egy olyan űrlapot készítünk, aminek kitöltésével akár valami hasznos tartalomhoz, pl. a válaszok automatikus feldolgozása alapján értékelést kap a látogató, valamint számunkra is megtörténik az ügyfélminősítés azzal a bizonyos leadscore technikával és lead jön létre az említett Google Sheet táblázatban, onnan egy kattintással behúzhatjuk ezt az új leadet az ERPNext rendszerünkbe, pontosabban tömegesen az összes kitöltő adataival együtt, ahonnan már az értékesítő kollégák az ERPNext-en belül vihetik tovább a folyamatot.

A hagyományos adat import folyamat mellett a Google Sheet táblázat import is részletesen dokumentálva van a következő címen:
[https://docs.erpnext.com/docs/v13/user/manual/en/setting-up/data/data-import](https://docs.erpnext.com/docs/v13/user/manual/en/setting-up/data/data-import)
