// Mélange indépendant pour les sessions du jeu des nombres.
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Mini-jeu de conversion des nombres japonais (1 à 99 999).
const numberDigitsKanji = [
  "",
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
];
const numberDigitsHira = [
  "",
  "いち",
  "に",
  "さん",
  "よん",
  "ご",
  "ろく",
  "なな",
  "はち",
  "きゅう",
];
function kanjiUnder10000(n) {
  if (!n) return "";
  let out = "";
  const units = [1000, 100, 10],
    kanjiUnits = ["千", "百", "十"];
  for (let i = 0; i < units.length; i++) {
    const u = units[i],
      d = Math.floor(n / u);
    if (d) {
      if (d !== 1) out += numberDigitsKanji[d];
      out += kanjiUnits[i];
      n %= u;
    }
  }
  if (n) out += numberDigitsKanji[n];
  return out;
}
function hiraUnder10000(n) {
  if (!n) return "";
  let out = "";
  const thousands = Math.floor(n / 1000);
  n %= 1000;
  const hundreds = Math.floor(n / 100);
  n %= 100;
  const tens = Math.floor(n / 10);
  n %= 10;
  if (thousands) {
    out += {
      1: "せん",
      2: "にせん",
      3: "さんぜん",
      4: "よんせん",
      5: "ごせん",
      6: "ろくせん",
      7: "ななせん",
      8: "はっせん",
      9: "きゅうせん",
    }[thousands];
  }
  if (hundreds) {
    out += {
      1: "ひゃく",
      2: "にひゃく",
      3: "さんびゃく",
      4: "よんひゃく",
      5: "ごひゃく",
      6: "ろっぴゃく",
      7: "ななひゃく",
      8: "はっぴゃく",
      9: "きゅうひゃく",
    }[hundreds];
  }
  if (tens) {
    out += {
      1: "じゅう",
      2: "にじゅう",
      3: "さんじゅう",
      4: "よんじゅう",
      5: "ごじゅう",
      6: "ろくじゅう",
      7: "ななじゅう",
      8: "はちじゅう",
      9: "きゅうじゅう",
    }[tens];
  }
  if (n) out += numberDigitsHira[n];
  return out;
}
function numberToKanji(n) {
  if (n === 0) return "零";
  if (n >= 10000) {
    const man = Math.floor(n / 10000),
      rest = n % 10000;
    return kanjiUnder10000(man) + "万" + kanjiUnder10000(rest);
  }
  return kanjiUnder10000(n);
}
function numberToHiragana(n) {
  if (n === 0) return "れい";
  if (n >= 10000) {
    const man = Math.floor(n / 10000),
      rest = n % 10000;
    return hiraUnder10000(man) + "まん" + hiraUnder10000(rest);
  }
  return hiraUnder10000(n);
}
function parseJapaneseNumberKanji(s) {
  const str = s.replace(/[\s　,，]/g, "");
  if (str === "零" || str === "〇") return 0;
  const digit = {
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
  };
  let total = 0,
    section = 0,
    num = 0;
  for (const ch of str) {
    if (ch in digit) {
      num = digit[ch];
    } else if (ch === "十") {
      section += (num || 1) * 10;
      num = 0;
    } else if (ch === "百") {
      section += (num || 1) * 100;
      num = 0;
    } else if (ch === "千") {
      section += (num || 1) * 1000;
      num = 0;
    } else if (ch === "万") {
      total += (section + num || 1) * 10000;
      section = 0;
      num = 0;
    } else return NaN;
  }
  return total + section + num;
}
function parseJapaneseNumberHiragana(s) {
  const str = s.replace(/[\s　,，]/g, "");
  const dict = {
    れい: 0,
    ぜろ: 0,
    いち: 1,
    に: 2,
    さん: 3,
    よん: 4,
    し: 4,
    ご: 5,
    ろく: 6,
    なな: 7,
    しち: 7,
    はち: 8,
    きゅう: 9,
    く: 9,
  };
  let total = 0,
    rest = str;
  if (rest.includes("まん")) {
    const parts = rest.split("まん");
    if (parts.length !== 2) return NaN;
    const left = parts[0] === "" ? 1 : parseJapaneseUnder10000(parts[0], dict);
    if (!Number.isFinite(left)) return NaN;
    total += left * 10000;
    rest = parts[1];
  }
  const v = parseJapaneseUnder10000(rest, dict);
  return Number.isFinite(v) ? total + v : NaN;
}
function parseJapaneseUnder10000(str, dict) {
  if (str === "") return 0;
  let total = 0,
    buffer = "";
  const units = [
    ["せん", 1000],
    ["ぜん", 1000],
    ["ひゃく", 100],
    ["びゃく", 100],
    ["ぴゃく", 100],
    ["じゅう", 10],
  ];
  while (str) {
    let matched = false;
    for (const [u, m] of units) {
      const ix = str.indexOf(u);
      if (ix === 0) {
        const d = buffer === "" ? 1 : dict[buffer];
        if (d === undefined) return NaN;
        total += d * m;
        buffer = "";
        str = str.slice(u.length);
        matched = true;
        break;
      }
    }
    if (matched) continue;
    let found = Object.keys(dict)
      .sort((a, b) => b.length - a.length)
      .find((k) => str.startsWith(k));
    if (!found) return NaN;
    buffer += found;
    str = str.slice(found.length);
    if (buffer.length > 8) return NaN;
  }
  if (buffer) {
    const d = dict[buffer];
    if (d === undefined) return NaN;
    total += d;
  }
  return total;
}
function parseNumberAnswer(s) {
  const clean = s.trim().replace(/[\s　,，]/g, "");
  if (/^\d+$/.test(clean)) return Number(clean);
  const k = parseJapaneseNumberKanji(clean);
  if (Number.isFinite(k) && clean) return k;
  return parseJapaneseNumberHiragana(clean);
}
let numberDeck = [],
  numberIndex = 0,
  numberCurrent = null,
  numberFirst = 0,
  numberAttempts = {},
  numberMissed = {},
  numberTimedOut = {},
  numberSkipped = {},
  numberReviewSelection = new Set(),
  numberActive = false,
  numberDifficulty = "easy",
  numberDuration = 0,
  numberTimeLeft = 0,
  numberTimerInterval = null,
  numberAnswered = {},
  numberEpoch = 0;
