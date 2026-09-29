---
layout: page
title: House of Wolverines
permalink: /houseOfWolverines
description: "House of Wolverines — training footage playlist."
image: /public/wolverines/comic.jpg
---

<div class="sw-home">

  <section class="sw-home__hero wolverine-hero sw-enter">
    <div class="wolverine-hero__copy">
      <h1 class="sw-home__title">House of Wolverines</h1>
      <p class="sw-home__label mb-0" id="wolverine-saying">what happens in training, stays in training.</p>
      {%- comment -%}
        Inline and right after the element on purpose: it runs while the parser
        is still here, so the line is swapped before the first paint. Deferred,
        it would flash the fallback. The markup keeps a real line so a visitor
        without JS gets one too.
      {%- endcomment -%}
      <script>
      (function () {
        var sayings = [
          "what happens in training, stays in training.",
          "take em down, pass their dangerous legs, progress through the hierarchy of pins",
          "if you're not failing, you're not progressing",
          "position before submission.",
          "don't get punked by your ego",
          "just tap",
          "quitters never win",
          "slow is smooth. smooth is fast.",
          "pressure is a technique.",
          "if you're comfortable, you're not learning.",
          "the only bad round is the one you skipped.",
          "roll with the people who beat you.",
          "technique beats strength, until strength learns technique.",
          "win or you learn",
          "safety first",
          "got tapped out? good. got beat? good. you learned.",
          "less is more",
          "strength and honor",
          "what we do i life echoes in eternity",
          "how you do one thing is how you do everything",
          "what goes around, comes around",
          "you are caught everything is wrong",
          "i am a shark the ground is my ocean 🦈",
          "be like water my friend 🌊",
          "i have the power ⚔️",
          "just let me bang bro",
          "i cant let you get close",
          "dont make me ankle pick you",
          "this is number 1 bullshit",
          "im not impressed with your performance",
          "conceive, believe, acheive. shut the fuck up",
          "who the fuck is that guy?",
          "to be the best you gotta beat the best and the beat is blessed",
          "if you make yourself more than just a man, if you devote yourself to an ideal, and if they cant stop you, then you become something else entirely",
          "base, posture, structure",
          "frames and levers",
          "ninja understand invisibility is a matter of patience and agility",
          "all warfare is based on deception",
          "scroll up"
        ];
        var el = document.getElementById("wolverine-saying");
        if (el) el.textContent = sayings[Math.floor(Math.random() * sayings.length)];
      })();
      </script>
    </div>
    <div class="wolverine-hero__pics" data-lightbox>
      <div class="sw-home__pick-media wolverine-hero__pic">
        <img src="/public/wolverines/comic.jpg" alt="Wolverine, comic art" loading="eager">
      </div>
      <div class="sw-home__pick-media wolverine-hero__pic">
        <img src="/public/wolverines/batcave.jpg" alt="Batman brooding in the cave while Alfred brings coffee" loading="eager">
      </div>
      <div class="sw-home__pick-media wolverine-hero__pic wolverine-hero__pic--bottom">
        <img src="/public/wolverines/ironman.jpg" alt="Iron Man, armour shot through, still standing" loading="eager">
      </div>
    </div>
  </section>

  <hr class="sw-home__wave-line">

  <div id="wolverines-status" class="wolverine-loading">
    <span class="wolverine-spinner" aria-hidden="true"></span>
    <span class="sw-home__label">Loading videos&hellip;</span>
  </div>

  <div id="wolverines-grid" class="row g-4 mb-4"></div>

  <p id="wolverines-error" class="sw-home__label text-center" style="display:none;"></p>

  <div class="text-center mb-4">
    <button id="wolverines-load-more" class="btn btn-outline-light" style="display:none;">Load more</button>
  </div>

</div>

