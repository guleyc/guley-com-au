---
layout: page
title: Tags
permalink: /tags/
---

<ul>
  {% assign tags_list = site.tags | sort %}
  {% for tag in tags_list %}
    <li>
      <a href="/tag/{{ tag[0] }}/">{{ tag[0] }} ({{ tag[1].size }})</a>
    </li>
  {% endfor %}
</ul>