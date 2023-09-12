---
layout: default
title: "Software"
permalink: software
---

<div class="row align-items-center pb-3">

	<h1>Software</h1>

	<p>My journey in software development started in 2012, igniting a passion for coding and innovation. Over the years,
		I've learned various programming languages and technologies as required including:
	</p>

</div>

<div class="row align-items-center pb-1f">

	<div class="pl-3">
		<ul>
			<li>C++, Linux, SQL Microservices and REST at Sigmast.</li>
			<li>C and Arduino for Engineering Hardware Projects</li>
			<li>Objective-C, Swift, Core Data for iOS Projects</li>
			<li>HTML, Javascript, CSS for Website</li>
			<li>Unit testing and Ui testing frameworks</li>
			<li>VBA for large Excel Spreadsheets</li>
		</ul>
	</div>

</div>

<div class="row align-items-center pb-3">

	<p>Below are a few highlights of my journey so far.</p>

</div>

<div class="row">

	{% for project in site.projects %}

	<div class="col-lg-4 col-md-6 col-sm-12">


		{% if project.link == blank %}
		<a href="{{ project.absoluteLink | absolute_url }}" class="project_summary">
			{% else %}
			<a href="{{ project.link | relative_url }}" class="project_summary">
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