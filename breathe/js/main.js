(() => {
  const root = document.querySelector("[data-pacer]");
  if (!root) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const svg = root.querySelector("[data-shape]");
  const ring = root.querySelector("[data-ring]");
  const fill = root.querySelector("[data-fill]");
  const circle = root.querySelector("[data-circle]");
  const circleFill = root.querySelector("[data-circle-fill]");
  const digits = root.querySelector("[data-digits]");
  const big = root.querySelector("[data-big]");
  const sub = root.querySelector("[data-sub]");
  const countEl = root.querySelector("[data-count]");
  const labelEl = root.querySelector("[data-label]");
  const metaEl = root.querySelector("[data-meta]");
  const tabs = [...root.querySelectorAll("[data-protocol]")];

  const SIDE = 4;
  const R = 88;
  const MIN = 0.48;
  const BOX = [
    { label: "Inhale", from: MIN, to: 1 },
    { label: "Hold", from: 1, to: 1 },
    { label: "Exhale", from: 1, to: MIN },
    { label: "Hold", from: MIN, to: MIN },
  ];
  const FIRE = [
    { label: "Breathe", from: MIN, to: 1 },
    { label: "Breathe", from: 1, to: MIN },
  ];

  let protocol = "box";
  let started = 0;
  let raf = 0;

  const polygonPoints = (n, cx, cy, r) => {
    const step = (Math.PI * 2) / n;
    const offset = -Math.PI / 2 - Math.PI / n;
    const pts = [];
    for (let i = 0; i < n; i++) {
      const a = offset + i * step;
      pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
    }
    return pts.join(" ");
  };

  const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  const lerp = (a, b, t) => a + (b - a) * t;
  const pad = (n) => String(n).padStart(2, "0");
  const clock = (s) => `${Math.floor(s / 60)}:${pad(s % 60)}`;

  const setPoly = (scale) => {
    fill.setAttribute("points", polygonPoints(SIDE, 100, 100, R * scale));
  };

  const setCircle = (scale) => {
    circleFill.setAttribute("r", String(R * scale));
  };

  const show = (mode) => {
    const isBox = mode === "box";
    const isFire = mode === "fire";
    const isDigits = mode === "co2" || mode === "breather";
    svg.hidden = !isBox;
    circle.hidden = !isFire;
    digits.hidden = !isDigits;
    countEl.hidden = isDigits || isFire;
  };

  const freeze = () => {
    const pts = polygonPoints(SIDE, 100, 100, R);
    ring.setAttribute("points", pts);
    setPoly(0.72);
    show("box");
    countEl.textContent = "4";
    countEl.classList.remove("is-hold");
    labelEl.textContent = "Inhale";
    metaEl.textContent = "4s · square";
  };

  const tickBoxFire = (now, phases, cycleMs, kind) => {
    const elapsed = (now - started) % (phases.length * cycleMs);
    const i = Math.floor(elapsed / cycleMs);
    const t = (elapsed % cycleMs) / cycleMs;
    const p = phases[i];
    const scale = lerp(p.from, p.to, p.from === p.to ? 0 : ease(t));
    if (kind === "box") setPoly(scale);
    else setCircle(scale);
    if (kind === "box") {
      countEl.textContent = String(Math.min(SIDE, Math.floor(t * SIDE) + 1));
      countEl.classList.toggle("is-hold", p.label === "Hold");
    }
    labelEl.textContent = p.label;
    metaEl.textContent = kind === "box" ? "4s · square" : "Breath of Fire · paced breaths";
  };

  const tickCo2 = (now) => {
    const rest = 90;
    const hold = 35;
    const total = rest + hold;
    const elapsed = Math.floor(((now - started) / 1000) % total);
    const inHold = elapsed >= rest;
    const remaining = inHold ? hold - (elapsed - rest) : rest - elapsed;
    big.textContent = clock(remaining);
    big.style.color = inHold ? "var(--hold)" : "";
    sub.textContent = "Round 3 of 8";
    labelEl.textContent = inHold ? "Hold" : "Breathe up";
    metaEl.textContent = inHold ? "35s target · 40–50% max" : "Untimed tidal rest, then a hold";
  };

  const tickBreather = (now) => {
    const every = 1200;
    const rep = 1 + Math.floor(((now - started) / every) % 30);
    big.textContent = `${rep} / 30`;
    big.style.color = "";
    sub.textContent = "5mm cap";
    labelEl.textContent = "Tap to log reps";
    metaEl.textContent = "Over 4.5 min, go lower · under 3 min, go higher";
  };

  const frame = (now) => {
    if (protocol === "box") tickBoxFire(now, BOX, SIDE * 1000, "box");
    else if (protocol === "fire") tickBoxFire(now, FIRE, 1600, "fire");
    else if (protocol === "co2") tickCo2(now);
    else tickBreather(now);
    raf = requestAnimationFrame(frame);
  };

  const select = (next) => {
    protocol = next;
    started = performance.now();
    tabs.forEach((btn) => {
      btn.setAttribute("aria-selected", String(btn.dataset.protocol === next));
    });
    show(next);
    countEl.classList.remove("is-hold");
    if (next === "box") {
      ring.setAttribute("points", polygonPoints(SIDE, 100, 100, R));
      setPoly(MIN);
    } else if (next === "fire") {
      setCircle(MIN);
    }
  };

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => select(btn.dataset.protocol));
  });

  if (reduce) {
    freeze();
    return;
  }

  select("box");
  raf = requestAnimationFrame(frame);
})();
