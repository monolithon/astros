---
title: Upgraded monolithon.com to ERPNext 14.0 Version
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-140-verzióra-frissítettük-a-monolithoncom-ot.jpg
  alt: ERPNext
snippet: The Hungarian ERPNext and Frappe portal is now running on version 14.
publishDate: 2022-09-28 11:39
category:
  - news
language: en-us
---

As usual, I followed the news and developments about ERPNext and Frappe version 14 even before its release, and I couldn't wait to try it out. After getting acquainted with the developer version, I also tested the official release, and although I didn't encounter any issues, as is advisable in such cases, we didn't immediately upgrade to the latest version. As I mentioned in the <a href="https://www.monolithon.com/blog/hirek/erpnext-14-megjelen%C3%A9s" rel="noopener noreferrer">previous post</a>, there were no issues with new installations, but a few bugs appeared during the upgrade from the previous version.

Now, it seemed like enough time had passed for any potential bugs to be fixed, so we decided to proceed with the upgrade today. Normally, the <a href="https://frappecloud.com/dashboard/signup?referrer=b411e290" rel="noopener noreferrer">Frappe Cloud</a> handles this for us, which used to require a support ticket from them in the past, but now it's automated. You can specify the scheduled date for the ERPNext/Frappe upgrade.

I did the same, but unfortunately, I wasn't successful. The reason was that due to a certain customization, the automatic upgrade to the new version didn't work. The other aspect that made the current upgrade from version 13 to 14 special was that the ERPNext previously included all packages and modules, such as the HR app, which is now a separate, but related package. So, these two minor issues made the version upgrade a bit more complicated, but we still finished it in just two hours :)

For some systems, even the backup wouldn't be completed in two hours, not to mention the costs involved. And the upgrade to version 15 is expected to be even simpler and faster.

Despite mentioning the <a href="https://www.monolithon.com/blog/hirek/zero-downtime" rel="noopener noreferrer">zero-downtime</a> feature in the previous article, which was introduced in version 14, making it available for monolithon.com, there was no downtime during this upgrade because there were no transactions during the two hours of transition. So, for example, the website remained accessible throughout the process, and the only thing that needed to be updated was the domain record, which was done in less than a minute thanks to <a href="https://www.cloudflare.com/" rel="noopener noreferrer">Cloudflare</a>.

As can be seen on our system status page: <a href="https://status.monolithon.com" rel="noopener noreferrer">https://status.monolithon.com</a>
