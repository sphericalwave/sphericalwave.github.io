const START = 100;
const TICK_MS = 1400;

function initVigil(root) {
  const countEl = root.querySelector("[data-count]");
  const captionEl = root.querySelector("[data-caption]");
  const cancelBtn = root.querySelector("[data-cancel]");
  const beginBtn = root.querySelector("[data-begin]");
  if (!countEl) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let remaining = START;
  let timer = null;
  let doneHold = null;

  const render = () => {
    countEl.textContent = String(remaining);
  };

  const stop = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
    if (doneHold) window.clearTimeout(doneHold);
    doneHold = null;
  };

  const reset = () => {
    stop();
    remaining = START;
    captionEl.textContent = "A spoken countdown, then your scenes.";
    render();
    if (!reduce) start();
  };

  const finish = () => {
    stop();
    remaining = 0;
    render();
    captionEl.textContent = "The scenes begin.";
    doneHold = window.setTimeout(reset, 2200);
  };

  const tick = () => {
    remaining -= 1;
    if (remaining <= 0) {
      finish();
      return;
    }
    render();
  };

  const start = () => {
    stop();
    timer = window.setInterval(tick, TICK_MS);
  };

  cancelBtn?.addEventListener("click", reset);
  beginBtn?.addEventListener("click", finish);

  render();
  if (!reduce) start();
}

document.querySelectorAll("[data-vigil]").forEach(initVigil);
