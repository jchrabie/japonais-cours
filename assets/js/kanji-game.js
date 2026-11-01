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
    }, 1000);
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
