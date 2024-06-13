---
title: ERPNext, BI, and Business Intelligence+Metabase
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-bi-és-üzleti-intelligencia-metabase.png
  alt: ERPNext
snippet: We should consider ERPNext as a data warehouse and the central storage unit for all important business data.
publishDate: 2023-02-8 11:39
category:
  - news
language: en-us
---

In several previous posts, I mentioned that to organize and understand our business processes effectively, we need good software. There are several schools of thought on this matter. I believe that instead of using many isolated solutions, it is more beneficial to choose an integrated system. ERPNext is an excellent choice for this purpose, especially because certain external systems need to be integrated anyway, and ERPNext simplifies this process. This is much easier than trying to connect each element individually and not having a central interface, with data scattered across different systems.

In line with this data warehouse concept, since we store all business data in the ERPNext system, we would like to access and report on it. ERPNext's reporting functionality allows users (with the appropriate permissions, which could be a separate topic in the context of ERPNext) to collect and analyze a wide range of data, enabling them to make better decisions.

ERPNext's report functionality enables us to dynamically create reports, sort data, use filters, and make comparisons. All this can be done when the data is within ERPNext, so I recommend using it as the primary data warehouse. ERPNext's report builder is available by default, and there are a few built-in important reports in the system. Besides the various basic views like List, KanBan, and Dashboard, there's also a Report view that allows us to create and save our own reports. We can even receive email notifications based on these reports, and we can configure the system to notify us only about specific changes.

ERPNext has gone one step further in the field of business analysis by integrating reports with visualization, as seen in the image above. We can create various charts based on the necessary information and data. However, the world is changing, and so are the demands. Just as we took a brief look into the world of OpenAI, ChatGPT, one of the most modern technologies, in the previous post (<a href="https://www.monolithon.com/blog/hirek/erpnext-%C3%A9s-a-chatgpt" rel="noopener noreferrer">ERPNext and ChatGPT</a>), I would now like to show you the future of reports:

BI - Business Intelligence - Business Intelligence Software</><p><br></p><p>Today, analysts prefer to ask questions instead of simply receiving reports and immediately getting answers. This approach is followed by most business intelligence software, such as the well-known PowerBI. However, since I prefer free and open-source software solutions, I recommend Metabase for this purpose. It's also easy to connect Metabase with ERPNext, and you can get answers to your questions or even create reports with Metabase, possibly more easily than with ERPNext.

Moreover, what's also very useful is that we can use Metabase, connected to ERPNext, not only for data consumption, as described in this post: <a href="https://discuss.frappe.io/t/guide-how-to-install-metabase-dashboard-along-with-erpnext-on-ubuntu-18-04-server/53075" rel="noopener noreferrer">https://discuss.frappe.io/t/guide-how-to-install-metabase-dashboard-along-with-erpnext-on-ubuntu-18-04-server/53075</a></p><p>But we can also display reports and data created in Metabase within ERPNext, so we can use a powerful business intelligence BI software without leaving ERPNext. The details of this solution can be found here: <a href="https://github.com/pipech/frappe-metabase" rel="noopener noreferrer">https://github.com/pipech/frappe-metabase</a>

<img src="/images/jF7FETk.jpg">

Since it was really just a few clicks to connect ERPNext and Metabase, I'll include a screenshot of the Sales Invoice list in the demo system within Metabase, which comes directly from ERPNext and is updated in real-time. Another exciting aspect of Metabase is that we can work with data coming from multiple data sources simultaneously. This can be useful even in the case of isolated systems or can greatly facilitate the analysis of data coming from external advertising systems that are not connected to the integrated ERPNext. And we haven't even considered applying artificial intelligence to these data yet. For example, one of the newest products demonstrates using artificial intelligence within a database: <a href="https://mindsdb.com/natural-language-processing-in-databases" rel="noopener noreferrer">https://mindsdb.com/natural-language-processing-in-databases</a>

efore anyone dives in, it's worth mentioning that Metabase connects directly to the MySQL database, so it's better to connect to the test system rather than the live one.
