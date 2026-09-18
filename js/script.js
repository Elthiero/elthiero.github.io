const lines = [
  "$ pipeline status --watch",
  "[ingest]  kafka producer        connected   topic=transactions",
  "[stream]  spark structured streaming        running",
  "[model]   random_forest.pkl                 loaded",
  "[sink]    postgres (serving) + hdfs (lake)   writing",
  "[status]  healthy ✓",
];

const el = document.getElementById("terminalBody");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderStatic() {
  el.innerHTML = lines
    .map((l, i) => (i === lines.length - 1 ? `<span class="ok">${l}</span>` : l))
    .join("\n");
}

function typeLines() {
  let li = 0, ci = 0;
  const cursor = document.createElement("span");
  cursor.className = "terminal__cursor";

  function step() {
    if (li >= lines.length) {
      cursor.remove();
      return;
    }
    const line = lines[li];
    if (ci === 0 && li > 0) el.appendChild(document.createTextNode("\n"));

    if (ci <= line.length) {
      const partial = line.slice(0, ci);
      const isLast = li === lines.length - 1;
      const rendered = lines.slice(0, li).join("\n") +
        (li > 0 ? "\n" : "") +
        (isLast ? `<span class="ok">${partial}</span>` : partial);
      el.innerHTML = rendered;
      el.appendChild(cursor);
      ci++;
      setTimeout(step, li === 0 ? 28 : 10);
    } else {
      li++;
      ci = 0;
      setTimeout(step, 160);
    }
  }
  step();
}

if (el) {
  if (reduceMotion) {
    renderStatic();
  } else {
    typeLines();
  }
}