const numberNorm = (s) =>
  s
    .normalize("NFC")
    .replace(/[\s　,，]/g, "")
    .toLowerCase();
function stopNumberTimer() {
  if (numberTimerInterval !== null) {
    clearInterval(numberTimerInterval);
    numberTimerInterval = null;
  }
}
function updateNumberTimer() {
  const d = document.getElementById("numberTimerDisplay"),
    b = document.getElementById("numberTimerBar");
  if (numberDifficulty === "easy") {
    d.textContent = "Mode facile : pas de limite de temps";
    b.style.width = "100%";
    b.classList.remove("urgent");
    return;
  }
  d.textContent = `Temps restant : ${Math.max(0, Math.ceil(numberTimeLeft))} s`;
  b.style.width = `${Math.max(0, (numberTimeLeft / numberDuration) * 100)}%`;
  b.classList.toggle("urgent", numberTimeLeft <= 2);
}
function startNumberTimer() {
  stopNumberTimer();
  if (numberDifficulty === "easy") {
    numberTimeLeft = 0;
    updateNumberTimer();
    return;
  }
  numberTimeLeft = numberDuration;
  updateNumberTimer();
  let last = Date.now();
  numberTimerInterval = setInterval(() => {
    const now = Date.now();
    numberTimeLeft -= (now - last) / 1000;
    last = now;
    if (numberTimeLeft <= 0) {
      numberTimeLeft = 0;
      updateNumberTimer();
      stopNumberTimer();
      numberExpired();
    } else updateNumberTimer();
  }, 100);
}
function numberExpired() {
  if (!numberActive || !numberCurrent) return;
  numberMissed[numberCurrent.id] = true;
  numberTimedOut[numberCurrent.id] = true;
  const m = document.getElementById("numberMessage");
  m.textContent = `Temps écoulé ! Réponse : ${numberCurrent.answer}.`;
  m.className = "message bad";
  document.getElementById("numberAnswerInput").disabled = true;
  document.querySelector(
    '#numberAnswerForm button[type="submit"]'
  ).disabled = true;
  document.getElementById("numberSkipBtn").disabled = true;
  const epoch = numberEpoch;
  setTimeout(() => {
    if (numberActive && epoch === numberEpoch) {
      numberIndex++;
      showNumberQuestion();
    }
  }, 1300);
}
function startNumberGame() {
  const toJ = document.getElementById("numberToJapanese").checked,
    toN = document.getElementById("japaneseToNumber").checked;
  if (!toJ && !toN) {
    document.getElementById("numberMessage").textContent =
      "Choisis au moins un sens de conversion.";
    document.getElementById("numberGamePlay").style.display = "block";
    return;
  }
  numberDifficulty = document.querySelector(
    'input[name="numberDifficulty"]:checked'
  ).value;
  numberDuration =
    numberDifficulty === "medium" ? 7 : numberDifficulty === "hard" ? 4 : 0;
  const generated = [];
  for (let i = 0; i < 10; i++) {
    const n = 1 + Math.floor(Math.random() * 99999);
    const direction =
      toJ && toN ? (Math.random() < 0.5 ? "toJ" : "toN") : toJ ? "toJ" : "toN";
    const kanji = numberToKanji(n),
      hira = numberToHiragana(n),
      promptForm =
        direction === "toN"
          ? Math.random() < 0.5
            ? "kanji"
            : "hira"
          : "digits";
    generated.push({
      id: i + "-" + n + "-" + direction,
      n,
      direction,
      kanji,
      hira,
      promptForm,
      answer: direction === "toJ" ? `${kanji} ou ${hira}` : String(n),
    });
  }
  beginNumberSession(generated);
}
function beginNumberSession(items) {
  if (!items.length) {
    document.getElementById("numberSelectionMessage").textContent =
      "Aucun nombre ne correspond à cette sélection.";
    return;
  }
  numberDeck = shuffle([...items]);
  numberIndex = 0;
  numberFirst = 0;
  numberAttempts = {};
  numberMissed = {};
  numberTimedOut = {};
  numberSkipped = {};
  numberAnswered = {};
  numberReviewSelection = new Set();
  numberActive = true;
  numberEpoch++;
  document.getElementById("numberSelectionMessage").textContent = "";
  document.getElementById("numberResults").style.display = "none";
  document.getElementById("numberGamePlay").style.display = "block";
  document
    .getElementById("numberGamePlay")
    .scrollIntoView({ behavior: "smooth", block: "start" });
  showNumberQuestion();
}
function showNumberQuestion() {
  if (numberIndex >= numberDeck.length) {
    finishNumberGame();
    return;
  }
  numberCurrent = numberDeck[numberIndex];
  document.getElementById("numberCounter").textContent = `Question ${
    numberIndex + 1
  }/${numberDeck.length}`;
  document.getElementById(
    "numberScore"
  ).textContent = `Réussites au premier essai : ${numberFirst}`;
  document.getElementById("numberProgressBar").style.width = `${
    (numberIndex / numberDeck.length) * 100
  }%`;
  document.getElementById("numberPrompt").textContent =
    numberCurrent.direction === "toJ"
      ? numberCurrent.n.toLocaleString("fr-FR").replace(/ /g, " ")
      : numberCurrent.kanji;
  document.getElementById("numberHint").textContent =
    numberCurrent.direction === "toJ"
      ? "Écris ce nombre en kanji japonais ou en hiragana."
      : "Convertis ce nombre japonais en chiffres arabes.";
  document.getElementById("numberAnswerLabel").textContent =
    numberCurrent.direction === "toJ"
      ? "Réponse en kanji ou hiragana"
      : "Réponse en chiffres";
  document.getElementById("numberAnswerInput").placeholder =
    numberCurrent.direction === "toJ"
      ? "Ex. : 八百三十七 ou はっぴゃくさんじゅうなな"
      : "Ex. : 837";
  document.getElementById("numberMessage").textContent = "";
  document.getElementById("numberMessage").className = "message";
  document.getElementById("numberAnswerInput").value = "";
  document.getElementById("numberAnswerInput").disabled = false;
  document.querySelector(
    '#numberAnswerForm button[type="submit"]'
  ).disabled = false;
  document.getElementById("numberSkipBtn").disabled = false;
  document.getElementById("numberAnswerInput").focus();
  startNumberTimer();
}
function validateNumberAnswer() {
  if (!numberActive || !numberCurrent) return;
  const input = document.getElementById("numberAnswerInput"),
    v = input.value.trim(),
    m = document.getElementById("numberMessage");
  if (!v) {
    m.textContent = "Saisis une réponse avant de valider.";
    m.className = "message bad";
    input.focus();
    return;
  }
  numberAttempts[numberCurrent.id] =
    (numberAttempts[numberCurrent.id] || 0) + 1;
  const parsed = parseNumberAnswer(v),
    correct =
      numberCurrent.direction === "toJ"
        ? numberNorm(v) === numberNorm(numberCurrent.kanji) ||
          numberNorm(v) === numberNorm(numberCurrent.hira) ||
          parsed === numberCurrent.n
        : numberNorm(v) === numberNorm(numberCurrent.hira) ||
          numberNorm(v) === numberNorm(numberCurrent.kanji) ||
          parsed === numberCurrent.n;
  if (correct) {
    stopNumberTimer();
    if (!numberAnswered[numberCurrent.id]) {
      if (numberAttempts[numberCurrent.id] === 1) numberFirst++;
      numberAnswered[numberCurrent.id] = true;
    }
    m.textContent = `Bien joué ! ${numberCurrent.n} = ${numberCurrent.kanji} (${numberCurrent.hira}).`;
    m.className = "message good";
    input.disabled = true;
    document.querySelector(
      '#numberAnswerForm button[type="submit"]'
    ).disabled = true;
    document.getElementById("numberSkipBtn").disabled = true;
    const epoch = numberEpoch;
    setTimeout(() => {
      if (numberActive && epoch === numberEpoch) {
        numberIndex++;
        showNumberQuestion();
      }
    }, 1000);
  } else {
    m.textContent = "Pas encore — vérifie les unités (dix, cent, mille, man).";
    m.className = "message bad";
    input.select();
  }
}
document.getElementById("numberAnswerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  validateNumberAnswer();
});
document
  .getElementById("startNumberGame")
  .addEventListener("click", startNumberGame);
