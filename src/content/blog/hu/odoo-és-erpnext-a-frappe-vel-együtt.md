---
title: monolithon.com - Odoo és ERPNext a Frappe-vel együtt
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /odoo-és-erpnext-a-frappe-vel-együtt.png
  alt: ERPNext
snippet: Az Odoo nyomtatási nézet szerkesztője közel nem olyan felhasználóbarát, mint amit a Frappe kínál az ERPNext-hez, főleg az előző posztban bemutatott, megújított változat.
publishDate: 2023-07-17 11:39
category:
  - hír
---

Az Odoo nyomtatási nézet szerkesztője közel nem olyan felhasználóbarát, mint amit a Frappe kínál az ERPNext-hez, főleg az <a href="https://www.monolithon.com/blog/hirek/%C3%BAj-nyomtat%C3%A1si-n%C3%A9zet-szerkeszt%C5%91-app-a-frappe-t%C5%91l-az-erpnext-hez">előző posztban</a> bemutatott megújított változat. De nem is a versengés a lényeg és nem egy vagy-vagy szituációra szeretnénk kiélezni a helyzetet, hiszen a Monolithon az ERPNext és Frappe mellett, ahogy a blogon is többször beszámoltunk róla, más-más szoftvert is használ és támogat - köztük az Odoo-t és az n8n-et is, mert meggyőződésünk, hogy a megfelelő feladatra kell a megfelelő szoftvert megtalálni, és nem mindenkinek, nem mindenre ugyan az lesz a legjobb megoldás. (Mégha szeretnénk is, ha az ERPNext és a Frappe minél jobban elterjedjen.)

Ezért ez a poszt inkább csak egy beszámoló egy viccess PoC - Proof of concept - azaz megvalósíthatóságról, amit egy Odoo-val és ERPNext-tel is foglalkozó kolléga hozott össze, a fent említett nyomtatási kép designolására.

A megoldás lényege, hogy az Odoo-ban (az ingyenes Community kiadásban) nincs egyszerű megoldás a nyomtatási képek szerkesztésére, újak készítésére. (A fizetős Odoo Enterprise változatban már kínálnak rá megoldást, de az is különbözik a Frappe egyszerű működésétől).

Erre a helyzetre készített "megoldás" annyit tesz, hogy az Odoo-ból egyszerűen egy app segítségével át lehet küldeni a nyomtatási képen megjeleníteni kívánt adatokat automatikusan, azaz csak egyszer kell "összelinkelni" a két rendszert. Majd a Frappe-ban az említett designer megoldással elkészített nyomtatási képet összeállíva és beállítva már lehetőség lesz az Odoo-ban lenyomott nyomtatáskor a Frappe által előállított szuper nyomtatási képet, pdf-et megkapni automatikusan a háttérből. (Tehát nem kell az Odoo-t elhagyni).

Gyakorlati haszna kétséges a fejlesztésnek, de szerintünk érdekes, vicces megoldás, figyelembe véve annak egyszerűségét és hatékonyságát. Odoo-t is támogató csapatként többször volt már dolgunk nyomtatási képek, dokumentumok testreszabásával és ahogy eddig is, ezután is más utat fogunk választani, de jó tudni, hogy az Odoo mellett van alternatíva, nem csak a nyomtatási képre, hanem a teljes ügyvitelre.

További részletek az Odoo modulról és Frappe megoldásról:

https://ecosoft.frappe.cloud/blog/general/odoo-frappe-print-form
