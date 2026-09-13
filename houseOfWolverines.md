---
layout: page
title: House of Wolverines
permalink: /houseOfWolverines
description: "House of Wolverines — training footage playlist."
---

<div class="sw-home">

  <section class="sw-home__hero sw-enter">
    <span class="sw-home__chip">
      <span class="sw-home__dot"></span>
      <span class="sw-home__label">Playlist</span>
    </span>
    <h1 class="sw-home__title">House of Wolverines</h1>
    <p class="sw-home__lead">Unlisted training footage, pulled live from YouTube.</p>
  </section>

  <hr class="sw-home__wave-line">

  <p id="wolverines-status" class="sw-home__label">Loading videos&hellip;</p>

  <div id="wolverines-grid" class="row g-4 mb-4"></div>

</div>

<script>
(function () {
  var API_KEY = "AIzaSyCyVegZU6XgryJD8eNKTFx1EvwVl6e2vwE";
  var PLAYLIST_ID = "PLvxN4ywk7KIezoQOlpipw-xOc1bvlmQi2";
  var API_BASE = "https://www.googleapis.com/youtube/v3/playlistItems";

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

  function render(videos) {
    videos.sort(function (a, b) { return a.position - b.position; });

    if (videos.length === 0) {
      statusEl.textContent = "No videos found in this playlist.";
      return;
    }

    statusEl.remove();

    videos.forEach(function (video) {
      var col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-lg-4";

      col.innerHTML =
        '<div class="sw-home__glass sw-home__card h-100">' +
          '<div class="video-container wolverine-thumb" data-video-id="' + escapeHtml(video.videoId) + '">' +
            '<img src="' + escapeHtml(video.thumbnail) + '" alt="' + escapeHtml(video.title) + '" loading="lazy" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;border-radius:0.6rem;">' +
            '<span class="wolverine-play" aria-hidden="true">&#9658;</span>' +
          '</div>' +
          '<h3 class="mt-3">' + escapeHtml(video.title) + '</h3>' +
        '</div>';

      gridEl.appendChild(col);
    });

    gridEl.addEventListener("click", function (e) {
      var thumb = e.target.closest(".wolverine-thumb");
      if (!thumb || thumb.querySelector("iframe")) return;
      var videoId = thumb.getAttribute("data-video-id");
      thumb.innerHTML = '<iframe src="https://www.youtube.com/embed/' + encodeURIComponent(videoId) +
        '?autoplay=1" title="YouTube video player" frameborder="0" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
        'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    });
  }

  fetchPage(null, [])
    .then(render)
    .catch(function (err) {
      statusEl.textContent = "Couldn't load the playlist: " + err.message;
    });
})();
</script>

<style>
  .wolverine-thumb { cursor: pointer; }
  .wolverine-play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
    pointer-events: none;
  }
</style>
