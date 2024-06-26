---
title: ERPNext fejlesztés és fejlesztői eszközök
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-fejlesztés-és-ejlesztői-eszközök.png
  alt: ERPNext
snippet: Az ERPNext fejlesztéséről érdemes tudni néhány dolgot. Az ERPNext könnyen testre szabható és bővíthető, így a felhasználók személyre szabhatják a rendszert a vállalkozásuk egyedi igényei szerint.
publishDate: 2023-02-18 11:39
category:
  - hír
language: hu
---

Az ERPNext fejelsztésével kapcsolatban összeszedtem néhány információt és hasznos ERPNext specifikus fejlesztői eszközt, amelyek segíthetnek egy ERPNext fejlesztési projekt alapjainak megismerésében. De, hogy érdemes-e egyáltalán ERPNext fejlesztésben gondolkodni és ha igen, akkor milyen feltételek mellett azt a bejegyzés végére tartogatom. Lássuk az ERPNext fejlesztés néhány alappillérét:

1. Python és Frappé Framework: Az ERPNext Pythonban íródott, és a Frappé Framework segítségével épül fel. A Frappé Framework egy könnyen tanulható keretrendszer, amely lehetővé teszi az üzleti alkalmazások gyors és hatékony fejlesztését. Az ERPNext fejlesztői számára fontos, hogy alaposan ismerjék a Python és a Frappé Framework működését és használatát.
1. Adatbázis-motor: Az ERPNext alapértelmezett adatbázis-motorja a MariaDB, amelyet a MySQL fork-jának tekintenek. Az MariaDB egy nyílt forráskódú relációs adatbázis-motor, amely lehetővé teszi a hatékony adatkezelést. Ezen belül a jól kialakított adatbázis-séma, adattáblák, indexek, kapcsolatok is hozzájárulnak a jó működéshez, amit fejlesztésnlé szintén ismerni kell és figyelembe kell venni.
1. Modulok: Az ERPNext különféle modulokból épül fel, amelyek különböző üzleti folyamatokat kezelnek. A modulok közé tartoznak például a pénzügyi, a beszerzési, az értékesítési és a CRM modulok. Ha szeretne az ERPNext-hez új modulokat hozzáadni, vagy meglévő modulokat módosítani, alapos ismeretekkel kell rendelkeznie az adott folyamatokról, valamint az ERPNext modularchitektúrájáról.
1. Integrációk: Az ERPNext integrálható más üzleti alkalmazásokkal, például pénzügyi alkalmazásokkal, webáruházakkal, CRM-rendszerekkel és még sok mással. Az integrációk kialakítása a Frappé Framework segítségével történik, amely lehetővé teszi az alkalmazások közötti adatkapcsolatok egyszerű és hatékony kezelését.
1. UI fejlesztés: Az ERPNext felhasználói felülete különböző modulokból áll, amelyekhez különféle funkciók tartoznak. Az ERPNext UI fejlesztése a Frappé Framework és a JavaScript keretrendszerek, például a Vue.js segítségével történik. Az UI fejlesztőknek alaposan ismerniük kell az adott keretrendszereket, valamint a felhasználói élmény tervezésének alapelveit.
1. Verziókövetés: Az ERPNext fejlesztése a verziókövetési rendszer használatát igényli. A verziókövetési rendszer lehetővé teszi a fejlesztők számára, hogy nyomon kövessék a kódbázis változásait, javítsák a hibákat, teszteljék az új funkciókat és összehasonlítsák a különböző verziókat. Az ERPNext fejlesztésében a Git a leggyakrabban használt verziókövető rendszer.
1. Dokumentáció: Az ERPNext fejlesztésekor fontos az alapos dokumentáció vezetése, amely lehetővé teszi a fejlesztők számára, hogy könnyen megértsék a kód működését és hogyan kell módosítani azt. Az ERPNext dokumentációja az adott verzióhoz tartozó fejlesztési útmutatók, API dokumentációk, adatmodell-leírók és még sok más tartalom.
1. Tesztelés: Az ERPNext fejlesztése során fontos a rendszer alapos tesztelése. A tesztelésnek két fő típusa van: manuális és automatizált. A manuális tesztelés során az emberi tesztelők a rendszeren belül tesztelik az egyes funkciókat és adatbázisokat, hogy meggyőződjenek róla, hogy azok megfelelnek-e az elvárásoknak. Az automatizált tesztelés során a tesztelők automatizált tesztelési eszközöket használnak, amelyek lehetővé teszik a tesztek hatékonyabb végrehajtását és a hibák gyorsabb azonosítását. Az ERPNext fejlesztésekor fontos a folyamatos integrációs tesztelés is. A folyamatos integrációs tesztelés a kódbázis változásait automatikusan ellenőrzi, és azonnal értesíti a fejlesztőket, ha valamilyen hibát észlel. Ez segít a hibák gyorsabb azonosításában és megoldásában. A megfelelő tesztelés biztosítja, hogy az ERPNext rendszer megbízható és stabil legyen, és a végfelhasználók elégedettek legyenek az alkalmazás használatával.

