---
layout: page
title: Merch
permalink: /merch/
image: /public/merch/fw-tee-back.jpg
description: "C60 designs on a tee, a hoodie and a jiu-jitsu rashguard."
---

{%- comment -%}
Names, taglines and prices here mirror the Fourthwall catalogue exactly, and
merch-store.html overwrites them with live data on load. Do not describe a
garment beyond what the shop says — every invented spec is something that can
end up contradicting the product someone actually receives.
{%- endcomment -%}
{% assign store = site.fourthwall_shop | default: "" %}

<div class="sw-home">

  <section class="sw-home__hero sw-enter">
    <span class="sw-home__chip">
      <span class="sw-home__dot"></span>
      <span class="sw-home__label">Three designs</span>
    </span>
    <h1 class="sw-home__title">Merch</h1>
    <p class="sw-home__lead">The buckyball I keep drawing, on a tee, a hoodie, and a rashguard for the mat.</p>
  </section>

  <hr class="sw-home__wave-line">

  <div class="sw-home__grid sw-enter-2">

    <div class="sw-home__glass sw-home__card sw-home__pick" data-product="truncated-icosahedron">
      <h3>truncated icosahedron</h3>
      <div class="sw-merch__shots">
        <img src="/public/merch/fw-tee-front.jpg" width="675" height="900" loading="lazy" alt="truncated icosahedron tee, front">
        <img src="/public/merch/fw-tee-back.jpg" width="675" height="900" loading="lazy" alt="truncated icosahedron tee, back">
      </div>
      <p class="mb-2">think global act local</p>
      <p class="mb-3" data-price><strong>$47 CAD</strong></p>
      <div class="sw-merch__variants" data-variants hidden></div>
      {% if store != "" %}
      <a href="{{ store }}/products/truncated-icosahedron" class="sw-home__btn sw-home__btn--ghost" data-cta rel="noopener">Buy</a>
      {% else %}
      <span class="sw-home__soon" data-cta>Opening soon</span>
      {% endif %}
    </div>

    <div class="sw-home__glass sw-home__card sw-home__pick" data-product="they-think-im-hiding-in-the-shadows">
      <h3>they think im hiding in the shadows</h3>
      <div class="sw-merch__shots">
        <img src="/public/merch/fw-hoodie-front.jpg" width="675" height="900" loading="lazy" alt="Hoodie, front">
        <img src="/public/merch/fw-hoodie-back.jpg" width="675" height="900" loading="lazy" alt="Hoodie, back">
      </div>
      <p class="mb-2">but i am the shadows</p>
      <p class="mb-3" data-price><strong>$71 CAD</strong></p>
      <div class="sw-merch__variants" data-variants hidden></div>
      {% if store != "" %}
      <a href="{{ store }}/products/they-think-im-hiding-in-the-shadows" class="sw-home__btn sw-home__btn--ghost" data-cta rel="noopener">Buy</a>
      {% else %}
      <span class="sw-home__soon" data-cta>Opening soon</span>
      {% endif %}
    </div>

    <div class="sw-home__glass sw-home__card sw-home__pick" data-product="superfluid-jiujitsu">
      <h3>superfluid jiujitsu</h3>
      <div class="sw-merch__shots">
        <img src="/public/merch/fw-rashguard-front.jpg" width="900" height="900" loading="lazy" alt="superfluid jiujitsu rashguard, front">
        <img src="/public/merch/fw-rashguard-back.jpg" width="900" height="900" loading="lazy" alt="superfluid jiujitsu rashguard, back">
      </div>
      <p class="mb-2">suit up!</p>
      <p class="mb-3" data-price><strong>$54 CAD</strong></p>
      <div class="sw-merch__variants" data-variants hidden></div>
      {% if store != "" %}
      <a href="{{ store }}/products/superfluid-jiujitsu" class="sw-home__btn sw-home__btn--ghost" data-cta rel="noopener">Buy</a>
      {% else %}
      <span class="sw-home__soon" data-cta>Opening soon</span>
      {% endif %}
    </div>

  </div>

  <hr class="sw-home__wave-line">

  <div class="sw-home__bento sw-enter-2">
    <div class="sw-home__glass sw-home__panel sw-home__panel--accent">
      <span class="sw-home__label">Shipping</span>
      <p class="sw-home__panel-title">Handled at checkout</p>
      <p>Size charts, shipping options and returns are all on the checkout page, which shows the total before you pay.</p>
    </div>
    <div class="sw-home__glass sw-home__panel">
      <span class="sw-home__label">Questions</span>
      <p class="sw-home__panel-title">Just ask</p>
      <p>Sizing, a colour that isn't listed, or one of these designs on something else — <a href="mailto:hello@sphericalwave.com?subject=Merch">email me</a>.</p>
    </div>
  </div>

</div>

{% include merch-store.html %}
