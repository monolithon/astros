---
title: MNB árfolyamok ERPNext rendszerben
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /mnb-árfolyamok-erpnext-rendszerben.png
  alt: ERPNext
snippet: ERPNext rendszer használata magyarul, a magyar szabályoknak való megfeleltetés sok lokalizációs feladatot jelent. Egyik ilyen az MNB árfolyamok kezelése. Most ennek a megoldását mutatom be!
publishDate: 2022-09-4 11:39
category:
  - hír
language: hu
---

![Image](/images/mnb-árfolyamok-erpnext-rendszerben.png)

Volt már egy bejegyzés az árfolyamokról, ahol az alap ERPNext árfolyam API kapcsolatokat mutattam be, és az főleg azoknak volt hasznos, akik az Európai Központi Bank árfolyamait szeretnék használni, mert a számviteli politikájukban és a NAV felé ezt jelentették be. Ennek lehet több előnye, hátránya, ahogy a saját banki árfolyamok használatának is. A lényeg, hogy mindenre van lehetőség az ERPNext-ben, mert kézzel bármilyen árfolyam felvihető, de ki akarja kézzel töltögetni az árfolyamokat, ha azok automatikusan is lekérdezhetőek a megfelelő forrásból, mint például az MNB webservice szolgáltatásból, ráadásul ingyen?

Mivel a cégek többsége MNB árfolyamot használ, mondhatni ez a sztenderd, ezért hiába ajánlottam az egyszerűbb EKB megoldást, nem kerülhetjük meg az MNB árfolyamokat, ezért az ERPNext magyar számlázást lehetővé tevő funkcióinak implementálásában az egyik első lépés, az MNB integráció kialakítása volt. Ahogy az oldalon olvasható, hamarosan elérhető lesz az ERPNext magyar számlázási megoldásom és ennek az egyik eleme, az MNB árfolyamok kezelése. Azért született ez a bejegyzés, hogy közzétegyem, ez a funkció már működik. Igaz jelenleg SI/PI (Sales Invoice/Purchase Invoice, azaz vevő és értékesítési számlán, viszont a felépített API kapcsolat a lényeg, mert ezzel még a többi helyre is könnyedén integrálni tudjuk, pl a payment (ki/befizetések) rögzítéséhez stb.) Ez is inkább egy proof of concept-nek, azaz megvalósíthatósági tanulmánynak indult, nehogy a teljes számlázási szolgáltatást blokkolja, ha valamiért nem valósítható meg. De elkészült, működik meg lehet csinálni. És ami még jobb, hogy ezt cég szinten opcionálissá tettem, azaz akinek több cége van, belföldi, vagy akár külföldi, ott a két cég két külön árfolyamszolgáltatóval is dolgozhat.

Íme a beállítás, ahol mostantól ki lehet majd választani hogy a gyári árfolyamszolgáltató helyett milyen sajátot szeretnénk használni:

![Image](/images/5qr71Fp.jpg)
