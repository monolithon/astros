---
title: Magyar mikrogazdálkodói számlatükör
draft: false
author: Admin
tags:
    - hír
    - monolithon
    - erpnext
image:
      src: /magyar-mikrogazdálkodói-számlatükör.png
      alt: ERPNext
snippet: Mivel az ERPNext alapja a számlatükör, ezért arra a következtetésre jutottunk, hogy célszerű lenne a számlatükröt, számlatükröket, illetve azok alapján az alapértelmezett számlákat beállítani
publishDate: 2023-07-17 11:39
category:
    - hír
---

<p><br></p><p>Sziasztok!</p><p><br></p><p>Mivel az ERPNext alapja a számlatükör, ezért arra a következtetésre jutottunk, hogy célszerű lenne a számlatükröt, számlatükröket, illetve azok alapján az alapértelmezett számlákat beállítani az ERPNext lokalizáláshoz, hogy utána arra felépíthessük a számlázást és ami ahhoz szükséges és esetleg továbbiakat is.</p><p><br></p><p>Láttuk a @krnkris által javított számlatükröt, ezúton is köszönjük, szép munka volt, hogy elindult a dolog és be is került egy magyar számlatükör az ERPNextbe:</p><p><a href="https://github.com/frappe/erpnext/issues/7866" rel="noopener noreferrer">https://github.com/frappe/erpnext/issues/7866</a></p><p><a href="https://discuss.erpnext.com/t/numbering-of-accounts-in-chart-of-accounts/11101/36" rel="noopener noreferrer">https://discuss.erpnext.com/t/numbering-of-accounts-in-chart-of-accounts/11101/36</a></p><p><br></p><p>Ezt a munkát szeretnénk folytatni a közösséggel együtt.</p><p><br></p><p>Körbejárva a témát arra jutottunk, hogy talán az lenne a legcélszerűbb, ha hozzáadnánk egy opcionálisan kiválasztható, új számlatükröt a rendszerhez, mégpedig a mikrogazdálkodói számlatükröt, ami a 398/2012. (XII. 20.) Korm. rendelet a mikrogazdálkodói egyszerűsített éves beszámolóról melléklete, mert a mikrogazdálkodói beszámoló választása esetén ezt köteles használni a vállalkozás.</p><p><a href="https://net.jogtar.hu/jogszabaly?docid=a1200398.kor" rel="noopener noreferrer">https://net.jogtar.hu/jogszabaly?docid=a1200398.kor</a></p><p><br></p><p>Ezt azonban a rendelet alapján nem igazán lehet módosítani, kivéve:</p><p>"Nem minősül eltérésnek a 3. melléklet szerinti főkönyvi számlák továbbrészletezése."</p><p><br></p><p>Így ennél a mikrogazdálkodói számlatükörnél nem a teljeskörű könyvelés automatizálást tűztük ki célul, hanem azt, hogy a számlázáshoz szükséges főkönyvi számlák meglegyenek, hogy azokat alapértelmezett számlákként is beállíthassuk a rendszerbe és amint elkészül a NAV kompatibilis magyar számlázás akkor out-of-the box használható legyen a rendszer. Tehát csupán néhány számlával fogjuk kibővíteni, de hogy követhető legyen, ezért menni fog egy eredeti commit az eredeti mikrogzadálkodói számlatükörrel és pull-requesttel, és utána annak a kibővítése is így fog megtörténni.</p><p><br></p><p>Ez a számlatükör-készítés elég nagy meló volt, ezért úgy csináltuk, hogy változás esetén a szükséges JSON file egy táblázatból automatizáltan előállítható legyen. Ezt fogjuk használni a második, teljeskörű számlatükör elkészítéséhez, mert meglátásunk szerint sokkal könnyebb egy táblázatban szerkeszteni, mint az átkódolt, tehát nehezen olvasható forráskódban.</p><p><br></p><p>Természetesen a chart of account importer használható marad és felületről is lehet bizonyos keretek között módosítani ha valakinek szüksége lenne rá, ennek hogyanjánt is megosztjuk majd.</p><p><br></p><p>Jöhetnek a kérdések, ötletek, javaslatok. Köszi szépen.</p><p><br></p><p>ui: Ezt a topikot hagyjuk meg a mikrogazdálkodói számlatükörnek, a "teljeskörű" általános számlatükörnek, alapértelmezett számláknak, NAV számlázásnak stb-nek használjunk dedikáltat.</p><p><br></p><p>ui2: Ezt az eredeti posztot publikáltuk a fórumon, hogy egyszerűbb legyen megvitatni:</p><p><a href="https://discuss.erpnext.com/t/magyar-mikrogazdalkodoi-szamlatukor/96364" rel="noopener noreferrer">https://discuss.erpnext.com/t/magyar-mikrogazdalkodoi-szamlatukor/96364</a></p>



