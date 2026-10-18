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

const groups = [
  {
    name: "Nombres",
    items: [
      ["一", "un", "ichi, itsu", ["1", "premier"]],
      ["二", "deux", "ni", ["2"]],
      ["三", "trois", "san", ["3"]],
      ["四", "quatre", "shi, yon", ["4"]],
      ["五", "cinq", "go", ["5"]],
      ["六", "six", "roku", ["6"]],
      ["七", "sept", "shichi, nana", ["7"]],
      ["八", "huit", "hachi", ["8"]],
      ["九", "neuf", "kyuu, ku", ["9"]],
      ["十", "dix", "juu", ["10"]],
      ["百", "cent", "hyaku", []],
      ["千", "mille", "sen", []],
      ["万", "dix mille", "man", ["10000"]],
      ["円", "yen, cercle", "en", ["yens"]],
    ],
  },
  {
    name: "Temps et calendrier",
    items: [
      ["日", "soleil, jour", "nichi, jitsu, hi, ka", ["soleil", "journée"]],
      ["月", "lune, mois", "getsu, gatsu, tsuki", ["lune", "mois"]],
      ["火", "feu", "ka, hi", []],
      ["水", "eau", "sui, mizu", []],
      ["木", "arbre, bois", "moku, boku, ki", ["arbre"]],
      ["金", "or, argent", "kin, kane", ["argent", "or"]],
      ["土", "terre, sol", "do, tsuchi", ["terre", "sol"]],
      ["曜", "jour de la semaine", "you", ["jour"]],
      ["年", "année", "nen, toshi", ["an"]],
      ["時", "heure", "ji, toki", ["heure"]],
      ["分", "minute, part", "fun, bun, wakaru", ["minute", "part"]],
      ["半", "moitié", "han", ["demi"]],
      ["今", "maintenant", "kon, ima", ["actuellement"]],
      ["毎", "chaque", "mai", []],
      ["週", "semaine", "shuu", []],
      ["午", "midi", "go", ["midi"]],
      ["前", "avant, devant", "zen, mae", ["avant", "devant"]],
      ["後", "après, derrière", "go, kou, ato, ushiro", ["après", "derrière"]],
      ["間", "intervalle, entre", "kan, ken, aida", ["entre", "intervalle"]],
      ["何", "quoi, quel", "ka, nani, nan", ["quoi", "quel"]],
    ],
  },
  {
    name: "Personnes et famille",
    items: [
      ["人", "personne", "jin, nin, hito", ["humain"]],
      ["子", "enfant", "shi, su, ko", ["enfant"]],
      ["女", "femme", "jo, nyo, onna", ["féminin"]],
      ["男", "homme", "dan, nan, otoko", ["masculin"]],
      ["父", "père", "fu, chichi", ["papa"]],
      ["母", "mère", "bo, haha", ["maman"]],
      ["友", "ami", "yuu, tomo", ["amie"]],
      ["名", "nom", "mei, myou, na", ["nom"]],
      ["先", "avant, précédent", "sen, saki", ["précédent"]],
      [
        "生",
        "vie, naissance",
        "sei, shou, i(きる), u(まれる)",
        ["vie", "naissance"],
      ],
      ["学", "étude, apprendre", "gaku, mana(bu)", ["étudier"]],
      ["校", "école", "kou", ["école"]],
    ],
  },
  {
    name: "Lieux, directions et nature",
    items: [
      ["山", "montagne", "san, yama", []],
      ["川", "rivière", "sen, kawa", []],
      ["田", "rizière", "den, ta", ["champ"]],
      ["天", "ciel", "ten, ame", ["ciel"]],
      ["気", "énergie, humeur", "ki, ke", ["esprit"]],
      ["雨", "pluie", "u, ame", ["pluie"]],
      ["電", "électricité", "den", ["électricité"]],
      ["車", "voiture, véhicule", "sha, kuruma", ["voiture"]],
      ["国", "pays", "koku, kuni", ["nation"]],
      ["外", "extérieur, dehors", "gai, soto", ["dehors"]],
      ["京", "capitale", "kyou, kei", ["capitale"]],
      ["道", "route, chemin", "dou, michi", ["route"]],
      ["東", "est", "tou, higashi", ["est"]],
      ["西", "ouest", "sei, sai, nishi", ["ouest"]],
      ["南", "sud", "nan, minami", ["sud"]],
      ["北", "nord", "hoku, kita", ["nord"]],
      ["口", "bouche, ouverture", "kou, kuchi", ["bouche"]],
      ["目", "œil", "moku, me", ["œil"]],
      ["耳", "oreille", "ji, mimi", ["oreille"]],
      ["手", "main", "shu, te", ["main"]],
      ["足", "pied, jambe", "soku, ashi", ["pied", "jambe"]],
      ["花", "fleur", "ka, hana", ["fleur"]],
      ["魚", "poisson", "gyo, sakana", ["poisson"]],
      ["空", "ciel, vide", "kuu, sora", ["ciel"]],
      ["石", "pierre", "seki, ishi", ["pierre"]],
    ],
  },
  {
    name: "Adjectifs, verbes et notions",
    items: [
      ["大", "grand", "dai, tai, oo(きい)", ["grand"]],
      ["小", "petit", "shou, chii(sai), ko", ["petit"]],
      ["高", "haut, cher", "kou, taka(i)", ["haut", "cher"]],
      ["安", "bon marché, paisible", "an, yasu(i)", ["bon marche", "paisible"]],
      ["新", "nouveau", "shin, atara(shii)", ["nouveau"]],
      ["古", "ancien, vieux", "ko, furu(i)", ["vieux", "ancien"]],
      ["長", "long, chef", "chou, naga(i)", ["long"]],
      ["白", "blanc", "haku, shiro(i)", ["blanc"]],
      ["赤", "rouge", "seki, aka(i)", ["rouge"]],
      ["青", "bleu", "sei, ao(i)", ["bleu"]],
      ["多", "nombreux, beaucoup", "ta, oo(i)", ["beaucoup"]],
      ["少", "peu", "shou, suku(nai), suko(shi)", ["peu"]],
      ["入", "entrer", "nyuu, hai(ru), i(reru)", ["entrée"]],
      ["出", "sortir", "shutsu, de(ru), da(su)", ["sortie"]],
      ["見", "voir, regarder", "ken, mi(ru)", ["voir"]],
      ["行", "aller", "kou, gyou, i(ku)", ["aller"]],
      ["来", "venir", "rai, ku(ru)", ["venir"]],
      ["食", "manger", "shoku, ta(beru)", ["manger"]],
      ["飲", "boire", "in, no(mu)", ["boire"]],
      [
        "聞",
        "entendre, écouter, demander",
        "bun, mon, ki(ku)",
        ["écouter", "entendre"],
      ],
      ["読", "lire", "doku, yo(mu)", ["lire"]],
      ["書", "écrire", "sho, ka(ku)", ["écrire"]],
      ["話", "parler, histoire", "wa, hana(su)", ["parler"]],
      ["言", "dire, mot", "gen, gon, i(u), koto", ["dire", "mot"]],
      ["立", "se tenir debout", "ritsu, ta(tsu)", ["debout"]],
      ["休", "repos, se reposer", "kyuu, yasu(mu)", ["repos"]],
      ["本", "livre, origine", "hon, moto", ["livre"]],
      ["語", "langue, mot", "go, kata(ru)", ["langue"]],
      ["文", "phrase, texte", "bun, mon, fumi", ["texte"]],
      ["字", "caractère, lettre", "ji, aza", ["lettre"]],
      ["何", "quoi, quel", "nani, nan", ["quoi", "quel"]],
    ],
  },
];
const root = document.getElementById("kanjiGroups");
groups.forEach((g, i) => {
  const d = document.createElement("div");
  d.className = "group";
  d.innerHTML = `<label><input type="checkbox" class="groupCheck" data-group="${i}" checked> ${
    g.name
  }</label><small>${g.items.map((x) => x[0]).join(" ")}</small>`;
  root.appendChild(d);
});
let deck = [],
  originalDeck = [],
  index = 0,
  current = null,
  attempts = {},
  firstTryCorrect = 0,
  answeredFirst = {},
  timedOut = {},
  skipped = {},
  reviewSelection = new Set(),
  active = false,
  timerInterval = null,
  timeLeft = 0,
  timerDuration = 0,
  difficulty = "easy";
function stopTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}
function updateTimer() {
  const d = document.getElementById("timerDisplay"),
    b = document.getElementById("timerBar");
  if (difficulty === "easy") {
    d.textContent = "Mode facile : pas de limite de temps";
    b.style.width = "100%";
    b.classList.remove("urgent");
    return;
  }
  d.textContent = `Temps restant : ${Math.max(0, Math.ceil(timeLeft))} s`;
  b.style.width = `${Math.max(0, (timeLeft / timerDuration) * 100)}%`;
  b.classList.toggle("urgent", timeLeft <= 2);
}
function startTimer() {
  stopTimer();
  if (difficulty === "easy") {
    timeLeft = 0;
    updateTimer();
    return;
  }
  timeLeft = timerDuration;
  updateTimer();
  let last = Date.now();
  timerInterval = setInterval(() => {
    const now = Date.now();
    timeLeft -= (now - last) / 1000;
    last = now;
    if (timeLeft <= 0) {
      timeLeft = 0;
      updateTimer();
      stopTimer();
      timeExpired();
    } else updateTimer();
  }, 100);
}
function timeExpired() {
  if (!active || !current) return;
  timedOut[current.kanji] = true;
  const m = document.getElementById("message");
  m.textContent = `Temps écoulé ! Sens : « ${current.meaning} ». Lectures courantes : ${current.readings}.`;
  m.className = "message bad";
  document.getElementById("answerInput").disabled = true;
  document.querySelector('#answerForm button[type="submit"]').disabled = true;
  document.getElementById("skipBtn").disabled = true;
  setTimeout(() => {
    if (active) {
      index++;
      showCurrent();
    }
  }, 1300);
}
const norm = (s) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
function acceptedAnswers(k) {
  const answers = [k.meaning, ...k.aliases];
  /* Accepte aussi les lectures romanisées affichées, en plus du sens français. */ k.readings
    .split(",")
    .map((r) => r.trim())
    .filter(Boolean)
    .forEach((r) => {
      answers.push(r);
      /* Les notations comme oo(きい) donnent aussi la lecture assemblée ookii. */ answers.push(
        r.replace(/\(([^)]*)\)/g, "$1")
      );
      answers.push(r.replace(/\([^)]*\)/g, ""));
    });
  return answers;
}
function isCorrect(value, k) {
  const v = norm(value);
  return acceptedAnswers(k).some((a) => norm(a) === v);
}
function setAll(v) {
  document.querySelectorAll(".groupCheck").forEach((c) => (c.checked = v));
}
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function startQuiz() {
  difficulty = document.querySelector('input[name="difficulty"]:checked').value;
  timerDuration = difficulty === "medium" ? 7 : difficulty === "hard" ? 4 : 0;
  const selected = [
    ...document.querySelectorAll(".groupCheck:checked"),
  ].flatMap((c) => groups[+c.dataset.group].items);
  if (!selected.length) {
    document.getElementById("selectionMsg").textContent =
      "Sélectionne au moins une catégorie.";
    return;
  }
  const uniqueSelected = [
    ...new Map(selected.map((item) => [item[0], item])).values(),
  ];
  originalDeck = shuffle(
    uniqueSelected.map(([kanji, meaning, readings, aliases]) => ({
      kanji,
      meaning,
      readings,
      aliases,
    }))
  );
  deck = [...originalDeck];
  index = 0;
  attempts = {};
  answeredFirst = {};
  timedOut = {};
  skipped = {};
  reviewSelection = new Set();
  firstTryCorrect = 0;
  active = true;
  document.getElementById("selectionMsg").textContent = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("game").style.display = "block";
  document
    .getElementById("game")
    .scrollIntoView({ behavior: "smooth", block: "start" });
  showCurrent();
}
function showCurrent() {
  if (index >= deck.length) {
    finishQuiz();
    return;
  }
  current = deck[index];
  document.getElementById("kanjiPrompt").textContent = current.kanji;
  document.getElementById("counter").textContent = `Kanji ${index + 1}/${
    deck.length
  }`;
  document.getElementById(
    "score"
  ).textContent = `Réussites au premier essai : ${firstTryCorrect}`;
  document.getElementById("progressBar").style.width = `${
    (index / deck.length) * 100
  }%`;
  const m = document.getElementById("message");
  m.textContent = "";
  m.className = "message";
  const input = document.getElementById("answerInput");
  input.value = "";
  input.disabled = false;
  document.querySelector('#answerForm button[type="submit"]').disabled = false;
  document.getElementById("skipBtn").disabled = false;
  input.focus();
  startTimer();
}
document.getElementById("answerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  validateAnswer();
});
function validateAnswer() {
  if (!active || !current) return;
  const input = document.getElementById("answerInput"),
    value = input.value,
    m = document.getElementById("message");
  if (!norm(value)) {
    m.textContent = "Écris un sens en français avant de valider.";
    m.className = "message bad";
    input.focus();
    return;
  }
  attempts[current.kanji] = (attempts[current.kanji] || 0) + 1;
  if (isCorrect(value, current)) {
    stopTimer();
    if (!answeredFirst[current.kanji]) {
      if (attempts[current.kanji] === 1) firstTryCorrect++;
      answeredFirst[current.kanji] = true;
    }
    m.textContent = `Bien joué ! ${current.kanji} : ${current.meaning}. Lectures courantes : ${current.readings}.`;
    m.className = "message good";
    input.disabled = true;
    document.querySelector('#answerForm button[type="submit"]').disabled = true;
    document.getElementById("skipBtn").disabled = true;
    setTimeout(() => {
      index++;
      showCurrent();
    }, 1100);
  } else {
    m.textContent = "Pas encore — pense au sens du kanji et réessaie.";
    m.className = "message bad";
    input.select();
  }
}
document.getElementById("skipBtn").addEventListener("click", () => {
  if (!active || !current) return;
  stopTimer();
  skipped[current.kanji] = true;
  const m = document.getElementById("message");
  m.textContent = `Mis de côté : ${current.kanji} — ${current.meaning}. Lectures : ${current.readings}.`;
  m.className = "message";
  index++;
  setTimeout(showCurrent, 900);
});

