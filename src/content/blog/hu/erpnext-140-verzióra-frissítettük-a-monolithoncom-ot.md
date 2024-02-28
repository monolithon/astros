---
title: ERPNext 14.0 verzióra frissítettük a monolithon.com-ot
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-140-verzióra-frissítettük-a-monolithoncom-ot.jpg
  alt: ERPNext
snippet: A magyar ERPNext és Frappe portál már a rendszer 14-es verzióján fut.
publishDate: 2022-09-28 11:39
category:
  - hír
---

Természetesen ahogy szoktam, már a megjelenés előtt is követtem a híreket és a fejlesztéseket az ERPNext és Frappe 14-es változatával kapcsolatban, és alig vártam, hogy kipróbálhassam. A fejlesztői változattal való ismerkedés után a hivatalos megjelenéskor szintén kipróbáltam és ugyan már akkor sem találkoztam semmilyen hibával mégis, ahogy ilyenkor ajánlatos, még nem frissítettünk azonnal a legújabb rendszerre. Ahogy erről akkor is <a href="https://www.monolithon.com/blog/hirek/erpnext-14-megjelen%C3%A9s" rel="noopener noreferrer">beszámoltam</a>, az új telepítéseknél semmi gond nem volt, de pár bug előjött a korábbi verzióról való frissítés esetén.

Most már úgy tűnt, hogy elég időt hagytunk az esetleges hibák javítására, ezért a mai napon belevágtunk a frissítésbe. Alapesetben a <a href="https://frappecloud.com/dashboard/signup?referrer=b411e290" rel="noopener noreferrer">Frappe Cloud</a> ezt megoldja helyettünk, amit korábban egy hibajegyben kellett kérni tőlük, mára azonban már ezt is automatizálták. Konkrétan meg lehet adni, hogy mikorra ütemezze be a rendszer az ERPNext/Frappe frissítését.

Én is így tettem, de sajnos nem jártam sikerrel. Mégpedig azért, mert egy bizonyos testreszabás miatt nem sikerült az automatikus új verzióra frissítés. A másik dolog, ami miatt a jelenlegi 13-ról 14-re való frissítés speciális, az az, hogy eddig az ERPNext tartalmazott minden csomagot, modult, mint például a HR appot, ami most már különálló, de kapcsolódó csomag. Szóval ez a két kis dolog olyannyira megnehezítette a verzióváltást, hogy két óra alatt végeztünk is vele :)

Más rendszereknél ennyi idő alatt is túlzással még a backup sem készü el, hogy a költségeket ne is említsem. És várhatóan a 15-re való frissítés még ennél is egyszerűbb és gyorsabb lesz.

Annak ellenére, hogy a korábbi cikkben említett [zero-downtime](https://www.monolithon.com/blog/hirek/zero-downtime) funkció csak a 14-es verzióban jelent meg, tehát mostantól a monolithon.com számára is használató lesz, ennél az upgrade-nél nem volt kiesés, mert az átállás két órájában nem volt tranzakció, így például a weboldal is végig elérhető volt, csupán a domain rekordot kellett az új rendszerhez frissíteni, ami a [Cloudflare](https://www.cloudflare.com/)-nek hála, konkrétan 1 perc alatt megtörtént.

Ahogy ez az infrastruktúránkat figyelő rendszer oldalunkon is látszik: [https://status.monolithon.com](https://status.monolithon.com)
