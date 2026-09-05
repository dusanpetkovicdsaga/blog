---
layout: default
title: Audits
permalink: /audits/
---
<div class="listing-page">
  <header class="listing-heading">
    <h1>Audits</h1>
    <p>I publicly audit AI-built products and early stage apps.<br>Real issues. Honest feedback. Actionable recommendations.</p>
    <p class="placeholder-note">Example audits below are placeholders. Real reviews are coming soon.</p>
  </header>
  <div class="article-list">
    {% for audit in site.data.audits %}
    <article class="article-row">
      <a href="{{ audit.url | relative_url }}" tabindex="-1" aria-hidden="true"><img class="article-image" src="{{ audit.image | relative_url }}" alt="" width="600" height="380" loading="lazy"></a>
      <div>
        <p class="article-meta">Preview · AI-built app ({{ audit.platform }})</p>
        <h2><a href="{{ audit.url | relative_url }}">{{ audit.title }}</a></h2>
        <p>{{ audit.intro }}</p><p>{{ audit.summary }}</p>
        <a class="text-link" href="{{ audit.url | relative_url }}">Preview audit →</a>
      </div>
    </article>
    {% endfor %}
  </div>
  <p class="coming-soon">More audits coming soon.</p>
  <section class="cta-band"><div><h2 class="cta-band__title">Want me to audit<br>your application?</h2><p class="cta-band__text">Book a free 20-minute call and I’ll take a look.</p></div><a class="button-primary" href="{{ site.booking_url }}">Book a free 20-minute call →</a></section>
</div>
