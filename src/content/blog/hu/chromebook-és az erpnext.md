---
title: Chromebook és az ERPNext
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /Chromebook-ERPNext.jpg
  alt: ERPNext
snippet: Régóta készülök egy Chromebook ajánlóval, de most jött el az ideje, mert egy ideje tényleg mindkettő nagyon jó választás a mindennapi személyes és üzleti életben is.
publishDate: 2023-03-21 11:39
category:
  - hír
language: hu
---

Mielőtt megosztom a Chromebook-kal kapcsolatos információimat először arra szeretnék választ adni, hogyan kapcsolódik a Chromebook és az ERPNext. Számomra több kapcsolódási pont van, ezért az elején kezdem

### Az egyik, az a használhatóság amihez a Linuxon keresztül jutottam el

Számomra is sokáig sajnos csak a Windows létezett és meg kell mondjam, sosem voltam érte oda. A 3.1-el kezdtem és követtem a kiadásokat, egészen addig amíg egy barátnőm megkért, hogy nézzem már meg a netbookját, mert szeretne feltenni valamit rá és sehogy sem akar sikerülni. Ekkor találkoztam először a SUSE linux rendszerével, először meggyűlt vele a bajom, de amikor elengedtem a Windows-os gondolkodást, nagyon megszerettem és hiába győzködött, hogy windowst szeretne rá, végül maradt a SUSE, mert azon is mindent meg lehetett oldani, ráaudásul jellemzően biztonságosabban, stabilabban és gyorsabban, bár valós mérések nélkül ez inkább csak benyomás. Ezt követően magyar UHU Linux felhasználó lettem, mert a játékok, amikhez Windows kellett volna már nem érdekeltek és utána jött az Ubuntu és társai, de főleg grafikusan, néha persze parancssorral. Amikor azonban mediacentert szerettem volna, vagy saját cloud tárolást, akkor a Raspberry Pi került a képbe és a VPS-ek, különböző feladatokra. (Az csak most ugrik be, hogy egy szerkesztőségben gyakornokként szintén meglepett a Linux, de csak azt követően lett folytatás). A Windows után mindig hatalmas nyugalom volt a Linux használata, viszont akadt néhány probléma. Az egyik a grafikuskártya nehézség, a másik a laptopok esetén az energia gazdálkodás.

### Hogy lett a Linuxból Chromebook?

Amikor hűtőventillátor nélküli, teljesen néma működésű laptopot kerestem, akkor nem igen volt más választásom. A mozgóalkatrész hiányából adódoan zajmentes, kevésbé melegedő, kevesebb energiát használó és talán strapabíróbb, hiszen pormentes is egyben. Ez mind kellett nekem, de a Chromebook még újdonság volt számomra, de azt tudtam, hogy Linuxra épül ezért Linux is futtatható rajta. Amikor az így futtatott Linux teljesítményét összehasonlítottam az akkor saját setupommal kiderült, hogy ugyan nem gyorsabb, de hozza a szintet, ami nekem elég volt, így váltottam. És azóta sem bántam meg. Ekkortájt érdekes módon megvoltam a Chrome operációs rendszerrel és a limitált crosh shell-lel és nem is kellett rá Linuxot telepítenem, így még gyorsabb volt a gép.

### Ami miatt korábban nem került a látókörömbe, és amit nem, vagy rosszul tudtam a Chromebookról

Mindenhol azt írták, hogy ez csak internetezésre akalmas. Ezt, illetve a többi internettel kapcsolatos információt úgy értettem, hogy internet nélkül nem is használható. Annak ellenére, hogy a régi mondással értek egyet, miszerint: "Minek áram, ha nincs internet?" mégis azt gondoltam, ez így nem lesz jó mindennapi használatra. Mint kiderült tévedtem. Annak ellenére hogy például a Google Drive integrálva van tehát nagyon könnyen elérhetjük az ott tárolt fájlokat és tölthetjük fel oda őket, nem csak hogy azok helyi tárolására is van lehetőség és akár a dokumentumok offline szerkeszthetőségére is, hanem természesen van saját mappánk a gépen ahol akár a Drive-tól független fájlainkat tárolhatjuk és dolgozhatunk velük.</p>

A Google még tovább ment, mert ma már nem csak a fent említett hack-kel lehet Linuxot használni a Chromebook-on, hanem direkt beépítették a fejlesztőknek szánt Linux konténert is, amit egy kattintással el lehet indítani, amiben jelenleg alapból egy Debian 11-es fut. És ha ez nem lenne elég, akkor már az Android vilából ismer appokat is használhatjuk a Chromebookon.</p>

