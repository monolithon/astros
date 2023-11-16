---
title: Villámgyors statikus weboldal astro.build alapokon
draft: false
author: Admin
tags:
    - astro.build
image:
    src: /astro-build-static-website.jpg
    alt: ERPNext
snippet: A monolithon.com továbbra is ERPNext rendszeren fut, de a publikus weboldalt leválasztottuk és már astro.build-et használunk hozzá.
publishDate: 2023-11-11 11:39
category:
    - hír
---

<p>A blog nem szűnt meg, de ahelyett, hogy a szokásos menetben publikáltam volna, úgy döntöttem előbb be kell fejelzni a monolithon.com weboldal átalalakítását. </p></p>Mi is ez az átalakítás? </p></p></p>Sok szempontot mérlegeltünk, például: az egyszerű elindulást/váltást, fejlesztőbarát műkődést, gyorsaságot, testreszabhatóságot, elérhető funkciókat. Végül arra jutottunk, hogy az ERPNext által kiszolgált monolithon.com ERPNext és Odoo blogot leválasztjuk a saját ERPNext rendszerünkről, mert ugyan jól tette a dolgát és nagyon megkönnyítette az életünket, és sokkal több mindent lehetett vele kódolás nélkül megoldani, mint amire nekünk szükségünk volt, de valójában egy vállaltirányítási rendszernek - amire úgy tekintünk, mint az "singe source of true" - nem feladata, hogy a publikus weboldalként is funkcionáljon. </p></p>
Tartalomkezelő CMS-ként használhatnák ugyan, de a végül választott <a href="https://www.monolithon.com/hu/static-site-generator">astro.build</a> megoldás Git-ben történő tartalomkezelése nagyon kényelmes, vagy akár a DecapCMS megoldással böngészőből és használható, így ha már leválasztás, akkor teljes függetlenítés és a tartalom sem jön API-n keresztül, mint egy Headless CMS esetében, hanem teljesen statikus oldalra technológiát valósíttunk meg.</p></p>
Miért?</p></p>
Mert ezzel tudjuk a leggyorsabb oldal élményt garantálni. Ez fontos a látogatóknak és a Google és egyéb rendszerek számára is. Hiszen senki sem szeret várni. Biztonsági szempontból is megnyugtatóbb, ha üzleti adataink és publikus weboldalunk külön életet él. Továbbra is hiszünk az integrált rendszerek használatában, mint az ERPNext vagy az Odoo, de látjuk, hogy minden esetben szükség van másik szoftverre is mellettük, így az a kérdés, hogy hol húzzuk meg a határt, hogy mit szeretnénk benne tartani és mire szeretnénk másik szoftvert használni. </p></p>
Ahhoz, hogy az üzleti adataink "tiszták" maradjanak, viszont legyen megfelelő értékesítést támogató adatunk is, jó döntés volt ez a szeparáció: a weboldalhoz kapcsolódó marketing és sales tevékenységet a Mautic rendszer astro.build-be történő integrálásával oldottuk meg. </p></p>
Ezzel lehetővé vált, hogy a lehető legtöbb - hozzájárulás vagy jogalap szerint - adatot gyűjthessük, elemezhessük, hogy ezzel még jobb szolgáltatást nyújthassunk és támogathassuk automatizált marketing tevékenységünket, és az ERPNextbe már csak az értékesítés következő fázisába kerüljenek adatok. Ezt meg tudjuk csináni az ERPNext és a Mautic között közvetlenül vagy az n8n használatával is. </p></p>
Az astro.build beváltotta a hozzáfűzött reményeket</p></p>
A fejlesztés gyorsan ment és az eredmények is szuperek, ezt a látogató is érzékelheti a gyors böngészés közepette. Az első <a href="https://www.monolithon.com/hu/blog">magyar ERPNext blogként</a> elért Google helyezéseket sikerült tovább javítanunk, mert az oldalstruktúrát és link szerkezetet több lépésben emeltük át és csak kisebb módosításokat csináltunk, megtámogatva ezt egy megfelelő oldaltérképpel. De a másik célunk is teljesült, hogy az immár angol nyelvű tartalmaink is széles közönséghez juthassanak el. </p></p>
Meg kell elmlítenem, hogy az astro.build is folyamatosan és nagyon gyorsan fejlődik, így a már a kész astro.build oldalunkat második lépésben a legújabb verzióra frissítettük, ami szintén egyszerűen és gyorsan ment. </p></p>A tartalmak angol nyelvre való fordítása és az új menü és tartalomstruktúrákhoz való tartalomkészítés elsőbbséget élvezett, de ahogy a bevezetőben írtam mostantól visszatérnek a blogbejegyzések és hírek az ERPNext, Odoo és egyéb szoftverek világából.</p></p>
</p></p>


<p><span style="color: rgb(187, 187, 187);">. </span></p>
