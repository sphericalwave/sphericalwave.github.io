---
title: TestPage
layout: default
---

<div class="row justify-content-between">

  <div class="col-auto">
    {% include timeStamp.html %}
    {% include share_buttons.html %}
  </div>

  <!-- TODO: this is almost exactly the same as tagCloud.html -->
  <div class="col-auto">
    <div>
      {% for tag in page.tags %}
        <a href="{{ site.baseurl }}/tag/{{ tag | slugify }}" class="tag-cloud"><span>{{ tag }}</span></a>
      {% endfor %}
    </div>
  </div>

</div>

<div class="row">
  
  <div class="col-12">
    <article>

      <h1>{{ page.title }}</h1>
      <hr class="blue1 mb-3 mt-1">

      {{ content }}
      <hr class="blue1 mb-3 mt-1">
      {% include share_buttons.html %}
      {% include related_posts.html page=page%}
      {% include subscribe.html %}

    </article>
  </div>

</div>