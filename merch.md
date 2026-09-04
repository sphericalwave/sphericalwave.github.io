---
layout: page
title: Merch
permalink: /merch/
description: "C60 merch — hemp tee, zip hoodie, and BJJ rashguard. Concept art and waitlist. We produce when interest covers specialty MOQs."
---

<div class="sw-home">

  <section class="sw-home__hero sw-enter">
    <span class="sw-home__chip">
      <span class="sw-home__dot"></span>
      <span class="sw-home__label">Concept · Waitlist</span>
    </span>
    <h1 class="sw-home__title">C60 Merch</h1>
    <p class="sw-home__lead">Hemp tee, zip hoodie, and a BJJ-grade rashguard. Large C60 on the back, small on the left chest. We only cut when waitlist interest covers specialty minimums — no junk print-on-demand.</p>
    <div class="sw-home__cta">
      <a href="#waitlist" class="sw-home__btn sw-home__btn--primary">Join the waitlist</a>
      <a href="mailto:hello@sphericalwave.com?subject=C60%20Merch%20Waitlist" class="sw-home__btn sw-home__btn--ghost">Email interest</a>
    </div>
  </section>

  <hr class="sw-home__wave-line">

  <div class="row g-4 mb-4 sw-enter-2">

    <div class="col-12 col-lg-4">
      <div class="sw-home__glass sw-home__card h-100">
        <span class="sw-home__label">01 · Tee</span>
        <h3>Hemp tee</h3>
        <p class="mb-2">55% hemp / 45% organic cotton. Black first; blue next.</p>
        <p class="mb-3"><strong>$58 CAD</strong> <span class="sw-home__label">target</span></p>
        <div class="row g-2 mb-2">
          <div class="col-6">{% include merch-img-01.html %}</div>
          <div class="col-6">{% include merch-img-02.html %}</div>
        </div>
        <a href="#waitlist" class="sw-home__btn sw-home__btn--ghost">Want this</a>
      </div>
    </div>

    <div class="col-12 col-lg-4">
      <div class="sw-home__glass sw-home__card h-100">
        <span class="sw-home__label">02 · Hoodie</span>
        <h3>Zip hoodie</h3>
        <p class="mb-2">Same hemp blend fleece. Full zip. Black first; blue next.</p>
        <p class="mb-3"><strong>$118 CAD</strong> <span class="sw-home__label">target</span></p>
        <div class="row g-2 mb-2">
          <div class="col-6">{% include merch-img-03.html %}</div>
          <div class="col-6">{% include merch-img-04.html %}</div>
        </div>
        <a href="#waitlist" class="sw-home__btn sw-home__btn--ghost">Want this</a>
      </div>
    </div>

    <div class="col-12 col-lg-4">
      <div class="sw-home__glass sw-home__card h-100">
        <span class="sw-home__label">03 · Rashguard</span>
        <h3>BJJ rashguard</h3>
        <p class="mb-2">Long sleeve, flatlock, fightwear-grade — not fashion POD. Navy first; black next.</p>
        <p class="mb-3"><strong>$78 CAD</strong> <span class="sw-home__label">target</span></p>
        <div class="row g-2 mb-2">
          <div class="col-6">{% include merch-img-05.html %}</div>
          <div class="col-6">{% include merch-img-06.html %}</div>
        </div>
        <a href="#waitlist" class="sw-home__btn sw-home__btn--ghost">Want this</a>
      </div>
    </div>

  </div>

  <p class="text-center sw-enter-2 mb-4"><small>Concept art. Placement: large C60 on the back, small on the left chest. Specialty fabrics — we cut when the list covers MOQ.</small></p>

  <hr class="sw-home__wave-line">

  <section id="waitlist" class="sw-home__cta-band sw-enter-2">
    <h2>Join the waitlist</h2>
    <p>Tell us what you want. When interest covers production minimums, we email the drop — no charge until then.</p>

    <form class="my-4 text-start mx-auto" style="max-width:32rem" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <div class="mb-3">
        <label class="form-label" for="wl-name">Name</label>
        <input class="form-control" type="text" id="wl-name" name="name" required>
      </div>
      <div class="mb-3">
        <label class="form-label" for="wl-email">Email</label>
        <input class="form-control" type="email" id="wl-email" name="email" required>
      </div>
      <fieldset class="mb-3">
        <legend class="form-label">Pieces</legend>
        <div class="form-check"><input class="form-check-input" type="checkbox" name="pieces" value="tee" id="p-tee"><label class="form-check-label" for="p-tee">Hemp tee ($58)</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" name="pieces" value="hoodie" id="p-hoodie"><label class="form-check-label" for="p-hoodie">Zip hoodie ($118)</label></div>
        <div class="form-check"><input class="form-check-input" type="checkbox" name="pieces" value="rashguard" id="p-rash"><label class="form-check-label" for="p-rash">BJJ rashguard ($78)</label></div>
      </fieldset>
      <div class="mb-3">
        <label class="form-label" for="wl-size">Size (optional)</label>
        <input class="form-control" type="text" id="wl-size" name="size" placeholder="S / M / L / XL">
      </div>
      <div class="mb-3">
        <label class="form-label" for="wl-colour">Colour preference (optional)</label>
        <input class="form-control" type="text" id="wl-colour" name="colour" placeholder="Black, navy, either">
      </div>
      <input type="hidden" name="_subject" value="C60 Merch waitlist">
      <button type="submit" class="sw-home__btn sw-home__btn--primary">Join waitlist</button>
    </form>

    <p class="mb-0"><a href="mailto:hello@sphericalwave.com?subject=C60%20Merch%20Waitlist" class="sw-home__btn sw-home__btn--ghost">Or email hello@sphericalwave.com</a></p>
    <!-- TODO: replace Formspree YOUR_FORM_ID — create a free form at formspree.io pointing to hello@sphericalwave.com -->
  </section>

</div>
