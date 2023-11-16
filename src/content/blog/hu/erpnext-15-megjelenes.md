---
title: ERPNext 15.0 verzió megjelenése
draft: false
author: Admin
tags:
    - erpnext
image:
    src: /ERPNext-15-release.jpg
    alt: ERPNext
snippet: Az ERPNext 15 megjelenését ugyan megelőzte az idei Frappeverse, az ERPNext konferencia, de nagyrészt az is az új verzióról szólt. 
publishDate: 2023-11-11 12:39
category:
    - hír
---

<p>Az ERPNext 15 megjelenését ugyan megelőzte az idei Frappeverse, az ERPNext konferencia, de nagyrészt az is az új verzióról szólt, ezért arról most a korábbi évektől eltérően nem lesz külön beszámoló</p></p>
<p><img src="/images/ERPNext-15-release.jpg"></p></p>
<p>Most azonban nem csak az ERPNext 15-ös verziójának megjelenéséről és a frissítésekről, újdonságokról tudok beszámolni, hanem örömmel jelentem, hogy mától az ERPNext 15-ös verziója a Frappe Cloud-on is elérhető, azaz mostantól bárki könnyedén kipróbálhatja. </p></p>
<p>Az egyik szembetűnő dolog, ami a fenti ERPNext 15 képernyőképről is egyből látszik, hogy változott a megjelenés. Erről azonban már korábban is lehetett tudni, hiszen aki követte a Twitter/GitHub ERPNext/Frappe oldalakat, az láthatta, hogy gőzerőkkel dolgoztak az <a href="https://frappeui.com/">Espresso Design System</a> komponenseken. Megérte a munkát a responsive design mobilion is gyorsan működik. </p></p>
<p>A sebesség és a gyorsulás azonban nem csak ennek köszönhető, hanem annak több, mint 800+ commitnak ami a stabilitást és a sebességet javította. Ez úton is köszönet Ankush Menat! </p></p>
<p>A teljesség igénye nélkül főleg a kiadás bejelentő posztból szemezgetek, ami itt található: <a href="https://discuss.frappe.io/t/frappe-and-erpnext-v15-release/111702">https://discuss.frappe.io/t/frappe-and-erpnext-v15-release/111702</a></p></p>
<p>De aki a teljes jegyzékre kíváncsi, annak ajánlom a Github ERPNext és Frappe 15.0 kiadás áttekintését: </br></br>
<a href="https://github.com/frappe/frappe/releases/tag/v15.0.0">https://github.com/frappe/frappe/releases/tag/v15.0.0</a></br>
<a href="https://github.com/frappe/erpnext/releases/tag/v15.0.0">https://github.com/frappe/erpnext/releases/tag/v15.0.0</a></br>
</p></p>

<p>Mit érdemes még kiemelni az új 15-ös ERPNext és Frappe verzióval kapcsolatban?</p></p>
<p><ul> 
<li>Mivel ez is a sebességet, skálázhatóságot érinti, ezért a főkönyvi számlák lezárhatóságát kell kiemelnem elsőként. Eddig is volt hasonló, amit főként évente használtunk, de de ezzel még egyszerűbb lesz a dolgunk a jövőben.</li>
<li>Kaptunk egy új előnézetet, hogy az adott tranzakció beküldésekor milyen könyvelési bejegyzés fog létrejönni. Ez az Odoo-ból ismerős lehet, hiszen egy ideje már ők is megmutatják ezt.</li>
<li>Mostantól már megrendelésnél van lehetőségünk termék/készlet foglalásra.</li>
<li>A több szintű gyártási anyagjegyzék kezelés egyszerűen az új szerkesztővel.</li>
<li>Az eddig döcögős egyedi szériaszámok kezelését is egységesítették és kivasalták.</li>
<li>Bekerült az általam is korábban megírt nyomtatási kép szerkesztő és workflow designer is. </li></ul></p></p>

<p>Fejlesztői szemmel érdekes lehet, hogy kivettek sok elavult csomagot és sok mindent frissítettek, például már támogatott a vue3. Mostantól a beküldhető doctype-ok háttérműveletként is beküldhetőek. Néhány ERPNext modul külön app-ként él tovább. (mint például a TaxJar, Lending és lokalizációk)</p></p>

<p>Nem csak, hogy a már 14-es verzióval elindult app szeparációt tovább folytatták, például a webáruház/ecommerce terén, de új Frappe megoldások is születtek a FrappeDesk - helpdesk példájára:</p></p>

<p>Ugyan még mindig van az ERPNext-ben CRM, de ahelyett, hogy azt toldoznák-foldoznák, a sok egyéb app mellett bejelentették az Frappe CRM-et is, amibe a VOIP telefonhívást és hívásrögzítést is integrálták. </p></p>
<p><img src="/images/Frappe-CRM.png"></p></p>

És még rengeteg újdonság, amikről részletesebben is beszámolok majd. </p></p>

</p></p>


<p><span style="color: rgb(187, 187, 187);">. </span></p>
