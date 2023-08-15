---
layout: default
title: "iOS"
permalink: ios
---

<h1>iOS Apps</h1>

<div class="row">

	{% for project in site.projects %}
		<a target="_blank" href="{{ page.url | relative_url }}">
			<div class="project_summary">
			  <!-- <div> -->
				<img src="{{project.image}}" alt="Image" class="image">

				<!-- text section -->
				<div style="text-align: leading; padding: 1rem;">
				  <h2 style="margin: 0;">{{project.title}}</h2>

				  <div>
					{% for tag in project.tags %}
					  <span class="tag-cloud">{{tag}}</span>
					{% endfor %}
				  </div>

				</div>

			  <!-- </div> -->
			</div>
		  </a>
  	{% endfor %}

</div>