<script>
(function () {
  var API_KEY = "AIzaSyCyVegZU6XgryJD8eNKTFx1EvwVl6e2vwE";
  var PLAYLIST_ID = "PLvxN4ywk7KIezoQOlpipw-xOc1bvlmQi2";
  var API_BASE = "https://www.googleapis.com/youtube/v3/playlistItems";
  var VIDEOS_API = "https://www.googleapis.com/youtube/v3/videos";

  var statusEl = document.getElementById("wolverines-status");
  var gridEl = document.getElementById("wolverines-grid");
  var loadMoreBtn = document.getElementById("wolverines-load-more");
  var errorEl = document.getElementById("wolverines-error");

  function showError(err) {
    var plain = ((err && err.message) || "").replace(/<[^>]*>/g, "");
    var msg = /quota/i.test(plain)
      ? "This page has hit YouTube's daily API limit for now — please check back later."
      : "Couldn't load videos right now. Please try refreshing in a bit.";
    if (statusEl) { statusEl.remove(); statusEl = null; }
    errorEl.textContent = msg;
    errorEl.style.display = "";
  }

  var nextPageToken = null;

  // Fetches ONE page (up to 50 items) instead of the whole playlist, so a
  // typical visit costs ~2 API calls (one playlistItems.list + one
  // videos.list) instead of ~80 for the full 1985-video playlist. More
  // pages are only fetched if the visitor clicks "Load more".
  function fetchPage(pageToken) {
    var url = API_BASE + "?part=snippet&maxResults=50&playlistId=" + encodeURIComponent(PLAYLIST_ID) +
      "&key=" + encodeURIComponent(API_KEY) +
      (pageToken ? "&pageToken=" + encodeURIComponent(pageToken) : "");

    return fetch(url)
      .then(function (res) {
        if (!res.ok) {
          return res.json().then(function (body) {
            var msg = (body && body.error && body.error.message) || res.statusText;
            throw new Error(msg);
          });
        }
        return res.json();
      })
      .then(function (data) {
        var items = (data.items || [])
          .filter(function (item) {
            return item.snippet && item.snippet.resourceId && item.snippet.resourceId.videoId;
          })
          .map(function (item) {
            var thumbs = item.snippet.thumbnails || {};
            var thumb = thumbs.medium || thumbs.default || thumbs.high || {};
            return {
              videoId: item.snippet.resourceId.videoId,
              title: item.snippet.title,
              position: item.snippet.position,
              thumbnail: thumb.url
            };
          });
        nextPageToken = data.nextPageToken || null;
        return items;
      });
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }

  function formatDuration(iso) {
    var m = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso || "");
    if (!m) return "";
    var h = parseInt(m[1] || "0", 10);
    var min = parseInt(m[2] || "0", 10);
    var sec = parseInt(m[3] || "0", 10);
    var parts = h ? [h, min, sec] : [min, sec];
    return parts.map(function (n, i) {
      return (i > 0 && n < 10 ? "0" : "") + n;
    }).join(":");
  }

  function formatDate(iso) {
    if (!iso) return "";
    var d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  function formatViews(count) {
    if (count === undefined || count === null) return "";
    var n = parseInt(count, 10);
    if (isNaN(n)) return "";
    return n.toLocaleString() + (n === 1 ? " view" : " views");
  }

  // YouTube reports a block as contentDetails.regionRestriction, which is
  // absolute data about the video rather than about the person looking at
  // it, so deciding whether it matters needs the viewer's own country.
  // There is no API for that, and an IP lookup would mean shipping visitor
  // addresses to a third party for a cosmetic badge. The locale's region
  // subtag is the honest approximation: right when the browser is set to
  // en-CA or ru-RU, absent when it is plain "en".
  function viewerRegion() {
    var langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages : [navigator.language];
    for (var i = 0; i < langs.length; i++) {
      var m = /[-_]([A-Za-z]{2})$/.exec(langs[i] || "");
      if (m) return m[1].toUpperCase();
    }
    return null;
  }
  var REGION = viewerRegion();

  // Of 200 videos sampled, 39 carry a `blocked` list and 3 an `allowed`
  // one. Nearly all the blocked lists name one or two countries — Russia
  // and Belarus — which is noise for almost every visitor. Two videos are
  // blocked in 249 countries, which is every country YouTube ships to:
  // those are dead for everyone and are the ones worth shouting about.
  function blockStatus(restriction) {
    if (!restriction) return null;
    var blocked = restriction.blocked || [];
    var allowed = restriction.allowed || [];

    if (blocked.length) {
      // a near-total blocklist needs no geography to be certain about
      if (blocked.length >= 200) return { everywhere: true };
      if (REGION && blocked.indexOf(REGION) !== -1) return { everywhere: false };
      return null;
    }
    if (restriction.allowed) {
      if (!allowed.length) return { everywhere: true };
      // unknown region stays silent rather than accusing a working video
      if (REGION && allowed.indexOf(REGION) === -1) return { everywhere: false };
    }
    return null;
  }

  function markBlocked(els, status) {
    els.cardEl.classList.add("is-blocked");
    els.badgeEl.hidden = false;
    els.noteEl.hidden = false;
    els.noteEl.textContent = status.everywhere
      ? "YouTube has blocked this one everywhere — the link will not play."
      : "YouTube blocks this one in your country — the link will not play.";
    els.linkEl.setAttribute("aria-label", els.title + " — blocked by YouTube");
  }

  // One page is at most 50 videos, so a single videos.list call (no
  // chunking) covers it. Patches each card's placeholders in place once
  // it resolves — doesn't block the initial thumbnail render.
  function loadDetails(videos, elsById) {
    if (videos.length === 0) return;
    var ids = videos.map(function (v) { return v.videoId; });
    var url = VIDEOS_API + "?part=contentDetails,recordingDetails,snippet,statistics&id=" +
      ids.map(encodeURIComponent).join(",") + "&key=" + encodeURIComponent(API_KEY);
    fetch(url).then(function (res) { return res.json(); }).then(function (data) {
      (data.items || []).forEach(function (item) {
        var els = elsById[item.id];
        if (!els) return;
        var duration = formatDuration(item.contentDetails && item.contentDetails.duration);
        var date = formatDate((item.recordingDetails && item.recordingDetails.recordingDate) ||
          (item.snippet && item.snippet.publishedAt));
        var views = formatViews(item.statistics && item.statistics.viewCount);
        if (duration) els.durationEl.textContent = duration;
        if (date) els.dateEl.textContent = date;
        if (views) els.viewsEl.textContent = views;

        var status = blockStatus(item.contentDetails && item.contentDetails.regionRestriction);
        if (status) markBlocked(els, status);
      });
    }).catch(function () { /* duration/date/views are non-essential; ignore */ });
  }

  function render(videos) {
    if (statusEl) {
      if (videos.length === 0) {
        statusEl.textContent = "No videos found in this playlist.";
        return;
      }
      statusEl.remove();
      statusEl = null;
    }

    var elsById = {};

    videos.forEach(function (video) {
      var col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-lg-4";

      col.innerHTML =
        '<div class="h-100 wolverine-card">' +
          '<a class="wolverine-thumb" href="https://youtu.be/' + encodeURIComponent(video.videoId) +
            '" target="_blank" rel="noopener">' +
            '<div class="video-container wolverine-thumb-frame">' +
              '<span class="wolverine-skeleton"></span>' +
              '<img alt="' + escapeHtml(video.title) + '" loading="lazy" ' +
                'style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;border-radius:0.6rem;opacity:0;transition:opacity .3s ease;">' +
              '<span class="wolverine-duration"></span>' +
              '<span class="wolverine-blocked" hidden>Blocked</span>' +
            '</div>' +
          '</a>' +
          '<h3 class="wolverine-title mt-3">' + escapeHtml(video.title) + '</h3>' +
          '<p class="wolverine-blocked-note" hidden></p>' +
          '<div class="wolverine-meta">' +
            '<span class="sw-home__label wolverine-date"></span>' +
            '<span class="sw-home__label wolverine-views"></span>' +
          '</div>' +
        '</div>';

      var img = col.querySelector("img");
      img.addEventListener("load", function () {
        img.style.opacity = "1";
        img.previousElementSibling.remove(); // skeleton
      });
      img.src = video.thumbnail;

      elsById[video.videoId] = {
        durationEl: col.querySelector(".wolverine-duration"),
        dateEl: col.querySelector(".wolverine-date"),
        viewsEl: col.querySelector(".wolverine-views"),
        cardEl: col.querySelector(".wolverine-card"),
        linkEl: col.querySelector(".wolverine-thumb"),
        badgeEl: col.querySelector(".wolverine-blocked"),
        noteEl: col.querySelector(".wolverine-blocked-note"),
        title: video.title
      };

      gridEl.appendChild(col);
    });

    loadDetails(videos, elsById);
  }

  function loadNextPage() {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = "Loading…";
    fetchPage(nextPageToken)
      .then(function (videos) {
        render(videos);
        loadMoreBtn.textContent = "Load more";
        loadMoreBtn.disabled = false;
        loadMoreBtn.style.display = nextPageToken ? "" : "none";
      })
      .catch(function (err) {
        showError(err);
        loadMoreBtn.style.display = "none";
      });
  }

  loadMoreBtn.addEventListener("click", loadNextPage);
  loadNextPage();
})();
</script>

