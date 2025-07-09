---
layout: default
title: Etiket Duvarı
permalink: /tags/
---

<div class="container">
  <div class="post-container">
    <h1 class="blog-post-title">{{ page.title }}</h1>
    <p>Yazılarımda kullandığım etiketler, popülerliğine göre bir duvar deseniyle aşağıda sıralanmıştır.</p>

    <div class="tag-wall">
      {% assign sorted_tags = site.tags | sort | sort: 'last.size' | reverse %}

      {% for tag in sorted_tags %}
        {% assign t = tag | first %}
        {% assign posts = tag | last %}
        <a href="{{ '/tags/' | relative_url }}{{ t | slugify }}/" class="tag-wall-item">
          {{ t }} <span class="tag-count">({{ posts | size }})</span>
        </a>
      {% endfor %}
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', (event) => {
    const tags = document.querySelectorAll('.tag-wall-item');
    const saturation = 60;
    const lightness = 45; 

    tags.forEach(tag => {
      const randomHue = Math.floor(Math.random() * 360);
      const randomColor = `hsl(${randomHue}, ${saturation}%, ${lightness}%)`;
      
      tag.style.backgroundColor = randomColor;
      tag.style.borderColor = `hsl(${randomHue}, ${saturation}%, ${lightness - 10}%)`;
    });
  });
</script>