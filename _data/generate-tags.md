---
layout: none
---

{% for tag in site.tags %}
  {% capture tag_name %}{{ tag[0] | slugify }}{% endcapture %}
  {% capture tag_path %}_site/tags/{{ tag_name }}/index.html{% endcapture %}
  {% unless site.static_files contains tag_path %}
    ---
    layout: tag
    tag: {{ tag[0] }}
    permalink: /tags/{{ tag_name }}/
    ---
  {% endunless %}
{% endfor %}