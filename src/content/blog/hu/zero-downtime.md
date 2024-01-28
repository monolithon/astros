---
title: Új ERPNext funkció Üzemeltetés nulla leállással - zero downtime*
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /zero-downtime.jpg
  alt: ERPNext
snippet: Egy ERP, ügyviteli rendszer esetén kritikus, hogy mindig elérhető legyen és működjön, amikor szükség van rá. Hogy mikor van rá szükség az az üzlet sajátosságaitól függ.
publishDate: 2022-09-10 11:39
category:
  - hír
---

<p><img src="/images/zero-downtime.jpg"></p><p><br></p><p>Egy ERP, ügyviteli rendszer esetén kritikus, hogy mindig elérhető legyen és működjön, amikor szükség van rá. Hogy mikor van rá szükség az az üzlet sajátosságaitól függ. Az iparágban már régóta 7/24-ről beszélünk, de akkor mikor lehetséges a folyton fejlődő rendszer naprakészen tartása, hogy a megjelenő és számunkra hasznos fuknciókról nem maradjunk le?</p><p><br></p><p>Erre kínál megoldást a Frappe keretrendszerbe integrált megoldás, amit az ERPNext is használ, mégpedig úgy, hogy bevezeti a karbantartási módba kapcsolt rendszerek olvashatóságát.</p><p><br></p><p>MIt jelent ez?</p><p><br></p><p>Alapvetően frissítések, karbantartások idejére az ERPNext és Frappe a felhasználók számára korábban nem volt hozzáférhető. Ezt oldja fel most ezzel az új funkcióval, hogy lehetővé teszi a rendszer limitált használatát. Azaz karbantarátsi módban is be lehet jelentkezni és hozzáférni az adatokhoz. Megnézhetünk&nbsp;benne bármilyen dokumentumot.</p><p><br></p><p>Mi a trükk?</p><p><br></p><p>A trükk az, hogy írni ilyenkor nem lehet bele, azaz új tranzakciókat, adatokat nem lehet benne rögzíteni, hogy az adatok konzisztenciája ne sérülhessen.</p><p><br></p><p>Akkor ez mégsem nulla leállását lehetővé tevő megoldás?</p><p><br></p><p>Valóban nem teljesen az, de azért említjük így, mert korábban a nagyobb weboldalak esetén akár egy biztonsági mentés is hosszabb időbe telhetett, amíg az oldal egyáltalán nem volt elérhető. Viszont az ilyen jellegű problémákat kezeli ez az új megoldás. És ez a biztonsági mentés készítését is biztonságosabbá teszi például, mert nem fordulhat elő olyan eset, hogy éppen valamilyen adat rögzítése és biztonsági mentés történik egyidőben, aminek akár egy hibás biztonsági mentés is lehet az eredménye, ami megnehezíti annak esetleges használatát ha szükség lenne rá.</p><p><br></p><p>Az új megoldástól függetlenül tehát továbbra is célszerű jól ütemeznünk a frissítéseket, karbantartásokat és persze először tesztrendszeren kísérletezni és csak működő biztonsági mentés esetén végrehajtani az éles rendszeren a változtatásokat.</p>
