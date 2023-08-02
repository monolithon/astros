---
title: Mitől hízik az ERPNext adatbázis és mit tehetünk?
draft: false
author: Admin
tags:
    - hír
    - monolithon
    - erpnext
image:
      src: /mitől-hízik-az-erpnext-adatbázis-és-mit-tehetünk.png
      alt: ERPNext
snippet: A tipikus felhő rendszerek, ahol az ERPNext-tel ellentétben nem a felhasznált erőforrás alapján áraznak a szolgáltatók, hanem valami más alapján, valójában  szintén használnak mindenféle erőfforást...
publishDate: 2023-07-17 11:39
category:
    - hír
---

<p>A tipikus felhő rendszerek, ahol az ERPNext-tel ellentétben nem a felhasznált erőforrás alapján áraznak a szolgáltatók, hanem valami más alapján, valójában &nbsp;szintén használnak mindenféle erőfforást, csak ezek részleteit sok helyen elrejtik a felhasználók elől. </p><p><br></p><p>Az ERPNext nem csak a FrappeCloud platformját alakította ki transzparensen, ahol látható, hogy mekkora erőforrást is használ az ERPNext szoftver, hanem magát az ERPNextet is felvértezte egy riport funkcióval, hogy megnézhessük valójában mi mennyit foglal az adatbázisban.</p><p><br></p><p>A következő URL-t kell a saját ERPNext példány domainje után illeszteni a riporthoz: <a href="/app/query-report/Database%20Storage%20Usage%20By%20Tables" rel="noopener noreferrer" style="color: inherit; background-color: rgb(243, 245, 248); font-size: 14px;">/app/query-report/Database%20Storage%20Usage%20By%20Tables</a></p><p><br></p><p>Ez azért jó, mert egyszerű, és ha megtaláltuk az esetlegesen indokolatlanul sok erőforrást használó tényezőt, könnyen változtathatunk rajta, mert minél kisebb az adatbázis, annál könnyebb dolgunk van vele például biztonsági mentések készítésénél vagy frissítésnél, ami mindkettő esetben kíméli a pénztárcánkat. Például törölhetjük a felesleges verziókat és a verziókezelést például ki is kapcsolhatjuk bizonyos dokumentumokon.</p><p><br></p><p>És ami a legjobb, hogy bizonyos esetekben még adatbázis műveletekre sincs szükségünk, hiszen ahogy a mém is mondja az ERPNext-ben minden doctype, így könnyedén a felületről is törölhetjük például amire nincs szükségünk.</p><p><br></p><p><img src="/cqblbkY.jpg"></p><p>Forrás:</p><p><a href="https://twitter.com/FrappeCloud/status/1582922893968564224" rel="noopener noreferrer">https://twitter.com/FrappeCloud/status/1582922893968564224</a></p>

<p><span style="color: rgb(187, 187, 187);">Az oldalon található információk ajánlatnak nem minősülnek. </span></p>

