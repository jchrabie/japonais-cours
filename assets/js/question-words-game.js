(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const exercises = [
    {
      id: 1, course: 5, kana: "これは___ですか？", kanji: "これは___ですか？",
      fr: "Combien coûte ceci ?", answer: "いくら",
      options: ["どこ", "どれ", "いくつ", "いくら"],
      explanation: "いくら sert à demander un prix."
    },
    {
      id: 2, course: 5, kana: "駅は___ですか？", kanji: "駅は___ですか？",
      fr: "Où est la gare ?", answer: "どこ",
      options: ["どこ", "どれ", "なに", "いくら"],
      explanation: "どこ signifie « où ? ». La structure du cours est Nom + は + どこですか？"
    },
    {
      id: 3, course: 5, kana: "これは___ですか？", kanji: "これは___ですか？",
      fr: "Qu'est-ce que c'est ?", answer: "なん",
      options: ["なん", "どこ", "どれ", "いくつ"],
      explanation: "なんですか？ signifie « qu'est-ce que c'est ? ». On emploie なん devant です."
    },
    {
      id: 4, course: 5, kana: "___が好きですか？", kanji: "___が好きですか？",
      fr: "Qu'est-ce que tu aimes ?", answer: "なに",
      options: ["なに", "なん", "どこ", "いくら"],
      explanation: "On emploie なに devant が : なにが好きですか？"
    },
    {
      id: 5, course: 5, kana: "___を食べますか？", kanji: "___を食べますか？",
      fr: "Qu'est-ce que tu manges ?", answer: "なに",
      options: ["なに", "なん", "どこ", "いくら"],
      explanation: "On emploie なに devant を : なにを食べますか？"
    },
    {
      id: 6, course: 5, kana: "___の本ですか？", kanji: "___の本ですか？",
      fr: "Quel livre ? / C'est quel livre ?", answer: "なん",
      options: ["なん", "なに", "どこ", "いくら"],
      explanation: "なん s'emploie devant の : なんの本？"
    },
    {
      id: 7, course: 5, kana: "りんごを___買いますか？", kanji: "りんごを___買いますか？",
      fr: "Combien de pommes achètes-tu ?", answer: "いくつ",
      options: ["いくら", "いくつ", "どこ", "どれ"],
      explanation: "いくつ demande une quantité générale, sans compteur."
    },
    {
      id: 8, course: 5, kana: "ホテルは___にありますか？", kanji: "ホテルは___にありますか？",
      fr: "Où se trouve l'hôtel ?", answer: "どこ",
      options: ["どれ", "どこ", "なに", "いくら"],
      explanation: "どこ demande un lieu : どこにありますか？"
    },
    {
      id: 9, course: 5, kana: "___かかりますか？", kanji: "___かかりますか？",
      fr: "Environ combien de temps cela prend-il ?", answer: "どれぐらい",
      options: ["どれぐらい", "どこ", "なん", "いくら"],
      explanation: "どれぐらい / どれくらい sert à demander une durée, une distance ou une quantité approximative."
    },
    {
      id: 10, course: 5, kana: "___があなたのかばんですか？", kanji: "___があなたのかばんですか？",
      fr: "Quel sac est le tien ?", answer: "どれ",
      options: ["どれ", "どこ", "いくつ", "なん"],
      explanation: "どれ s'emploie seul pour demander « lequel ? » parmi plusieurs objets."
    },
    {
      id: 11, course: 5, kana: "___本を買いますか？", kanji: "___本を買いますか？",
      fr: "Quel livre achètes-tu ?", answer: "どの",
      options: ["どれ", "どの", "どこ", "なん"],
      explanation: "どの est placé devant un nom : どの本. À la différence de どれ, il ne s'emploie pas seul."
    },
    {
      id: 12, course: 5, kana: "これは___ですか？", kanji: "これは___ですか？",
      fr: "Lequel est-ce ?", answer: "どれ",
      options: ["どの", "どれ", "どこ", "いくら"],
      explanation: "どれ s'emploie seul pour demander « lequel ? ». どの doit être suivi d'un nom."
    },
    {
      id: 13, course: 5, kana: "___さいですか？", kanji: "___歳ですか？",
      fr: "Quel âge as-tu ?", answer: "なん",
      options: ["なに", "なん", "どこ", "どれ"],
      explanation: "Devant un compteur, on emploie なん : なんさいですか？"
    },
    {
      id: 14, course: 5, kana: "ここから駅まで___ですか？", kanji: "ここから駅まで___ですか？",
      fr: "Il y a environ combien (de distance) d'ici à la gare ?", answer: "どれぐらい",
      options: ["どれぐらい", "どこ", "いくら", "いくつ"],
      explanation: "どれぐらい / どれくらい permet de demander une distance approximative."
    },
    {
      id: 15, course: 5, kana: "___にんですか？", kanji: "___人ですか？",
      fr: "Vous êtes combien de personnes ?", answer: "なん",
      options: ["なに", "なん", "どれ", "いくら"],
      explanation: "Pour une quantité précise avec un compteur, le cours présente なん + compteur : なんにんですか？"
    },
    {
      id: 16, course: 5, kana: "___かありますか？", kanji: "___かありますか？",
      fr: "Y en a-t-il quelque chose ?", answer: "なに",
      options: ["なに", "どこ", "どれ", "いくら"],
      explanation: "なにか signifie « quelque chose ». C'est un dérivé de なに présenté dans le cours."
    }
  ];

  let queue = [];
  let index = 0;
  let score = 0;
  let selected = null;
  let results = [];
  let locked = false;

  const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);
  const current = () => queue[index];
  const mode = () => $("qwg-script").value;

  function start(source = exercises) {
    const course = $("qwg-course").value;
    const filtered = source.filter((item) => course === "all" || String(item.course) === course);
    if (!filtered.length) {
      $("qwg-setup-status").textContent = "Aucune question disponible pour ce cours.";
      return;
    }
    const count = $("qwg-count").value;
    queue = shuffle(filtered).slice(0, count === "all" ? filtered.length : Number(count));
    index = 0;
    score = 0;
    results = [];
    $("qwg-setup-status").textContent = "";
    $("qwg-results").hidden = true;
    $("qwg-session").hidden = false;
    render();
  }

  function render() {
    const item = current();
    selected = null;
    locked = false;
    $("qwg-counter").textContent = `Question ${index + 1} / ${queue.length}`;
    $("qwg-score").textContent = `${score} bonne${score > 1 ? "s" : ""} réponse${score > 1 ? "s" : ""}`;
    $("qwg-progress-fill").style.width = `${(index / queue.length) * 100}%`;
    $("qwg-course-label").textContent = `Cours ${item.course}`;
    $("qwg-translation").textContent = item.fr;
    $("qwg-sentence").textContent = (mode() === "kanji" ? item.kanji : item.kana).replace("___", "＿＿＿");
    $("qwg-feedback").textContent = "";
    $("qwg-feedback").className = "qwg-feedback";
    $("qwg-next").hidden = true;
    $("qwg-skip").hidden = false;

    const choices = $("qwg-choices");
    choices.replaceChildren();
    const legend = document.createElement("legend");
    legend.textContent = "Choisis le bon mot interrogatif";
    choices.appendChild(legend);
    shuffle(item.options).forEach((option) => {
      const label = document.createElement("label");
      label.className = "qwg-choice";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "qwg-answer";
      input.value = option;
      input.addEventListener("change", () => {
        selected = option;
        choices.querySelectorAll(".qwg-choice").forEach((node) => node.classList.toggle("is-selected", node.contains(input)));
        validate();
      });
      const text = document.createElement("span");
      text.lang = "ja";
      text.textContent = option;
      label.append(input, text);
      choices.appendChild(label);
    });
  }

  function validate() {
    if (locked || selected === null) return;
    locked = true;
    const item = current();
    const correct = selected === item.answer;
    if (correct) score++;
    results.push({ item, selected, correct });
    $("qwg-score").textContent = `${score} bonne${score > 1 ? "s" : ""} réponse${score > 1 ? "s" : ""}`;
    $("qwg-progress-fill").style.width = `${((index + 1) / queue.length) * 100}%`;
    $("qwg-choices").querySelectorAll("input").forEach((input) => {
      input.disabled = true;
      const label = input.closest(".qwg-choice");
      if (input.value === item.answer) label.classList.add("is-correct");
      else if (input.checked) label.classList.add("is-incorrect");
    });
    const feedback = $("qwg-feedback");
    feedback.className = `qwg-feedback ${correct ? "success" : "error"}`;
    feedback.textContent = correct
      ? `Bonne réponse ! ${item.explanation}`
      : `Pas tout à fait. La bonne réponse est ${item.answer}. ${item.explanation}`;
    $("qwg-skip").hidden = true;
    $("qwg-next").hidden = false;
    $("qwg-next").textContent = index === queue.length - 1 ? "Voir mon bilan →" : "Question suivante →";
  }

  function skip() {
    if (locked) return;
    results.push({ item: current(), selected: null, correct: false, skipped: true });
    next();
  }

  function next() {
    index++;
    if (index >= queue.length) finish();
    else render();
  }

  function finish() {
    $("qwg-session").hidden = true;
    $("qwg-results").hidden = false;
    $("qwg-summary").textContent = `${score} bonne${score > 1 ? "s" : ""} réponse${score > 1 ? "s" : ""} sur ${queue.length} (${Math.round((score / queue.length) * 100)} %).`;
    const list = $("qwg-result-list");
    list.replaceChildren();
    results.forEach(({ item, selected: answer, correct, skipped }) => {
      const row = document.createElement("div");
      row.className = "qwg-result-item";
      const title = document.createElement("strong");
      title.textContent = item.fr;
      const sentence = document.createElement("span");
      sentence.lang = "ja";
      sentence.textContent = `${item.kana.replace("___", item.answer)} · ${skipped ? "Passée" : correct ? "Correct" : `Ta réponse : ${answer}`}`;
      sentence.className = correct ? "good" : "bad";
      row.append(title, sentence);
      list.appendChild(row);
    });
    $("qwg-replay-errors").disabled = !results.some((result) => !result.correct);
  }

  $("qwg-start").addEventListener("click", () => start());
  $("qwg-skip").addEventListener("click", skip);
  $("qwg-next").addEventListener("click", next);
  $("qwg-restart").addEventListener("click", () => {
    $("qwg-session").hidden = true;
    $("qwg-results").hidden = true;
    start();
  });
  $("qwg-replay-errors").addEventListener("click", () => {
    const errors = results.filter((result) => !result.correct).map((result) => result.item);
    if (errors.length) start(errors);
  });
  $("qwg-script").addEventListener("change", () => {
    if (!$("qwg-session").hidden && !locked) render();
  });
})();