Mi az ami nincs? Excel. Ez valakinek lehet, hogy nagyobb problémát jelent, de érdemes megvizsgálni, hogy valójában az-e! Korábban a Linuxos gépekimen Open/Libre Office-t használtam, ez jelenleg a fejelsztői Linux gépen is futtatható. Korábban elérhető volt Androidra az Excel, ami Chromebook-on is tökéletesen működött, nagyon széles funkcionalitással, aminek a jelenlegi státuszát nem ismerem, mert a Microsoft is az online világba megy és a Google Sheet/Táblázathoz (ez is lehet elegendő alternatíva bizonyos esetekben) hasonló megoldása az Online Excel is egyre több dolgot tud. De megértem, hogy valakinek egy igazi teljes funkcionalitású Excelre van szüksége, akkor én egy a távoli asztal klienssel elérhető akár virtuális Windows-t ajánlok, mert az Excel úgyis azon a leggyorsabb, amit akár használat alapon is bérelhetünk pl az Amazontól, de még ennél is olcsóbban megoldható akár folyamatos használat mellett is, hiszen nem kellett drágább számítógépet, sem Windows sem Office előfizetést vásárolnunk.

### Elérkeztünk az ERPNext és a Chromebook egyik kapcsolódási ponjához

Az infromatikai fejlődésnek azon szakaszában járunk, hogy minden a felhőbe költözött, legyen az publikus vagy privát és valójában egy böngészőre van csupán szükségünk, amik között sajnos nincs nagy verseny, mert a Chrome böngésző egyeduralkodó. Viszont mi tud annál gyorsabb lenni, mint egy böngészőre optimalizált számítógép? Ez a Chromebook és az ERPNext egy olyan felhőben futó alkalmazás amihez valóban csak egy böngészőre van szükségünk. Nem kell helyileg telepítenünk semmit, így valóban tökéletes a kettő együtt.</p>

A másik kapcsolódási pont az az ár-érték arány. A minőség mellett a megfizethetőség és ár-érték arány is nagyon fontos számomra és ezt az ERPNext és a Chromebook tekintetében is megkapom, hiszen mindkettő nagyon jól van árazva.

Van még egy érdekes sztori hogyan kapcsolódik nálam a kettő: az egy ERPNext partnerhez kötődik, akinek az oldalát sokszor olvasgattam és ott vettem észre, hogy ő is Chromebook rajongó és ő is a használhatóság és költséghatákonyság miatt ajánlja együtt az ERPNext-tet és a Chromebook-ot.

Korábbi cikkekből kiderül, hogy nyílt forrású megoldásokat keresem, amik lehetőleg ingyenesek, de semmiféleképpen nem felhasználó szám alapján kell fizetni, a Chromebook pedig a Google online infrastruktúrájára épül, mint például a fentebb említett Googel Drive. Hogy is van ez akkor? Valóban felemásnak tűnhet a dolog, de annak ellenére, hogy Chromebookot használok, a Google szolgáltatásokat kerülöm, mindenre van alternatíva, mint például a Drive-ra a Nextcloud etc. Igaz ez nincs olyan mértékben integrálva, de talán nem is kell. Illetve akinek nincs adatvédelmi aggálya, csupán ha szükséges akkor inkább a Google helyett más fejlesztőt támogatna pénzzel, ahogy én is, akkor a lehetőség van az ingyenes Google termékek használatára azoknak a használati korlátjain belül maradva és amikor az kevés, akkor lehet pl archiválni a Drive-&gt;Nextcloud irányba.

Az Android telefonnal való együttműködése is példás, mert minden egyéb szoftver nélkül megy az aktuális böngésző fülek szinkronizálása, vagy a laptop feloldása a telefon ujjlenyomatolvasójának segítségével. Vagy akár az értesítések, médiatartalmak és SMS-ek megosztása stb...

És utoljára a kedvencem: a biztonság, itt nincs vírus, sem kártevő. Jelez, ha lejött a frissítés hamar telepíti. Nincs olyan, hogy egy nem várt frissítés miatt órákra használhatatlan a gép amíg azt feltelepíti a legkevésbé alkalmas időpontban. Csak teszi a dolgát, ahogy az ERPNext is.

A hátrány? Itthon hivatalosan nem forgalmazzák, de azért hozzá lehet jutni, akár garanciával is.
