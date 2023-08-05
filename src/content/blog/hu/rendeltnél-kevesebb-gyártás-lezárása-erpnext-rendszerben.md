---
title: Rendeltnél kevesebb gyártás lezárása ERPNext rendszerben

			
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
publishDate: 2023-06-30 11:39
category:
    - telepítés-és-beállítás
---

<div class="ql-editor read-mode"><p>Az ERPNextben a gyártás megrendelésénl el kell döntenünk, hogy mennyit szeretnénk gyártani. Hogy mennyit gyártsunk, ahhoz adhat az ERPNext segítséget, de most nem ezt vizsgáljuk. </p><p><br></p><p>Feltétlezzük, hogy valamiből 100 darabot szeretnénk gyártani, mert kb ennyit szoktunk. De napközben csak 90-et sikerül legyártani és a maradék 10-et már nem szeretnénk legyártani. Ekkor ugyan a 90 lezárása után Mégsem gombbal le tudjuk zárni a rendelést, de a legtöbben nem Mégsem státuszban szeretnénk látni ezt a gyártást, hiszen 90-et legyártottunk, ez gyakorlatilag kész van, ezért kész státusszal kellene a rendszerbne lennie. </p><p><br></p><p>Ennek elérésére lehet egy jó trükk, hogy több raktárat használunk a gyártás folyamán. Használunk egy késztermék és egy lemondott raktárat és a gyártási rendelésben a 90-et a készbe mozgatjuk, a 10-et pedig a lemondottba. &nbsp;Ebben az esetben valószínűleg a készletértéket még korrigálni kell. </p></div>

