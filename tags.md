---
layout: default
title: Tag Wall
permalink: /tags/
---

    <div class="tag-wall">
        {% capture tags_string %}
            {% for tag in site.tags %}
            {{ tag.last.size | lstrip | Sprintf: '%04d' }}:{{ tag.first }}{% unless forloop.last %},{% endunless %}
            {% endfor %}
        {% endcapture %}
        {% assign sorted_tags_array = tags_string | split: ',' | sort | reverse %}
    
        {% for item in sorted_tags_array %}
            {% assign parts = item | split: ':' %}
            {% assign post_count = parts.first | plus: 0 %}
            {% assign tag_name = parts.last %}
            <a href="{{ '/tag/' | relative_url }}{{ tag_name | slugify }}/" class="tag-wall-item">
            {{ tag_name }} <span class="tag-count">({{ post_count }})</span>
            </a>
        {% endfor %}
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