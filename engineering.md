---
layout: default
title: "Hardware"
permalink: engineering
---

<div class="row align-items-center pb-3">

	<h1>Engineering</h1>

	<p>I feel like I was born an engineer but I didn't know it. I've always been curious about how things work. I remember my first physics class in high school and thinking 'Aha, this is how it works'. Over the years I've read countless books, took a diversion into mathematics and geometry and eventually found my way into Engineering.</p>

	<p class="pt-3">I got more than a little side tracked with software but my heart is still in Engineering. Here's a look at some of the engineering projects I've been involved in and continue to explore.</p>

	<p class="pt-3">There's a few missing while I search for old photos.</p>

</div>

<div class="row align-items-top pb-3">

	{% for project in site.engineering %}

	<div class="col-lg-4 col-md-6 col-sm-12">

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