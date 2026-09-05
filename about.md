---
layout: default
title: About
permalink: /about/
---
<div class="about-page">
  <section class="hero-grid about-hero">
    <div><div class="section-label">About me</div><h1>I’m Dušan, a software engineer who enjoys solving complex problems and helping founders ship better software.</h1><p>I’ve been building web applications for over 15 years. I care about clean architecture, readable code and systems that are easy to change as a product grows.</p><p>Today I help founders who built with AI take their products to the next level—fixing technical debt, improving architecture and making sure the foundation is solid for long-term growth.</p></div>
    <img class="portrait" src="{{ '/assets/image/dusan-portrait.png' | relative_url }}" alt="Dušan Petković" width="1145" height="1374" fetchpriority="high">
  </section>
  <section class="background-grid">
    <div><div class="section-label">My background</div><h2>15+ years of building and maintaining production software.</h2><a class="text-link" href="{{ '/resume/' | relative_url }}">View my full resume →</a></div>
    <article><i class="fa fa-calendar-check-o" aria-hidden="true"></i><h3>15+</h3><p>Years of experience</p><p>I’ve worked with startups, product companies and enterprises across different domains.</p></article>
    <article><i class="fa fa-code" aria-hidden="true"></i><h3>Full-stack</h3><p>JavaScript/TypeScript</p><p>React, Node.js, NestJS, databases, APIs, cloud, CI/CD.</p></article>
    <article><i class="fa fa-users" aria-hidden="true"></i><h3>From 0 to scale</h3><p>Hands-on experience</p><p>I’ve built products from scratch and helped scale applications that already have users.</p></article>
    <article><i class="fa fa-bullseye" aria-hidden="true"></i><h3>Focus</h3><p>Simplicity and clarity</p><p>I prefer simple solutions that are easy to understand, maintain and evolve.</p></article>
  </section>
  <section class="about-split"><div><div class="section-label">Why I do this</div><h2>I’ve seen what happens when technical debt is ignored.</h2></div><div><p>I’ve joined teams where the codebase was hard to change, features were risky to ship and every small update took too long.</p><p>I enjoy coming in, understanding the system, reducing complexity and giving founders confidence in their product again.</p><p><strong>Good engineering doesn’t slow you down.<br>It sets you free to build.</strong></p></div></section>
  <section class="about-split"><div><div class="section-label">Tech I work with</div><h2>Some of the tools and technologies<br>I work with.</h2></div><div class="tech-tags">{% assign technologies = 'React,TypeScript,Node.js,NestJS,PostgreSQL,MongoDB,Next.js,Docker,AWS,Vercel,CI/CD,GitHub Actions,Redis,Prisma,GraphQL,REST,Tailwind CSS,…and more' | split: ',' %}{% for technology in technologies %}<span>{{ technology }}</span>{% endfor %}</div></section>
  <section><div class="section-label">What I value</div><div class="values-grid">
    <article><i class="fa fa-code" aria-hidden="true"></i><h3>Code that’s easy<br>to understand</h3><p>Future you (or your teammate) should be able to read it without a struggle.</p></article>
    <article><i class="fa fa-shield" aria-hidden="true"></i><h3>Simplicity over<br>cleverness</h3><p>Simple solutions are easier to maintain and change.</p></article>
    <article><i class="fa fa-commenting-o" aria-hidden="true"></i><h3>Clear communication</h3><p>I explain things in plain English and keep you in the loop.</p></article>
    <article><i class="fa fa-user-o" aria-hidden="true"></i><h3>Long-term partner, not just a contractor</h3><p>I care about your product and its success.</p></article>
  </div></section>
  <section class="cta-band about-cta"><h2 class="cta-band__title">Let’s make your product<br>solid and future-proof.</h2><p>Book a free 20-minute call and let’s see how I can help.</p><a class="button-primary" href="{{ site.booking_url }}">Book a free 20-minute call →</a></section>
</div>
