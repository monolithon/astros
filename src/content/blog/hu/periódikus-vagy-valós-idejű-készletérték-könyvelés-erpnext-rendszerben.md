---
title: Periódikus vagy valós idejű készletérték könyvelés ERPNext rendszerben

			
draft: false
author: Admin
tags:
    - telepítés-és-beállítás
    - monolithon
    - erpnext
image:
    src: /krystal.jpg
    alt: ERPNext
snippet: ''
publishDate: 2022-06-30 11:39
category:
    - telepítés-és-beállítás
---

<div class="ql-editor read-mode"><p>A két opció közül döntenünk kell. Az ERPNext használatakor ezt ki kell válaszolnunk és nem célszerű menet közben váltotzatni, de mik is ezek valójában?</p><p><br></p><p>A valós idejű készletértékelés könyvelés a (perpetual inventory), ahogy a neve is mutatja valós időben a rögzített gazdasági események (beszerzés, raktárba érkezés, értékcsökkenési leírás, értékesítés stb) alapján a készletünk értékét folyamatosan változtatja. Néhol szükség lehet ennyire pontos kimutatásra, de a legtöbb cégnél elegendő ha ezeket az értékeléseket csupán néhány alkalommal teszik meg. </p><p><br></p><p>Ez a periodikus készletértékelés, amit bármikor megtehetünk, persze van, amikor kötelező, amikor például az éves záráshoz szükséges ismernünk az adott időponton az aktuális készletünk értékét. De persze ezt negyedévente, vagy havonta is megtehetjük. </p><p><br></p><p>Hogyan is néz ki ez a gyakorlatban?</p><p><br></p><p>A peridikus készletértékelés esetén a végleges készletértéket a kézi leltározás után vezetjük be a könyvekbe. Aminek az a következménye, hogy a következő leltárig a leltárértéknek a korábbi leltárkor felvezetett értékét látjuk, nem pedig az éppen aktuálisat. </p><p><br></p><p>Ezzel szemben a valós idejű használatával a következő történi:</p><p><br></p><p>Minden beszerzés értékét (szállítással és egyéb díjakkal - landing cost) a beszerzés és raktár értékre is könyvelünk automatikusan. Amikor a raktárkészlet változott, akkor a beszerzési számlán nyilvántartott érték átkerül a raktárkészletre ami így módosulva egyezni fog a záró (aktuális) készletértékkel. </p><p><br></p><p>A számítás nagyjából a következőképp zajlik a periódikus készletérték esetén:</p><p>Nyitó készlet + beszerzések = készletérték, ami értékesíthető. </p><p>Értékesíthető készlet - záró készlet = az eladott áruk értéke.</p></div>

