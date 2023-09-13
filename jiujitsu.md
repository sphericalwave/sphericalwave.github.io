---
layout: default
title: "jiujitsu"
permalink: jiujitsu
---

<div class="row align-items-top pb-3">
	<h1>JiuJitsu</h1>

	<p>Jiu-Jitsu is a multifaceted passion that transcends the boundaries of a mere hobby. It's a captivating team sport
		where camaraderie and mutual support thrive, as teammates work together to sharpen their skills and technique.
		Simultaneously, it stands as an enduring athletic challenge, demanding not only physical prowess but also mental
		discipline and strategy. Engaging in Jiu-Jitsu is akin to participating in a cerebral chess match where each
		move, submission, and escape is a calculated step towards victory. The art's complexity keeps practitioners
		perpetually engaged, fostering a lifelong journey of growth and learning. Ultimately, Jiu-Jitsu is a dynamic
		pursuit that combines physicality, strategy, and a sense of community, making it a truly holistic and enriching
		experience.
	</p>
</div>

<div class="row align-items-top pb-3">

	{% for project in site.jits %}

	    <div class="col-lg-4 col-md-6 col-sm-12">

		<a href="{{ project.link | relative_url }}" class="project_summary">

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