---
title: ERPNext, BI és üzleti intelligencia+Metabase
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-bi-és-üzleti-intelligencia-metabase.png
  alt: ERPNext
snippet: Az ERPNext-re érdemes úgy tekintenünk, mint egy adattárházra és minden fontos üzleti adat központi tárolóegységére.
publishDate: 2023-02-9 11:39
category:
  - hír
language: hu
---

Azt már több bejegyzésben megemlítettem, hogy ahhoz, hogy üzleti folyamatainkat jól szervezhessük, átláthassunk a káoszon, vagy éppen uraljuk, vagy legalábbis meglovagoljuk a hullámokat a vállalkozás tengerén, ahhoz kell egy jó szoftver. Ezzel kapcsoaltban több iskola létezik. Én azt vallom, hogy a sok sziget jellegű megoldás helyett célszerű egy integrált rendszert választani. Erre kiválóan alkalmas az ERPNext rendszer főleg azért, mert nem úszhatjuk meg bizonyos külső rendszerek integrálását és ezt az ERPNext egyszerűen lehetővé teszi. És ez mégis könnyebb, mint ha minden egyes elemet kellene összekapcsolni és nem lenne egy központi felületünk, hanem minden adat más-más rendszerben lenne.

Ebbe az adattárház felfogásba illeszkedik, hogy hamár minden üzleti adatot az ERPNext rendszerben tárolunk, akkor szeretnénk is hozzáférni. És nem csak hozzáférni, hanem riportokat kapni. Az ERPNext jelentéskészítő funkciója lehetővé teszi, hogy a felhasználók (megfelelő jogosultság mellett, bár ez az ERPNext esetén egy külön téma lehetne) széleskörű adatokat gyűjtsenek össze és elemezzenek, hogy jobb döntéseket hozhassanak.

Az ERPNext riport funkciója lehetővé teszi, hogy dinamikusan létrehozzunk jelentéseket, adatokat rendezzünk, például szűrőkkel és összehasonlítsunk. Mindezt persze csak akkor tudjuk megtennie ha az adatok benne vannak az ERPNext-ben, ezért javaslom ezt elsődleges adattárháznak. Az ERPNext jelentéskészítője alapból elérhető és van pár beépített fontos riport is a rendszerben, De a különböző alap nézetek, mint a Lista, KanBan, Dashboard mellett ott a Riport nézet amivel saját riportokat állíthatunk össze és el is menthetjük őket. Sők akár ezekről email-es értesítéseket is kaphatunk. Még akár úgyis, hogy csak bizonyos változásokról küldjön a rendszer.

Az ERPNext az üzleti elemzés területén még eggyel továbbment az eddig bemutatott riportokat vizualizációval is kiegészítette, ahogy az a fenti képen is látható. Különböző diagramokkat állíthatunk össze a szükgséges információk és adatok alapján. A világ azonban változik és az igények is. Ahogy az előző bejegyzésben tettünk egy kis kitekintést az egyik legmodernebb technológia az <a href="https://www.monolithon.com/blog/hirek/erpnext-%C3%A9s-a-chatgpt" rel="noopener noreferrer">OpenAI, ChatGPT</a> világába, úgy most a riportok jövőjét szeretném megmutatni:

### BI - Business Intelligence - üzleti intelligencia szoftverek

Manapság az elemzők a riportok helyett inkább kérdéseket szeretnek megfogalmazni és arra egyből választ kapni. Ezt a felfogást követi a legtöbbi üzleti intelligencia szoftver, mint például a legismertebb PowerBI is, de mivel jobban szeretem az ingyenes, nyílt forrású szoftvermegoldásokat, ezért inkább a Metabase-t ajánlom erre a célra. Azért is, mert ezt nagyon könnyű az ERPNexttel összekapcsolni és könnyen választ kaphatunk kérdéseinkre, vagy még talán az ERPNext-nél egyszerűbben is készíthetünk vele riportokat.

Sőt, ami szintén nagyon hasznos, hogy nem csak adatok használatára használhatjuk a Metabase szoftvert az ERPNext-tel összekötve, például ezen leírás alapján: <a href="https://discuss.frappe.io/t/guide-how-to-install-metabase-dashboard-along-with-erpnext-on-ubuntu-18-04-server/53075" rel="noopener noreferrer">https://discuss.frappe.io/t/guide-how-to-install-metabase-dashboard-along-with-erpnext-on-ubuntu-18-04-server/53075</a>

Hanem akár arra is van mód, hogy a Metabase-ben összeállított riportokat, adatokat, stb-t, az ERPNext-ten belül jelenítsük meg, így ugyan használunk egy nagy tudású üzleti intelligencia BI szoftvert, de még el sem kell hagynunk az ERPNextet. A megoldás részletei itt találhatóak: <a href="https://github.com/pipech/frappe-metabase" rel="noopener noreferrer">https://github.com/pipech/frappe-metabase</a>

<img src="/jF7FETk.jpg">

Mivel tényleg néhány kattintás volt összekapcsolni az ERPNextet és a Metabase-t ezért ideteszek egy képernyőt ahol a demó rendszerben található Sales Invoice - Értékesítési számlák listáját lehet látni az Metabase-en belül, ami az ERPNext-ből származik, valós időben. Amiért még nagyon izgalmas a Metabase az az, hogy akár több adatforrásból jövő adatokkal is dolgozhatunk benne egyszerre. Ez akár a szigetes rendszerek esetében is segítségünkre lehet, vagy az ERPNext integrált rendszerhez nem kapcsolódó, például külső hirdetési rendszerekből érkező adatok elemzését is nagyban megkönnyítheti. És akkor abba még nem is gondoltunk bele, hogy ha ezekre engedjük rá a mesterséges inteligenciát akkor mi mindenre leszünk képesek. Mert például már arra is van példa az egyik legújabb termék esetében, hogy adatbázison belül használjuk a mesterséges inteligenciát: <a href="https://mindsdb.com/natural-language-processing-in-databases" rel="noopener noreferrer">https://mindsdb.com/natural-language-processing-in-databases</a>

Mielőtt bárki belevág, azt még talán fontos megemlíteni, hogy a Metabase közvetlenül a Mysql adatbázishoz csatlakozik, ezért célszerű a tesztrendszerhez kapcsolódni és nem az éleshez.
