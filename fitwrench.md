---
layout: page
title: FitWrench
permalink: /fitwrench/
description: "FitWrench is a suite of tools for jiu-jitsu hobbyists — nutrition, mat learning, the body, and the head. Built by a black belt who trains with that room three times a week."
---

<div class="sw-home">

  <section class="sw-home__hero sw-enter">
    <span class="sw-home__chip">
      <span class="sw-home__dot"></span>
      <span class="sw-home__label">FitWrench</span>
    </span>
    <h1 class="sw-home__title">Built for people who train jiu-jitsu for life.</h1>
    <p class="sw-home__lead">I'm a black belt. I'm on the mat with hobbyists three times a week. These are the tools I actually use — nutrition, the mat journal, the body, the head. They become one system over time. You don't wait on the hub to get value from a door.</p>
    <div class="sw-home__cta">
      <a href="#survey" class="sw-home__btn sw-home__btn--primary">Take the 30-second survey</a>
      <a href="https://sphericalwave.gumroad.com/l/xxfoyx" class="sw-home__btn sw-home__btn--ghost" rel="noopener">Buy the notes</a>
    </div>
    <div class="sw-home__ornament" aria-hidden="true">
      <span class="sw-home__orn-grow"></span>
      <span class="sw-home__orn-mid"></span>
      <span class="sw-home__orn-grow"></span>
    </div>
  </section>

  <hr class="sw-home__wave-line">

  <div class="sw-home__grid sw-enter-2">
    <div class="sw-home__glass sw-home__card">
      <span class="sw-home__label">Eat</span>
      <h3>Nutrition</h3>
      <p>What you eat around training, cutting, and recovering. The nutrition app is one SKU in the suite — not the name of the whole thing.</p>
    </div>
    <div class="sw-home__glass sw-home__card">
      <span class="sw-home__label">Learn</span>
      <h3>shodan</h3>
      <p>Sessions, partners, rolls. File techniques by position and system. Footage notes, spaced review, belts, tournaments. The app the room would actually open after class.</p>
    </div>
    <div class="sw-home__glass sw-home__card">
      <span class="sw-home__label">Body</span>
      <h3>Suit</h3>
      <p>The long-term hub: an avatar of your body for mechanics and how training is landing. It's being built. The thinking is already in the biomechanics notes.</p>
    </div>
    <div class="sw-home__glass sw-home__card">
      <span class="sw-home__label">Head</span>
      <h3>Mental game</h3>
      <p>MindHeist for self-talk scripts you record and repeat. beStillAndKnow for guided visualization. The part nobody programs at the gym.</p>
    </div>
  </div>

  <hr class="sw-home__wave-line">

  <section class="sw-enter-2" id="survey">
    <span class="sw-home__label">Survey</span>
    <h2 class="sw-home__title" style="font-size:clamp(1.6rem,3vw,2.2rem);margin:0.4rem 0 0.5rem;">Which door is wrecking your week?</h2>
    <p class="sw-home__lead">I ship where the answers pile up. No spam. Email is so I can tell you when the thing you pointed at exists.</p>
  </section>

  <div class="sw-home__glass sw-home__panel sw-enter-2" style="margin-top:1rem;">
    <form action="https://formspree.io/f/NEED_FORM_ID" method="POST">
      <input type="hidden" name="_subject" value="FitWrench survey">

      <p class="sw-home__label" style="margin-bottom:0.75rem;">1. The stuck door</p>
      <div class="sw-home__grid" style="margin-bottom:1.5rem;">
        <label class="sw-home__glass sw-home__card" style="cursor:pointer;">
          <input type="radio" name="door" value="eat" required>
          <strong>Eat</strong>
          <p>Nutrition, cutting, energy.</p>
        </label>
        <label class="sw-home__glass sw-home__card" style="cursor:pointer;">
          <input type="radio" name="door" value="learn">
          <strong>Learn</strong>
          <p>Forgetting the technique by Thursday.</p>
        </label>
        <label class="sw-home__glass sw-home__card" style="cursor:pointer;">
          <input type="radio" name="door" value="body">
          <strong>Body</strong>
          <p>Sore, tight, don't know what's working.</p>
        </label>
        <label class="sw-home__glass sw-home__card" style="cursor:pointer;">
          <input type="radio" name="door" value="head">
          <strong>Head</strong>
          <p>Nerves, self-talk, showing up.</p>
        </label>
      </div>

      <p class="sw-home__label">2. Belt</p>
      <p style="margin:0.4rem 0 1.25rem;">
        <select name="belt" required style="width:100%;max-width:24rem;padding:0.6rem 0.75rem;border-radius:8px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:inherit;">
          <option value="" disabled selected>Select</option>
          <option>White</option>
          <option>Blue</option>
          <option>Purple</option>
          <option>Brown</option>
          <option>Black</option>
          <option>I don't train yet</option>
        </select>
      </p>

      <p class="sw-home__label">3. Times a week on the mat</p>
      <p style="margin:0.4rem 0 1.25rem;">
        <select name="sessions_per_week" required style="width:100%;max-width:24rem;padding:0.6rem 0.75rem;border-radius:8px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:inherit;">
          <option value="" disabled selected>Select</option>
          <option>0–1</option>
          <option>2</option>
          <option>3</option>
          <option>4+</option>
        </select>
      </p>

      <p class="sw-home__label">4. Email</p>
      <p style="margin:0.4rem 0 1.25rem;">
        <input type="email" name="email" required placeholder="you@school.com" style="width:100%;max-width:24rem;padding:0.6rem 0.75rem;border-radius:8px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:inherit;">
      </p>

      <p class="sw-home__label">5. Optional — what would you pay for this month if it existed?</p>
      <p style="margin:0.4rem 0 1.25rem;">
        <input type="text" name="would_pay_for" placeholder="e.g. a cutting plan that doesn't wreck rolling" style="width:100%;padding:0.6rem 0.75rem;border-radius:8px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:inherit;">
      </p>

      <div class="sw-home__cta">
        <button type="submit" class="sw-home__btn sw-home__btn--primary">Send it</button>
        <a class="sw-home__btn sw-home__btn--ghost" href="mailto:hello@sphericalwave.com?subject=FitWrench%20survey">Or email me instead</a>
      </div>
      <p class="sw-home__label" style="margin-top:1rem;">If the form isn't wired yet, the email link still works.</p>
    </form>
  </div>

  <section class="sw-home__cta-band sw-enter-2">
    <h2>Something you can get today</h2>
    <p>The biomechanics notes — tensegrity, torque, strength as the point — while the apps are going onto the store.</p>
    <div class="sw-home__cta">
      <a href="https://sphericalwave.gumroad.com/l/xxfoyx" class="sw-home__btn sw-home__btn--primary" rel="noopener">Buy on Gumroad</a>
      <a href="/" class="sw-home__btn sw-home__btn--ghost">Back home</a>
    </div>
  </section>

</div>
