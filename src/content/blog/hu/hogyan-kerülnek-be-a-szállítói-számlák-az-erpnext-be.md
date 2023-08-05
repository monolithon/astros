---
title: Hogyan kerülnek be a szállítói számlák az ERPNext-be?
draft: false
author: Admin
tags:
    - hír
    - monolithon
    - erpnext
image:
      src: /hogyan-kerülnek-be-a-szállítói-számlák-az-erpnext-be.jpg
      alt: ERPNext
snippet: Erre több megoldás is van. Az egyik legegyszerűbb ha van Purchase Order (Beszerzési megrendelés) a rendszerben, akkor abból tudunk generálni Szállítói számlát (Purchase Invoice).
publishDate: 2022-10-16 11:39
category:
    - hír
---

<p>A másik megoldás lehet, hogy ha a tételek már megérkeztek és a szállítólevél rögzítve lett a rendszerben, akkor abból kiindulva is készíthetünk egy szállítói számlát.</p><p><br></p><p>Ezt a bejegyzést azonban azért írom, hogy megmutassam milyen folyamatot dolgoztunk ki a Monolithon magyar ERPNext rendszerben, amihez ugyan több másik szoftvert is használunk, de attól még nagyon egyszerű, stabil és hatékony megoldás lett:</p><p><br></p><p><br></p><p>Androidon a <a href="https://play.google.com/store/apps/details?id=com.microsoft.office.officelens&amp;hl=en&amp;gl=US" rel="noopener noreferrer">Microsoft Lens - PDF Scanner</a> alkalmazással készítünk egyszerűen és gyorsan szuper minőségű, de jól tömörített képeket az akár több oldalas számlákról, amit pdf formátumban mentünk el a telefonunkon. Rengeteg hasonló programot kipróbáltunk, de ez a legfelhasználó-barátabb, mégha hihetetlen is, pedig a Microsoft készíti.</p><p><br></p><p>Innentől nincs sok dolgunk, mert a <a href="https://play.google.com/store/apps/details?id=com.microsoft.office.officelens&amp;hl=en&amp;gl=US" rel="noopener noreferrer">FolderSync</a> Android app a háttérben szinkronizálja a <a href="https://nextcloud.com/" rel="noopener noreferrer">Nextcloud</a> rendszerbe a számlákat, ahonnan az <a href="https://n8n.io/cloud?ref=monolithon&amp;utm_source=affiliate" rel="noopener noreferrer">n8n</a> elküldi a bejövő számlák fogadására fenntartott email fiókba, amit az ERPNext beolvas.</p><p><br></p><p>Így már kézzel hozzá tudjuk csatolni a megkapott számlaképet az ERPNext szállítói számlához. Ez akkor érdekes, ha például tömegesen töltjük le automatikusan a NAV-ból a szállítói számlákat, azaz azok már benne vannak a rendszerben és már csak hozzá akarjuk csatolni az így szinkronizált számlaképeket.</p><p><br></p><p>Vagy kisebb számlaforgalom esetén fordított is lehet a folyamat, azaz használhatjuk a hamarosan elkészülő megoldást, ami lehetővé teszi, hogy a számla fogadására fenntartott email fiókba érkezett levélből az ERPNext automatikusan előkészítsen egy szállítói számlát és az így előkészített dokumentumon kézzel kiválasztjuk/létrehozzuk a szállítót és a beérkezett pdf dokumentumból kimásoljuk a szállítónként egyedi számla (sor)számot -&nbsp;például ezzel a <a href="https://chrome.google.com/webstore/detail/copyfish-%F0%9F%90%9F-free-ocr-soft/eenjdnjldapjajjofmldgmkjaienebbj" rel="noopener noreferrer">chrome kiegészítővel</a> és a frissítés gombbal a számla adatait automatikusan letöltjük a NAV rendszeréből.</p><p><br></p><p>Leírva talán kicsit hosszú, de majd a videón látszani fog, hogy a gyakorlatban milyen kényelmes, mert ezzel ötvöztük a közvetlenül a szállítóktól email-ben érkező pdf-ek feldolgozását az általunk fotózott dokumentumok automatikus feltöltésével és még a drága OCR-t is kihagyhattuk, mert arra valójában nincs szükség, mégha amúgy az n8n-be vagy az ERPNext-be is könnyedén integrálhatnánk.</p><p><br></p><p>Frissítés:</p><p>A legtöbb esetben az Office Lens Android app az OCR funkciót is betölti egyben, mert a pdf-be való mentések nagy részében kereshető pdf jön létre. Kivéve rossz minőségű képek esetén nem dolgozza fel a szöveget az app. ;)</p>