Az ERPNext fejlesztése izgalmas kihívás, amely lehetővé teszi a fejlesztők számára, hogy testre szabják a rendszert az adott üzleti igényeknek megfelelően. Az ERPNext fejlesztésekor azonban fontos az alapos ismeretekkel és az erős dokumentációval rendelkező csapat, amely összehangoltan dolgozik a rendszer kialakításán és karbantartásán. Mindehhez azonban nem csak magasszintű ERPNext és programozási ismeretekre van szükség, hanem a fejlesztendő területektől függően például pénzügyi, számviteli ismeretekre a könyvelés terén, vagy akár logisztikai ismeretekre raktározás esetén, továbbá a rendszer komplexitásából adódóan a rendszerszemlélet is elengedhetetlen. Itt még meg kell azt említeni, hogy core (alap) programkódot érintő fejlesztés és fork (leágazás, eltérés) a fő kódbázistól a hosszútávú karbantarthatóság miatt szinte soha sem ajánlott. A jógyakorlat a saját modulokkal való felülírás, ami persze szintén nagy körültekintést igényel. Ha megfelelően végrehajtják, az ERPNext alkalmazás még inkább testre szabható az ügyfél igényeinek megfelelően, és ezáltal javíthatja az üzleti folyamatok hatékonyságát.

ERPNext fejlesztés, azaz programozás és kódolás helyett/mellett azonban az ERPNext más utat is kínál nekünk a testreszabáshoz amelyet a felületről elvégezhetünk. Például alapesetben a beszerzési megrendelésen (Purchase Order) be tudjuk állítani, hogy az milyen költséghelyhez, vagy projekthez kapcsolódik a teljes megrendelés, vagy annak sorai szintjék. De nincs lehetőség feladatokhoz (Task) kapcsolni, ami sokszor hasznos lehet, mégha az ERPNext errre az egyéb költségeket (Expenses) javasolja bizonyos feltételek mellett.

### Ne fejlesszünk, szabjunk testre!

De ekkor nem kell kétségbe esni, ugyanis saját kód nélkül, az új mezőket a felületen hozzáadhatjuk a rendszerünkhöz és saját kód hiányában a gyári főverziók követése és verzióváltások is könnyűek maradnak, hiszen rendszerünk továbbra is "vanilla" ERPNext, azaz módosításoktól mentes.</p>

A következő képernyőképen ez az extra mező hozzáadás látható. Persze ha szeretnénk egyéb automatizációkat, akkor szükségünk lehet kliens vagy szerveroldali szkriptekre is, de még mindig nem kell saját modult fejlesztenünk.

<img src="/images/files/5cYQcrj.png">

Ha azonban mégis a teljes saját fejlesztés mellett döntenénk, akkor használhatjuk az alábbi Frappe és ERPNext fejelsztéshez hasznos eszközöket:

<a href="https://chrome.google.com/webstore/detail/frappeerpnext-tools/mfpfeokebfgddkaemagjigbjkmohmpab" rel="noopener noreferrer">https://chrome.google.com/webstore/detail/frappeerpnext-tools/mfpfeokebfgddkaemagjigbjkmohmpab</a></p><p><a href="https://github.com/ElasticRun/barista" rel="noopener noreferrer">https://github.com/ElasticRun/barista</a></p><p><a href="https://github.com/ankush/frappe-test-runner" rel="noopener noreferrer">https://github.com/ankush/frappe-test-runner</a></p><p><a href="https://github.com/barredterra/frappe_server_performance" rel="noopener noreferrer">https://github.com/barredterra/frappe_server_performance</a></p>
