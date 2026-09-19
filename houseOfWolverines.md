---
layout: page
title: House of Wolverines
permalink: /houseOfWolverines
description: "House of Wolverines — training footage playlist."
---

<div class="sw-home">

  <section class="sw-home__hero wolverine-hero sw-enter">
    <div>
      <h1 class="sw-home__title">House of Wolverines</h1>
      <p class="sw-home__label mb-0">What happens in training, stays in training.</p>
    </div>
    <div class="wolverine-hero__pics" data-lightbox>
      <div class="sw-home__pick-media wolverine-hero__pic">
        <img src="/public/wolverines/comic.jpg" alt="Wolverine, comic art" loading="eager">
      </div>
      <div class="sw-home__pick-media wolverine-hero__pic">
        <img src="/public/wolverines/crouch.jpg" alt="A wolverine crouched low, teeth bared" loading="eager">
      </div>
      <div class="sw-home__pick-media wolverine-hero__pic">
        <img src="/public/wolverines/standing.jpg" alt="A wolverine standing up in a river, claws out" loading="eager">
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
        '<div class="h-100">' +
          '<a class="wolverine-thumb" href="https://youtu.be/' + encodeURIComponent(video.videoId) +
            '" target="_blank" rel="noopener">' +
            '<div class="video-container wolverine-thumb-frame">' +
              '<span class="wolverine-skeleton"></span>' +
              '<img alt="' + escapeHtml(video.title) + '" loading="lazy" ' +
                'style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;border-radius:0.6rem;opacity:0;transition:opacity .3s ease;">' +
              '<span class="wolverine-duration"></span>' +
            '</div>' +
          '</a>' +
          '<h3 class="wolverine-title mt-3">' + escapeHtml(video.title) + '</h3>' +
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
        viewsEl: col.querySelector(".wolverine-views")
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
  .wolverine-hero__pics {
    display: flex;
    gap: 0.75rem;
  }
  .sw-home__pick-media.wolverine-hero__pic {
    width: 112px;
    aspect-ratio: 1;
    margin: 0;
    padding: 0;
    border-radius: 8px;
    background: none;
    border: 1px solid rgba(180, 197, 255, 0.15);
    transition: border-color .2s ease, transform .2s ease;
  }
  .sw-home__pick-media.wolverine-hero__pic img { object-fit: cover; }
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
