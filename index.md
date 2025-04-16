---
layout: default
---

As a passionate mining engineer, I'll unveil mineral riches and innovative solutions, taking us towards new horizons.

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