---
title: Hungarian Micro-Enterprise Chart of Accounts
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /magyar-mikrogazdálkodói-számlatükör.png
  alt: ERPNext
snippet: Since ERPNext's foundation is the chart of accounts, we concluded that it would be beneficial to set up the chart of accounts and default accounts based on the Hungarian localization.
publishDate: 2022-10-23 11:39
category:
  - news
---

Hi everyone!

Since ERPNext's foundation is the chart of accounts, we concluded that it would be beneficial to set up the chart of accounts and default accounts based on the Hungarian localization, so that we can build invoicing and other necessary elements on top of it.

We saw the chart of accounts corrected by @krnkris, and we would like to thank him for his great work, as this was a significant step forward and a Hungarian chart of accounts was included in ERPNext:

[https://github.com/frappe/erpnext/issues/7866](https://github.com/frappe/erpnext/issues/7866)

[https://discuss.erpnext.com/t/numbering-of-accounts-in-chart-of-accounts/11101/36](https://discuss.erpnext.com/t/numbering-of-accounts-in-chart-of-accounts/11101/36)

We would like to continue this work together with the community.

After considering the topic thoroughly, we came to the conclusion that it might be best to add an optionally selectable, new chart of accounts to the system, namely the micro-enterprise chart of accounts, which is an attachment to the Government Decree 398/2012. (XII. 20.) on the simplified annual financial statements of micro-enterprises. When choosing the micro-enterprise financial statement option, the company is required to use this chart of accounts.

[https://net.jogtar.hu/jogszabaly?docid=a1200398.kor](https://net.jogtar.hu/jogszabaly?docid=a1200398.kor)

According to the decree, this chart of accounts cannot be modified, except:

"Further detailing of chart of accounts according to Attachment 3 is not considered a deviation."

Therefore, with this micro-enterprise chart of accounts, we do not aim for full-scale accounting automation, but rather to have the necessary general ledger accounts, so that we can set them as default accounts in the system. Once the Hungarian invoicing compatible with the National Tax and Customs Administration (NAV) is completed, the system will be ready to use out-of-the-box. So, we will only extend it with a few accounts, but to keep it trackable, we will go through an original commit with the original micro-enterprise chart of accounts and then expand it accordingly with a pull request.

Creating this chart of accounts was a considerable effort, so we did it in a way that the necessary JSON file can be automatically generated from a spreadsheet in case of changes. We will use this method to create the second, full-scale chart of accounts because we believe that it is much easier to edit in a spreadsheet than in a coded, difficult-to-read source code.

Of course, the chart of accounts importer can still be used, and certain modifications can be made from the interface if needed, and we will also share how to do this.

Feel free to ask questions, share ideas, and provide suggestions. Thank you very much.

ui: Let's keep this topic for the micro-enterprise chart of accounts. Let's use dedicated topics for the "full-scale" general chart of accounts, default accounts, NAV invoicing, etc.

ui2: We published this original post on the forum to facilitate discussions:

[https://discuss.erpnext.com/t/magyar-mikrogazdalkodoi-szamlatukor/96364](https://discuss.erpnext.com/t/magyar-mikrogazdalkodoi-szamlatukor/96364)