document.getElementById("numberSkipBtn").addEventListener("click", () => {
  if (!numberActive || !numberCurrent) return;
  stopNumberTimer();
  numberMissed[numberCurrent.id] = true;
  numberSkipped[numberCurrent.id] = true;
  document.getElementById(
    "numberMessage"
  ).textContent = `Réponse : ${numberCurrent.answer}`;
  document.getElementById("numberMessage").className = "message";
  document.getElementById("numberAnswerInput").disabled = true;
  document.querySelector(
    '#numberAnswerForm button[type="submit"]'
  ).disabled = true;
  document.getElementById("numberSkipBtn").disabled = true;
  const epoch = numberEpoch;
  setTimeout(() => {
    if (numberActive && epoch === numberEpoch) {
      numberIndex++;
      showNumberQuestion();
    }
  }, 850);
});
document
  .getElementById("numberFinishBtn")
  .addEventListener("click", finishNumberGame);
document
  .getElementById("numberReplayMissedBtn")
  .addEventListener("click", replayNumberMissed);
document
  .getElementById("numberReplaySelectedBtn")
  .addEventListener("click", replayNumberSelected);
document
  .getElementById("numberReplayBtn")
  .addEventListener("click", () => beginNumberSession(numberDeck));
document
  .getElementById("numberResultSort")
  .addEventListener("change", renderNumberResults);
