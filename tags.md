---
layout: default
title: Tag Wall
permalink: /tags/
---

<div class="tag-wall-container">
    {% comment %} 1. GELİŞTİRME: Etiketleri alfabetik değil, yazı sayısına göre sıralıyoruz. {% endcomment %}
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

      {% assign tag_size = post_count %}

      {%- if tag_size <= 2 -%}
          {%- assign tag_level = "level-1" -%}
      {%- elsif tag_size <= 5 -%}
          {%- assign tag_level = "level-2" -%}
      {%- elsif tag_size <= 10 -%}
          {%- assign tag_level = "level-3" -%}
      {%- else -%}
          {%- assign tag_level = "level-4" -%}
      {%- endif -%}

      <a href="{{ site.baseurl }}/tag/{{ tag_name | slugify }}/" 
         class="tag-block {{ tag_level }}" 
         title="{{ tag_name }} etiketine sahip {{ tag_size }} yazı">
          <span>{{ tag_name }} ({{ tag_size }})</span>
      </a>
    {% endfor %}
</div>


<script>
    // 2. GELİŞTİRME: Sayfa her yüklendiğinde etiketlere rastgele renkler atar.
    document.addEventListener('DOMContentLoaded', () => {
        const tags = document.querySelectorAll('.tag-block');
        tags.forEach(tag => {
            // Estetik açıdan uyumlu renkler için HSL renk uzayını kullanıyoruz.
            const randomHue = Math.floor(Math.random() * 360);
            tag.style.backgroundColor = `hsl(${randomHue}, 65%, 50%)`;
        });
    });
</script>