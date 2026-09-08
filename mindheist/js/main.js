const LINES = [
  {
    id: "follow",
    label: "Follow-through",
    body: "Why is follow-through starting to feel automatic?",
  },
  {
    id: "promises",
    label: "Promises",
    body: "How did I become someone who keeps the promises I make to myself?",
  },
  {
    id: "start",
    label: "Start",
    body: "Why is it getting easier to begin before I feel ready?",
  },
  {
    id: "decided",
    label: "Decided",
    body: "What would I do next if this were already decided?",
  },
  {
    id: "honest",
    label: "Next move",
    body: "Why do I already know the next honest move?",
  },
];

const CYCLE_MS = 7000;

function initLineDeck(root) {
  const tabs = Array.from(root.querySelectorAll("[data-line]"));
  const body = root.querySelector("[data-line-body]");
  const card = root.querySelector(".tone-card");
  if (!tabs.length || !body) return;

  let index = 0;
  let timer = null;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const show = (i) => {
    index = (i + LINES.length) % LINES.length;
    const line = LINES[index];
    body.textContent = line.body;
    tabs.forEach((tab, n) => {
      const on = n === index;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
    });
    if (card && !reduce) {
      card.classList.remove("is-running");
      void card.offsetWidth;
      card.classList.add("is-running");
    }
  };

  const start = () => {
    if (reduce) return;
    stop();
    timer = window.setInterval(() => show(index + 1), CYCLE_MS);
  };

  const stop = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      show(i);
      start();
    });
    tab.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        show(index + 1);
        tabs[index].focus();
        start();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        show(index - 1);
        tabs[index].focus();
        start();
      }
    });
  });

  show(0);
  start();
}

document.querySelectorAll("[data-line-deck]").forEach(initLineDeck);
