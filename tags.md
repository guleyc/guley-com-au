---
layout: default
title: Tag Wall
description: "Explore all topics on the site with this interactive tag wall. Discover articles and posts easily through a visual cloud of tags, sorted and sized by popularity, to quickly navigate to your areas of interest."
permalink: /tags/
---

<div class="tag-wall-container">
    {% assign max_posts = 0 %}
    {% for tag in site.tags %}
        {% if tag[1].size > max_posts %}
            {% assign max_posts = tag[1].size %}
        {% endif %}
    {% endfor %}

    {% for i in (1..max_posts) reversed %}
        {% for tag in site.tags %}
            {% if tag[1].size == i %}
                {% assign tag_name = tag[0] %}
                {% assign tag_size = tag[1].size %}

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
                   title="{{ tag_name }} tagged {{ tag_size }} post-s">
                    <span>{{ tag_name }} ({{ tag_size }})</span>
                </a>
            {% endif %}
        {% endfor %}
    {% endfor %}
</div>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const tags = document.querySelectorAll('.tag-block');
        tags.forEach(tag => {
            const randomHue = Math.floor(Math.random() * 360);
            tag.style.backgroundColor = `hsl(${randomHue}, 65%, 50%)`;
        });
    });
</script>