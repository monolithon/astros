---
title: ERPNext GDPR és cookie, azaz süti kezelés
draft: false
author: Admin
tags:
    - hír
    - monolithon
    - erpnext
image:
      src: /erpnext-gdrp-és-cookie-azaz-süti-kezelés.png
      alt: ERPNext
snippet: A monolithon.com, a magyar ERPNext portál is használ sütiket, ahogy a legtöbb internetes weboldal és az EU-s irányelvek alapján erről tájékoztatni is kell az oldal látogatóit.
publishDate: 2022-06-30 11:39
category:
    - hír
---

<p>A sütik (cookie) kezelésben a korábbiakban sem az volt a bonyolult, hogy erről tájékoztatni kell az oldal látogatókat az ERPNext weboldalunkon, hanem az, hogy amennyiben a látogató nem fogadja el a sütik használatát, akkor tényleg nem használhatunk sütiket és így weboldal üzemeltetőként nem férünk hozzá bizonyos információkhoz. De persze ezzel a látogatónak is szűkülnek a lehetőségei, mert például a kosárban hagyott termékeket is elfelejti az oldal stb.</p><p><br></p><p><img src="/erpnext-gdrp-és-cookie-azaz-süti-kezelés.png"></p><p><br></p><p>Ezek együttes kezelésére kell tehát egy megoldás, ahol az ERPNext weboldal üzemeltetőként elérjük, hogy engedélyezze a látogató a sütik használatát, de addig ne töltsük be ezeket a programkódokat, hogy ezzel szabályosan járjunk el. Sőt, tovább bonyolítja a helyzetet, hogy lehetőséget kell biztosítani, hogy bizonyos sütiket engedélyezhessen a látogató, bizonyosakat pedig letilthasson. Ez eddig nem volt egyszerű, de szerencsére akad jónéhány olyan szolgáltató, akik megoldják nekünk ezeket és bármilyen weboldalba, így az ERPNext magyar weboldalába is sikeresen integrálható.</p><p><br></p><p>Az alábbi listán szereplő süti kezelő megoldásokat vizsgáltam meg, de a részletes elemzés helyett térjünk egyből a lényegre:</p><p><br></p><p>A leggyorsabban, legegyszerűbben a <a href="https://cookiebot.com" rel="noopener noreferrer">https://cookiebot.com/</a> megoldását integrálhatjuk az ERPNext weboldalunkba. Ugyan csupán néhány kattintás az egész, de mégis rengeteg beállítás közül választhatunk, még az ingyenes változatban is, ami 100 lapnál kisebb weboldalak számára használható, de növekedés után is ez tűnik a legolcsóbbnak a többihez képest.</p><p><br></p><p>Ezzel nem kell a Google Tag Manager-en keresztül a cookie jóváhagyások programozásával tölteni az időnket, valamint az ügyes felhasználói felületnek hála, a megoldás vezeti az ügyfelet, hogy mit "kell" tennie, hiszen az elfogadás nélkül nem éri el például az ERPNext magyarul weboldal tartalmait, de közben mégis megfelelünk az előírásoknak.</p><p><br></p><p>FRISSÍTÉS:</p><p><br></p><p>Lecseréltem a cookiebot-ot a <a href="https://www.enzuzo.com" rel="noopener noreferrer">https://www.enzuzo.com/</a> megoldására, mert bizonyos mérések nem működtek megfelelően. </p><p><br></p><p><a href="https://cookiebot.com" rel="noopener noreferrer">https://cookiebot.com/</a></p><p><a href="https://cookiefirst.com/#pricing" rel="noopener noreferrer">https://cookiefirst.com/#pricing</a></p><p><a href="https://www.cookiehub.com/pricing" rel="noopener noreferrer">https://www.cookiehub.com/pricing</a></p><p><a href="https://www.osano.com/plans" rel="noopener noreferrer">https://www.osano.com/plans</a></p><p><a href="https://app.termly.io/user/products" rel="noopener noreferrer">https://app.termly.io/user/products</a></p><p><a href="https://usercentrics.com/pricing" rel="noopener noreferrer">https://usercentrics.com/pricing/</a></p><p><a href="https://www.onetrust.com/products/cookie-consent" rel="noopener noreferrer">https://www.onetrust.com/products/cookie-consent/</a></p>




