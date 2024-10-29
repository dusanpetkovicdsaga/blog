---
layout: post
title: My Side Project Journey - Building a Developer-Friendly Logging Tool
categories: [taglog, sass, en]
lang: en-US
---

As a full-time software engineer, **I’ve always dreamed of creating something on my own**—an app that could grow and eventually sustain itself. For me, this meant developing a web application that developers could truly benefit from.

The biggest challenge? Figuring out what to build. I constantly have ideas popping into my head, and while I've written down many of them, it wasn’t until recently that I found the momentum to dive into one.

<!--more-->

**The Journey Started Two Years Ago**  
Actually, it wasn’t that recent. I began working on this project two years ago, only to set it aside after a few months. I’ve recently revived it, though—almost by accident. After nearly losing all the source code due to a phone mishap (and losing my 2-factor authenticator for my GitHub account), I realized it was a project worth picking back up and seeing through.

### The Project: TagLog

My idea originally stemmed from an old tool I used back when I was developing in PHP. There was a service called phpconsole that allowed for smooth log integration, letting you send individual logs to a web app where they’d be formatted nicely for debugging. Although phpconsole is no longer around, the concept stuck with me. I thought, “Why not build something similar but make it simpler, accessible, and cross-platform?”

Working at various companies, I've seen firsthand how essential a solid logging tool can be, whether for local debugging or resolving production issues. **TagLog** was born from this need.

### What TagLog Offers

The vision for TagLog is to give developers a clean, organized interface for viewing logs from various sources. It’s designed with channels to organize logs by type, and filtering options that make narrowing down and analyzing logs a breeze.

Some **core features** include:

- **Integration with JavaScript projects** (and more to come)
- **Cloud-sync for logs**
- **Channels for log organization**
- **Project-based log grouping**, so teams can easily share information
- **Real-time log updates** within channels
- **Push notifications** for new log entries
- **Custom rule-based notifications** (via SMS, email, webhook)

There’s also an upcoming **Chrome plugin** that will sync `console.log` and `console.error` directly to TagLog. This, along with planned support for additional languages and frameworks, should make logging and debugging much easier for developers working across different tech stacks.

### Get Early Access

I’m eager to release TagLog as soon as possible, and to make sure it’s the best it can be, I’m offering **free PRO account access for developers willing to use it for their projects** over the next few months (possibly even a year). This means you can test it out, give feedback, and help shape the tool’s evolution.

**Interested? Drop a comment, and I’ll get you set up as one of the first users!**

### Example: Integrating TagLog with React

Here’s a quick example of how you might use TagLog in a React project:

```javascript
import { useTaglogInit } from "taglog-web-client";

function TestComponent() {
  const { captureInfo } = useTaglogInit({
    accessKey: "{yourAccessKey}",
    defaultChannel: "{yourChannelKey}",
  });

  return (
    <div>
      <Button
        onClick={(e) => {
          captureInfo("Button Click Event", e);
        }}
      >
        Test Action
      </Button>
    </div>
  );
}
```

### The Road Ahead

This journey is just beginning, and I’m excited to see where it leads. I’ll be sharing updates in the coming weeks once the app goes live at taglog.io. Stay tuned!
