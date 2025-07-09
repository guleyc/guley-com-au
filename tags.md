---
layout: default
title: Tag Wall
permalink: /tags/
---

  <div class="post-container">
    <h1 class="blog-post-title">{{ page.title }}</h1>
    <p>You can see all the tags on the site and how many articles they have below..</p>

    <div class="tag-wall">
      {% capture tags_string %}
        {% for tag in site.tags %}
          {{ tag[1].size | lstrip | Sprintf: '%04d' }}:{{ tag[0] }}{% unless forloop.last %},{% endunless %}
        {% endfor %}
      {% endcapture %}
      {% assign sorted_tags_array = tags_string | split: ',' | sort | reverse %}

      {% for item in sorted_tags_array %}
        {% assign parts = item | split: ':' %}
        {% assign post_count = parts[0] | plus: 0 %}
        {% assign tag_name = parts[1] %}
        <a href="{{ '/tags/' | relative_url }}{{ tag_name | slugify }}/" class="tag-wall-item">
          {{ tag_name }} <span class="tag-count">({{ post_count }})</span>
        </a>
      {% endfor %}
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