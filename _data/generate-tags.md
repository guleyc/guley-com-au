---
layout: none
---

{% for tag in site.tags %}
  {% capture tag_name %}{{ tag[0] | slugify }}{% endcapture %}
  {% capture tag_path %}_site/tag/{{ tag_name }}/index.html{% endcapture %}
  {% unless site.static_files contains tag_path %}
    ---
    layout: tag
    tag: {{ tag[0] }}
    permalink: /tag/{{ tag_name }}/
    ---
  {% endunless %}
{% endfor %}