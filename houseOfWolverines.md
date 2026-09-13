---
layout: page
title: House of Wolverines
permalink: /houseOfWolverines
description: "House of Wolverines — training footage playlist."
---

<div class="sw-home">

  <section class="sw-home__hero wolverine-hero sw-enter">
    <span class="sw-home__chip">
      <span class="sw-home__dot"></span>
      <span class="sw-home__label">Playlist</span>
    </span>
    <h1 class="sw-home__title">House of Wolverines</h1>
    <p class="sw-home__label mb-0">What happens in training, stays in training. Test that principle and lose access.</p>
  </section>

  <hr class="sw-home__wave-line">

  <div id="wolverines-status" class="wolverine-loading">
    <span class="wolverine-spinner" aria-hidden="true"></span>
    <span class="sw-home__label">Loading videos&hellip;</span>
  </div>

  <div id="wolverines-grid" class="row g-4 mb-4"></div>

</div>

<script>
(function () {
  var API_KEY = "AIzaSyCyVegZU6XgryJD8eNKTFx1EvwVl6e2vwE";
  var PLAYLIST_ID = "PLvxN4ywk7KIezoQOlpipw-xOc1bvlmQi2";
  var API_BASE = "https://www.googleapis.com/youtube/v3/playlistItems";
  var VIDEOS_API = "https://www.googleapis.com/youtube/v3/videos";

  var statusEl = document.getElementById("wolverines-status");
  var gridEl = document.getElementById("wolverines-grid");

  function fetchPage(pageToken, items) {
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
        var newItems = items.concat(
          (data.items || [])
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
            })
        );
        if (data.nextPageToken) {
          return fetchPage(data.nextPageToken, newItems);
        }
        return newItems;
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

  // Fetches video details (duration/date) in chunks of 50, patching each
  // card's placeholders in place as each chunk resolves — doesn't block
  // the initial thumbnail render.
  function loadDetails(videos, elsById) {
    var chunks = [];
    for (var i = 0; i < videos.length; i += 50) {
      chunks.push(videos.slice(i, i + 50).map(function (v) { return v.videoId; }));
    }

    chunks.forEach(function (ids) {
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
    });
  }

  function render(videos) {
    videos.sort(function (a, b) { return a.position - b.position; });

    if (videos.length === 0) {
      statusEl.textContent = "No videos found in this playlist.";
      return;
    }

    statusEl.remove();

    var elsById = {};

    videos.forEach(function (video) {
      var col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-lg-4";

      col.innerHTML =
        '<div class="h-100">' +
          '<a class="video-container wolverine-thumb" href="https://youtu.be/' + encodeURIComponent(video.videoId) +
            '" target="_blank" rel="noopener">' +
            '<span class="wolverine-skeleton"></span>' +
            '<img alt="' + escapeHtml(video.title) + '" loading="lazy" ' +
              'style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;border-radius:0.6rem;opacity:0;transition:opacity .3s ease;">' +
            '<span class="wolverine-duration"></span>' +
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

  fetchPage(null, [])
    .then(render)
    .catch(function (err) {
      statusEl.textContent = "Couldn't load the playlist: " + err.message;
    });
})();
</script>

<style>
  .sw-home__hero.wolverine-hero {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
  .wolverine-loading {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 1.5rem 0;
  }
  .wolverine-spinner {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(180, 197, 255, 0.25);
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
  .wolverine-thumb { cursor: pointer; display: block; }
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
  .wolverine-thumb {
    transition: box-shadow .25s ease;
  }
  .wolverine-thumb:hover,
  .wolverine-thumb:focus-visible {
    box-shadow: 0 0 0 2px var(--sw-primary, #b4c5ff), 0 0 24px rgba(30, 86, 208, 0.6);
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
</style>
