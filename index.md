---
layout: default
---

# Welcome to My Personal Website

I'm a developer, designer, and writer passionate about creating meaningful digital experiences.

## Recent Projects

- **Project Alpha**: A machine learning app that predicts user preferences
- **Project Beta**: Interactive data visualization dashboard
- **Project Gamma**: Mobile-first responsive web application

## Latest Blog Posts

<ul class="post-list">
  {% for post in site.posts limit:3 %}
    <li>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
      <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    </li>
  {% endfor %}
</ul>

[See all posts](/blog.html)