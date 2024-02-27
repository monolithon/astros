---
title: Rendeltnél több termék gyártása ERPNext rendszerben

draft: false
author: Admin
tags:
  - erpnext
image:
  src: /krystal.jpg
  alt: ERPNext
snippet: ""
publishDate: 2022-06-30 11:39
category:
  - telepítés-és-beállítás
---

Előforudl az előző tippben jegyzett gyakorlat ellentétje is, ami azt jelenti, hogy nem kevesebbet, hanem többet gyártunk, mint eredetileg terveztük. Ez például olyankor fordulhat elő, ha valamelyik részegység olyan kiszerelésben érkezik, aminek minden darabját szeretnék felhasználni, ezért több készterméket is gyártunk, hogy ne maradjon bizonyos megbontott, de fel nem használt alapanyag.

A gyártási megrendelésnél több gyártást ebben az esetben két lépésre bonthatjuk:

1. Készként lezárjuk a gyártási rendelést az abban foglalt darabszámmal.
2. Készítünk egy raktármozgást aminek a típusa a gyártás, ahol kiválasztjuk, hogy a felhasznált anyagokat a BOM listából olvassuk be. (amit az előző lépésben is használtunk, hogy ne legyen eltérés). De arra figyeljünk, hogy ne kössük gyártási megrendeléshez.

Ezzel elérjük, hogy ugyanabból többet gyártottunk, és minden pontosan van dokumentálva, esetleg a gyártási rendelést és raktárrendelésre a komment szekcióban hivatkozhatunk.
