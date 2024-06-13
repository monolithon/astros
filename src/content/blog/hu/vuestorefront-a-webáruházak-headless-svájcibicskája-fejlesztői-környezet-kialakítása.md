---
title: VueStoreFront a webáruházak headless svájcibicskája - fejlesztői környezet kialakítása
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /vuestorefront-a-headless-webáruház-svájcibicska-fejlesztői-környezet-kialakítása.png
  alt: ERPNext
snippet: Az ERPNext rugalmasságát, funkciógazdagsát már bemutattam, de azt is többször megemlítettem hogy érdemes más szoftverekkel együtt használni. Ilyen a VueStoreFront headless webáruház megoldás is.
publishDate: 2023-02-25 11:39
category:
  - hír
language: hu
---

A VueStoreFront webáruház lényege, hogy nem önálló webáruház, mint a Magento, vagy a Woocommerce, hanem mintegy bármilyen, akár nem webáruház-szoftverek kiterjesztéseként tud működni, ahol a webáruházhoz szükséges adatok rendelkezésre állnak. Ilyen lehet egy ügyviteli rendszer, vagy akár egy ERP, mint az ERPNext. Ez azért nagyon hasznos, mert innentől külön tudjuk a webáruházunk megjelenését leválasztva egyéb rendszereinkről gyorsan felépíteni, testreszabni, új technológiákkal, például sebesség terén üzleti versenyelőnyre szert tenni. Ezzel egy időben nem szükséges az üzleti folyamatainkba belenyúlni, hiszen azok zavartalanul, megszokottan működnek a háttérben. Ezt akár meg is fordíthatjuk, hiszen az újabb vállalkozói generáció hamarabb kezd e-business-be és indít webáruházat, mint hagyományos üzletet, ami itt is megoldható, de egyből egy teljes üzleti szoftvercsomagot kaphat. (ingyenes és nyílt forráskódút!) De a nagy trükk az egészben az, hogy együtt egy közös rendszert alkotnak és nem szinkronziáció történik a két rendszer között például, termékek, képek, megrendelések stb tekintetében, hanem a VueStoreFront webáruház közvetlenül használja ezeket a háttérendszerből és oda is dolgozik, pl rendelések leadásával.

Talán ebből még nem derült ki teljesen hogy kerül ide a magyar ERPNext és Frappe blogra a VueStoreFront headless webáruház rendszer. Azért írok róla, mert nem csak nagyon jó megoldásnak látom az egész headless technológiát, hanem mert úgy tűnik, hogy ahogy korábbi bejegyzésekben is említettem az ERPNext és Frappe fejlesztők is kedvelik, és ők is ebbe az irányban gondolkodnak. Ennyit a VueStoreFront és headless webáruház működéséről, az általunk előnynek ítélt megoldásáról, lássuk hogyan lehet egy VueStoreFront fejlesztői környezetet összeállítani Debian 11 virtuális gépben. (Disclaimer: bizonyára vannak ennél alkalmasabb rendszerek is fejlesztésre, de az általam használt Chromebook ezzel a rendszerrel érkezik, ezzel is egyszerűsítve az életmet. A Chromebook majd megérdemel egy újabb bejegyzést, akár többet is, amivel szintén készülök, de most vissza a VueStoreFront fejelsztői környezet kialakításához.)

Mivel a Debian 11 tárolóiból a használandó szoftverek nem megfelelő verziói érhetőek el, így le kell töltenünk párat.

nvm telepítése:

```bash
sudo curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc
nvm install node
nvm install --lts / nvm install 18.14.2 / nvm install 16.13.0
```

Az utolsó sor hármasából egy elég, az aktuális teszt projekthez a 18.x-et használjuk, ezért azt állítjuk be:

```bash
nvm use 18.14.2
```

```bash
npm install --global yarn
```

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

```bash
yarn
yarn dev
```

Ezután a böngészőben alapesetben az alábbi címen elérhető a VueStoreFront webáruház weblapja:

```bash
http://localhost:3000/
```

Erre a két parancsra is szükségünk lehet, ha a verziókból adódóan valami nem működne:

```bash
node -v
npm rebuild node-sass
rm -rf node_modules/
```
