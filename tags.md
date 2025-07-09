---
layout: default
title: All Tags
permalink: /tags/
---

<div class="container">
  <div class="post-container">
    <h1 class="blog-post-title">{{ page.title }}</h1>
    <p>You can see all the tags on the site and how many articles they have below.</p>

    <div class="tag-wall">
      {% for tag in site.tags %}
        {% assign t = tag | first %}
        {% assign posts = tag | last %}
        <a href="{{ '/tag/' | relative_url }}{{ t | slugify }}/" class="tag-wall-item">
          {{ t }} <span class="tag-count">({{ posts | size }})</span>
        </a>
      {% endfor %}
    </div>

  </div>
</div>