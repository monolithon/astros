---
title: ERPNext GDPR és cookie, azaz süti kezelés
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-gdrp-és-cookie-azaz-süti-kezelés.png
  alt: ERPNext
snippet: A monolithon.com, a magyar ERPNext portál is használ sütiket, ahogy a legtöbb internetes weboldal és az EU-s irányelvek alapján erről tájékoztatni is kell az oldal látogatóit.
publishDate: 2022-06-30 11:39
category:
  - hír
language: hu
---

A sütik (cookie) kezelésben a korábbiakban sem az volt a bonyolult, hogy erről tájékoztatni kell az oldal látogatókat az ERPNext weboldalunkon, hanem az, hogy amennyiben a látogató nem fogadja el a sütik használatát, akkor tényleg nem használhatunk sütiket és így weboldal üzemeltetőként nem férünk hozzá bizonyos információkhoz. De persze ezzel a látogatónak is szűkülnek a lehetőségei, mert például a kosárban hagyott termékeket is elfelejti az oldal stb.

![ERPNext GDPR és Cookie kezelés](/images/erpnext-gdrp-és-cookie-azaz-süti-kezelés.png)

Ezek együttes kezelésére kell tehát egy megoldás, ahol az ERPNext weboldal üzemeltetőként elérjük, hogy engedélyezze a látogató a sütik használatát, de addig ne töltsük be ezeket a programkódokat, hogy ezzel szabályosan járjunk el. Sőt, tovább bonyolítja a helyzetet, hogy lehetőséget kell biztosítani, hogy bizonyos sütiket engedélyezhessen a látogató, bizonyosakat pedig letilthasson. Ez eddig nem volt egyszerű, de szerencsére akad jónéhány olyan szolgáltató, akik megoldják nekünk ezeket és bármilyen weboldalba, így az ERPNext magyar weboldalába is sikeresen integrálható.

Az alábbi listán szereplő süti kezelő megoldásokat vizsgáltam meg, de a részletes elemzés helyett térjünk egyből a lényegre:

A leggyorsabban, legegyszerűbben a [https://cookiebot.com/](https://cookiebot.com) megoldását integrálhatjuk az ERPNext weboldalunkba. Ugyan csupán néhány kattintás az egész, de mégis rengeteg beállítás közül választhatunk, még az ingyenes változatban is, ami 100 lapnál kisebb weboldalak számára használható, de növekedés után is ez tűnik a legolcsóbbnak a többihez képest.

Ezzel nem kell a Google Tag Manager-en keresztül a cookie jóváhagyások programozásával tölteni az időnket, valamint az ügyes felhasználói felületnek hála, a megoldás vezeti az ügyfelet, hogy mit "kell" tennie, hiszen az elfogadás nélkül nem éri el például az ERPNext magyarul weboldal tartalmait, de közben mégis megfelelünk az előírásoknak.

FRISSÍTÉS:

Lecseréltem a cookiebot-ot a [https://www.enzuzo.com](https://www.enzuzo.com) megoldására, mert bizonyos mérések nem működtek megfelelően.

[https://cookiebot.com](https://cookiebot.com)

[https://cookiefirst.com/#pricing](https://cookiefirst.com/#pricing)

[https://www.cookiehub.com/pricing](https://www.cookiehub.com/pricing)

[https://www.osano.com/plans](https://www.osano.com/plans)

[https://app.termly.io/user/products](https://app.termly.io/user/products)

[https://usercentrics.com/pricing](https://usercentrics.com/pricing)

[https://www.onetrust.com/products/cookie-consent](https://www.onetrust.com/products/cookie-consent)k
