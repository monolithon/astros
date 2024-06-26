---
title: ERPNext chat megoldások
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-chat-megoldások.png
  alt: ERPNext
snippet: Ahogy az egész ERPNext és IT egy folyamatos változási folyamat, úgy az ERPNext chat alkalmazása is egy ilyen evolúciós fejlődésen ment át.
publishDate: 2022-07-22 11:39
category:
  - hír
language: hu
---

<img src="/images/6xo80eZ.png">

Sokan kérték, hogy legyen az ERPNext-be chat integrálva és ezek a szavak meghallgatásra találtak és a Frappe csapat leszállította a 12-es verzióra az integrált chatet. Nem volt tökéletes, de valamilyen chat alkalmazás végre elérhetővé vált az ERPNext-en belül. Ez valakinek kellett, valakinek nem igazán hiányzott még egy chat platform ami megzavarhatja az elmélyült munkát.

<img src="https://github.com/frappe/chat/raw/main/.github/images/guest-form-fill.gif" alt="Form View"></p><p><br></p><p>Aztán ami most a 14-es verzióra nagyon bedurrant, az valójában a chat appal kezdődött.&nbsp;Azaz a 13-as verzióra a chat alkalmazás már nem volt az ERPNext rendszer része, hanem az egy külön appként került megvalósításra. Újra is írták, kicsit javult, de azért még mindig akadtak hiányosságai. Itt érhető el, ha valaki szeretné használni: <a href="https://github.com/frappe/chat" rel="noopener noreferrer">https://github.com/frappe/chat</a> De a korrektség jegyében azt is meg kell, hogy említsem, hogy amiért mások elég sok pénzt elkérnek, hogy a weboldalon a látogató chaten keresztül beszélhessen az értékesítőkkel azt ez a verzió már alapból tudta, szóval azért nem volt olyan rossz. Akinek ez a legfontosabb, és egy vállalkozás esetén az értékesítésnek azért elég fontosnak kell lenni egy fontossági skálán, annak az nagyon jól jött.

<img src="https://a.slack-edge.com/37877b/marketing/img/features/hero/v3/hero-full-ui.jpg" alt="Slack the product user interface on desktop">

Viszont sok cégnél inkább egy Slack jellegű megoldásra van szükség és ez eddig bemutatott ERPNext chat megoldások ettől nagyon messze vannak, ezért nem csoda, hogy sokan pont a Slack rendszerrel kapcsolták össze az ERPNext szoftverüket. Tehették ezt könnyedén, mert ha megnézzük az aktuális kiadást, akkor az értesítések (Notification) lehetséges csatornái között alapból megjelenik a Slack opció. (Működéshez még néhány dolgot még be kellett állítani, amit most nem fejtek ki, mert egyrészt egyszerű, másrészt a Slack ingyenes változatát érintő változás miatt ezt már egyáltalán nem ajánljuk. Korábban az ingyenes változattal is jól el lehetett lenni egy kisebb szervezetnél, mert csupán annyi korlátozással kellett számolni, hogy max 10.000 üzenetben kereshettünk vissza infókat, ha valamire szükség lett volna. Ezzel együtt lehetett élni, főleg hogy attól még a többi üzenet is elérhető volt, görgetéssel, csillagozással, szálakkal stb. Most viszont az utolsó három hónap üzeneteit láthatjuk a Slack ingyenes rendszerében, ezért itt volt az ideje, hogy új megoldás után nézzünk.

<img src="images/NwliPMB.png">

Dobpergés, sok Slack alternatíva van a piacon, ingyenesek, fizetősek, nyílt forrásúak, decentralizáltak stb, viszont a legegyszerűbb és legkényelmesebb megoldást keresve a <a href="https://discord.com/register" rel="noopener noreferrer">Discord rendszere</a> mellett döntöttünk, mert a szálak kezelése a Slackhez hasonlóan nagyon jól megoldott és limitációmentesen ingyenes, stabil és gyors minden platformon.

Ez szép és jó, de hogyan lehet összekötni az ERPNext-tel?

Az ERPNext és Discord képes webhook-kal kommunikálni, de amiért megszületett ez a bejegyzés az az, hogy ennek a pontos beállítását megosszam, mert erre elvileg több mód is lenne, de ezek közül csak az egyik megoldás működött.

Mire van szükség?

Generálni kell egy webhookot a Discordon az adott csatornán ahol szeretnénk, hogy értesítések jelenjenek meg az ERPNext rendszerünkből. Létrehozzuk és ne felejtsük elmenteni:

<img src="/images/1FceOy6.png">

Majd jön az ERPNext oldali beállítás. Az első trükk, hogy ugyan értesítést írtam fentebb, de valójában Webhook beállításra van szükség az alábbiak szerint:

<img src="/images/uGa4xWC.png">

Tehát ezen a képernyőn megadjuk, hogy milyen feltétel teljesülése esetén küldje az ERPNext az üzenetet a Discord-ra. Itt az látható, hogy egy Feladat (Task) létrehozásakor, ha az a task az ERP &amp; IT support projekten belül van, akkor küldje az üzenetet. Az előző pontban generált URL-t beillesztjük a Request URL mezőbe, beállítjuk, hogy JSON és POST típus és a Webhook Data részben megadjuk az alábbit:

```json
{
  "content": "{{ doc.subject }} - {{frappe.utils.get_url_to_form(doc.doctype, doc.name)}}"
}
```

Ez az elküldendő üzenetet állítja össze. Itt az történik, hogy a feladat címét - feladat ERPNext linkjét küldi a Discord csatornájára:

<img src="/images/R4HbKxx.png">

Ezzel el is készült az új automatikus értesítés a Discordra. Megérte várni és nem beköltözni a Slack-re, ezzel megspóróltunk egy költözést. Viszont azt mindenkinek magának kell mérlegelnie, hogy bízhatja-e másra az adatait, jelen esetben a Discord-ra. Főleg annak tudatában, hogy nincs hivatalos Export, mint például Slack esetén. Szerintünk ez nem gond, mert egyrészt valamennyire megoldható felületről, illetve a privacy lehetőségeken belül a Google data take out szolgáltatáshoz hasonlóan, és elérhető egy külső alkalmazás is erre a feladatra:</p><p><a href="https://github.com/Tyrrrz/DiscordChatExporter" rel="noopener noreferrer">https://github.com/Tyrrrz/DiscordChatExporter</a>

Jó chatelést mindenkinek! (Plusz a Discord hang és videó hívást és képernyő megosztást is tud elvileg alapból, hiszen a játékos közösség számára lett fejlesztve).
