---
title: Az ERPNext 14-es verzió első új funkicója
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /a-14-es-verzió-első-új-funkicója.png
  alt: ERPNext
snippet: A github-on követhető, hogy milyen új funkciók és javítások kerülnek az új verziókba. Most a kanban kártyák limitációját szüntettékmeg.
publishDate: 2022-04-12 11:39
category:
  - hír
language: hu
---

A kanban tábla eddig is nagyon hasznos volt, elég sok mindenre lehetett használni, de főleg a projektmenedzsmentben ismert. Egy új, sokszor kérdezett funkciót most egy ERPNext fejlesztő-partner az ERPNext/Frappe fejlesztők támogatásával megvalósított.</p><p><br></p><p>Ez nem más annak a limitációnak a feloldása, hogy mi jelenjen meg egy kanban kártyán. Eddig ugyanis ezek fixek voltak az ERPNext-ben. Azaz a minden kanban kártyán csak a kártya neve, Task/Feladat esetén annak neve szerepelt, illetve, hogy kihez van hozzárendelve, és persze a sürgősség.

Ezen változtat az ERPNext új funkciója, ahol már mi választhatjuk ki, hogy miket akarunk megjeleníteni a kártyákon. Ez azért is hasznos lehet, mert egy korábbi projektnél hasznos lett volna például külső rendszerből kapott azonosítók feltüntetése az ERPNext kanban kártyákon, de erre sajnos nem volt lehetőség. Mostantól van. Mutatom hogyan lehet új mezőket választani a lenti képen. Persze limitáció van, mert egy hosszú szöveges vagy html mező tartalma nem fér el egy kártyán, így az ilyen típusú mezőket nem lehet kiválasztani megjelenítésre a kártyán.

![Image 1](/images/8UTvjIn.png)

![Image 2](/images/XSO3Ltr.png)

A fórumbejegyzés:
[https://discuss.erpnext.com/t/improved-kanban-board/88414](https://discuss.erpnext.com/t/improved-kanban-board/88414)

és a github issue link:
[https://github.com/frappe/frappe/pull/16257](https://github.com/frappe/frappe/pull/16257)
