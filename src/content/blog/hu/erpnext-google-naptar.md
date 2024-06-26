---
title: ERPNext Google Naptár szinkronizáció
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-google-naptar.png
  alt: ERPNext
snippet: Az ERPNext és a Google Naptár szinkronizáció már régóta megoldott az ERPNext-ben, de ennek ellenére lehet még javítani rajta. Mutatom hogyan!
publishDate: 2022-08-24 11:39
category:
  - hír
language: hu
---

<img src="/images/erpnext-google-naptar.png">

Az üzleti és személyes életünkben a legtöbben használunk naptárat. Sőt, általában többet is. Függetlenül attól, hogy a vállalkozásunkat, vagy személyes pénzügyeinket milyen rendszerben vezetjük ezekben a szoftverekben általában van saját naptár. Így van ez az ERPNext esetében is, ezért az ERPNext-et fejelsztő Frappe csapat már a kezdeteknél gondolt arra, hogy az ERPNext és a Google Naptár között megoldják a szinkronizáció lehetőségét.

Jellemezően azért használjuk a különböző szoftverek mellett Google Naptárat is, mert az egy remek hely, hogy az összes naptárunkból érkező bejegyzéseket egy helyen lássuk, vagy akár kezeljük is.

Hogyan lehetséges ez az ERPNext esetében?

A dokumentáció alapján könnyedén elkészíthető, hogy az ERPNext naptárjában létrehozott eseményeket a Google Naptárunkba küldje a rendszer, illetve ennek fordítottjára is van lehetőség. Részletek a dokumentációban, ha valakinek segítség kell, szívesen készítek egy magyar bemutatót, vagy akár segítek is a beállításban:<a href="https://docs.erpnext.com/docs/v14/user/manual/en/erpnext_integration/google_calendar" rel="noopener noreferrer">https://docs.erpnext.com/docs/v14/user/manual/en/erpnext_integration/google_calendar</a>

Ha ez ilyen egyszerű, akkor miért született róla ez a bejegyzés?

A szemfüles olvasóknak feltűnhetett, hogy naptár szinkronizációról írok fentebb, és az ERPNext-ben rengeteg DocType/ERPNext dokumentumnak van valamilyen (beállítható) dátuma. Ilyen lehet egy tennivaló (ToDo), vagy egy projekt, vagy akár egy feladat (task) stb. Sőt ezek némelyikén több dátum mező is megtalálható, mint például intervallumok megjelölése esetén. De ezek nem naptár bejegyzések az ERPNext-ben, még ha a naptár nézetben meg is lehet őket tekinteni. Mit lehet ezzel tenni? Alapból az ERPNext nem kínál lehetőséget ezen bejegyzések ERPNext saját naptárában való megjelenítésére, így ezeket sem onnan, sem az önálló naptárnézetből nem lehet külső naptárral szinkronizálni.

Viszont erre sokaknak szüksége lehet, ahogy nekem is, ezért leírom hogyan célszerű ezt megoldani. Azt az alap feltevést, ami miatt ERPNext evangélistának vallom magam, hogy válasszunk egy megfelelő rendszert, amiben a legtöbb dolgot tárolni/kezelni tudjuk, de ez a rendszer legyen könnyen integrálható egyéb programokkal mert, egyrészt sok mindenre célszoftvert érdemes használni, másrészt vannak elkerülhetetlen integrációk, mint például Magyarországon a <a href="https://www.monolithon.com/szamlazas" rel="noopener noreferrer">NAV online számlázás ERPNextből</a>, azzal kell, hogy kiegészítsem, hogy szükségünk van egy integrációt _egyszerűen_ támogató szoftverre is. (és a minimum, hogy legyen ezek mellett még jelszókezelő és egy kommunikációs platform, mint pl. a <a href="https://www.monolithon.com/blog/hirek/erpnext-chat-megold%C3%A1sok" rel="noopener noreferrer">discord, amiről egy korábbi bejegyzésben írtam</a>, hogy bármilyen feladat flottul mehessen, de ezekről majd később).

Oké, de miért jó egy integrációs szoftver használata? Ezzel megspóroljuk, hogy ne kelljen mindent az ERPNext-be fejleszteni ha már van egy szuper API-ja, plusz ezzel is megőrízhetjük a könnyű frissítés és verzióváltás előnyét. Direkt integrációs szoftvert és nem platformot írok, mert az ERPNext-hez hasonló ingyenes és nyílt forrású szoftvert ajánlok az elérhető fizetős platformok, mint az Integromat vagy a Zapier helyett.

**Türelmetleneknek itt kezdődik a lényeg: Hogyan állítsd be az ERPNext és a Google Naptár szinkronizációt pl: ToDo ERPNext dokumentumra az n8n szinkronizációs szoftver segítségével?**

Az alapokat, miszerint kell egy <a href="https://n8n.io/cloud?ref=monolithon&amp;utm_source=affiliate" rel="noopener noreferrer">n8n rendszer</a> és egy ERPNext, és az ERPNext-en belül a usernek kell generálni egy tokent (api key&amp;secret párost) most kihagyom, de szívesen segítek benne.

A lényeg, hogy amint ez mind megvan, már csak a beépített ERPNext és Google Calendar és egy Function node-ra lesz szükséged, ahogy ebben a példa dokumentációban láthatod: <a href="https://blog.n8n.io/creating-triggers-for-n8n-workflows-using-polling/" rel="noopener noreferrer">https://blog.n8n.io/creating-triggers-for-n8n-workflows-using-polling/</a>

Így néz ki, ennyi az egész:

![ERPNext Google Naptár](/images/R998Mfa.png)

Beállíthatsz neki egy időzítőt, hogy X időnként fusson, vagy akár pontos időpontokat is, de mivel az ERPNext-be létrehozott ToDo bejegyzésre simán lehet egy ERPNext webhook-ot készíteni, ahogy egy korábbi posztban a discord esetében tettük, ezért én ezt javaslom, hogy ne terheljük felesleges futással az n8n-et, hanem töltse le az új teendőt az ERPNext-ből, amikor azt létrehoztuk.

Fontos, hogy a fenti példa dokumentációban lévő function (polling) kód nem működött megfelelően, ezért publikálom az alábbit, amivel minden új ToDo-t berak a Google Naptárba, és következő futásnál csak azokat az újakat, amiket korábban még nem tett be, hogy elkerüljük a multiplikálást/floodolást.

```plain
const new_items = [];

// Get static data stored with the workflow
const data = this.getWorkflowStaticData("node");

data.ids = data.ids || [];

for (let i = 0 ; i <  items.length; i++) {

 // Check if data is already present
 if (data.ids.includes(items[i].json.name)) {
  continue;
 } else {

  // if new data then add it to an array
  new_items.push({
   json: {
    name: items[i].json.name,
    date: items[i].json.date,
    reference_name: items[i].json.reference_name,
    description: items[i].json.description
   },
  });
 }
}

data.ids = items.map((item) => item.json.name);

// return new items
return new_items;
```

Legyél te és a naptárad mindig naprakész az ERPNext-tel!
