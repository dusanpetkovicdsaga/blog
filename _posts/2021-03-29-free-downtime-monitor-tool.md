---
layout: post
title: Free Downtime Monitor Tool - How to Setup?
categories: [bash, slack]
---

There are more than a few services that provide various tools for monitoring your website's uptime, but if you're anything like me, meaning you don't want to spend that much and you just want something simple that would notify you when your website goes down, the following would be a perfect solution for you.

<!--more-->

## Things you need to get this tool running

--The website you'd like to monitor
--Hosting account with SSH access (has to be separate from the one holding the website to monitor).
--Slack workspace (basic is free).


## Why we're using Slack

My original approach was to just use regular emails for notification, but it has proven to be unreliable in terms of getting delivered on time and sometimes ending up in spam, which is not good if we want to be notified exactly when our website goes down.

Now comes Slack, the good thing about this app is that it is completely free to set up a basic account, and you get a cross-platform solution, which is perfect to be able to get notified also via push notifications on your phone. 

Features in Slack that we are going to use for this use case are:

--Private Channel ex: website_monitoring
--Slack Webhooks


## Setting things up in Slack

To quickly get setup with a Slack Workspace go to this slack getting started page.

![Signup up]({{ site.baseurl }}/assets/image/slack-image-signup.png)

You only need to enter your existing email address along with some personal information to get set up. For a more comprehensive guide you can go the following blog post on slack.com.

## Creating a Channel and Enabling Webhooks

Creating a new channel is easy enough by clicking on the add channels button in the left navigation area, a popup dialog like the following is going to show.

![New Channel]({{ site.baseurl }}/assets/image/slack-create-private-channel.png)


I suggest making this new channel a private one, as we don't want just anyone with workspace access to receive these notifications, its better if we control who has access to that.

## Setting up a monitor bash script 

The next crucial step is enabling incoming Webhooks, this is needed to enable slack to receive the messages we're sending from our monitoring server. A guide on how to enable webhooks in your slack workspace can be found on the official slack documentation site here.

In a non-public directory create a file that we will name downTimeMonitor.sh, this is the file that we will periodically run to check if the site is running fine. Add the following code to the new file: 

```bash
#!/bin/bash

notify_slack_message() {
now=$(date)

local message="$1"

curl -X POST --data-urlencode "payload={\"channel\": \"#website_monitoring\", \"username\": \"webhookbot\", \"text\": \"($message) YourWebsite.com homepage not responding, <@dusan> please check the website. Checked at - $now\", \"icon_emoji\": \":ghost:\"}" https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX

}


if curl -s "https://yourwebsite.com/" | grep -q "Website Headline"
then
    # if the keyword is in the content
    echo " the website is working fine" | notify_slack_message "fine message"
	else
    echo "Program Creek Error" | notify_slack_message "error message" 
fi

```

To setup permissions, execute the following command in the folder where it was created: 

```bash
chmod +x downTimeMonitor.sh

```

Now to make the above script work for your particular needs: 

1. Make sure to replace the following webhook endpoint URL with the one provided to you by Slack when enabling the feature.

	- https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX

2. Replace any references to https://yourwebsite.com/ with the URL that you'd like to monitor. 

3. Update "Website Headline" to a line of text that you expect the site to render when properly loaded, this will serve as prof that the site has rendered correctly, signaling an OK, I prefer this approach better then just checking a response status code 200, as for example the site gets hacked and no longer returns our expected string but still sends a 200 response code. 


## Making it run every 5 mins 

Firstly you can test if the script's working actually by executing: 

```bash
 ./downtimeMonitor.sh

```
If the site is up and running the script should return the "the website is working fine" message

Now in order to make the script run every 5 minutes, we need to utilize the crontab in linux. To add commands we want to execute periodically, execute the following code to edit the crontab file:

Now in order to make the script run every 5 minutes, we need to utilize the crontab in linux. To add commands we want to execute periodically, execute the following code to edit the crontab file:

```bash
  crontab -e 
```

Append the following line of code to the end of that crontab file:

```bash
 */5 * * * * /bin/bash -x /var/www/downtimeMonitor.sh

```

## That's pretty much it!

Now you can intentionally bring your website down to test if you'll get a downtime notification in your private channel, be sure to not do this while in peak hours of your website. 

I hope this was an useful little tip for anyone who wants to be notified when things go south. 