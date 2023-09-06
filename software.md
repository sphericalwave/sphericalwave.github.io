---
layout: default
title: "Software"
permalink: software
---
<h1>Software</h1>

<div class="row">

	{% for project in site.projects %}

	<div class="col-lg-4 col-md-6 col-sm-12">


		{% if project.link == blank %}
			<a  href="{{ project.absoluteLink | absolute_url }}" class="project_summary">
		{% else %}
			<a  href="{{ project.link | relative_url }}" class="project_summary">
		{% endif %}

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