<style>
  .sw-home__hero.wolverine-hero {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
  }
  /* The saying varies in length every load. Without these two rules the
     longest one grows the text column past the row and wraps the thumbnails
     onto a second line, so the hero changes height depending on which line
     came up. Let the copy shrink and wrap instead; the pics keep their size. */
  .wolverine-hero__copy {
    flex: 1 1 20rem;
    min-width: 0;
  }
  .wolverine-hero__pics {
    display: flex;
    gap: 0.75rem;
    flex: 0 0 auto;
  }
  .sw-home__pick-media.wolverine-hero__pic {
    width: 160px;
    aspect-ratio: 1;
    margin: 0;
    padding: 0;
    border-radius: 8px;
    background: none;
    border: 1px solid rgba(180, 197, 255, 0.15);
    transition: border-color .2s ease, transform .2s ease;
  }
  /* square crop taken off the top edge — these are all faces and claws, and
     centring the crop cut the heads off */
  .sw-home__pick-media.wolverine-hero__pic img {
    object-fit: cover;
    object-position: top center;
  }
  /* per-image override: a tall figure reads better cropped up from the feet */
  .sw-home__pick-media.wolverine-hero__pic--bottom img {
    object-position: bottom center;
  }
  .sw-home__pick-media.wolverine-hero__pic:hover,
  .sw-home__pick-media.wolverine-hero__pic:focus-visible {
    border-color: var(--sw-primary-container, #1e56d0);
    transform: translateY(-2px);
  }
  @media (max-width: 575px) {
    .wolverine-hero__pics { width: 100%; }
    .sw-home__pick-media.wolverine-hero__pic { flex: 1; width: auto; }
  }
  .wolverine-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-height: 40vh;
    margin: 1.5rem 0;
    text-align: center;
  }
  .wolverine-spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(180, 197, 255, 0.25);
    border-top-color: var(--sw-primary, #b4c5ff);
    border-radius: 50%;
    animation: wolverine-spin 0.8s linear infinite;
  }
  @keyframes wolverine-spin {
    to { transform: rotate(360deg); }
  }
  .wolverine-title {
    font-family: var(--sw-font-display, inherit);
    font-weight: 500;
    font-size: 20px;
    color: var(--sw-on-surface, inherit);
    margin: 0.75rem 0 0.25rem;
  }
  .wolverine-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
  }
  /* Glow lives on the <a>, not .video-container: that class is
     overflow:hidden + height:0 (padding-bottom 16:9 hack), which
     clips box-shadow — especially in Safari. */
  .wolverine-thumb {
    display: block;
    cursor: pointer;
    border-radius: 0.6rem;
    transition: box-shadow .25s ease;
  }
  .wolverine-thumb-frame {
    display: block;
    margin: 0;
    border-radius: 0.6rem;
  }
  .wolverine-thumb:hover,
  .wolverine-thumb:focus-visible {
    box-shadow: 0 0 10px 5px #1C57C9;
    position: relative;
    z-index: 1;
  }
  .wolverine-skeleton {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border-radius: 0.6rem;
    background: linear-gradient(90deg,
      rgba(180, 197, 255, 0.06) 25%,
      rgba(180, 197, 255, 0.14) 37%,
      rgba(180, 197, 255, 0.06) 63%);
    background-size: 400% 100%;
    animation: wolverine-shimmer 1.4s ease infinite;
  }
  @keyframes wolverine-shimmer {
    0% { background-position: 100% 50%; }
    100% { background-position: 0 50%; }
  }
  .wolverine-duration {
    position: absolute;
    bottom: 6px;
    right: 6px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    font-size: 0.75rem;
    font-family: var(--sw-font-mono, monospace);
    padding: 1px 5px;
    border-radius: 3px;
    pointer-events: none;
  }
  /* A blocked video still gets its card and its link — the point is that
     you can tell before clicking, not that it disappears. The thumbnail
     goes grey and dim so the row reads as dead at a glance, and the badge
     and note say why. Colour is not carrying the message on its own. */
  .wolverine-blocked {
    position: absolute;
    top: 6px;
    left: 6px;
    background: #B3261E;
    color: #fff;
    font-size: 0.7rem;
    font-family: var(--sw-font-mono, monospace);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 2px 6px;
    border-radius: 3px;
    pointer-events: none;
  }
  .wolverine-card.is-blocked .wolverine-thumb-frame img {
    filter: grayscale(1) brightness(0.45);
  }
  .wolverine-card.is-blocked .wolverine-title {
    color: rgba(180, 197, 255, 0.55);
  }
  /* the hover glow reads as "this works" — blocked cards get a flat red */
  .wolverine-card.is-blocked .wolverine-thumb:hover,
  .wolverine-card.is-blocked .wolverine-thumb:focus-visible {
    box-shadow: 0 0 10px 5px rgba(179, 38, 30, 0.75);
  }
  .wolverine-blocked-note {
    margin: 0 0 0.35rem;
    font-size: 0.8rem;
    color: #E79A94;
  }

  /* scoped to this page's own footer only — every Jekyll page is a
     separate static document, so this never touches other pages' footers */
  footer h5 {
    font-size: 1.1rem !important;
    font-family: 'Archivo', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif !important;
    font-weight: 500 !important;
    text-transform: lowercase;
  }
</style>

{% include lightbox.html %}
