---
title: Raktárkészlet és termékérték javítása ERPNextben

			
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
publishDate: 2022-07-17 11:39
category:
    - telepítés-és-beállítás
---

<div class="ql-editor read-mode"><p>Olyan speciális eset is előállhat az ERPNext használata közben, mint például a következő:</p><p><br></p><p>Az ERPNext beveztésekor felvittünk egy idegen pénzneben lévő beszerzési megrendelést (nettó áron), majd később derült ki, hogy ezt mégsem kaptuk meg, de a raktárunkban is szerepel. Persze amúgy ebből előtte és utána is jött kölönböző árakon termék, plusz a termék értékébe a szállítás és egyéb költségek is beleszámítandóak amit az ERPNext a "Landing Cost" opcióval old meg. </p><p><br></p><p>Ekkor ha simán egy készletkigazítást tennénk, akkor az elrontaná a termék értékét, mert ekkor az ERPNext nem enged egyedi értéket megadni, hanem automatikusan a kalkuláltat használná. (Mivel a könyvelésnek mindig két lába van, itt a készlet érték és a szállító, de ebben az esetben a kalkulált készletérték nem egyezne meg, nem "nullázná" ki a szállítói lábat, mert az még másik értékkel került rögzítésre). </p><p><br></p><p>Erre lehet megoldás, hogy egy anyagfelhasználást (Material Issue) készítünk a raktáron belül (Stock) és ezzel kivezetjük a raktárunkból úgy, hogy a különbözeti számlaként a szállítói számlát használjuk, de egy technikai számlát is használhatunk, és onnan tovább a szállítóira. És itt jön a képbe a lényeg, hogy egyedi átváltási árfolyammal a különbözet eltüntethető. (ezt persze szintén nem a szokásos árfolyamveszteség/nyereség számlára könyveljük. És ez talán még a raktárkiigazításnál is működhet. :)</p></div>

