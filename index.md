---
layout: default
---

I'm a developer, designer, and writer passionate about creating meaningful digital experiences.

<div class="post-list-container">
  {% for post in site.posts %}
    <div class="post-item">
      <div class="post-title">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </div>
      <div class="post-date">
        {{ post.date | date: "%Y-%m-%d" }}
      </div>
    </div>
  {% endfor %}
</div>