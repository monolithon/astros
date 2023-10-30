---
title: ERPNext weboldal Google indexelése
draft: false
author: Admin
tags:
    - erpnext
image:
    src: /erpnext-weboldal-google-indexelése.png
    alt: ERPNext
snippet: Oldalunkat ugyan eddig is indexelte a Google, mert az nem volt letiltva. De lehet ezt még jobban csinálni.
publishDate: 2022-09-26 11:39
category:
    - hír
---

<p><img src="/images/erpnext-weboldal-google-indexelése.png"></p><p><br></p><p>Egy kollégának az ERPNext weboldalának indexelésével akadtak nehézségei, ezért megnéztem, hogy mi a helyzet és láttam, hogy oldalunkat ugyan eddig is indexelte a Google, mert az nem volt letiltva. De lehet ezt még jobban csinálni. Azaz van egy opció, hogy konkrétan minden egyes új tartalom megjelenítésekor értesítsük a Google-t az oldal publikálásáról, hogy ő azt feltérképezhesse és a kereső oldalán találatként megjeleníthesse. Azért született ez a cikk, mert ez a funkció ugyan létezik, de a dokumentáció hiányos. Ha ezt az indexelést be akarjuk kapcsolni, akkor egyrészt be kell állítanunk a Google szolgáltatásokat az ERPNext rendszerünkön belül, amihez a Google Developer Console rendszerében is be kell állítanunk bizonyos dolgokat, ez jól van dokumentálva. Azonban a címtár, naptár, map, drive API és Google Oauth használata mellett ehhez a Indexing API bekapcsolására van szükség. Ha ez megtörtént, akkor jön a lényeg, hogy a használt Credentials-on belüli OAuth 2.0 Client IDs-ben Authorized redirect URIs-nek adjuk meg a következőt:</p><p><br></p><pre class="ql-code-block-container" spellcheck="false"><div class="ql-code-block" data-language="plain">https://www.monolithon.com/?cmd=frappe.website.doctype.website_settings.google_indexing.google_callback</div></pre><p><br></p><p>Ez azonban változott, mert a fenti 13.0-hoz való URL, a 14.0-hoz pedig a következőre is szükségvan:</p><pre class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">https://www.monolithon.com/api/method/frappe.integrations.google_oauth.callback</div></pre><p><br></p><p>Természetesen a <a href="http://www.monolithon.com" rel="noopener noreferrer">www.monolithon.com</a> domain helyett a sajátunkat használva.</p>