function getReviewEntries() {
  return originalDeck.map((item, i) => {
    const tries = attempts[item.kanji] || 0,
      gotIt = !!answeredFirst[item.kanji],
      wasTimedOut = !!timedOut[item.kanji],
      wasSkipped = !!skipped[item.kanji],
      needsReview = wasTimedOut || wasSkipped || !gotIt || tries > 1;
    return {
      item,
      key: `${item.kanji}::${i}`,
      index: i,
      tries,
      gotIt,
      timedOut: wasTimedOut,
      skipped: wasSkipped,
      needsReview,
    };
  });
}
function reviewStatus(entry) {
  if (entry.timedOut) return "Temps écoulé";
  if (entry.skipped) return "Passé";
  if (!entry.gotIt) return "Non répondu";
  if (entry.tries > 1) return `Réussi après ${entry.tries} tentatives`;
  return "Réussi au 1er essai";
}
function renderResults() {
  const mode = document.getElementById("resultSort").value;
  const entries = getReviewEntries();
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
  const box = document.getElementById("resultRows");
  box.replaceChildren();
  for (const entry of entries) {
    const row = document.createElement("div");
    row.className = "result-row" + (entry.needsReview ? " needs-review" : "");
    const label = document.createElement("label");
    label.className = "result-pick";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = reviewSelection.has(entry.key);
    cb.setAttribute(
      "aria-label",
      `Sélectionner ${entry.item.kanji} pour révision`
    );
    cb.addEventListener("change", () => {
      if (cb.checked) reviewSelection.add(entry.key);
      else reviewSelection.delete(entry.key);
      updateReviewSelectionControls();
    });
    const word = document.createElement("span");
    word.className = "result-word";
    const glyph = document.createElement("strong");
    glyph.style.fontSize = "1.3rem";
    glyph.textContent = entry.item.kanji;
    const reading = document.createElement("span");
    reading.className = "muted";
    reading.textContent = `${entry.item.meaning} · ${entry.item.readings}`;
    word.append(glyph, reading);
    label.append(cb, word);
    const status = document.createElement("span");
    status.className =
      "tag " + (entry.needsReview ? "review-bad" : "review-good");
    status.textContent = reviewStatus(entry);
    row.append(label, status);
    box.appendChild(row);
  }
  updateReviewSelectionControls();
}
function updateReviewSelectionControls() {
  const entries = getReviewEntries(),
    missed = entries.filter((e) => e.needsReview).length,
    selected = entries.filter((e) => reviewSelection.has(e.key)).length;
  document.getElementById(
    "reviewSelectionCount"
  ).textContent = `${missed} kanji à revoir · ${selected} sélectionné(s) pour la prochaine session.`;
  document.getElementById("replayMissedBtn").disabled = missed === 0;
  document.getElementById("replaySelectedBtn").disabled = selected === 0;
}
function replayDeck(items) {
  if (!items.length) {
    document.getElementById("reviewSelectionMessage").textContent =
      "Aucun kanji ne correspond à cette sélection.";
    return;
  }
  stopTimer();
  originalDeck = shuffle(items.map((item) => ({ ...item })));
  deck = [...originalDeck];
  index = 0;
  attempts = {};
  answeredFirst = {};
  timedOut = {};
  skipped = {};
  reviewSelection = new Set();
  firstTryCorrect = 0;
  active = true;
  document.getElementById("reviewSelectionMessage").textContent = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("game").style.display = "block";
  document
    .getElementById("game")
    .scrollIntoView({ behavior: "smooth", block: "start" });
  showCurrent();
}
function replayMissed() {
  replayDeck(
    getReviewEntries()
      .filter((e) => e.needsReview)
      .map((e) => e.item)
  );
}
function replaySelected() {
  replayDeck(
    getReviewEntries()
      .filter((e) => reviewSelection.has(e.key))
      .map((e) => e.item)
  );
}
function restartSame() {
  replayDeck(originalDeck);
}
function finishQuiz() {
  if (!active) return;
  stopTimer();
  active = false;
  document.getElementById("game").style.display = "none";
  document.getElementById("results").style.display = "block";
  const entries = getReviewEntries(),
    missed = entries.filter((e) => e.needsReview).length;
  document.getElementById(
    "summary"
  ).textContent = `Tu as travaillé ${originalDeck.length} kanji et réussi ${firstTryCorrect} au premier essai. ${missed} kanji sont à revoir : erreurs, plusieurs tentatives, passage ou temps écoulé.`;
  reviewSelection = new Set(
    entries.filter((e) => e.needsReview).map((e) => e.key)
  );
  document.getElementById("resultSort").value = "errors";
  renderResults();
  document.getElementById("progressBar").style.width = "100%";
  document
    .getElementById("results")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}
function backToSelection() {
  document.getElementById("results").style.display = "none";
  document
    .getElementById("selection")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}
