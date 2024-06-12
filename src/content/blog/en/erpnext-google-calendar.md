---
title: ERPNext Google Calendar Synchronization
draft: false
author: Admin
tags:
  - erpnext
image:
  src: /erpnext-google-naptar.png
  alt: ERPNext
snippet: Synchronizing ERPNext with Google Calendar has been possible for a long time, but there is still room for improvement. Let me show you how!
publishDate: 2022-08-24 11:39
category:
  - news
language: en-us
---

<img src="/images/erpnext-google-naptar.png"">

Most of us use calendars in both our business and personal lives. In fact, usually more than one. Regardless of whether we manage our business or personal finances in any system, we usually have our own calendar. The same is true for ERPNext, which is why the Frappe team, who developed ERPNext, thought about enabling synchronization between ERPNext and Google Calendar from the very beginning.

Typically, we use Google Calendar alongside other software because it's a great place to see or even manage all entries from our various calendars in one place.

How is this possible in ERPNext?

As described in the documentation, it can easily be set up to send events created in the ERPNext calendar to our Google Calendar, and vice versa. Details are available in the documentation, and if anyone needs help, I'm happy to provide a Hungarian tutorial or assist in the setup: <a href="https://docs.erpnext.com/docs/v14/user/manual/en/erpnext_integration/google_calendar" rel="noopener noreferrer">https://docs.erpnext.com/docs/v14/user/manual/en/erpnext_integration/google_calendar</a>

If this is so simple, why write a post about it?

Keen readers may have noticed that I mentioned calendar synchronization above, and ERPNext has many DocTypes/ERPNext documents that have some (configurable) date fields. For example, a ToDo or a project, or even a task can have multiple date fields, such as when marking intervals. However, these are not calendar entries in ERPNext, even if they can be viewed in the calendar view. What can be done about this? By default, ERPNext does not offer the possibility to display these entries from ERPNext's own calendar, so they cannot be synchronized with an external calendar either from there or from the standalone calendar view.

However, many people, including myself, may need this feature, so I'll explain how to handle it. The basic assumption, which is why I consider myself an ERPNext evangelist, is to choose a suitable system in which we can store/manage most things, but this system should be easily integrable with other programs. On one hand, it's worth using specialized software for many tasks, and on the other hand, unavoidable integrations exist, such as the <a href="https://www.monolithon.com/invoicing" rel="noopener noreferrer">ERPNext to NAV online invoicing</a> integration in Hungary. I must add that we need software that supports direct integrations _easily_. (And at the very minimum, we also need a password manager and a communication platform like <a href="https://www.monolithon.com/blog/news/erpnext-chat-solutions" rel="noopener noreferrer">Discord, as I mentioned in a previous post</a>, to make task handling seamless, but I'll talk about those later.)

Okay, but why is using an integration software good? It saves us from having to develop everything in ERPNext when it already has a great API. Additionally, it helps maintain the advantages of easy updates and version changes. I'm specifically referring to integration software and not platforms because I recommend using free and open-source software like ERPNext instead of paid platforms like Integromat or Zapier, which are available.

**For the impatient, this is where it starts: How to set up ERPNext and Google Calendar synchronization for ToDo ERPNext documents with the help of n8n integration software**

I'm skipping the basics, such as needing an <a href="https://n8n.io/cloud?ref=monolithon&amp;utm_source=affiliate" rel="noopener noreferrer">n8n system</a> and ERPNext, and the need to generate a token (API key &amp; secret pair) for the user within ERPNext. I'm happy to help with that if needed.

The key is that once you have everything set up, all you need is the built-in ERPNext and Google Calendar nodes and a Function node, as you can see in this example documentation: <a href="https://blog.n8n.io/creating-triggers-for-n8n-workflows-using-polling/" rel="noopener noreferrer">https://blog.n8n.io/creating-triggers-for-n8n-workflows-using-polling/</a>

It looks like this, that's all:

<img src="/images/R998Mfa.png">

You can set a timer to run it every X time or even at specific times. But since you can easily create an ERPNext webhook for a ToDo entry, as we did in a previous post for Discord, I suggest downloading the new ToDo from ERPNext when it is created instead of constantly running n8n to avoid unnecessary executions.

It's important to note that the function (polling) code in the example documentation above didn't work properly, so I'm providing the correct version below. It adds all new ToDos to Google Calendar, and in the next run, it only adds the ones that haven't been added before to avoid multiplication/flooding.

```javascript
const new_items = [];

// Get static data stored with the workflow
const data = this.getWorkflowStaticData("node");

data.ids = data.ids || [];

for (let i = 0; i < items.length; i++) {
  // Check if data is already present
  if (data.ids.includes(items[i].json.name)) {
    continue;
  } else {
    // if new data then add it to an array
    new_items.push({
      json: {
        name: items[i].json.name,
        date: items[i].json.date,
        reference_name: items[i].json.reference_name,
        description: items[i].json.description,
      },
    });
  }
}

data.ids = items.map((item) => item.json.name);

// return new items
return new_items;
```

Stay up to date with ERPNext and your calendar!