document.getElementById("numberBackBtn").addEventListener("click", () => {
  document.getElementById("numberResults").style.display = "none";
  document
    .getElementById("numberGame")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});
function getNumberReviewEntries() {
  return numberDeck.map((item, i) => {
    const tries = numberAttempts[item.id] || 0,
      gotIt = !!numberAnswered[item.id],
      timedOut = !!numberTimedOut[item.id],
      skipped = !!numberSkipped[item.id],
      needsReview = !!numberMissed[item.id] || !gotIt || tries > 1;
    return {
      item,
      key: `${item.id}::${i}`,
      index: i,
      tries,
      gotIt,
      timedOut,
      skipped,
      needsReview,
    };
  });
}
function numberReviewStatus(e) {
  if (e.timedOut) return { text: "Temps écoulé" };
  if (e.skipped) return { text: "Passé" };
  if (!e.gotIt) return { text: "Non répondu" };
  if (e.tries > 1) return { text: `Réussi après ${e.tries} tentatives` };
  return { text: "Réussi au 1er essai" };
}
function renderNumberResults() {
  const mode = document.getElementById("numberResultSort").value;
  const entries = getNumberReviewEntries();
  if (mode === "errors")
    entries.sort(
      (a, b) =>
        Number(b.needsReview) - Number(a.needsReview) ||
        b.tries - a.tries ||
        a.index - b.index
    );
  else if (mode === "attempts")
    entries.sort(
      (a, b) =>
        b.tries - a.tries ||
        Number(b.needsReview) - Number(a.needsReview) ||
        a.index - b.index
    );
  else if (mode === "success")
    entries.sort(
      (a, b) =>
        Number(a.needsReview) - Number(b.needsReview) ||
        a.tries - b.tries ||
        a.index - b.index
    );
  else entries.sort((a, b) => a.index - b.index);
  const box = document.getElementById("numberResultRows");
  box.replaceChildren();
  for (const entry of entries) {
    const row = document.createElement("div");
    row.className = "result-row" + (entry.needsReview ? " needs-review" : "");
    const label = document.createElement("label");
    label.className = "result-pick";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = numberReviewSelection.has(entry.key);
    cb.setAttribute("aria-label", "Sélectionner ce nombre pour révision");
    cb.addEventListener("change", () => {
      if (cb.checked) numberReviewSelection.add(entry.key);
      else numberReviewSelection.delete(entry.key);
      updateNumberReviewControls();
    });
    const word = document.createElement("span");
    word.className = "result-word";
    const prompt = document.createElement("strong");
    prompt.textContent =
      entry.item.direction === "toJ"
        ? String(entry.item.n)
        : entry.item.promptForm === "hira"
        ? entry.item.hira
        : entry.item.kanji;
    const answer = document.createElement("span");
    answer.className = "muted";
    answer.textContent =
      "→ " +
      (entry.item.direction === "toJ"
        ? entry.item.kanji + " / " + entry.item.hira
        : entry.item.n);
    word.append(prompt, answer);
    label.append(cb, word);
    const status = document.createElement("span");
    status.className =
      "tag " + (entry.needsReview ? "review-bad" : "review-good");
    status.textContent = numberReviewStatus(entry).text;
    row.append(label, status);
    box.appendChild(row);
  }
  updateNumberReviewControls();
}
function updateNumberReviewControls() {
  const entries = getNumberReviewEntries(),
    missed = entries.filter((e) => e.needsReview).length,
    selected = entries.filter((e) => numberReviewSelection.has(e.key)).length;
  document.getElementById(
    "numberSelectionCount"
  ).textContent = `${missed} nombre(s) à revoir · ${selected} sélectionné(s) pour la prochaine session.`;
  document.getElementById("numberReplayMissedBtn").disabled = missed === 0;
  document.getElementById("numberReplaySelectedBtn").disabled = selected === 0;
}
function replayNumberMissed() {
  beginNumberSession(
    getNumberReviewEntries()
      .filter((e) => e.needsReview)
      .map((e) => e.item)
  );
}
function replayNumberSelected() {
  beginNumberSession(
    getNumberReviewEntries()
      .filter((e) => numberReviewSelection.has(e.key))
      .map((e) => e.item)
  );
}
function finishNumberGame() {
  if (!numberActive) return;
  stopNumberTimer();
  numberActive = false;
  numberEpoch++;
  document.getElementById("numberGamePlay").style.display = "none";
  document.getElementById("numberResults").style.display = "block";
  const entries = getNumberReviewEntries(),
    missed = entries.filter((e) => e.needsReview).length;
  document.getElementById(
    "numberSummary"
  ).textContent = `Tu as travaillé ${numberDeck.length} nombres et réussi ${numberFirst} au premier essai. ${missed} nombre(s) sont à revoir.`;
  numberReviewSelection = new Set(
    entries.filter((e) => e.needsReview).map((e) => e.key)
  );
  document.getElementById("numberResultSort").value = "errors";
  renderNumberResults();
  document.getElementById("numberProgressBar").style.width = "100%";
  document
    .getElementById("numberResults")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}
