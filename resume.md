---
layout: page
title: "resume"
permalink: about
---

<div class="d-flex align-items-center justify-content-between">
  <h1>Resume</h1>
  <a href="/public/documents/masterResume.pdf" class="btn" download="Aaron_McGrath_Resume.pdf">Download</a>
</div>

<hr class="blue1">

<div class="row justify-content-center">
    <div class="col-12 col-lg-8">
        <div class="pdf-container my-3">
            <object data="/public/documents/masterResume.pdf#view=FitH&spread=odd" type="application/pdf" width="100%" height="100%">
                <iframe src="/public/documents/masterResume.pdf#view=FitH&spread=odd" width="100%" height="100%" style="border: none;">
                <p class="text-center">
                    <small>Sorry, the resume cannot be displayed. <a href="/public/documents/masterResume.pdf" class="underline-text" download="Aaron_McGrath_Resume.pdf">Download it here</a>.</small>
                </p>
                </iframe>
            </object>
        </div>
    </div>
</div>

<hr class="blue1">


<style>
.pdf-container {
  width: 100%;
  aspect-ratio: 8.5 / 22; /* Two letter pages side-by-side (8.5x2 / 11) */
  max-width: 100%; /* Fill the column */
  margin: 0 auto; /* Center the container */
  /* border: 1px solid #ddd;  Subtle border */
  /*background-color: #f8f9fa;  Light gray background */
}

@media (max-width: 576px) {
  .pdf-container {
    aspect-ratio: 8.5 / 11; /* Single letter page on mobile */
    height: auto; /* Allow height to adjust */
    min-height: 500px; /* Ensure visibility on small screens */
  }
}
</style>