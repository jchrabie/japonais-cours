(() => {
  "use strict";
  const particleIds = {
    setup: "particle-setup",
    session: "particle-session",
    results: "particle-results"
  };
  const $ = (id) => document.getElementById(particleIds[id] || id);
  // Les phrases réutilisent les notions présentes dans les cours 1 à 4.
  // Chaque tableau "parts" contient les segments de texte et les particules à placer.
  const exercises = [
    {id:1,course:1,fr:"Je suis français.",kana:["わたし","は","フランスじん","です"],kanji:["私","は","フランス人","です"],romaji:["watashi","は","furansujin","desu"],parts:["わたし",null,"フランスじん","です"],answers:["は"],options:["は","が","を","の"]},
    {id:2,course:1,fr:"Est-ce que tu es étudiant ?",kana:["あなた","は","がくせい","です","か"],kanji:["あなた","は","学生","です","か"],romaji:["anata","は","gakusei","desu","か"],parts:["あなた",null,"がくせい","です",null],answers:["は","か"],options:["は","か","が","の"]},
    {id:3,course:2,fr:"Je mange des sushis.",kana:["わたし","は","すし","を","たべます"],kanji:["私","は","寿司","を","食べます"],romaji:["watashi","は","sushi","を","tabemasu"],parts:["わたし",null,"すし",null,"たべます"],answers:["は","を"],options:["は","を","が","の"]},
    {id:4,course:2,fr:"Le chat mange du poisson.",kana:["ねこ","は","さかな","を","たべます"],kanji:["猫","は","魚","を","食べます"],romaji:["neko","は","sakana","を","tabemasu"],parts:["ねこ",null,"さかな",null,"たべます"],answers:["は","を"],options:["は","を","が","か"]},
    {id:5,course:2,fr:"J'aime les chats.",kana:["わたし","は","ねこ","が","すき","です"],kanji:["私","は","猫","が","好き","です"],romaji:["watashi","は","neko","が","suki","desu"],parts:["わたし",null,"ねこ",null,"すき","です"],answers:["は","が"],options:["は","が","を","の"]},
    {id:6,course:2,fr:"Tu n'aimes pas le natto ?",kana:["あなた","は","なっとう","が","すき","じゃない","です","か"],kanji:["あなた","は","納豆","が","好き","じゃない","です","か"],romaji:["anata","は","nattou","が","suki","ja nai","desu","か"],parts:["あなた",null,"なっとう",null,"すき","じゃない","です",null],answers:["は","が","か"],options:["は","が","か","を","の"]},
    {id:7,course:3,fr:"Le livre de Marie est intéressant.",kana:["マリー","の","ほん","は","おもしろい","です"],kanji:["マリー","の","本","は","面白い","です"],romaji:["Mari","の","hon","は","omoshiroi","desu"],parts:["マリー",null,"ほん",null,"おもしろい","です"],answers:["の","は"],options:["の","は","が","を"]},
    {id:8,course:3,fr:"Le chien de mon ami est grand.",kana:["ともだち","の","いぬ","は","おおきい","です"],kanji:["友達","の","犬","は","大きい","です"],romaji:["tomodachi","の","inu","は","ookii","desu"],parts:["ともだち",null,"いぬ",null,"おおきい","です"],answers:["の","は"],options:["の","は","が","を"]},
    {id:9,course:3,fr:"Le téléphone de Nami est rose.",kana:["なみ","の","けいたい","は","ピンク","です"],kanji:["なみ","の","携帯","は","ピンク","です"],romaji:["Nami","の","keitai","は","pinku","desu"],parts:["なみ",null,"けいたい",null,"ピンク","です"],answers:["の","は"],options:["の","は","を","が"]},
    {id:10,course:3,fr:"Est-ce que le sac de Sasuke est noir ?",kana:["サスケ","の","かばん","は","くろい","です","か"],kanji:["サスケ","の","鞄","は","黒い","です","か"],romaji:["Sasuke","の","kaban","は","kuroi","desu","か"],parts:["サスケ",null,"かばん",null,"くろい","です",null],answers:["の","は","か"],options:["の","は","か","が","を"]},
    {id:11,course:2,fr:"Le professeur boit de l'eau.",kana:["せんせい","は","みず","を","のみます"],kanji:["先生","は","水","を","飲みます"],romaji:["sensei","は","mizu","を","nomimasu"],parts:["せんせい",null,"みず",null,"のみます"],answers:["は","を"],options:["は","を","が","の"]},
    {id:12,course:2,fr:"Je regarde un film.",kana:["わたし","は","えいが","を","みます"],kanji:["私","は","映画","を","見ます"],romaji:["watashi","は","eiga","を","mimasu"],parts:["わたし",null,"えいが",null,"みます"],answers:["は","を"],options:["は","を","が","か"]},
    {id:13,course:2,fr:"Est-ce que tu lis un livre ?",kana:["あなた","は","ほん","を","よみます","か"],kanji:["あなた","は","本","を","読みます","か"],romaji:["anata","は","hon","を","yomimasu","か"],parts:["あなた",null,"ほん",null,"よみます",null],answers:["は","を","か"],options:["は","を","か","が","の"]},
    {id:14,course:3,fr:"Le chat de ma sœur est mignon.",kana:["あね","の","ねこ","は","かわいい","です"],kanji:["姉","の","猫","は","可愛い","です"],romaji:["ane","の","neko","は","kawaii","desu"],parts:["あね",null,"ねこ",null,"かわいい","です"],answers:["の","は"],options:["の","は","が","を"]},
    {id:15,course:3,fr:"Le nom de ce chien est Pochi.",kana:["この","いぬ","の","なまえ","は","ポチ","です"],kanji:["この","犬","の","名前","は","ポチ","です"],romaji:["kono","inu","の","namae","は","Pochi","desu"],parts:["この","いぬ",null,"なまえ",null,"ポチ","です"],answers:["の","は"],options:["の","は","が","を"]},
    {id:16,course:2,fr:"Le chien aime la viande.",kana:["いぬ","は","にく","が","すき","です"],kanji:["犬","は","肉","が","好き","です"],romaji:["inu","は","niku","が","suki","desu"],parts:["いぬ",null,"にく",null,"すき","です"],answers:["は","が"],options:["は","が","を","の"]},
    {id:17,course:2,fr:"Je n'écoute pas de musique.",kana:["わたし","は","おんがく","を","ききません"],kanji:["私","は","音楽","を","聞きません"],romaji:["watashi","は","ongaku","を","kikimasen"],parts:["わたし",null,"おんがく",null,"ききません"],answers:["は","を"],options:["は","を","が","か"]},
    {id:18,course:4,fr:"Je n'achète pas de livre.",kana:["わたし","は","ほん","を","かいません"],kanji:["私","は","本","を","買いません"],romaji:["watashi","は","hon","を","kaimasen"],parts:["わたし",null,"ほん",null,"かいません"],answers:["は","を"],options:["は","を","が","の"]},
    {id:19,course:4,fr:"Est-ce que tu manges des ramens ?",kana:["あなた","は","ラーメン","を","たべます","か"],kanji:["あなた","は","ラーメン","を","食べます","か"],romaji:["anata","は","raamen","を","tabemasu","か"],parts:["あなた",null,"ラーメン",null,"たべます",null],answers:["は","を","か"],options:["は","を","か","が","の"]},
    {id:20,course:4,fr:"Le professeur ne boit pas de café.",kana:["せんせい","は","コーヒー","を","のみません"],kanji:["先生","は","コーヒー","を","飲みません"],romaji:["sensei","は","koohii","を","nomimasen"],parts:["せんせい",null,"コーヒー",null,"のみません"],answers:["は","を"],options:["は","を","が","か"]},
    {id:21,course:4,fr:"Est-ce que le livre de Yuki est intéressant ?",kana:["ゆき","の","ほん","は","おもしろい","です","か"],kanji:["ゆき","の","本","は","面白い","です","か"],romaji:["Yuki","の","hon","は","omoshiroi","desu","か"],parts:["ゆき",null,"ほん",null,"おもしろい","です",null],answers:["の","は","か"],options:["の","は","か","が","を"]},
    {id:22,course:4,fr:"Je fais la cuisine.",kana:["わたし","は","りょうり","を","します"],kanji:["私","は","料理","を","します"],romaji:["watashi","は","ryouri","を","shimasu"],parts:["わたし",null,"りょうり",null,"します"],answers:["は","を"],options:["は","を","が","の"]},
    {id:23,course:4,fr:"Est-ce que tu écris une lettre ?",kana:["あなた","は","てがみ","を","かきます","か"],kanji:["あなた","は","手紙","を","書きます","か"],romaji:["anata","は","tegami","を","kakimasu","か"],parts:["あなた",null,"てがみ",null,"かきます",null],answers:["は","を","か"],options:["は","を","か","が","の"]},
    {id:24,course:4,fr:"Le chat de Nami ne mange pas de poisson.",kana:["なみ","の","ねこ","は","さかな","を","たべません"],kanji:["なみ","の","猫","は","魚","を","食べません"],romaji:["Nami","の","neko","は","sakana","を","tabemasen"],parts:["なみ",null,"ねこ",null,"さかな",null,"たべません"],answers:["の","は","を"],options:["の","は","を","が","か"]},
    {id:25,course:5,fr:"Je me lève à sept heures du matin.",kana:["わたし","は","ごぜんしちじ","に","おきます"],kanji:["私","は","午前七時","に","起きます"],romaji:["watashi","は","gozen shichi ji","に","okimasu"],parts:["わたし",null,"ごぜんしちじ",null,"おきます"],answers:["は","に"],options:["は","に","で","を","が"]},
    {id:26,course:5,fr:"Je cuisine à sept heures du soir.",kana:["わたし","は","ごごしちじ","に","りょうりします"],kanji:["私","は","午後七時","に","料理します"],romaji:["watashi","は","gogo shichi ji","に","ryouri shimasu"],parts:["わたし",null,"ごごしちじ",null,"りょうりします"],answers:["は","に"],options:["は","に","で","を","が"]},
    {id:27,course:5,fr:"Combien coûte ce ticket-ci ?",kana:["この","きっぷ","は","いくら","です","か"],kanji:["この","切符","は","いくら","です","か"],romaji:["kono","kippu","は","ikura","desu","か"],parts:["この","きっぷ",null,"いくら","です",null],answers:["は","か"],options:["は","か","が","を","に"]},
    {id:28,course:5,fr:"J’achète ce ticket-ci.",kana:["わたし","は","この","きっぷ","を","かいます"],kanji:["私","は","この","切符","を","買います"],romaji:["watashi","は","kono","kippu","を","kaimasu"],parts:["わたし",null,"この","きっぷ",null,"かいます"],answers:["は","を"],options:["は","を","が","の","に"]},
    {id:29,course:5,fr:"Je vais à la gare.",kana:["わたし","は","えき","に","いきます"],kanji:["私","は","駅","に","行きます"],romaji:["watashi","は","eki","に","ikimasu"],parts:["わたし",null,"えき",null,"いきます"],answers:["は","に"],options:["は","に","で","を","が"]},
  ];

  let queue = [], index = 0, score = 0, selectedChip = null, results = [], current = null, resolved = false;
  let autoAdvanceTimer = null;
  const shuffle = (items) => [...items].sort(() => Math.random() - .5);
  const mode = () => $("script-mode").value;
  const displayParts = (item) => item[mode()];
  const filled = new Map();
  const used = new Set();

  function start(source = exercises) {
    const course = $("course-filter").value;
    const filtered = source.filter((item) => course === "all" || String(item.course) === course);
    if (!filtered.length) { $("setup-status").textContent = "Aucune phrase pour ce cours."; return; }
    const count = $("question-count").value;
    queue = shuffle(filtered).slice(0, count === "all" ? filtered.length : Number(count));
    index = 0; score = 0; results = [];
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
    $("result-summary").textContent = `${score} / ${queue.length} phrases entièrement correctes (${Math.round(score / queue.length * 100)} %).`;
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
