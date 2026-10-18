/* Jeu de vocabulaire : les données sont chargées depuis vocabulary-data.js et viennent des glossaires. */
(() => {
  "use strict";
  const data = window.JAPONAIS_VOCABULARY;
  const courseCatalog = window.JAPONAIS_COURSES;
  const coursePickerApi = window.JAPONAIS_COURSE_PICKER;
  if (!data) return;

  const $ = (id) => document.getElementById(id);
  const coursePicker = coursePickerApi?.mount("vocabularyCoursePicker", { title: "Cours à réviser", queryParam: "courses" });
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get("cat");
  if (["adj", "noms", "verbes"].includes(categoryParam)) {
    document.querySelectorAll(".category-check").forEach((input) => {
      input.checked = input.value === categoryParam;
    });
  }

  let sessionDeck = [];
  let currentIndex = 0;
  let outcomes = new Map();
  let selection = new Set();
  let direction = "ja-fr";
  let difficulty = "easy";
  let completedFirstTry = 0;
  let answered = false;
  let availablePool = [];
  let activeOptions = [];
  let selectedChoices = new Set();
  let activeMultiSelect = false;
  let choiceArea;
  let distractorUsage = new Map();
  let progressSaved = false;

  const labelForDifficulty = { easy: "romaji", medium: "kana", hard: "kanji" };
  const categoryLabels = { adj: "Adjectif", noms: "Nom", verbes: "Verbe" };
  const isKanji = (entry) => /[\u3400-\u4DBF\u4E00-\u9FFF々]/u.test(entry.kanji || "");

  function normalize(value) {
    return String(value ?? "")
      .normalize("NFKC")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("fr")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim()
      .replace(/\s+/g, " ");
  }

  function parentheticalVariants(value) {
    const values = [value];
    const main = value.replace(/\s*\([^)]*\)/g, "").trim();
    if (main && main !== value) values.push(main);
    const matches = value.matchAll(/\(([^)]+)\)/g);
    for (const match of matches) values.push(match[1].trim());
    return [...new Set(values.filter(Boolean))];
  }

  function frenchAnswers(entry) {
    return [...new Set(entry.signification.flatMap(parentheticalVariants).map(normalize).filter(Boolean))];
  }

  function romajiAnswers(entry) {
    const variants = parentheticalVariants(entry.romaji).map(normalize).filter(Boolean);
    return [...new Set(variants.flatMap((value) => [value, value.replace(/\s+/g, "")]))];
  }

  function japaneseForm(entry) {
    if (difficulty === "easy") return entry.romaji.split(" (")[0].trim();
    if (difficulty === "medium") return entry.kana;
    return entry.kanji;
  }

  function answerAliases(entry) {
    if (direction === "ja-fr") return frenchAnswers(entry);
    if (difficulty === "easy") return romajiAnswers(entry);
    if (difficulty === "medium") return [normalize(entry.kana)];
    return [normalize(entry.kanji)];
  }

  function displayPrompt(entry) {
    if (direction === "ja-fr") return japaneseForm(entry);
    return entry.signification.join(" / ");
  }

  const entriesForQuestion = (question) => question.quizEntries || [question];
  const categoryKey = (entry) => entry.categorie === "adjectifs" ? "adj" : entry.categorie;
  const categoryType = (entry) => {
    if (categoryKey(entry) === "noms" && entry.signification.some((meaning) => /\(nombre\)/i.test(meaning))) return "nombre";
    if (categoryKey(entry) === "noms" && entry.signification.some((meaning) => /unité numérique/i.test(meaning))) return "unité numérique";
    return ({ adj: "adjectif", noms: "nom", verbes: "verbe" })[categoryKey(entry)] || "mot";
  };

  function createChoiceArea() {
    if (choiceArea) return choiceArea;
    choiceArea = document.createElement("div");
    choiceArea.id = "choiceArea";
    choiceArea.className = "vocab-choices";
    choiceArea.setAttribute("aria-label", "Propositions de réponse");
    $("answerForm").insertBefore(choiceArea, $("feedback"));
    return choiceArea;
  }

  function promptKey(entry) {
    return normalize(japaneseForm(entry));
  }

  function groupJapanesePrompts(items) {
    const groups = new Map();
    for (const item of items) {
      const key = promptKey(item);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    }
    return [...groups.entries()].map(([key, entries]) => ({
      ...entries[0],
      id: entries.length > 1 ? `homophone:${difficulty}:${key}` : entries[0].id,
      quizEntries: entries,
      isAmbiguous: entries.length > 1
    }));
  }

  function meaningText(entry) {
    return entry.signification
      .map((meaning) => meaning.replace(/\s*\((?:couleur|nombre|unité numérique)\)/i, "").trim())
      .filter(Boolean)
      .join(" / ");
  }

  function frenchChoiceLabel(entry) {
    return `${meaningText(entry)} (${categoryType(entry)})`;
  }

  const colorNames = ["rouge", "bleu", "jaune", "marron", "noir", "blanc", "vert", "orange", "rose", "gris", "violet"];
  function colorKey(entry) {
    const meaning = normalize(entry.signification.join(" "));
    return colorNames.find((color) => new RegExp(`\\b${color}\\b`, "u").test(meaning)) || "";
  }

  function semanticFamily(entry) {
    const text = normalize(entry.signification.join(" "));
    if (/\b(frere|soeur|pere|mere|fils|fille|parent|famille)\b/u.test(text)) return "famille";
    if (/\b(chat|chien|poisson|anguille|animal)\b/u.test(text)) return "animaux";
    if (/\b(eau|lait|viande|pomme|ramen|sushi|legume|boulette|jus|cafe)\b/u.test(text)) return "aliments";
    return "";
  }

  function overlapScore(left, right) {
    const a = new Set(normalize(left.signification.join(" ")).split(" ").filter((word) => word.length > 2));
    const b = new Set(normalize(right.signification.join(" ")).split(" ").filter((word) => word.length > 2));
    let common = 0;
    for (const word of a) if (b.has(word)) common += 1;
    return common;
  }

  function distractorScore(target, candidate, mode) {
    if (target.id === candidate.id) return -Infinity;
    const targetColor = colorKey(target);
    const candidateColor = colorKey(candidate);
    const sameType = categoryKey(target) === categoryKey(candidate);
    if (targetColor && candidateColor) {
      if (targetColor === candidateColor) return sameType ? 130 : 140;
      const distance = Math.abs(colorNames.indexOf(targetColor) - colorNames.indexOf(candidateColor));
      return 120 - distance * 10 + (sameType ? 1 : 0);
    }
    const targetFamily = semanticFamily(target);
    const candidateFamily = semanticFamily(candidate);
    if (targetFamily && targetFamily === candidateFamily) return 130 + (sameType ? 10 : 0);
    const sharedWords = overlapScore(target, candidate);
    return sharedWords * 20 + (sameType ? 12 : 0) + (mode === "fr-ja" && candidateColor ? 0 : 1);
  }

  function uniqueOptions(options) {
    const merged = new Map();
    for (const option of options) {
      const key = normalize(option.label);
      if (!key) continue;
      const previous = merged.get(key);
      if (previous) {
        previous.correct = previous.correct || option.correct;
        previous.entries = [...new Set([...previous.entries, ...option.entries])];
      } else {
        merged.set(key, { ...option, key: `${option.kind}:${key}` });
      }
    }
    return [...merged.values()];
  }

  function makeFrenchOptions(question) {
    const targets = entriesForQuestion(question);
    const correctIds = new Set(targets.map((entry) => entry.id));
    const targetOptions = targets.map((entry) => ({
      label: frenchChoiceLabel(entry),
      correct: true,
      kind: "fr",
      entries: [entry]
    }));
    let options = uniqueOptions(targetOptions);
    const ranked = availablePool
      .filter((entry) => !correctIds.has(entry.id))
      .map((entry) => ({ entry, score: distractorScore(targets[0], entry, "ja-fr") - (distractorUsage.get(entry.id) || 0) * 18 + Math.random() * 5 }))
      .sort((a, b) => b.score - a.score);
    // Garde des choix proches, mais pioche aléatoirement dans un éventail plus large :
    // les mêmes mots (par exemple jouzu) ne reviennent pas systématiquement ensemble.
    const shortlist = ranked.slice(0, Math.min(14, ranked.length)).map((item) => item.entry);
    const candidates = [...shuffle(shortlist), ...ranked.slice(shortlist.length).map((item) => item.entry)];
    for (const entry of candidates) {
      if (options.length >= 4) break;
      options = uniqueOptions([...options, {
        label: frenchChoiceLabel(entry),
        correct: false,
        kind: "fr",
        entries: [entry]
      }]);
    }
    return shuffle(options).slice(0, 4);
  }

  function makeJapaneseOptions(question) {
    const correctEntry = question;
    const correctForm = japaneseForm(correctEntry);
    const options = uniqueOptions([{
      label: correctForm,
      correct: true,
      kind: "jp",
      entries: [correctEntry]
    }]);
    const ranked = availablePool
      .filter((entry) => entry.id !== correctEntry.id)
      .map((entry) => ({ entry, score: distractorScore(correctEntry, entry, "fr-ja") - (distractorUsage.get(entry.id) || 0) * 18 + Math.random() * 5 }))
      .sort((a, b) => b.score - a.score);
    const shortlist = ranked.slice(0, Math.min(14, ranked.length)).map((item) => item.entry);
    const candidates = [...shuffle(shortlist), ...ranked.slice(shortlist.length).map((item) => item.entry)];
    for (const entry of candidates) {
      if (options.length >= 4) break;
      const label = japaneseForm(entry);
      if (options.some((option) => normalize(option.label) === normalize(label))) continue;
      options.push({ key: `jp:${normalize(label)}`, label, correct: false, kind: "jp", entries: [entry] });
    }
    return shuffle(options).slice(0, 4);
  }

  function renderChoiceOptions(question) {
    activeOptions = direction === "ja-fr" ? makeFrenchOptions(question) : makeJapaneseOptions(question);
    for (const option of activeOptions) {
      if (option.correct) continue;
      for (const entry of option.entries || []) {
        distractorUsage.set(entry.id, (distractorUsage.get(entry.id) || 0) + 1);
      }
    }
    selectedChoices = new Set();
    activeMultiSelect = direction === "ja-fr" && activeOptions.filter((option) => option.correct).length > 1;
    const container = createChoiceArea();
    container.replaceChildren();
    container.classList.toggle("is-multiselect", activeMultiSelect);
    $("answerHelp").textContent = activeMultiSelect
      ? "Plusieurs sens correspondent à cette écriture. Sélectionne toutes les bonnes réponses, puis valide."
      : "Choisis la proposition qui correspond au glossaire, puis valide.";
    for (const option of activeOptions) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "vocab-choice";
      button.textContent = option.label;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => {
        if (answered) return;
        if (activeMultiSelect) {
          if (selectedChoices.has(option.key)) selectedChoices.delete(option.key);
          else selectedChoices.add(option.key);
        } else {
          selectedChoices = new Set([option.key]);
        }
        for (const choice of container.querySelectorAll("button")) {
          const selected = selectedChoices.has(choice.dataset.choiceKey);
          choice.classList.toggle("is-selected", selected);
          choice.classList.remove("is-wrong");
          choice.setAttribute("aria-pressed", String(selected));
        }
      });
      button.dataset.choiceKey = option.key;
      container.appendChild(button);
    }
  }

  function availableItems() {
    const selectedCategories = [...document.querySelectorAll(".category-check:checked")].map((node) => node.value);
    let items = selectedCategories.flatMap((category) => (data[category] || []));
    const courseSelection = coursePicker?.getSelection() || { all: true, ids: [] };
    if (courseCatalog) items = items.filter((item) => courseCatalog.selectionAllowsVocabulary([item.id], courseSelection));
    // On the hard level, only quiz words whose taught glossary spelling actually contains kanji.
    if (difficulty === "hard") items = items.filter(isKanji);
    // A word listed twice with the exact same spelling/reading/meaning is only asked once.
    const unique = new Map();
    for (const item of items) {
      const key = [item.kanji, item.kana, item.romaji, item.signification.join(" / ")].join("|" );
      if (!unique.has(key)) unique.set(key, item);
    }
    return [...unique.values()];
  }

  function shuffle(items) {
    const out = [...items];
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  function startFromSettings() {
    direction = document.querySelector('input[name="direction"]:checked').value;
    difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    const hasSelectedCategory = document.querySelectorAll(".category-check:checked").length > 0;
    if (!hasSelectedCategory) {
      $("setupMessage").textContent = "Sélectionne au moins un glossaire pour commencer.";
      return;
    }
    const items = availableItems();
    if (!items.length) {
      const courseSelection = coursePicker?.getSelection() || { all: true, ids: [] };
      $("setupMessage").textContent = !courseSelection.all && courseSelection.ids.length
        ? "Aucun mot n’est associé aux cours choisis dans les glossaires sélectionnés. Choisis d’autres cours ou rétablis « Tous les cours »."
        : difficulty === "hard"
          ? "Aucun mot avec kanji n’est disponible dans les glossaires sélectionnés. Choisis un autre glossaire ou un autre niveau."
          : "Aucun mot disponible dans cette sélection.";
      return;
    }
    $("setupMessage").textContent = "";
    availablePool = items;
    const questionPool = direction === "ja-fr" ? groupJapanesePrompts(items) : items;
    const quantity = $("questionCount").value;
    const pool = shuffle(questionPool);
    startSession(quantity === "all" ? pool : pool.slice(0, Number(quantity)));
  }

  function startSession(items) {
    if (!items.length) return;
    sessionDeck = shuffle(items);
    progressSaved = false;
    distractorUsage = new Map();
    currentIndex = 0;
    completedFirstTry = 0;
    answered = false;
    outcomes = new Map(sessionDeck.map((item) => [item.id, {
      item, tries: 0, gotIt: false, firstTry: false, failed: false, skipped: false, index: 0
    }]));
    selection = new Set();
    $("setup").style.display = "none";
    const progressPanel = $("progressPanel");
    if (progressPanel) progressPanel.hidden = true;
    $("results").style.display = "none";
    $("game").style.display = "block";
    renderCurrent();
    $("game").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderCurrent() {
    if (currentIndex >= sessionDeck.length) return finishSession();
    const entry = sessionDeck[currentIndex];
    const record = outcomes.get(entry.id);
    answered = false;
    activeOptions = [];
    selectedChoices = new Set();
    activeMultiSelect = false;
    $("progressText").textContent = `Mot ${currentIndex + 1} / ${sessionDeck.length}`;
    $("scoreText").textContent = `${completedFirstTry} réussite(s) au premier essai`;
    $("progressBar").style.width = `${(currentIndex / sessionDeck.length) * 100}%`;
    const entries = entriesForQuestion(entry);
    const categoryLabel = [...new Set(entries.map((item) => categoryLabels[categoryKey(item)] || "Mot"))].join(" / ");
    $("promptMeta").textContent = `${categoryLabel} · ${direction === "ja-fr" ? `Japonais → français · mot affiché en ${labelForDifficulty[difficulty]}` : `Français → japonais · réponse en ${labelForDifficulty[difficulty]}`}`;
    const prompt = $("promptText");
    prompt.textContent = displayPrompt(entry);
    prompt.classList.toggle("is-translation", direction === "fr-ja");
    const answerWrap = document.querySelector(".vocab-answer-wrap");
    if (answerWrap) answerWrap.style.display = "none";
    $("answerInput").required = false;
    $("answerInput").disabled = true;
    $("submitButton").textContent = "Valider";
    $("submitButton").disabled = false;
    $("submitButton").hidden = false;
    $("nextButton").hidden = true;
    $("skipButton").hidden = false;
    $("feedback").textContent = "";
    $("feedback").className = "vocab-message";
    createChoiceArea().hidden = false;
    renderChoiceOptions(entry);
    record.index = currentIndex;
  }

  function submitAnswer(event) {
    event.preventDefault();
    if (answered || currentIndex >= sessionDeck.length) return;
    if (!selectedChoices.size) {
      $("feedback").textContent = "Sélectionne une réponse avant de valider.";
      $("feedback").className = "vocab-message bad";
      return;
    }
    const entry = sessionDeck[currentIndex];
    const record = outcomes.get(entry.id);
    record.tries += 1;
    const expected = new Set(activeOptions.filter((option) => option.correct).map((option) => option.key));
    const correct = selectedChoices.size === expected.size && [...selectedChoices].every((key) => expected.has(key));
    if (correct) {
      record.gotIt = true;
      record.firstTry = record.tries === 1;
      if (record.firstTry) completedFirstTry += 1;
      answered = true;
      $("feedback").textContent = record.firstTry
        ? "Très bien ! Bonne réponse du premier coup."
        : "Bonne réponse ! Ce mot sera gardé dans la liste de révision car il a demandé plusieurs tentatives.";
      $("feedback").className = "vocab-message good";
      const container = createChoiceArea();
      for (const button of container.querySelectorAll("button")) {
        button.disabled = true;
        const option = activeOptions.find((item) => item.key === button.dataset.choiceKey);
        if (option && option.correct) button.classList.add("is-correct");
      }
      $("submitButton").hidden = true;
      $("skipButton").hidden = true;
      $("nextButton").hidden = false;
      $("scoreText").textContent = `${completedFirstTry} réussite(s) au premier essai`;
      $("nextButton").focus({ preventScroll: true });
    } else {
      record.failed = true;
      $("feedback").textContent = activeMultiSelect
        ? "Pas tout à fait. Il faut sélectionner tous les sens attendus, sans en ajouter d’autre. Modifie ta sélection puis valide à nouveau."
        : "Pas tout à fait. Essaie une autre proposition, puis valide à nouveau.";
      $("feedback").className = "vocab-message bad";
      if (!activeMultiSelect) {
        createChoiceArea().querySelectorAll("button").forEach((button) => {
          if (selectedChoices.has(button.dataset.choiceKey)) button.classList.add("is-wrong");
        });
      }
    }
  }

  function skipCurrent() {
    if (currentIndex >= sessionDeck.length) return;
    const entry = sessionDeck[currentIndex];
    const record = outcomes.get(entry.id);
    record.skipped = true;
    record.failed = true;
    currentIndex += 1;
    renderCurrent();
  }

  function isNeedsReview(record) {
    return record.failed || record.skipped || !record.gotIt || record.tries > 1;
  }

  function statusLabel(record) {
    if (record.skipped) return "Passé / à revoir";
    if (!record.gotIt) return "Non réussi";
    if (record.tries > 1) return `Réussi après ${record.tries} tentatives`;
    return "Réussi au 1er essai";
  }


  function renderResults() {
    const mode = $("resultSort").value;
    const entries = [...outcomes.values()];
    for (const record of entries) {
      record.needsReview = isNeedsReview(record);
    }
    if (mode === "errors") entries.sort((a,b) => Number(b.needsReview)-Number(a.needsReview) || b.tries-a.tries || a.index-b.index);
    else if (mode === "attempts") entries.sort((a,b) => b.tries-a.tries || Number(b.needsReview)-Number(a.needsReview) || a.index-b.index);
    else if (mode === "success") entries.sort((a,b) => Number(a.needsReview)-Number(b.needsReview) || a.tries-b.tries || a.index-b.index);
    else entries.sort((a,b) => a.index-b.index);

    const rows = $("resultRows");
    rows.replaceChildren();
    for (const record of entries) {
      const item = record.item;
      const row = document.createElement("div");
      row.className = "result-row" + (record.needsReview ? " needs-review" : "");
      const label = document.createElement("label");
      label.className = "result-pick";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = selection.has(item.id);
      checkbox.setAttribute("aria-label", `Sélectionner ${displayPrompt(item)} pour révision`);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) selection.add(item.id); else selection.delete(item.id);
        updateReviewControls();
      });
      const word = document.createElement("span");
      word.className = "result-word";
      const japanese = document.createElement("strong");
      japanese.textContent = displayPrompt(item);
      const reading = document.createElement("span");
      reading.className = "muted";
      reading.textContent = entriesForQuestion(item).map((entry) => `${entry.kanji} · ${entry.kana} · ${entry.romaji} · ${entry.signification.join(" / ")} (${categoryType(entry)})`).join(" ; ");
      word.append(japanese, reading);
      label.append(checkbox, word);
      const status = document.createElement("span");
      status.className = "tag " + (record.needsReview ? "review-bad" : "review-good");
      status.textContent = statusLabel(record);
      row.append(label, status);
      rows.appendChild(row);
    }
    updateReviewControls();
  }

  function updateReviewControls() {
    const records = [...outcomes.values()];
    const missed = records.filter((record) => isNeedsReview(record)).length;
    const selected = records.filter((record) => selection.has(record.item.id)).length;
    $("selectionCount").textContent = `${missed} mot(s) à revoir · ${selected} sélectionné(s) pour la prochaine session.`;
    $("replayMissedButton").disabled = missed === 0;
    $("replaySelectedButton").disabled = selected === 0;
  }

  function finishSession() {
    if (!progressSaved) {
      const courseSelection = coursePicker?.getSelection() || { all: true, ids: [] };
      window.JAPONAIS_PROGRESS?.recordSession({
        game: "vocabulaire",
        mode: direction,
        courseIds: courseSelection.ids || [],
        results: [...outcomes.values()].map((record) => ({
          question: record.item,
          label: entriesForQuestion(record.item).map((item) => `${item.kanji} — ${meaningText(item)}`).join(" / "),
          correct: record.gotIt,
          firstTryCorrect: record.firstTry,
          attempts: Math.max(1, record.tries),
          skipped: record.skipped
        }))
      });
      window.JAPONAIS_PROGRESS?.renderSummary("progressSummary", "progressHistory", "vocabulaire", "clearProgressButton");
      progressSaved = true;
    }
    $("game").style.display = "none";
    const progressPanel = $("progressPanel");
    if (progressPanel) progressPanel.hidden = false;
    $("results").style.display = "block";
    const records = [...outcomes.values()];
    const missed = records.filter(isNeedsReview).length;
    $("summaryText").textContent = `Session terminée : ${sessionDeck.length} mot(s), ${completedFirstTry} réussite(s) au premier essai, ${missed} mot(s) à revoir.`;
    selection = new Set(records.filter(isNeedsReview).map((record) => record.item.id));
    $("resultSort").value = "errors";
    renderResults();
    $("progressBar").style.width = "100%";
    $("results").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function replayMissed() {
    startSession([...outcomes.values()].filter(isNeedsReview).map((record) => record.item));
  }
  function replaySelected() {
    startSession([...outcomes.values()].filter((record) => selection.has(record.item.id)).map((record) => record.item));
  }
  function replayAll() {
    startSession([...sessionDeck]);
  }
  function newSession() {
    $("results").style.display = "none";
    $("setup").style.display = "block";
    const progressPanel = $("progressPanel");
    if (progressPanel) progressPanel.hidden = false;
    $("setup").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  window.JAPONAIS_PROGRESS?.renderSummary("progressSummary", "progressHistory", "vocabulaire", "clearProgressButton");
  $("startButton").addEventListener("click", startFromSettings);
  $("answerForm").addEventListener("submit", submitAnswer);
  $("nextButton").addEventListener("click", () => { currentIndex += 1; renderCurrent(); });
  $("skipButton").addEventListener("click", skipCurrent);
  $("resultSort").addEventListener("change", renderResults);
  $("replayMissedButton").addEventListener("click", replayMissed);
  $("replaySelectedButton").addEventListener("click", replaySelected);
  $("replayAllButton").addEventListener("click", replayAll);
  $("newSessionButton").addEventListener("click", newSession);
})();
