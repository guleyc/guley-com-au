---
layout: default
---

As a passionate mining engineer, I'll unveil mineral riches and innovative solutions, taking us towards new horizons.

<div class="container">
    <div class="row grid-masonry">  
  {% for post in site.posts %}

<div class="col-sm-6 col-md-4 mb-3 grid-item">
    <article class="card card-post text-center">
        <a href="{{ post.url }}">
            <img src="https://picsum.photos/id/101/400/600" class="card-img-top" alt="..." />
        </a>
        <div class="card-body">
        <p class="h6"><a href="#none">Lifestyle</a></p>
        <h4 class="mb-3">
        <a href="{{ post.url }}" class="text-dark">{{ post.title }}</a>
        </h4>
        </div>
        <div class="card-meta">
        <p class="card-meta-tag">{{ post.date | date: "%Y-%m-%d" }}</p>
        </div>
    </article>
</div>
  {% endfor %}
</div>