---
title: Analitikus könyvelés, költséghelyek és profitcenterek

			
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
publishDate: 2023-09-10 11:39
category:
    - telepítés-és-beállítás
---

<div class="ql-editor read-mode"><p>Ez csak egy rövid megjegyzés, mert gyakran visszatérő kérdés, hogyan lehet javítani a már beküldött dokumentumokon, jellmezően számlákon a nem, vagy rosszul beállított cost center mezőket. </p><p><br></p><p>Az általános válasz erre az, hogy nem lehet. Mégpedig azért mert az ERPNext alapja egy kettőskönyviteli rendszer, amelynek szavatolnia kell az adatok érintetlenségét. Illetve ezeket a dokumentumokat gondos ellenőrzés után lehetőleg az adott terület ismerőjének kell beküldeni, hogy azok lehetőleg hibátlanok legyenek, vagy az automatizmusokat előre megfelelően beállítani, hogy ilyen jellegű tudással nem rendelkező személy is beküldhessen olyan dokumentumokat amire van jogosultsága. Tehát az eredeti tranzakció cost center beállítsa ilyen módon nem javítható. </p><p><br></p><p>Milyen lehetőségeink vannak akkor ennek sajátosságnak a kezelésére?</p><p><br></p><p>Természetesen leronthatjuk azt a dokumentumot és újként felvihetjük az eredeti dátumra az eredeti információkkal, persze a cost centert már (helyesen) beállítva. Ezt persze csak akkor tehetjük meg szabályosan, ha még egy le nem zárt periódusban kívánunk így javítani. </p><p><br></p><p>A másik lehetőségünk, hogy könyvelési tétel rögzítünk, ami az adott hibát kijavítja. </p><p><br></p><p>Tipp: A harmadik lehetőség, ami miatt ez a rövid ERPNext magyar tudásbázis cikk megszületett, hogy alternatívaként használhatjuk az ún. Accounting Dimensions funkciót, amit viszont van lehetőségünk már beküldött dokumentumokon is utólag módosítani. Ez azért sem rossz megoldás, mert amúgy a cost center is egy ilyen accounting dimension, csak egy speciális változata, tehát a kívánt célt könnyedén elérhetjük, de ehhez a cost centereken túl előre a szervezetünknek megfelő Accounting Dimensions kialakítása is szükséges. </p></div>

