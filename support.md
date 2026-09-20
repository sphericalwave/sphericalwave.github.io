---
layout: page
title: Support
permalink: /support/
description: "Support for sphericalWave apps. One inbox: hello@sphericalwave.com. Name the app with ?app= on this page."
---

<div class="sw-home">

  <section class="sw-home__hero sw-enter">
    <span class="sw-home__chip">
      <span class="sw-home__dot"></span>
      <span class="sw-home__label">Support</span>
    </span>
    <h1 class="sw-home__title" id="sw-support-title">Support</h1>
    <p class="sw-home__lead">One door for every sphericalWave app. The address on this page names which app the message is about.</p>
    <p class="sw-home__lead" id="sw-support-about">This is general support. No app tag is in the address.</p>
    <div class="sw-home__cta">
      <a id="sw-support-mail" class="sw-home__btn sw-home__btn--primary" href="mailto:hello@sphericalwave.com?subject=Support%3A%20general&amp;body=App%3A%20general%0A">Email hello@sphericalwave.com</a>
    </div>
  </section>

  <hr class="sw-home__wave-line">

  <div class="sw-home__bento sw-enter-2">
    <div class="sw-home__glass sw-home__panel sw-home__panel--accent">
      <span class="sw-home__label">How the tag works</span>
      <p class="sw-home__panel-title">Add ?app= to the address</p>
      <p>Open this page as /support/?app=visualize for Be Still and Know. The same page can take another app tag later. If the tag is missing, the message is general support. An unknown tag is still shown as written.</p>
      <p>The email subject is <code>Support: visualize</code> for that app, or <code>Support: general</code> when no tag is set. The tag is also written in the message body.</p>
    </div>
    <div class="sw-home__glass sw-home__panel">
      <span class="sw-home__label">Inbox</span>
      <p class="sw-home__panel-title">hello@sphericalwave.com</p>
      <p>There is no form on this page. Mail goes to the shared sphericalWave support address, with the app tag in the subject and the body.</p>
      <p id="sw-support-mail-note">Subject: Support: general</p>
    </div>
  </div>

  <noscript>
    <div class="sw-home__glass sw-home__panel" style="margin-top: 1.5rem;">
      <span class="sw-home__label">Without JavaScript</span>
      <p class="sw-home__panel-title">Put the app tag in the mail yourself</p>
      <p>This page reads an <code>app</code> query parameter, for example <code>?app=visualize</code> for Be Still and Know. If that parameter is missing, the message is general support. Email <a href="mailto:hello@sphericalwave.com?subject=Support%3A%20general&amp;body=App%3A%20general%0APlease%20name%20the%20app%20tag%20from%20the%20page%20address.%0A">hello@sphericalwave.com</a> and use a subject such as <code>Support: visualize</code>. Put the same tag in the body on a line like <code>App: visualize</code>.</p>
    </div>
  </noscript>

</div>

<script type="application/json" id="sw-support-apps">{"visualize":"Be Still and Know","mindheist":"MindHeist","breathe":"Breathe","mantra":"mantra","meditate":"meditate","lofty":"lofty","fitwrench":"FitWrench","torque":"torque","groundwork":"groundWerk","kettlebell":"kettlebell","rings":"rings","splits":"splits","clubs":"Clubbell Torque","mfr":"MFR","flow":"flow","jits":"Technique review","striking":"Striking","wealth":"wealth","invest":"invest","piano":"piano","listen":"listen","guitar":"GuitarOS","voice":"voice","focus":"focus","swgantt":"swGantt","mindmap":"mindMap"}</script>
<script>
(function () {
  var about = document.getElementById("sw-support-about");
  var mail = document.getElementById("sw-support-mail");
  var note = document.getElementById("sw-support-mail-note");
  var title = document.getElementById("sw-support-title");
  var apps = {};
  var data = document.getElementById("sw-support-apps");
  if (data && data.textContent) {
    try { apps = JSON.parse(data.textContent); } catch (e) { apps = {}; }
  }

  var raw = "";
  try {
    raw = new URLSearchParams(window.location.search).get("app") || "";
  } catch (e) {
    raw = "";
  }
  var tag = String(raw).replace(/[\r\n\t]/g, " ").trim();
  if (tag.length > 64) tag = tag.slice(0, 64);

  var subject;
  var body;
  if (!tag) {
    subject = "Support: general";
    body = "App: general\n";
    about.textContent = "This is general support. No app tag is in the address.";
  } else {
    var name = Object.prototype.hasOwnProperty.call(apps, tag) ? apps[tag] : "";
    subject = "Support: " + tag;
    body = "App: " + tag + "\n" + (name ? "Product: " + name + "\n" : "");
    if (name) {
      title.textContent = "Support — " + name;
      about.textContent = "This message is about " + name + " (" + tag + ").";
    } else {
      title.textContent = "Support — " + tag;
      about.textContent = "This message is about " + tag + ".";
    }
  }

  mail.href = "mailto:hello@sphericalwave.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  if (note) note.textContent = "Subject: " + subject;
})();
</script>
