---
layout: default
title: "Hardware"
permalink: engineering
---

<h1>Hardware</h1>

<div class="row align-items-top pb-3">

	{% for project in site.engineering %}

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


<!-- <h1>Engineering</h1>

<div class="row">
    <div class="col ">
        <p>As a seasoned engineer with extensive experience in various fields, I have developed a strong foundation
            of technical knowledge and expertise. I have taken on challenging projects throughout my career and
            consistently delivered high-quality results. Whether working with cutting-edge technologies, developing
            innovative solutions to complex problems, or collaborating with cross-functional teams, I am dedicated
            to my work and strive for excellence in everything. This web page allows me to share my engineering
            experience and skills with others and showcase my achievements in the field. Through this, I will
            demonstrate my passion for engineering and commitment to positively impacting the industry.</p>
        <ul>
            <li><a href="{{ site.baseurl }}/hvdc" title="HVDC">HVDC Field Engineer</a></li>
            <li>Surmont SAGD</li>
            <li><a href="{{ site.baseurl }}/aquatron" title="Aquatron">Aquatron Lab</a></li>
            <li>Fretlights</li>
            <li>Primer cube</li>
            <li>Searl Generator</li>
            <li>Primer cube</li>
            <li>Bedini Energizer</li>
            <li>iron ring</li>
            <li>samsung</li>
            <li>bitcoin</li>
        </ul>
    </div>
</div> -->