---
layout: default
title: "Tags"
permalink: tags
---

<h1>Tags</h1>
<hr class="blue1 mb-3 mt-1">

{% assign tags = site.tags | sort %}

<div class="row gr-1 mb-3">
    {% for tag in tags %}

        <div class="col-lg-4 col-6">
            <a href="/tag/{{ tag | first }}" class="tag-cloud">{{ tag[0] | replace:'-', ' ' }} ({{ tag | last | size }})</a>
        </div>

    {% endfor %}

</div>

{% include recentPosts.html %}

<!-- TODO: appears in two places index.md as well-->
<h5>Think Global, Act Local</h5>
<hr class="blue1 mb-3 mt-1">

{% include subscribe.html %}