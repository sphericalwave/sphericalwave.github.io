---
layout: default
title: "Tags"
permalink: tags
---

<h1>Tags</h1>

{% assign tags = site.tags | sort %}

<div class="row gr-1">
{% for tag in tags %}

<div class="col-4">
    <a href="/tag/{{ tag | first }}/" class="tag-cloud">{{ tag[0] | replace:'-', ' ' }} ({{ tag | last | size }})</a>

    <!-- <a href="/tag/{{ tag | first | slugify }}/" class="tag-cloud">{{ tag[0] | replace:'-', ' ' }} ({{ tag | last | size }})</a> -->
        <!-- <a href="/tag/{{ tag | first | slugify: 'pretty' }}/" class="tag-cloud">{{ tag[0] | replace:'-', ' ' }} ({{ tag | last | size }})</a> -->
</div>

{% endfor %}

</div>