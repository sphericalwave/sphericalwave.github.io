---
layout: default
title: "iOS"
permalink: ios
---
<h1>iOS Apps</h1>

<div class="row">

	{% for project in site.projects %}

	<div class="col-4">
		<a target="_blank" href="{{ project.permalink | relative_url }}" class="project_summary">

			<img src="{{project.image}}" alt="Image" class="img-thumbnail">

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