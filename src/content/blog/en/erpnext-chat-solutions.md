---
title: ERPNext Chat Solutions
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-chat-megoldások.png
  alt: ERPNext
snippet: Just as ERPNext and IT are in a continuous process of change, the ERPNext chat application has also undergone this evolutionary development.
publishDate: 2022-07-22 11:39
category:
  - news
language: en-us
---

<img src="/images/6xo80eZ.png">

Many people requested an integrated chat in ERPNext, and these words were listened to, and the Frappe team delivered the integrated chat in version 12. It wasn't perfect, but some chat application was finally available within ERPNext. While some needed it, others didn't really miss another chat platform that could disturb their focused work.

<img src="https://github.com/frappe/chat/raw/main/.github/images/guest-form-fill.gif" alt="Form View">

What actually triggered the big change in version 14 was the chat app. In version 13, the chat application was no longer part of the ERPNext system but was implemented as a separate app. It was rewritten, improved, but still had some shortcomings. It can be accessed here if someone wants to use it: <a href="https://github.com/frappe/chat" rel="noopener noreferrer">https://github.com/frappe/chat</a>. However, it's fair to mention that one of the main reasons why people connect ERPNext with Slack is because the previous version of ERPNext (13) already had the ability to integrate with Slack for website visitors to chat with salespeople. So, it wasn't that bad. For some, especially in businesses where sales are essential on a priority scale, this feature was really useful.

<img src="https://a.slack-edge.com/37877b/marketing/img/features/hero/v3/hero-full-ui.jpg" alt="Slack the product user interface on desktop">

However, many companies prefer a Slack-like solution, and the previously mentioned ERPNext chat solutions are far from that. That's why it's not surprising that many people connected their ERPNext software with Slack. They could do this easily because if you check the current release, the Slack option is already included among the possible channels for notifications (Notifications). (To make it work, you needed to configure a few things, which I won't go into detail here. It was simple, but due to changes in Slack's free version, we no longer recommend this. Previously, it was possible to use the free version well for smaller organizations, with the only limitation being the ability to search back for information in a maximum of 10,000 messages. We could live with that, especially because all other messages were still accessible, with scrolling, starring, threads, etc. Now, the free version of Slack only allows you to see messages from the last three months, so it was time to look for a new solution.

<img src="/images/NwliPMB.png">

Ta-da! There are many Slack alternatives on the market, free, paid, open-source, decentralized, etc. However, looking for the simplest and most convenient solution, we chose <a href="https://discord.com/register" rel="noopener noreferrer">Discord</a> because thread management in Discord is similar to Slack, and it's free without limitations, stable, and fast on all platforms.

That's nice, but how do you connect it with ERPNext?

ERPNext and Discord can communicate via webhooks. However, the main reason for this post is to share the exact setup because there might be several ways to do this, but only one solution worked for us.

What do you need?

You need to generate a webhook on Discord for the specific channel where you want notifications to appear from your ERPNext system. Create the webhook and don't forget to save it:

<img src="/images/1FceOy6.png" >

Then comes the ERPNext side of the setup. The first trick is that I mentioned notifications above, but in reality, you need to configure a Webhook as follows:

<img src="/images/uGa4xWC.png">

On this screen, you define under which conditions ERPNext should send a message to Discord. In this example, it sends a message when a Task is created within the ERP & IT Support project. Paste the URL generated in the previous step into the "Request URL" field, set the type to JSON and POST, and in the "Webhook Data" section, add the following:

```
{
  “content”: ”{{ doc.subject }} - {{frappe.utils.get_url_to_form(doc.doctype, doc.name)}}”
}
```

This composes the message to be sent. In this case, it sends the title of the task and the link to the task in ERPNext to the Discord channel:

<img src="/images/R4HbKxx.png">

With this, the new automatic notification to Discord is ready. It was worth waiting and not moving to Slack, as we saved one migration. However, everyone should consider whether they can entrust their data to someone else, in this case, Discord. Especially considering that there is no official Export function like in Slack's case. In our opinion, this is not a problem because, on the one hand, to some extent, it can be handled within the interface, and within the privacy settings, similar to Google data takeout, an external application is available for this task:

<a href="https://github.com/Tyrrrz/DiscordChatExporter" rel="noopener noreferrer">https://github.com/Tyrrrz/DiscordChatExporter</a>

Happy chatting! (Plus, Discord supposedly already has voice and video calls and screen sharing since it was originally developed for the gaming community).
