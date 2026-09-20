---
layout: page
title: Merch
permalink: /merch/
image: /public/merch/c60-tee-back.png
description: "C60 merch — organic cotton tee, zip hoodie, and a long-sleeve rashguard. Printed on demand, one at a time, no minimum order."
---

{% assign store = site.store_url | default: "" %}

<div class="sw-home">

  <section class="sw-home__hero sw-enter">
    <span class="sw-home__chip">
      <span class="sw-home__dot"></span>
      <span class="sw-home__label">{% if store != "" %}Made to order{% else %}Store opening{% endif %}</span>
    </span>
    <h1 class="sw-home__title">C60 Merch</h1>
    <p class="sw-home__lead">The buckyball, large on the back and small on the left chest. Printed one at a time when you order — no batch to sell through, no size I guessed wrong about, nothing sitting in a box in my basement.</p>
    <div class="sw-home__cta">
      {% if store != "" %}
      <a href="{{ store }}" class="sw-home__btn sw-home__btn--primary" rel="noopener">Shop the store</a>
      {% else %}
      <a href="#notify" class="sw-home__btn sw-home__btn--primary">Tell me when it opens</a>
      {% endif %}
      <a href="#how" class="sw-home__btn sw-home__btn--ghost">How it's made</a>
    </div>
  </section>

  <hr class="sw-home__wave-line">

  <div class="sw-home__grid sw-enter-2">

    <div class="sw-home__glass sw-home__card sw-home__pick" data-product="c60-tee">
      <span class="sw-home__label">01 · Tee</span>
      <h3>Organic cotton tee</h3>
      <div class="sw-merch__shots">
        <img src="/public/merch/c60-tee-front.png" width="900" height="760" loading="lazy" alt="C60 tee, front — small mark on the left chest">
        <img src="/public/merch/c60-tee-back.png" width="900" height="760" loading="lazy" alt="C60 tee, back — large buckyball">
      </div>
      <p class="mb-2">Stanley/Stella heavyweight, 100% organic cotton. Black first, blue next.</p>
      <p class="mb-3" data-price><strong>$58 CAD</strong></p>
      <div class="sw-merch__variants" data-variants hidden></div>
      {% if store != "" %}
      <a href="{{ store }}/products/c60-tee" class="sw-home__btn sw-home__btn--ghost" data-cta rel="noopener">Buy</a>
      {% else %}
      <span class="sw-home__soon" data-cta>Opening soon</span>
      {% endif %}
    </div>

    <div class="sw-home__glass sw-home__card sw-home__pick" data-product="c60-zip-hoodie">
      <span class="sw-home__label">02 · Hoodie</span>
      <h3>Zip hoodie</h3>
      <div class="sw-merch__shots">
        <img src="/public/merch/c60-hoodie-front.png" width="900" height="760" loading="lazy" alt="C60 zip hoodie, front — small mark on the left chest">
        <img src="/public/merch/c60-hoodie-back.png" width="900" height="760" loading="lazy" alt="C60 zip hoodie, back — large buckyball">
      </div>
      <p class="mb-2">Brushed organic fleece, full zip, side pockets. Black first, blue next.</p>
      <p class="mb-3" data-price><strong>$118 CAD</strong></p>
      <div class="sw-merch__variants" data-variants hidden></div>
      {% if store != "" %}
      <a href="{{ store }}/products/c60-zip-hoodie" class="sw-home__btn sw-home__btn--ghost" data-cta rel="noopener">Buy</a>
      {% else %}
      <span class="sw-home__soon" data-cta>Opening soon</span>
      {% endif %}
    </div>

    <div class="sw-home__glass sw-home__card sw-home__pick" data-product="c60-rashguard">
      <span class="sw-home__label">03 · Rashguard</span>
      <h3>Long-sleeve rashguard</h3>
      <div class="sw-merch__shots">
        <img src="/public/merch/c60-rashguard-front.png" width="900" height="760" loading="lazy" alt="C60 rashguard, front — small mark on the left chest">
        <img src="/public/merch/c60-rashguard-back.png" width="900" height="760" loading="lazy" alt="C60 rashguard, back — large buckyball">
      </div>
      <p class="mb-2">All-over print, flatlock seams, navy. Good for training and warm-ups — it is not a competition-spec grappling rashguard, and I won't pretend otherwise.</p>
      <p class="mb-3" data-price><strong>$78 CAD</strong></p>
      <div class="sw-merch__variants" data-variants hidden></div>
      {% if store != "" %}
      <a href="{{ store }}/products/c60-rashguard" class="sw-home__btn sw-home__btn--ghost" data-cta rel="noopener">Buy</a>
      {% else %}
      <span class="sw-home__soon" data-cta>Opening soon</span>
      {% endif %}
    </div>

  </div>

  <p class="sw-home__lead" style="font-size: 0.9rem; opacity: 0.7; margin-top: 1rem;">
    Product images are design mockups of the real print placement. They get replaced with photographs of the actual garments once the first ones are printed.
  </p>

  <hr class="sw-home__wave-line">

  <h2 class="mb-2" id="how">How it's made</h2>
  <p class="sw-home__lead mb-4">I used to plan this as a specialty run — hemp blend, cut only once a waitlist covered the minimum. That meant nothing shipped. Print-on-demand ships.</p>

  <div class="sw-home__bento sw-enter-2">
    <div class="sw-home__glass sw-home__panel sw-home__panel--accent">
      <span class="sw-home__label">The trade I made</span>
      <p class="sw-home__panel-title">Organic cotton instead of hemp</p>
      <p>Hemp blanks are not available print-on-demand at any quality I would put my name on, so the tee is Stanley/Stella organic cotton — a genuinely good blank, printed with water-based ink, and you can buy one today instead of joining a list.</p>
      <p>If there is ever enough demand for a real hemp run, I'll do that as a separate limited drop rather than hold up everything else.</p>
    </div>
    <div class="sw-home__glass sw-home__panel">
      <span class="sw-home__label">Order to door</span>
      <p class="sw-home__panel-title">Made after you buy</p>
      <p>Each piece is printed and shipped by the fulfiller when the order comes in — usually 2–5 business days to make, then normal post. Nothing is stocked, so no size runs out and no leftovers get dumped.</p>
      <p>Sizing, returns and shipping are handled at checkout in the store.</p>
    </div>
  </div>

  <hr class="sw-home__wave-line">

  {% if store != "" %}
  <section class="sw-home__cta-band sw-enter-2">
    <h2>Pick one up</h2>
    <p>Tee, hoodie, rashguard. Printed when you order.</p>
    <div class="sw-home__cta">
      <a href="{{ store }}" class="sw-home__btn sw-home__btn--primary" rel="noopener">Shop the store</a>
      <a href="mailto:hello@sphericalwave.com?subject=C60%20Merch" class="sw-home__btn sw-home__btn--ghost">Ask me something</a>
    </div>
  </section>
  {% else %}
  <section class="sw-home__cta-band sw-enter-2" id="notify">
    <h2>Not open yet</h2>
    <p>The store is being set up. Email me and I'll tell you the day it opens — or say which piece and size you want and I'll make sure it exists.</p>
    <div class="sw-home__cta">
      <a href="mailto:hello@sphericalwave.com?subject=C60%20Merch%20%E2%80%94%20tell%20me%20when%20it%20opens&amp;body=Which%20piece%3A%20%0ASize%3A%20%0A" class="sw-home__btn sw-home__btn--primary">Tell me when it opens</a>
      <a href="/apps/" class="sw-home__btn sw-home__btn--ghost">See the apps instead</a>
    </div>
  </section>
  {% endif %}

</div>

{% include merch-store.html %}
