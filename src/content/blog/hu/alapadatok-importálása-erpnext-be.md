---
title: Alapadatok importálása ERPNext-be

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

<div class="ql-editor read-mode"><p>Az általános import, export funkcióról készül egy részletes leírás, és egy kedvcsináló <a href="https://www.monolithon.com/blog/hirek/adatszinkroniz%C3%A1l%C3%A1s-egyszer%C5%B1en-az-erpnext-adatimport-funkci%C3%B3j%C3%A1nak-%C3%A9rdekess%C3%A9gei" rel="noopener noreferrer">blogbejegyzés</a> is született már róla, de most itt egy érdekességet emelünk csak ki:</p><p><br></p><p>Nézzük például a vevők importálását! Az ERPNextben a Vevő, ami lehet magánszemély vagy szervezet, egy olyan gyűtjő entitás, amihez tartozhat több cím (address), több kapcsolat (személy) is például. Mivel ezek külön entitások az ERPNextben, ezért ezeket külön külön kell importálni, és ezt tovább nehezíti, hogy össze is kell őket kapcsolni, amit csak akkor lehet megtenni, ha az amivel össze akarjuk kapcsolni már létezik a rendszerben, azaz előbb az került létrehozásra/importálásra. </p><p><br></p><p>Van egy kivétel, ami szintén egy hasznos tipp, hogy vagy egy elsődleges kapcsolat, és cím is, amit a vevő importnál egyből fel lehet tölteni és akkor nem három különböző táblázatot kell importálni csak egyet. </p><p><br></p><p>Viszont, ha egy vevőhöz több személy és/vagy cím tartozik, akkor fontos, hogy az alábbi sorrendben járjunk el:</p><p><br></p><p>A "Link Name" oszlop, amin keresztül összeköthetjük ezeket az entitásokat. Az nem lesz beleírva a példaként letölthető táblázatban amit érdemes használni importáláskor, de az kézzel kitölthető. </p><p><br></p><p>Először hozzuk létre a kapcsolatokat és a vevőket. Majd a táblázatkezelővel kell varázsolnunk, hogy címek importálásakor ez a Link Name oszlop kerüljön feltöltésre, ezzel az ekkor importált cím hozzákapcsolódik a vevőhöz. (Ebben az oszlopban a vevőt adjuk meg). </p><p><br></p><p>Tehát először a vevőt importáljuk, majd a címeket. </p><p><br></p><p>Szerencsére az importáló eszköz hiba esetén elég jól megmondja mi a gond, így van lehetőségünk javítani és újrapróbálni. </p></div>
