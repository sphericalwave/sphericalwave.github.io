---
layout: page
title: Work
permalink: /work/
description: "Apps and engineering by Aaron Anthony — tools to optimize the suit: become your own coach via data and dopamine. Software and hardware, shipped."
---

<div class="col-12 text-center my-4">
  <h1>Work</h1>
  <p class="mb-0">Tools to <em>optimize the suit</em> — become your own coach via data and dopamine. Software + hardware, shipped.</p>
</div>

<hr class="blue1 mb-3 mt-1">

<div class="row g-2 mb-3">
  {% for project in site.projects %}
    <div class="col-12 col-md-6 col-lg-4 d-flex">
      <div class="card card-custom blue-shadow-hover w-100">
        {% if project.image %}
        <a href="{{ project.link }}">
          <img src="{{ project.image }}" class="card-img-top" alt="{{ project.title }}" loading="lazy">
        </a>
        {% endif %}
        <div class="card-body">
          <div class="d-flex flex-column">
            <a href="{{ project.link }}"><h6 class="card-title">{{ project.title }}</h6></a>
            <div class="mb-1">
              {% for tag in project.tags %}
                <span class="tag-cloud">{{ tag }}</span>
              {% endfor %}
            </div>
            <a href="{{ project.link }}" class="underline-text">View project</a>
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<div class="col-12 text-center my-4">
  <p class="mb-2">Open to engineering work and contracts — software, hardware, or both.</p>
  <a href="mailto:aaron@sphericalwave.com" class="btn custom-btn-blue me-2 mb-2">Work with me</a>
  <a href="{{ site.baseurl }}/#newsletter" class="btn custom-btn-blue mb-2">Newsletter</a>
</div>

<hr class="blue1 mb-3 mt-1">
