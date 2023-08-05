---
title: Indexing the ERPNext Website on Google
draft: false
author: Admin
tags:
    - news
    - monolithon
    - erpnext
image:
      src: /erpnext-weboldal-google-indexelése.png
      alt: ERPNext
snippet: Our website has been indexed by Google so far, as it was not blocked. But there are ways to improve it further.
publishDate: 2022-09-26 11:39
category:
    - news
---

<p><img src="/erpnext-weboldal-google-indexelése.png"></p><p><br></p><p>One of our colleagues encountered difficulties with indexing the ERPNext website on Google, so I checked the situation and found that our website has been indexed by Google so far, as it was not blocked. But there are ways to improve it further. There is an option to notify Google of every new content published so that it can crawl and display it as a search result on its search page. I decided to write this article because although this feature exists, the documentation is incomplete. If we want to enable this indexing, we first need to set up Google services within our ERPNext system, and for this, we also need to configure certain things in the Google Developer Console, which is well documented. However, besides using the credentials for címtár, naptár, map, drive API, and Google OAuth, we also need to enable the Indexing API. Once this is done, the crucial step is to set the following as the Authorized Redirect URIs within the OAuth 2.0 Client IDs of the used credentials:</p><p><br></p><pre class="ql-code-block-container" spellcheck="false"><div class="ql-code-block" data-language="plain">https://www.monolithon.com/?cmd=frappe.website.doctype.website_settings.google_indexing.google_callback</div></pre><p><br></p><p>However, this has changed, and for version 14.0, you will need the following URL:</p><pre class="ql-code-block-container" spellcheck="false"><div class="ql-code-block">https://www.monolithon.com/api/method/frappe.integrations.google_oauth.callback</div></pre><p><br></p><p>Of course, replace the domain <a href="http://www.monolithon.com" rel="noopener noreferrer">www.monolithon.com</a> with your own.</p>
