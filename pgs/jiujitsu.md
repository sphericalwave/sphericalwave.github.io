---
layout: "page"
title: "JiuJitsu"
order: 1
---

<ul class="tags">
{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}
  <li>{{t | downcase | replace:" ","-" }}</li>
{% endfor %}
</ul>


{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}

{{ t | downcase }}
<ul>
{% for post in posts %}
  {% if post.tags contains t %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>
  </li>
  {% endif %}
{% endfor %}
</ul>
{% endfor %}


Link to Jiujitsu Stuff

- product recomendations
  - sanabul rashies
  - sizu mouthguards
  - iron neck
  - tacfit clubbells
  - tacfit protocols
  - Anatomy Trains
  - BJJ Formula
  - Danaher
  - Ryan Hall

  <ul>
    {% for post in site.posts %}
      {% if page.tags == "jiujitsu" %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
