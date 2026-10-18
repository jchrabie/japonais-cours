/* Transforme le quiz de sens des kanji en QCM sans modifier le jeu des nombres. */
(() => {
  "use strict";

  if (typeof groups === "undefined" || typeof showCurrent !== "function" || typeof validateAnswer !== "function") {
    console.error("Le QCM Kanji n’a pas trouvé les éléments attendus dans kanji.html.");
    return;
  }

  const form = document.getElementById("answerForm");
  const input = document.getElementById("answerInput");
  const inputLabel = form?.querySelector(":scope > label");
  const inputParagraph = input?.closest("p");
  const controls = form?.querySelector(".controls");
  const message = document.getElementById("message");
  const submitButton = form?.querySelector('button[type="submit"]');
  const skipButton = document.getElementById("skipBtn");

  if (!form || !input || !controls || !message || !submitButton || !skipButton) {
    console.error("Le QCM Kanji n’a pas trouvé les contrôles attendus dans kanji.html.");
    return;
  }

  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "assets/css/kanji-qcm.css";
  document.head.appendChild(styleLink);

  const choicesContainer = document.createElement("div");
  choicesContainer.id = "kanjiQcmChoices";
  choicesContainer.className = "kanji-qcm-options";
  choicesContainer.setAttribute("role", "radiogroup");
  choicesContainer.setAttribute("aria-label", "Choix du sens du kanji");
  form.insertBefore(choicesContainer, controls);
  if (inputLabel) inputLabel.hidden = true;
  if (inputParagraph) inputParagraph.hidden = true;
  input.disabled = true;
  input.required = false;
  const hint = document.getElementById("kanjiHint");
  if (hint) hint.textContent = "Choisis le sens qui correspond le mieux au kanji parmi les quatre propositions.";

  let qcmOptions = [];
  let qcmSelectedKey = null;
  let qcmResolved = false;
  let qcmAdvanceTimeout = null;
  let qcmGeneration = 0;
  let previousOptionSet = new Set();
  const distractorUsage = new Map();

  const normalizeMeaning = (value) => norm(String(value ?? ""));
  const splitMeanings = (value) => String(value ?? "")
    .split(/[,;\/／]/u)
    .map((part) => part.trim())
    .filter(Boolean);

  const allEntries = [];
  const entryGroups = new Map();
  const seenKanji = new Set();
  groups.forEach((group, groupIndex) => {
    group.items.forEach(([kanji, meaning, readings, aliases = []]) => {
      if (seenKanji.has(kanji)) return;
      seenKanji.add(kanji);
      const entry = { kanji, meaning, readings, aliases, groupIndex, groupName: group.name };
      allEntries.push(entry);
      entryGroups.set(kanji, groupIndex);
    });
  });

  const originalShowCurrent = showCurrent;
  const originalValidateAnswer = validateAnswer;
  const originalTimeExpired = timeExpired;
  const originalStartQuiz = startQuiz;
  const originalReplayDeck = replayDeck;
  const originalFinishQuiz = finishQuiz;

  function clearAdvanceTimeout() {
    if (qcmAdvanceTimeout !== null) {
      clearTimeout(qcmAdvanceTimeout);
      qcmAdvanceTimeout = null;
    }
    qcmGeneration += 1;
  }

  function scheduleNext(delay = 1000) {
    clearAdvanceTimeout();
    const generation = qcmGeneration;
    qcmAdvanceTimeout = setTimeout(() => {
      if (generation !== qcmGeneration || !active) return;
      qcmAdvanceTimeout = null;
      index += 1;
      showCurrent();
    }, delay);
  }

  function setChoiceState(button, selected) {
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-checked", selected ? "true" : "false");
    button.tabIndex = selected ? 0 : -1;
  }

  function disableChoices(correctKey = null) {
    for (const button of choicesContainer.querySelectorAll("button")) {
      button.disabled = true;
      if (button.dataset.choiceKey === correctKey) button.classList.add("is-correct");
      if (button.dataset.choiceKey === qcmSelectedKey && button.dataset.choiceKey !== correctKey) {
        button.classList.add("is-wrong");
      }
    }
    submitButton.disabled = true;
    skipButton.disabled = true;
  }

  function targetAnswerVariants(entry) {
    return new Set([
      entry.meaning,
      ...(Array.isArray(entry.aliases) ? entry.aliases : []),
      ...splitMeanings(entry.meaning)
    ].map(normalizeMeaning).filter(Boolean));
  }

  function buildOptions(target) {
    const targetGroup = entryGroups.get(target.kanji);
    const accepted = targetAnswerVariants(target);
    const labelKey = (entry) => normalizeMeaning(entry.meaning);
    const candidates = allEntries.filter((entry) => {
      if (entry.kanji === target.kanji) return false;
      const candidateParts = [entry.meaning, ...splitMeanings(entry.meaning), ...(entry.aliases || [])]
        .map(normalizeMeaning).filter(Boolean);
      if (candidateParts.some((part) => accepted.has(part))) return false;
      return Boolean(labelKey(entry));
    });

    // Préférence aux mots de la même famille, puis élargissement au reste du catalogue.
    const sameGroup = candidates.filter((entry) => entry.groupIndex === targetGroup);
    const otherGroups = candidates.filter((entry) => entry.groupIndex !== targetGroup);
    const selectedDistractors = [];
    const usedLabels = new Set([normalizeMeaning(target.meaning)]);

    function addFrom(pool) {
      const shuffled = [...pool];
      for (let i = shuffled.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      shuffled.sort((a, b) => {
        const countA = distractorUsage.get(labelKey(a)) || 0;
        const countB = distractorUsage.get(labelKey(b)) || 0;
        return countA - countB;
      });
      for (const entry of shuffled) {
        if (selectedDistractors.length >= 3) break;
        const key = labelKey(entry);
        if (!key || usedLabels.has(key)) continue;
        usedLabels.add(key);
        selectedDistractors.push({ key, label: entry.meaning, correct: false });
      }
    }

    addFrom(sameGroup);
    if (selectedDistractors.length < 3) addFrom(otherGroups);

    // Le catalogue global contient largement plus de quatre sens ; cette garde évite un QCM incomplet si le contenu évolue.
    const options = [
      { key: `correct:${normalizeMeaning(target.kanji)}:${normalizeMeaning(target.meaning)}`, label: target.meaning, correct: true },
      ...selectedDistractors
    ];
    while (options.length < 4) {
      const fallback = allEntries.find((entry) => {
        const key = labelKey(entry);
        return entry.kanji !== target.kanji && key && !usedLabels.has(key) && !accepted.has(key);
      });
      if (!fallback) break;
      const key = labelKey(fallback);
      usedLabels.add(key);
      selectedDistractors.push({ key, label: fallback.meaning, correct: false });
      options.push(selectedDistractors[selectedDistractors.length - 1]);
    }

    // Les options incorrectes vues dans une même session sont moins souvent réutilisées.
    for (const option of options) {
      if (!option.correct) distractorUsage.set(normalizeMeaning(option.label), (distractorUsage.get(normalizeMeaning(option.label)) || 0) + 1);
    }
    for (let i = options.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    const setKey = options.map((option) => normalizeMeaning(option.label)).sort().join("|");
    if (setKey === [...previousOptionSet].sort().join("|") && options.length >= 4) {
      const possible = candidates.find((entry) => {
        const key = labelKey(entry);
        return key && !usedLabels.has(key);
      });
      const replaceIndex = options.findIndex((option) => !option.correct);
      if (possible && replaceIndex >= 0) {
        const oldKey = normalizeMeaning(options[replaceIndex].label);
        options[replaceIndex] = { key: labelKey(possible), label: possible.meaning, correct: false };
        distractorUsage.set(oldKey, Math.max(0, (distractorUsage.get(oldKey) || 1) - 1));
        distractorUsage.set(labelKey(possible), (distractorUsage.get(labelKey(possible)) || 0) + 1);
      }
    }
    previousOptionSet = new Set(options.map((option) => normalizeMeaning(option.label)));
    return options;
  }

  function renderChoices() {
    choicesContainer.replaceChildren();
    qcmSelectedKey = null;
    qcmOptions = buildOptions(current);
    qcmOptions.forEach((option, position) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "kanji-qcm-choice";
      button.dataset.choiceKey = option.key;
      button.setAttribute("role", "radio");
      button.setAttribute("aria-checked", "false");
      button.tabIndex = position === 0 ? 0 : -1;
      const letter = document.createElement("span");
      letter.className = "kanji-qcm-letter";
      letter.textContent = String.fromCharCode(65 + position);
      const label = document.createElement("span");
      label.className = "kanji-qcm-label";
      label.textContent = option.label;
      button.append(letter, label);
      button.addEventListener("click", () => {
        if (qcmResolved || !active) return;
        qcmSelectedKey = option.key;
        for (const choice of choicesContainer.querySelectorAll("button")) {
          setChoiceState(choice, choice.dataset.choiceKey === qcmSelectedKey);
          choice.classList.remove("is-wrong");
        }
        message.textContent = "";
        message.className = "message";
      });
      button.addEventListener("keydown", (event) => {
        if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)) return;
        event.preventDefault();
        const list = [...choicesContainer.querySelectorAll("button")];
        const currentIndex = list.indexOf(button);
        const delta = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
        list[(currentIndex + delta + list.length) % list.length].focus();
      });
      choicesContainer.appendChild(button);
    });
    submitButton.disabled = false;
    skipButton.disabled = false;
  }

  showCurrent = function showCurrentAsQcm() {
    clearAdvanceTimeout();
    if (index >= deck.length) {
      finishQuiz();
      return;
    }
    current = deck[index];
    qcmResolved = false;
    qcmSelectedKey = null;
    document.getElementById("kanjiPrompt").textContent = current.kanji;
    document.getElementById("counter").textContent = `Kanji ${index + 1}/${deck.length}`;
    document.getElementById("score").textContent = `Réussites au premier essai : ${firstTryCorrect}`;
    document.getElementById("progressBar").style.width = `${(index / deck.length) * 100}%`;
    message.textContent = "";
    message.className = "message";
    renderChoices();
    startTimer();
  };

  validateAnswer = function validateKanjiQcmAnswer() {
    if (!active || !current || qcmResolved) return;
    if (!qcmSelectedKey) {
      message.textContent = "Sélectionne une proposition avant de valider.";
      message.className = "message bad";
      return;
    }
    const selected = qcmOptions.find((option) => option.key === qcmSelectedKey);
    if (!selected) return;
    attempts[current.kanji] = (attempts[current.kanji] || 0) + 1;
    if (selected.correct) {
      stopTimer();
      if (!answeredFirst[current.kanji]) {
        if (attempts[current.kanji] === 1) firstTryCorrect += 1;
        answeredFirst[current.kanji] = true;
      }
      qcmResolved = true;
      message.textContent = `Bien joué ! ${current.kanji} : ${current.meaning}. Lectures courantes : ${current.readings}.`;
      message.className = "message good";
      disableChoices(selected.key);
      scheduleNext(1000);
      return;
    }
    message.textContent = "Pas encore. Les propositions peuvent se ressembler : essaie un autre choix.";
    message.className = "message bad";
    const wrongButton = [...choicesContainer.querySelectorAll("button")]
      .find((button) => button.dataset.choiceKey === selected.key);
    if (wrongButton) wrongButton.classList.add("is-wrong");
  };

  timeExpired = function timeExpiredForKanjiQcm() {
    if (!active || !current || qcmResolved) return;
    stopTimer();
    timedOut[current.kanji] = true;
    qcmResolved = true;
    message.textContent = `Temps écoulé ! ${current.kanji} : ${current.meaning}. Lectures courantes : ${current.readings}.`;
    message.className = "message bad";
    const correct = qcmOptions.find((option) => option.correct);
    disableChoices(correct?.key || null);
    scheduleNext(1300);
  };

  skipButton.addEventListener("click", (event) => {
    if (!active || !current || qcmResolved) return;
    event.stopImmediatePropagation();
    stopTimer();
    skipped[current.kanji] = true;
    qcmResolved = true;
    message.textContent = `Mis de côté : ${current.kanji} — ${current.meaning}. Lectures : ${current.readings}.`;
    message.className = "message";
    disableChoices(null);
    scheduleNext(700);
  }, true);

  startQuiz = function startKanjiQcmQuiz() {
    clearAdvanceTimeout();
    distractorUsage.clear();
    previousOptionSet = new Set();
    originalStartQuiz();
  };

  replayDeck = function replayKanjiQcmDeck(items) {
    clearAdvanceTimeout();
    distractorUsage.clear();
    previousOptionSet = new Set();
    originalReplayDeck(items);
  };

  finishQuiz = function finishKanjiQcmQuiz() {
    clearAdvanceTimeout();
    originalFinishQuiz();
  };

  // Rendre le submit natif accessible tout en gardant le fonctionnement du quiz historique.
  submitButton.textContent = "Valider";
  const style = document.createElement("style");
  style.textContent = `
    #answerForm > label, #answerForm > p { display: none !important; }
  `;
  document.head.appendChild(style);
})();
