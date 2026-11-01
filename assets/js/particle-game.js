(() => {
  "use strict";
  const particleIds = {
    setup: "particle-setup",
    session: "particle-session",
    results: "particle-results"
  };
  const $ = (id) => document.getElementById(particleIds[id] || id);
  // Source unique : la banque commune utilisée également par le jeu de grammaire.
  const sharedBank = window.JAPONAIS_PHRASE_BANK || [];
  const splitOnParticles = (text, particleOrder, romanized = false, compactJapanese = false) => {
    const parts = []; let cursor = 0; const holes = [];
    const occurrences = [];
    const roman = { "は": "wa", "が": "ga", "を": "o", "の": "no", "か": "ka", "に": "ni", "と": "to", "で": "de" };
    for (const particle of particleOrder) {
      const marker = romanized ? roman[particle] : particle;
      if (!marker) continue;
      let from = 0;
      while ((from = text.indexOf(marker, from)) !== -1) {
        const isQuestionKa = particle === "か";
        const tail = text.slice(from + marker.length);
        const isActionDe = particle === "で";
        const validDeBoundary = !isActionDe || (romanized
          ? /^\s/u.test(tail) && /\s$/u.test(text.slice(0, from))
          : compactJapanese || /^\s/u.test(tail));
        if ((!isQuestionKa || /^[。！？.!?]?$/u.test(tail)) && validDeBoundary) occurrences.push({ index: from, particle, marker });
        from += marker.length;
      }
    }
    occurrences.sort((a, b) => a.index - b.index);
    for (const occurrence of occurrences) {
      if (occurrence.index < cursor) continue;
      parts.push(text.slice(cursor, occurrence.index)); parts.push(null); holes.push(occurrence.particle); cursor = occurrence.index + occurrence.marker.length;
    }
    parts.push(text.slice(cursor));
    return { parts, answers: holes };
  };
  const fromSharedBank = sharedBank.map((item) => {
    const allowed = ["は", "が", "を", "の", "か", "に", "と", "で"];
    // Les particules sont extraites de la phrase japonaise : aucune métadonnée
    // parallèle (particles/conceptCourse/vocabularyCourse) n'est nécessaire.
    const particleOrder = allowed.filter((particle) => particle === "で" ? /で\s/u.test(String(item.kana || "")) : String(item.kana || "").includes(particle));
    const kana = splitOnParticles(item.kana || "", particleOrder);
    const kanji = splitOnParticles(item.kanji || item.kana || "", particleOrder, false, true);
    const romaji = splitOnParticles(item.romaji || "", particleOrder, true);
    const aligned = kana.answers.length > 0 && kana.answers.length === kanji.answers.length &&
      kana.answers.length === romaji.answers.length && kana.parts.length === kanji.parts.length &&
      kana.parts.length === romaji.parts.length;
    if (!aligned) return null;
    return {
      id: item.id, course: item.course, fr: item.fr,
      parts: kana.parts, kana: kana.parts, kanji: kanji.parts, romaji: romaji.parts,
      answers: kana.answers, options: [...new Set([...kana.answers, ...allowed])],
    };
  }).filter(Boolean);

  let queue = [], index = 0, score = 0, selectedChip = null, results = [], current = null, resolved = false;
  let autoAdvanceTimer = null;
  const shuffle = (items) => [...items].sort(() => Math.random() - .5);
  const mode = () => $("script-mode").value;
  const displayParts = (item) => item[mode()];
  const filled = new Map();
  const used = new Set();

  function start(source) {
    const course = $("course-filter").value;
    const bankSource = source || fromSharedBank;
    const filtered = bankSource.filter((item) => course === "all" || String(item.course) === course);
    if (!filtered.length) { $("setup-status").textContent = "Aucune phrase exploitable de la banque commune pour ce cours. Vérifie que les phrases contiennent une particule travaillée."; return; }
    const count = $("question-count").value;
    queue = shuffle(filtered).slice(0, count === "all" ? filtered.length : Number(count));
    index = 0; score = 0; results = [];
    window.JAPONAIS_GAME_TIMER?.start();
    $("setup").hidden = true; $("results").hidden = true; $("session").hidden = false;
    renderQuestion();
  }

  function renderQuestion() {
    clearTimeout(autoAdvanceTimer);
    current = queue[index]; filled.clear(); used.clear(); selectedChip = null; resolved = false;
    $("question-counter").textContent = `Phrase ${index + 1} / ${queue.length}`;
    $("score-counter").textContent = `${score} bonne${score > 1 ? "s" : ""} réponse${score > 1 ? "s" : ""}`;
    $("progress-fill").style.width = `${(index / queue.length) * 100}%`;
    $("course-label").textContent = `Cours ${current.course}`;
    $("translation").textContent = current.fr;
    $("feedback").textContent = ""; $("feedback").className = "particle-feedback";
    $("next-question").hidden = true; $("check-answer").hidden = true;
    const sentence = $("sentence"); sentence.replaceChildren();
    let slotIndex = 0;
    current.parts.forEach((part, partPosition) => {
      if (part === null) {
        const slot = document.createElement("button");
        slot.type = "button"; slot.className = "particle-slot"; slot.textContent = "?";
        slot.dataset.slot = String(slotIndex++); slot.setAttribute("aria-label", `Emplacement ${slotIndex}, particule manquante`);
        slot.addEventListener("dragover", (event) => { if (!resolved) { event.preventDefault(); slot.classList.add("is-over"); } });
        slot.addEventListener("dragleave", () => slot.classList.remove("is-over"));
        slot.addEventListener("drop", (event) => { event.preventDefault(); slot.classList.remove("is-over"); placeChip(event.dataTransfer.getData("text/plain"), Number(slot.dataset.slot)); });
        slot.addEventListener("click", () => { if (selectedChip) placeChip(selectedChip, Number(slot.dataset.slot)); else if (filled.has(Number(slot.dataset.slot))) returnChip(Number(slot.dataset.slot)); });
        sentence.append(slot);
      } else {
        const span = document.createElement("span");
        // Les tableaux kana/kanji/romaji suivent exactement les positions des segments.
        let textValue = part;
        if (mode() === "kanji") textValue = current.kanji[partPosition] ?? part;
        if (mode() === "romaji") textValue = current.romaji[partPosition] ?? part;
        if (mode() === "kana") textValue = current.kana[partPosition] ?? part;
        span.textContent = textValue; sentence.append(span);
      }
    });
    // Remplace les segments de texte par leur variante demandée sans toucher aux trous.
    const bank = $("particle-bank"); bank.replaceChildren();
    shuffle(current.options.map((value, chipIndex) => ({ value, id: `chip-${chipIndex}` }))).forEach((chip) => {
      const button = document.createElement("button"); button.type = "button"; button.className = "particle-chip";
      button.textContent = chip.value; button.draggable = true; button.dataset.chip = chip.id; button.dataset.value = chip.value;
      button.setAttribute("aria-label", `Particule ${chip.value}`);
      button.addEventListener("dragstart", (event) => { event.dataTransfer.setData("text/plain", chip.id); event.dataTransfer.effectAllowed = "move"; });
      button.addEventListener("click", () => { if (used.has(chip.id)) return; if (selectedChip === chip.id) { selectedChip = null; button.classList.remove("selected"); } else { bank.querySelectorAll(".selected").forEach((el) => el.classList.remove("selected")); selectedChip = chip.id; button.classList.add("selected"); } });
      button.addEventListener("dblclick", () => {
        if (used.has(chip.id) || resolved) return;
        const firstFree = Array.from({ length: current.answers.length }, (_, slot) => slot).find((slot) => !filled.has(slot));
        if (firstFree !== undefined) placeChip(chip.id, firstFree);
      });
      bank.append(button);
    });
  }

  function chipElement(id) { return $("particle-bank").querySelector(`[data-chip="${CSS.escape(id)}"]`); }
  function placeChip(chipId, slotIndex) {
    const chip = chipElement(chipId); if (!chip || used.has(chipId) || resolved) return;
    if (filled.has(slotIndex)) returnChip(slotIndex);
    filled.set(slotIndex, { id: chipId, value: chip.dataset.value }); used.add(chipId); selectedChip = null;
    chip.classList.add("used"); chip.classList.remove("selected"); chip.setAttribute("aria-pressed", "true");
    const slot = $("sentence").querySelector(`[data-slot="${slotIndex}"]`); slot.textContent = chip.dataset.value; slot.classList.add("filled");
    if (filled.size === current.answers.length) check();
  }
  function returnChip(slotIndex) {
    const previous = filled.get(slotIndex); if (!previous) return;
    used.delete(previous.id); const chip = chipElement(previous.id); if (chip) { chip.classList.remove("used"); chip.removeAttribute("aria-pressed"); }
    filled.delete(slotIndex); const slot = $("sentence").querySelector(`[data-slot="${slotIndex}"]`); slot.textContent = "?"; slot.classList.remove("filled","correct","incorrect");
  }
  function reset() { [...filled.keys()].forEach(returnChip); $("feedback").textContent = ""; $("feedback").className = "particle-feedback"; }
  function check() {
    const total = current.answers.length;
    if (filled.size !== total) { $("feedback").textContent = `Il reste ${total - filled.size} emplacement(s) à compléter.`; $("feedback").className = "particle-feedback error"; return; }
    let correct = true;
    current.answers.forEach((answer, slotIndex) => {
      const slot = $("sentence").querySelector(`[data-slot="${slotIndex}"]`);
      const ok = filled.get(slotIndex)?.value === answer; slot.classList.add(ok ? "correct" : "incorrect"); if (!ok) correct = false;
    });
    $("feedback").className = `particle-feedback ${correct ? "success" : "error"}`;
    if (correct) {
      resolved = true;
      score++;
      results.push({ item: current, correct: true, given: current.answers.map((_, i) => filled.get(i)?.value || "—") });
      $("feedback").textContent = "Bravo ! Toutes les particules sont bien placées.";
      $("check-answer").hidden = true;
      $("next-question").hidden = false;
      $("particle-bank").querySelectorAll(".particle-chip").forEach((chip) => chip.draggable = false);
      $("score-counter").textContent = `${score} bonne${score > 1 ? "s" : ""} réponse${score > 1 ? "s" : ""}`;
      clearTimeout(autoAdvanceTimer);
      autoAdvanceTimer = setTimeout(() => {
        if (current === queue[index] && index < queue.length) next();
      }, 4000);
    } else {
      $("feedback").textContent = "Pas tout à fait. Modifie les particules puis réessaie.";
      $("check-answer").hidden = true;
      $("next-question").hidden = true;
    }
  }
  function next() { clearTimeout(autoAdvanceTimer); index++; if (index >= queue.length) finish(); else renderQuestion(); }
  function finish() {
    $("session").hidden = true; $("results").hidden = false;
    const elapsed = window.JAPONAIS_GAME_TIMER?.stop() || "0 s";
    $("result-summary").textContent = `${score} / ${queue.length} phrases entièrement correctes (${Math.round(score / queue.length * 100)} %) · Durée : ${elapsed}.`;
    const list = $("result-list"); list.replaceChildren();
    results.forEach((result) => { const row = document.createElement("div"); row.className = "particle-result-item"; const title = document.createElement("strong"); title.textContent = result.item.fr; const answer = document.createElement("span"); answer.className = result.correct ? "good" : "bad"; answer.textContent = `${result.correct ? "✓" : "✗"} ${result.item.answers.join(" · ")}`; row.append(title, answer); list.append(row); });
    $("replay-errors").hidden = !results.some((r) => !r.correct);
  }
  $("start-particles").addEventListener("click", () => start());
  $("reset-answer").addEventListener("click", reset);
  $("skip-question").addEventListener("click", () => { results.push({item:current,correct:false,given:current.answers.map((_, i) => filled.get(i)?.value || "—")}); next(); });
  $("next-question").addEventListener("click", next);
  $("restart-all").addEventListener("click", () => { $("results").hidden = true; $("setup").hidden = false; });
  $("replay-errors").addEventListener("click", () => { const misses = results.filter((r) => !r.correct).map((r) => r.item); start(misses); });
  $("script-mode").addEventListener("change", () => { if (!$("session").hidden) renderQuestion(); });
})();
