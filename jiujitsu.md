---
layout: default
title: "jiujitsu"
permalink: jiujitsu
---

<h1>JiuJitsu</h1>

<div class="row align-items-top pb-3">

	{% for project in site.jits %}

	<div class="col-4">
		<a  href="{{ project.link | relative_url }}" class="project_summary">

			<img src="{{project.image}}" alt="Image" class="img-thumbnail">
            <!-- <img src="{{project.image}}" alt="Image" class="img-fluid ratio ratio-1x1"> -->

			<!-- text section -->
			<div style="text-align: leading; padding: 0 0 1rem 0;">
				<h4 style="margin: 0;">{{project.title}}</h4>

				<!-- tag cloud -->
				<div>
					{% for tag in project.tags %}
					<span class="tag-cloud">{{tag}}</span>
					{% endfor %}
				</div>

			</div>
		</a>
	</div>

	{% endfor %}
</div>