---
layout: page
title: Home
---

<h1>Become Invincible</h1>
<h5>Energy, Aesthetics, & Performance</h5>

<hr class="blue1 mb-3 mt-1">

<div class="row">

<div class="col-3">
    <a href="">
        <img src="public/SphericalWaveC60.png" alt="" class="img-fluid rounded">
    </a>
        <strong>BioMechanical Invincibility</strong>
        <p>The suit is the most impressive feat of engineering. Learn about strength ratios, tensegrity, </p>
        <a href="/pressure-cooked-yams" class="underline-text">Learn More</a>
</div>

<div class="col-3">
    <a href="">
        <img src="public/SphericalWaveC60.png" alt="" class="img-fluid rounded">
    </a>
        <strong>BioElectric Nutrition</strong>
        <p>Modern medicine and diets are dog water. Test out BioElectric nutrition and discover abundant energy, wolverine level regeneration, loss weight effortlessly and manifest impressive strength and endurance.</p>
</div>

<div class="col-3">
    <a href="">
        <img src="public/SphericalWaveC60.png" alt="" class="img-fluid rounded">
    </a>
        <strong>Mentorship</strong>
        <p>The fastest way to revolutionize your health is coaching from someone who has the results you seek. 
        I have 20 years of experience with things that don't work. 
        Let's get you some impressive results.</p>
</div>

{% include promo.html
    title="Find meaning, reinvent yourself, and create your ideal future."
    image="/public/2024-06-18-blue-journal.jpeg"
    description="Now available on Amazon."
    link="https://www.amazon.com/"
%}

</div>

<h5>Think Global, Act Local</h5>
<hr class="blue1 mb-3 mt-1">

<div class="row">

<div class="col-3">
<img src="public/SphericalWaveC60.png" class="img-fluid rounded w-100 mx-auto" alt="Responsive image">
</div>

<div class="col-9 mb-3 d-flex align-items-center">
{% include subscribe.html %}
</div>

</div>

<h5>Recently</h5>

<hr class="blue1 mb-3 mt-1">

<div class="row g-2">
  {% assign sorted_posts = site.posts | sort: 'date' | reverse | slice: 0, 4 %}
  {% for post in sorted_posts %}
  <div class="col-lg-3">
    {% include postCard.html %}
  </div>
  {% endfor %}
</div>


<div class="row">
ABOUT ME
<hr class="blue1">

<!-- Who Is Dan Koe?

Just a human obsessed with humans. -->
</div>

<div class="row">

<div class="col-4">
  <a href="/about">
    <img src="/public/aaron/2023-12-12 small_headshot.JPG" alt="Profile Picture" class="profilePic mx-auto">
  </a>
</div>

<div class="col-8">
Hi, I'm Aaron.
</div>
