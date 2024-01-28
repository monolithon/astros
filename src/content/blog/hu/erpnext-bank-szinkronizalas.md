---
title: ERPNext GoCardless bank szinkronizálás
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-gocardless-03.png
  alt: ERPNext GoCardless
snippet: Megjelent a bank szinkronizáló alkalmazásunk ERPNext-hez.
publishDate: 2023-12-27 13:39
category:
  - hír
---

<p>ERPNext magyar bank szinkronizáció GoCardless integrációval</p>

<p>Az ERPNext ERP/CRM rendszerbe a kezdetektől fogva lehet banktranzakciókat importálni, hogy a könyvelésünk megbízható legyen azáltal, hogy ezeket a bank trazakciókat összepárosítjuk a rendszerünkben általunk rögzített fizetési bejegyzéseinkkel.</p>

<p>Amint a banki tranzakciók elérhetővé váltak különböző aggregátor oldalakon keresztül, mint például a Plaid, akkor az ERPNext ezt gyorsan implementálta, hogy az ERPNext felhasználók a Plaid rendszerén keresztül elérhető bankokból banki adatokat szinkronizálhassanak. Ez a mai napig működik is, de magyar felhasználóként be kellett látnunk, hogy hiába várunk arra, hogy a Plaid rendszerébe magyar bankok adatai is elérhetőek legyenek, hiszen egy amerikai vállalatról van szó, akinél már az nyugat-európai bankok is különlegesnek számítanak.</p>

<p>Ugyan egyre több magyar vállalkozás tért át valamilyen alternatív bankra, mint például a Revolut, vagy a Wise és ugyan ezek - némi trükközéssel - elérhetőek a Plaid rendszerén keresztül, de a kényelmes megoldásra várni kellett amíg valamelyik aggregátor oldal elérhetővé tette az adatokat és egy ehhez szükséges ERPNext module elkészült.</p>

<p>Itt tartunk most. A munka az aggregátor oldal kiválasztásával kezdődött. Sokat megnéztünk. Az egyik legnagyobb és a nagyobb szervezetek által preferált megoldás az <a href="https://aggreg8.io/">https://aggreg8.io/</a>, de választhattuk volna a <a href="https://docs.openbanking.klarna.com/">https://docs.openbanking.klarna.com/</a> megoldását is, de mi az akkor még Nordigen néven néven futó szolgáltatást választottuk, amit azóta a GoCardless felvásárolt és átnevezett. Nem bántuk meg meg, mert a szolgáltatás korábban is jó volt, de a GoCardless-nél is nagyon jó kezekbe került.</p>

<p>Ahhoz, hogy az általunk készített GoCardless megoldás használható legyen GoCardless bankaccountdata fiókra is szükség van, az ingyenes elég, mert az is szinte korlátlan lekérdezést tesz lehetővé: <a href="https://bankaccountdata.gocardless.com/">https://bankaccountdata.gocardless.com/</a></p>

<p>Ezt követően csak egy Secret ID és Secret key párost kell generálnunk a GoCardless felületen, amit már a saját ERPNext példányunkon telepített ERPNext Gocardless Settings alatt kell megadnunk. Utolsó lépésként pedig egy új GoCardless Bank-ot kell hozzáadnunk, ahol választhatunk a kiválasztott országnak megfelelő bankok listájából.</p>

<p>Ezt természetesen összeköthetjük az ERPNext bankszámlával és kézzel vagy automatikusan szinkronizálhatjuk a banki tranzakciókat.</p>
<p>További részletek és megrendelés a dedikált aloldalon: <a href="https://www.monolithon.com/hu/gocardless">https://www.monolithon.com/hu/gocardless</a></p>
