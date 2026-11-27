"use strict";
// Display only. Update progress.json; move older records to history.json without dropping them.
const q = selector => document.querySelector(selector);
const e = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const lines = values => values.map(value => '<div class="item">' + e(value) + '</div>').join("");
async function readJSON(path) {
  const res = await fetch(path, {cache: "no-store"});
  if (!res.ok) throw new Error(path + ": " + res.status);
  return res.json();
}
function render(data, archive) {
  q("#date").textContent = data.date;
  q("#production-status").textContent = data.productionStatus;
  q("#production-subtitle").textContent = data.productionSubtitle;
  q("#new").innerHTML = data.newWords.map(x => '<div class="item"><div class="word">' + e(x[0]) + '</div><div>' + e(x[1]) + '</div><span class="pill">' + e(x[2]) + '</span></div>').join("");
  q("#carry").innerHTML = lines(data.carryover.map(x => x.join(" — ")));
  q("#queue").innerHTML = data.queue.map(x => '<div class="item"><strong>' + e(x[0]) + '</strong> — ' + e(x[1]) + '</div>').join("");
  q("#older").innerHTML = '<p class="muted">' + data.older.map(e).join(" · ") + '</p>';
  q("#grammar").innerHTML = lines(data.grammar);
  q("#ci-new").innerHTML = lines(data.ciNew);
  q("#ci-carry").innerHTML = lines(data.ciCarry);
  q("#ci-older").innerHTML = lines(data.ciOlder);
  q("#ci-progress").innerHTML = lines(data.listening);
  q("#history").innerHTML = lines(data.history.concat(archive));
}
async function start() {
  try {
    const data = await readJSON("progress.json");
    let archive = [];
    try { archive = await readJSON("history.json"); }
    catch (error) { console.error(error); }
    render(data, archive);
    if (!archive.length) q("#history").insertAdjacentHTML("beforeend", '<p class="muted">Older dashboard history could not be loaded.</p>');
  } catch (error) {
    console.error(error);
    q("#date").textContent = "Unable to load current snapshot. Refresh or consult the Living Tracker.";
  }
}
start();
