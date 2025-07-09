---
layout: default
title: All Tags
permalink: /tags/
---
  <div class="post-container">
    <h1 class="blog-post-title">{{ page.title }}</h1>
    <p>Yazılarımda kullandığım etiketler, popülerliğine göre bir duvar deseniyle aşağıda sıralanmıştır.</p>

    <div class="tag-wall">
      {% comment %} 
        site.tags dizisini, her bir etiketin sahip olduğu yazı sayısına göre (tag[1].size) sıralıyoruz.
        sort: 1, dizinin ikinci elemanına (yazı listesi) göre sıralama yapar.
        reverse, sıralamayı tersine çevirerek büyükten küçüğe dizer.
      {% endcomment %}
      {% assign sorted_tags = site.tags | sort: 1 | reverse %}

      {% for tag in sorted_tags %}
        {% assign t = tag | first %}
        {% assign posts = tag | last %}
        <a href="{{ '/tags/' | relative_url }}{{ t | slugify }}/" class="tag-wall-item">
          {{ t }} <span class="tag-count">({{ posts | size }})</span>
        </a>
      {% endfor %}
    </div>
  </div>

<script>
  document.addEventListener('DOMContentLoaded', (event) => {
    const tags = document.querySelectorAll('.tag-wall-item');
    
    // Estetik olarak daha hoş renkler üretmek için HSL renk uzayını kullanacağız.
    // Hue (renk tonu) rastgele olacak, Saturation (doygunluk) ve Lightness (parlaklık) sabit kalacak.
    const saturation = 60; // %
    const lightness = 45;  // %

    tags.forEach(tag => {
      const randomHue = Math.floor(Math.random() * 360);
      const randomColor = `hsl(${randomHue}, ${saturation}%, ${lightness}%)`;
      
      tag.style.backgroundColor = randomColor;
      tag.style.borderColor = `hsl(${randomHue}, ${saturation}%, ${lightness - 10}%)`; // Sınır rengi biraz daha koyu
    });
  });
</script>