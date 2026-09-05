---
layout: default
title: Blog
permalink: /archive/
---
<div class="listing-page" data-blog>
  <header class="listing-heading blog-heading"><div><h1>Blog</h1><p>Thoughts on software development, architecture,<br>AI-built products and building things that last.</p></div><a class="rss-link" href="{{ '/feed.xml' | relative_url }}"><i class="fa fa-rss" aria-hidden="true"></i> RSS</a></header>
  <div class="blog-toolbar" hidden>
    <div class="blog-filters" role="group" aria-label="Filter posts by topic">
      {% assign topics = 'All,AI-built apps,Engineering,Architecture,Career,Tools' | split: ',' %}
      {% for topic in topics %}<button type="button" data-filter="{{ topic }}" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}">{{ topic }}</button>{% endfor %}
    </div>
    <label class="blog-search"><i class="fa fa-search" aria-hidden="true"></i><input type="search" placeholder="Search posts…" aria-label="Search posts"></label>
  </div>
  <div class="article-list">
    {% for post in site.posts %}
    {% assign topics = 'Engineering' %}
    {% if post.categories contains 'migration' %}{% assign topics = 'AI-built apps,Engineering,Architecture' %}{% endif %}
    {% if post.categories contains 'coach' or post.categories contains 'tips' %}{% assign topics = 'Career' %}{% endif %}
    {% if post.categories contains 'taglog' or post.categories contains 'bash' %}{% assign topics = 'Engineering,Tools' %}{% endif %}
    {% assign words = post.content | strip_html | number_of_words %}{% assign minutes = words | plus: 199 | divided_by: 200 %}
    <article class="article-row" data-topics="{{ topics }}">
      <a href="{{ post.url | relative_url }}" tabindex="-1" aria-hidden="true"><img class="article-image" src="{{ post.image | default: site.logo | relative_url }}" alt="" width="600" height="380" loading="lazy"></a>
      <div><p class="article-meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %-d, %Y' }}</time> · {{ minutes }} min read</p>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt | strip_html | truncatewords: 40 | default: post.description }}</p>
        <a class="text-link" href="{{ post.url | relative_url }}">Read more →</a>
      </div>
    </article>
    {% endfor %}
  </div>
  <p class="empty-state" role="status" hidden>No posts match your search. Try another topic or search term.</p>
  <nav class="blog-pagination" aria-label="Blog pagination" hidden></nav>
</div>
<script src="{{ '/assets/blog.js' | relative_url }}" defer></script>
