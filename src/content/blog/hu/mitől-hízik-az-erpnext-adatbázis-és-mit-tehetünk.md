---
title: Mitől hízik az ERPNext adatbázis és mit tehetünk?
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /mitől-hízik-az-erpnext-adatbázis-és-mit-tehetünk.png
  alt: ERPNext
snippet: A tipikus felhő rendszerek, ahol az ERPNext-tel ellentétben nem a felhasznált erőforrás alapján áraznak a szolgáltatók, hanem valami más alapján, valójában  szintén használnak mindenféle erőfforást...
publishDate: 2022-11-17 11:39
category:
  - hír
language: hu
---

A tipikus felhő rendszerek, ahol az ERPNext-tel ellentétben nem a felhasznált erőforrás alapján áraznak a szolgáltatók, hanem valami más alapján, valójában szintén használnak mindenféle erőfforást, csak ezek részleteit sok helyen elrejtik a felhasználók elől.

Az ERPNext nem csak a FrappeCloud platformját alakította ki transzparensen, ahol látható, hogy mekkora erőforrást is használ az ERPNext szoftver, hanem magát az ERPNextet is felvértezte egy riport funkcióval, hogy megnézhessük valójában mi mennyit foglal az adatbázisban.

A következő URL-t kell a saját ERPNext példány domainje után illeszteni a riporthoz: [/app/query-report/Database%20Storage%20Usage%20By%20Tables](/app/query-report/Database%20Storage%20Usage%20By%20Tables)

Ez azért jó, mert egyszerű, és ha megtaláltuk az esetlegesen indokolatlanul sok erőforrást használó tényezőt, könnyen változtathatunk rajta, mert minél kisebb az adatbázis, annál könnyebb dolgunk van vele például biztonsági mentések készítésénél vagy frissítésnél, ami mindkettő esetben kíméli a pénztárcánkat. Például törölhetjük a felesleges verziókat és a verziókezelést például ki is kapcsolhatjuk bizonyos dokumentumokon.

És ami a legjobb, hogy bizonyos esetekben még adatbázis műveletekre sincs szükségünk, hiszen ahogy a mém is mondja az ERPNext-ben minden doctype, így könnyedén a felületről is törölhetjük például amire nincs szükségünk.

![Image](/images/cqblbkY.jpg)

Forrás:

[https://twitter.com/FrappeCloud/status/1582922893968564224](https://twitter.com/FrappeCloud/status/1582922893968564224)
