/* Exercice grammatical généré à partir des mots des glossaires existants. */
(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const find = (list, id) => {
    const entry = list.find((item) => item.id === id);
    if (!entry) throw new Error(`Entrée de glossaire introuvable : ${id}`);
    return entry;
  };

  // Les entrées sont référencées par leur identifiant dans vocabulary-data.js :
  // aucun mot lexical n'est redéfini dans ce fichier.
  const A = (id) => find(adj, id);
  const N = (id) => find(noms, id);
  const V = (id) => find(verbes, id);
  const politeKana = {
    "verbes-001": "たべます",
    "verbes-002": "のみます",
    "verbes-003": "よみます",
    "verbes-004": "みます",
    "verbes-005": "かいます",
    "verbes-006": "べんきょうします",
    "verbes-007": "たたかいます",
    "verbes-008": "いきます",
    "verbes-009": "はしります",
    "verbes-010": "ねます",
    "verbes-011": "きります",
    "verbes-012": "します",
    "verbes-013": "よやくします",
    "verbes-014": "りょうりします",
    "verbes-015": "りょこうします"
  };

  const form = (entry, script) => script === "kana" ? entry.kana : entry.kanji;

  const kanaToRomaji = (value) => {
    const pairs = {
      "きゃ":"kya","きゅ":"kyu","きょ":"kyo","しゃ":"sha","しゅ":"shu","しょ":"sho",
      "ちゃ":"cha","ちゅ":"chu","ちょ":"cho","にゃ":"nya","にゅ":"nyu","にょ":"nyo",
      "ひゃ":"hya","ひゅ":"hyu","ひょ":"hyo","みゃ":"mya","みゅ":"myu","みょ":"myo",
      "りゃ":"rya","りゅ":"ryu","りょ":"ryo","ぎゃ":"gya","ぎゅ":"gyu","ぎょ":"gyo",
      "じゃ":"ja","じゅ":"ju","じょ":"jo","びゃ":"bya","びゅ":"byu","びょ":"byo",
      "ぴゃ":"pya","ぴゅ":"pyu","ぴょ":"pyo","てぃ":"ti","でぃ":"di","ふぁ":"fa","ふぃ":"fi","ふぇ":"fe","ふぉ":"fo",
      "あ":"a","い":"i","う":"u","え":"e","お":"o","か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko",
      "さ":"sa","し":"shi","す":"su","せ":"se","そ":"so","た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to",
      "な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no","は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho",
      "ま":"ma","み":"mi","む":"mu","め":"me","も":"mo","や":"ya","ゆ":"yu","よ":"yo",
      "ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro","わ":"wa","を":"o","ん":"n",
      "が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go","ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo",
      "だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do","ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo",
      "ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po","ぁ":"a","ぃ":"i","ぅ":"u","ぇ":"e","ぉ":"o",
      "ゃ":"ya","ゅ":"yu","ょ":"yo","っ":""
    };
    const input = String(value || "").replace(/[ァ-ヶ]/g, (char) =>
      String.fromCharCode(char.charCodeAt(0) - 0x60));
    let output = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (char === "っ") {
        const next = input.slice(i + 1).match(/^(きゃ|きゅ|きょ|しゃ|しゅ|しょ|ちゃ|ちゅ|ちょ|[ぁ-ん])/u)?.[0];
        const roman = next ? pairs[next] || pairs[next[0]] : "";
        output += roman ? roman[0] : "";
        continue;
      }
      const pair = input.slice(i, i + 2);
      if (pairs[pair]) { output += pairs[pair]; i++; continue; }
      if (char === "ー") {
        const lastVowel = output.match(/[aeiou](?!.*[aeiou])/u)?.[0];
        output += lastVowel || "";
        continue;
      }
      output += pairs[char] ?? char;
    }
    return output;
  };

  const japaneseEntries = [...adj, ...noms, ...verbes]
    .filter((entry) => entry.kanji && entry.kana && /[一-龯々]/u.test(entry.kanji));

  // Construit des associations lecture/kanji segment par segment. Les kana
  // déjà présents dans l'orthographe restent du texte normal et ne reçoivent
  // jamais de furigana.
  function rubySegments(spelling, reading) {
    const tokens = spelling.match(/[一-龯々]+|[ぁ-ゖァ-ヶー]+|[^一-龯々ぁ-ゖァ-ヶー]+/gu) || [];
    const segments = [];
    let readingIndex = 0;
    for (let tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
      const token = tokens[tokenIndex];
      if (!/[一-龯々]/u.test(token)) {
        // Les kana de l'orthographe servent d'ancrage dans la lecture.
        const anchor = token.match(/[ぁ-ゖァ-ヶー]+/u)?.[0];
        if (anchor) {
          const found = reading.indexOf(anchor, readingIndex);
          if (found !== -1) readingIndex = found + anchor.length;
        }
        continue;
      }

      let nextKana = "";
      for (let next = tokenIndex + 1; next < tokens.length; next++) {
        const anchor = tokens[next].match(/[ぁ-ゖァ-ヶー]+/u)?.[0];
        if (anchor) { nextKana = anchor; break; }
      }

      if (nextKana) {
        const found = reading.indexOf(nextKana, readingIndex);
        if (found !== -1) {
          const segmentReading = reading.slice(readingIndex, found);
          if (segmentReading) segments.push({ text: token, reading: segmentReading });
          readingIndex = found;
        } else {
          // Repli pour les lectures irrégulières : ne pas annoter l'orthographe entière.
          segments.push({ text: token, reading: "" });
        }
      } else {
        const segmentReading = reading.slice(readingIndex);
        if (segmentReading) segments.push({ text: token, reading: segmentReading });
        readingIndex = reading.length;
      }
    }
    return segments.filter((segment) => segment.reading);
  }

  const rubyEntries = [];
  for (const entry of japaneseEntries) {
    rubyEntries.push(...rubySegments(entry.kanji, entry.kana));
    // Dans les formes négatives, la terminaison い devient くない :
    // le radical en kanji conserve donc sa lecture.
    if ((entry.typeAdjectif || "").startsWith("い") && entry.kanji.endsWith("い") && entry.kana.endsWith("い")) {
      rubyEntries.push({
        text: entry.kanji.slice(0, -1),
        reading: entry.kana.slice(0, -1)
      });
    }
  }
  const uniqueRubyEntries = [...new Map(
    rubyEntries.filter((entry) => /^[一-龯々]+$/u.test(entry.text) && /^[ぁ-ゖァ-ヶー]+$/u.test(entry.reading))
      .map((entry) => [`${entry.text}|${entry.reading}`, entry])
  ).values()].sort((a, b) => b.text.length - a.text.length);

  function renderJapanese(element, value) {
    const text = String(value ?? "");
    element.replaceChildren();
    if (displayScript !== "kanji") {
      element.textContent = text;
      return;
    }
    let index = 0;
    while (index < text.length) {
      // Un furigana ne peut porter que sur une séquence de kanji contigus.
      // Les okurigana (hiragana attachés au mot) restent toujours hors de ruby.
      const match = uniqueRubyEntries.find((entry) =>
        text.startsWith(entry.text, index)
        && /^[一-龯々]+$/u.test(entry.text)
      );
      if (!match) {
        element.append(document.createTextNode(text[index]));
        index++;
        continue;
      }
      const ruby = document.createElement("ruby");
      ruby.append(document.createTextNode(match.text));
      const rt = document.createElement("rt");
      rt.textContent = match.reading;
      ruby.append(rt);
      element.append(ruby);
      index += match.text.length;
    }
  }

  function displayedJapanese(build, script, register) {
    const sourceScript = script === "romaji" ? "kana" : script;
    const value = build(sourceScript, register);
    return script === "romaji" ? kanaToRomaji(value) : value;
  }
  const noun = (id, script) => form(N(id), script);
  const adjective = (id, script) => form(A(id), script);
  const adjectiveBeforeNoun = (adjId, nounId, script) => {
    const entry = A(adjId);
    const isNa = (entry.typeAdjectif || "").startsWith("な");
    return `${form(entry, script)}${isNa ? "な" : ""}${noun(nounId, script)}`;
  };
  const particle = (key) => ({ topic: "は", subjectOfLike: "が", object: "を", possessive: "の" })[key];
  const verb = (id, script, register) => {
    const entry = V(id);
    if (register !== "polite") return form(entry, script);
    if (script === "kana") return politeKana[id] || entry.kana;
    return (entry.formePolie || "").split(" (")[0] || entry.kanji;
  };
  const displaySukiOrKirai = (liked, script) => adjective(liked ? "adj-015" : "adj-016", script);
  const sukiNegative = (script, register, politeEnding = "じゃないです") =>
    `${adjective("adj-015", script)}${register === "polite" ? politeEnding : "じゃない"}`;
  const intensifiedSukiOrKirai = (liked, script) =>
    `${script === "kana" ? "だい" : "大"}${adjective(liked ? "adj-015" : "adj-016", script)}`;
  const addCopula = (base, register, type = "desu") => {
    if (type === "na-predicate") return `${base}${register === "polite" ? "です" : "だ"}`;
    if (type === "na-negative") return `${base}じゃない${register === "polite" ? "です" : ""}`;
    if (type === "i-negative") return `${base}${register === "polite" ? "です" : ""}`;
    return `${base}${register === "polite" ? "です" : ""}`;
  };
  const negativeAdjectiveI = (id, script) => id === "adj-049"
    ? "よくない"
    : form(A(id), script).replace(/い$/u, "くない");
  const adjectiveBeforeNounNegative = (adjId, nounId, script) => {
    const entry = A(adjId);
    const isNa = (entry.typeAdjectif || "").startsWith("な");
    const base = form(entry, script);
    const negative = isNa ? `${base}じゃない` : negativeAdjectiveI(adjId, script);
    return `${negative}${noun(nounId, script)}`;
  };
  const nominalNegative = (id, script, register) => `${noun(id, script)}${register === "polite" ? "じゃありません" : "じゃない"}`;

  function makeSentence(id, french, build) {
    return {
      id,
      french,
      japanese(script, register) { return displayedJapanese(build, script, register); }
    };
  }

  const sentences = [
    makeSentence("likes-pretty-cat", "Le beau chat aime les sushis.", (s, r) =>
      `${adjectiveBeforeNoun("adj-013", "noms-025", s)}は${noun("noms-017", s)}${particle("subjectOfLike")}${displaySukiOrKirai(true, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("does-not-like-sushi", "Je n’aime pas les sushis.", (s, r) =>
      `${noun("noms-043", s)}は${noun("noms-017", s)}が${sukiNegative(s, r, "じゃないです")}`),
    makeSentence("hates-vegetables", "Je déteste les légumes.", (s, r) =>
      `${noun("noms-043", s)}は${noun("noms-047", s)}が${displaySukiOrKirai(false, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("really-hates-rain", "Je déteste vraiment la pluie.", (s, r) =>
      `${noun("noms-043", s)}は${noun("noms-027", s)}が${intensifiedSukiOrKirai(false, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("adores-cats", "J’adore les chats.", (s, r) =>
      `${noun("noms-043", s)}は${noun("noms-025", s)}が${intensifiedSukiOrKirai(true, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("read-interesting-manga", "Je lis un manga intéressant.", (s, r) =>
      `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-017", "noms-041", s)}${particle("object")}${verb("verbes-003", s, r)}`),
    makeSentence("eat-delicious-ramen", "Je mange des ramen délicieux.", (s, r) =>
      `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-024", "noms-018", s)}${particle("object")}${verb("verbes-001", s, r)}`),
    makeSentence("drink-water", "Je bois de l’eau.", (s, r) =>
      `${noun("noms-043", s)}は${noun("noms-037", s)}${particle("object")}${verb("verbes-002", s, r)}`),
    makeSentence("buy-new-book", "J’achète un livre neuf.", (s, r) =>
      `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-036", "noms-005", s)}${particle("object")}${verb("verbes-005", s, r)}`),
    makeSentence("watch-famous-film", "Je regarde un film célèbre.", (s, r) =>
      `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-006", "noms-013", s)}${particle("object")}${verb("verbes-004", s, r)}`),
    makeSentence("film-interesting", "Le film est intéressant.", (s, r) =>
      addCopula(`${noun("noms-013", s)}は${adjective("adj-017", s)}`, r)),
    makeSentence("film-not-interesting", "Le film n’est pas intéressant.", (s, r) => {
      const adj = A("adj-017");
      const negKana = `${adj.kana.replace(/い$/, "くない")}`;
      const negKanji = `${adj.kanji.replace(/い$/, "くない")}`;
      return addCopula(`${noun("noms-013", s)}は${s === "kana" ? negKana : negKanji}`, r, "i-negative");
    }),
    makeSentence("anime-not-strange", "L’animé n’est pas bizarre.", (s, r) =>
      addCopula(`${noun("noms-035", s)}は${adjective("adj-005", s)}`, r, "na-negative")),
    makeSentence("not-good-at-japanese", "Je ne suis pas doué en japonais.", (s, r) =>
      addCopula(`${noun("noms-043", s)}は${noun("noms-008", s)}が${adjective("adj-001", s)}`, r, "na-negative")),
    makeSentence("room-not-quiet", "La pièce n’est pas calme.", (s, r) =>
      addCopula(`${noun("noms-010", s)}は${adjective("adj-011", s)}`, r, "na-negative")),
    makeSentence("room-quiet", "La pièce est calme.", (s, r) =>
      addCopula(`${noun("noms-010", s)}は${adjective("adj-011", s)}`, r, "na-predicate")),
    makeSentence("cat-small", "Le chat est petit.", (s, r) =>
      addCopula(`${noun("noms-025", s)}は${adjective("adj-033", s)}`, r)),
    makeSentence("dog-big", "Le chien est grand.", (s, r) =>
      addCopula(`${noun("noms-026", s)}は${adjective("adj-034", s)}`, r)),
    makeSentence("book-old", "Le livre est vieux.", (s, r) =>
      addCopula(`${noun("noms-005", s)}は${adjective("adj-037", s)}`, r)),
    makeSentence("black-onigiri-delicious", "Les onigiris noirs sont délicieux.", (s, r) =>
      addCopula(`${adjectiveBeforeNoun("adj-065", "noms-040", s)}は${adjective("adj-024", s)}`, r)),
    makeSentence("drink-coffee", "Je bois du café.", (s, r) =>
      `${noun("noms-043", s)}は${noun("noms-019", s)}${particle("object")}${verb("verbes-002", s, r)}`),
    makeSentence("study-japanese", "J’étudie le japonais.", (s, r) =>
      `${noun("noms-043", s)}は${noun("noms-008", s)}${particle("object")}${verb("verbes-006", s, r)}`),
    makeSentence("watch-strange-anime", "Je regarde un animé bizarre.", (s, r) =>
      `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-005", "noms-035", s)}${particle("object")}${verb("verbes-004", s, r)}`),
    makeSentence("read-old-book", "Je lis un vieux livre.", (s, r) =>
      `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-037", "noms-005", s)}${particle("object")}${verb("verbes-003", s, r)}`),
    makeSentence("ramen-delicious", "Les ramen sont délicieux.", (s, r) =>
      addCopula(`${noun("noms-018", s)}は${adjective("adj-024", s)}`, r)),
    makeSentence("dog-likes-sushi", "Le chien aime les sushis.", (s, r) =>
      `${noun("noms-026", s)}は${noun("noms-017", s)}${particle("subjectOfLike")}${displaySukiOrKirai(true, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("cat-does-not-like-coffee", "Le chat n’aime pas le café.", (s, r) =>
      `${noun("noms-025", s)}は${noun("noms-019", s)}が${sukiNegative(s, r, "じゃありません")}`),
    makeSentence("cat-hates-rain", "Le chat déteste la pluie.", (s, r) =>
      `${noun("noms-025", s)}は${noun("noms-027", s)}が${displaySukiOrKirai(false, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("film-interesting-question", "Le film est-il intéressant ?", (s, r) =>
      `${noun("noms-013", s)}は${adjective("adj-017", s)}${r === "polite" ? "です" : ""}か`),
    makeSentence("anime-strange-question", "L’animé est-il bizarre ?", (s, r) =>
      `${noun("noms-035", s)}は${adjective("adj-005", s)}${r === "polite" ? "です" : ""}か`),
    makeSentence("japanese-skill-question", "Es-tu doué en japonais ?", (s, r) =>
      `${noun("noms-008", s)}が${adjective("adj-001", s)}${r === "polite" ? "です" : ""}か`),
    makeSentence("study-japanese-question", "Étudies-tu le japonais ?", (s, r) =>
      `${noun("noms-008", s)}を${verb("verbes-006", s, r)}か`),
    makeSentence("cat-likes-sushi-question", "Le chat aime-t-il les sushis ?", (s, r) =>
      `${noun("noms-025", s)}は${noun("noms-017", s)}が${displaySukiOrKirai(true, s)}${r === "polite" ? "です" : ""}か`),
    makeSentence("course1-japanese-person", "Je suis japonais.", (s, r) => `${noun("noms-001", s)}${r === "polite" ? "です" : "だ"}`),
    makeSentence("course1-student", "Je suis étudiant.", (s, r) => `${noun("noms-003", s)}${r === "polite" ? "です" : "だ"}`),
    makeSentence("course1-not-teacher", "Je ne suis pas professeur.", (s, r) => `${noun("noms-004", s)}${r === "polite" ? "じゃありません" : "じゃない"}`),
    makeSentence("town-quiet", "La ville est calme.", (s, r) => addCopula(`${noun("noms-012", s)}は${adjective("adj-011", s)}`, r, "na-predicate")),
    makeSentence("town-not-quiet", "La ville n’est pas calme.", (s, r) => addCopula(`${noun("noms-012", s)}は${adjective("adj-011", s)}`, r, "na-negative")),
    makeSentence("course1-country", "Je suis français(e).", (s, r) =>
      `${noun("noms-043", s)}は${noun("noms-009", s)}${r === "polite" ? "です" : "だ"}`),
    makeSentence("course1-manga-question", "Le manga est-il intéressant ?", (s, r) =>
      `${noun("noms-041", s)}は${adjective("adj-017", s)}${r === "polite" ? "です" : ""}か`),
    makeSentence("course1-manga-statement", "Le manga est intéressant.", (s, r) =>
      addCopula(`${noun("noms-041", s)}は${adjective("adj-017", s)}`, r)),
    makeSentence("course1-kawaii-cat", "Le chat est mignon.", (s, r) =>
      addCopula(`${noun("noms-025", s)}は${adjective("adj-067", s)}`, r)),
    makeSentence("course1-pan-question", "Manges-tu du pain ?", (s, r) =>
      `${noun("noms-071", s)}を${verb("verbes-001", s, r)}か`),
    makeSentence("course1-go-school", "Je vais à l’école.", (s, r) =>
      `${noun("noms-043", s)}は${noun("noms-065", s)}に${verb("verbes-008", s, r)}`),
    makeSentence("course1-ninja-fights", "Le ninja combat.", (s, r) =>
      `${noun("noms-075", s)}は${verb("verbes-007", s, r)}`),
    makeSentence("course2-drink-milk", "Je bois du lait.", (s, r) =>
      `${noun("noms-043", s)}は${noun("noms-046", s)}${particle("object")}${verb("verbes-002", s, r)}`),
    makeSentence("course2-buy-meat", "J’achète de la viande.", (s, r) =>
      `${noun("noms-043", s)}は${noun("noms-038", s)}${particle("object")}${verb("verbes-005", s, r)}`),
    makeSentence("course2-buy-beautiful-fish", "J’achète un beau poisson.", (s, r) =>
      `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-013", "noms-048", s)}${particle("object")}${verb("verbes-005", s, r)}`),
    makeSentence("course2-blue-sword", "J’achète un sabre bleu.", (s, r) =>
      `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-062", "noms-078", s)}${particle("object")}${verb("verbes-005", s, r)}`),
    makeSentence("course2-red-mountain", "Je regarde une montagne rouge.", (s, r) =>
      `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-061", "noms-079", s)}${particle("object")}${verb("verbes-004", s, r)}`),
    makeSentence("course2-like-cats", "J’aime les chats.", (s, r) => `${noun("noms-025", s)}が${displaySukiOrKirai(true, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("course2-hate-rain", "Je déteste la pluie.", (s, r) => `${noun("noms-027", s)}が${displaySukiOrKirai(false, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("course2-not-like-vegetables", "Je n’aime pas les légumes.", (s, r) => `${noun("noms-047", s)}が${sukiNegative(s, r, "じゃないです")}`),
    makeSentence("course2-like-coffee", "J’aime le café.", (s, r) => `${noun("noms-019", s)}が${displaySukiOrKirai(true, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("course2-what-do-you-like", "Qu’est-ce que tu aimes ?", (s, r) => `${noun("noms-042", s)}が${displaySukiOrKirai(true, s)}${r === "polite" ? "です" : ""}か`),
    makeSentence("course1-not-student", "Je ne suis pas étudiant.", (s, r) => nominalNegative("noms-003", s, r)),
    makeSentence("course1-teacher", "Je suis professeur.", (s, r) => `${noun("noms-004", s)}${r === "polite" ? "です" : "だ"}`),
    makeSentence("course1-not-japanese", "Je ne suis pas japonais.", (s, r) => nominalNegative("noms-001", s, r)),
    makeSentence("course1-not-french", "Je ne suis pas français(e).", (s, r) => `${noun("noms-043", s)}は${nominalNegative("noms-009", s, r)}`),
    makeSentence("course1-cat-not-small", "Le chat n’est pas petit.", (s, r) => addCopula(`${noun("noms-025", s)}は${negativeAdjectiveI("adj-033", s)}`, r, "i-negative")),
    makeSentence("course1-dog-not-big", "Le chien n’est pas grand.", (s, r) => addCopula(`${noun("noms-026", s)}は${negativeAdjectiveI("adj-034", s)}`, r, "i-negative")),
    makeSentence("course1-book-not-old", "Le livre n’est pas vieux.", (s, r) => addCopula(`${noun("noms-005", s)}は${negativeAdjectiveI("adj-037", s)}`, r, "i-negative")),
    makeSentence("course1-book-good", "Le livre est bon.", (s, r) => addCopula(`${noun("noms-005", s)}は${adjective("adj-049", s)}`, r)),
    makeSentence("course1-book-not-good", "Le livre n’est pas bon.", (s, r) => addCopula(`${noun("noms-005", s)}は${negativeAdjectiveI("adj-049", s)}`, r, "i-negative")),
    makeSentence("course1-manga-not-interesting", "Le manga n’est pas intéressant.", (s, r) => addCopula(`${noun("noms-041", s)}は${negativeAdjectiveI("adj-017", s)}`, r, "i-negative")),
    makeSentence("course1-japanese-difficult", "Le japonais est difficile.", (s, r) => addCopula(`${noun("noms-008", s)}は${adjective("adj-020", s)}`, r)),
    makeSentence("course1-japanese-not-difficult", "Le japonais n’est pas difficile.", (s, r) => addCopula(`${noun("noms-008", s)}は${negativeAdjectiveI("adj-020", s)}`, r, "i-negative")),
    makeSentence("course1-cat-not-cute", "Le chat n’est pas mignon.", (s, r) => addCopula(`${noun("noms-025", s)}は${negativeAdjectiveI("adj-067", s)}`, r, "i-negative")),
    makeSentence("course1-cat-big", "Le chat est grand.", (s, r) => addCopula(`${noun("noms-025", s)}は${adjective("adj-034", s)}`, r)),
    makeSentence("course1-student-question", "Es-tu étudiant ?", (s, r) => `${noun("noms-003", s)}${r === "polite" ? "です" : ""}か`),
    makeSentence("course1-country-question", "Es-tu français(e) ?", (s, r) => `${noun("noms-043", s)}は${noun("noms-009", s)}${r === "polite" ? "です" : ""}か`),
    makeSentence("course2-not-like-cats", "Je n’aime pas les chats.", (s, r) => `${noun("noms-025", s)}が${sukiNegative(s, r)}`),
    makeSentence("course2-not-like-ramen", "Je n’aime pas les ramen.", (s, r) => `${noun("noms-018", s)}が${sukiNegative(s, r)}`),
    makeSentence("course2-love-ramen", "J’adore les ramen.", (s, r) => `${noun("noms-018", s)}が${intensifiedSukiOrKirai(true, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("course2-really-hate-coffee", "Je déteste vraiment le café.", (s, r) => `${noun("noms-019", s)}が${intensifiedSukiOrKirai(false, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("course2-not-hate-vegetables", "Je ne déteste pas les légumes.", (s, r) => `${noun("noms-047", s)}が${adjective("adj-016", s)}じゃない${r === "polite" ? "です" : ""}`),
    makeSentence("course2-love-music", "J’adore la musique.", (s, r) => `${noun("noms-020", s)}が${intensifiedSukiOrKirai(true, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("course2-hate-study", "Je déteste étudier.", (s, r) => `${noun("noms-031", s)}が${displaySukiOrKirai(false, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("course2-love-anime", "J’adore les animés.", (s, r) => `${noun("noms-035", s)}が${intensifiedSukiOrKirai(true, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("course2-not-like-anime", "Je n’aime pas les animés.", (s, r) => `${noun("noms-035", s)}が${sukiNegative(s, r)}`),
    makeSentence("course2-read-book", "Je lis un livre.", (s, r) => `${noun("noms-043", s)}は${noun("noms-005", s)}を${verb("verbes-003", s, r)}`),
    makeSentence("course2-eat-onigiri", "Je mange un onigiri.", (s, r) => `${noun("noms-043", s)}は${noun("noms-040", s)}を${verb("verbes-001", s, r)}`),
    makeSentence("course2-watch-film", "Je regarde un film.", (s, r) => `${noun("noms-043", s)}は${noun("noms-013", s)}を${verb("verbes-004", s, r)}`),
    makeSentence("course2-buy-fish", "J’achète du poisson.", (s, r) => `${noun("noms-043", s)}は${noun("noms-048", s)}を${verb("verbes-005", s, r)}`),
    makeSentence("course2-drink-beer", "Je bois de la bière.", (s, r) => `${noun("noms-043", s)}は${noun("noms-076", s)}を${verb("verbes-002", s, r)}`),
    makeSentence("course2-buy-not-new-book", "J’achète un livre qui n’est pas neuf.", (s, r) => `${noun("noms-043", s)}は${negativeAdjectiveI("adj-036", s)}${noun("noms-005", s)}を${verb("verbes-005", s, r)}`),
    makeSentence("course2-buy-not-blue-sword", "J’achète un sabre qui n’est pas bleu.", (s, r) => `${noun("noms-043", s)}は${negativeAdjectiveI("adj-062", s)}${noun("noms-078", s)}を${verb("verbes-005", s, r)}`),
    makeSentence("course2-drink-delicious-coffee", "Je bois un café délicieux.", (s, r) => `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-024", "noms-019", s)}を${verb("verbes-002", s, r)}`),
    makeSentence("course2-love-travel", "J’aime voyager.", (s, r) => `${noun("noms-023", s)}が${displaySukiOrKirai(true, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("course2-hate-work", "Je déteste le travail.", (s, r) => `${noun("noms-030", s)}が${displaySukiOrKirai(false, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("course2-love-games", "J’adore les jeux vidéo.", (s, r) => `${noun("noms-024", s)}が${intensifiedSukiOrKirai(true, s)}${r === "polite" ? "です" : ""}`),
    makeSentence("course2-what-do-you-hate", "Qu’est-ce que tu détestes ?", (s, r) => `${noun("noms-042", s)}が${displaySukiOrKirai(false, s)}${r === "polite" ? "です" : ""}か`),
    makeSentence("course2-do-you-like-cats", "Aimes-tu les chats ?", (s, r) => `${noun("noms-025", s)}が${displaySukiOrKirai(true, s)}${r === "polite" ? "です" : ""}か`),
    makeSentence("course2-do-you-hate-coffee", "Détestes-tu le café ?", (s, r) => `${noun("noms-019", s)}が${displaySukiOrKirai(false, s)}${r === "polite" ? "です" : ""}か`),
    makeSentence("course2-do-you-read-manga", "Lis-tu un manga ?", (s, r) => `${noun("noms-041", s)}を${verb("verbes-003", s, r)}か`),
    makeSentence("course2-drink-cola-question", "Bois-tu du cola ?", (s, r) => `${noun("noms-077", s)}を${verb("verbes-002", s, r)}か`),
    makeSentence("course2-dog-eats-meat", "Le chien mange de la viande.", (s, r) => `${noun("noms-026", s)}は${noun("noms-038", s)}を${verb("verbes-001", s, r)}`),
    makeSentence("course2-cat-drinks-water", "Le chat boit de l’eau.", (s, r) => `${noun("noms-025", s)}は${noun("noms-037", s)}を${verb("verbes-002", s, r)}`),

    // Cours 3 — combinaisons は・を, adjectifs devant un nom, の et couleurs.
    makeSentence("course3-luffy-eats-ramen", "Luffy mange des ramens.", (s, r) => `${noun("noms-114", s)}は${noun("noms-018", s)}${particle("object")}${verb("verbes-001", s, "casual")}`),
    makeSentence("course3-naruto-delicious-ramen", "Naruto mange des ramens délicieux.", (s, r) => `${noun("noms-115", s)}は${adjectiveBeforeNoun("adj-024", "noms-018", s)}${particle("object")}${verb("verbes-001", s, "casual")}`),
    makeSentence("course3-sakura-long-hair", "Sakura coupe ses longs cheveux.", (s, r) => `${noun("noms-116", s)}は${adjectiveBeforeNoun("adj-070", "noms-080", s)}${particle("object")}${verb("verbes-011", s, "casual")}`),
    makeSentence("course3-small-luffy-large-meat", "Le petit Luffy achète un gros morceau de viande.", (s, r) => `${adjectiveBeforeNoun("adj-033", "noms-114", s)}は${adjectiveBeforeNoun("adj-034", "noms-038", s)}${particle("object")}${verb("verbes-005", s, "casual")}`),
    makeSentence("course3-edward-old-book", "Edward lit un vieux livre.", (s, r) => `${noun("noms-117", s)}は${adjectiveBeforeNoun("adj-037", "noms-005", s)}${particle("object")}${verb("verbes-003", s, "casual")}`),
    makeSentence("course3-tanjiro-tough-demon", "Tanjiro tranche un démon coriace.", (s, r) => `${noun("noms-118", s)}は${adjectiveBeforeNoun("adj-071", "noms-085", s)}${particle("object")}${verb("verbes-011", s, "casual")}`),
    makeSentence("course3-luffy-delicious-meat", "Luffy mange de la viande délicieuse.", (s, r) => `${noun("noms-114", s)}は${adjectiveBeforeNoun("adj-024", "noms-038", s)}${particle("object")}${verb("verbes-001", s, "casual")}`),
    makeSentence("course3-sakura-sweet-cake", "Sakura mange un gâteau sucré.", (s, r) => `${noun("noms-116", s)}は${adjectiveBeforeNoun("adj-026", "noms-081", s)}${particle("object")}${verb("verbes-001", s, "casual")}`),
    makeSentence("course3-goku-expensive-drink", "Goku boit une boisson chère.", (s, r) => `${noun("noms-119", s)}は${adjectiveBeforeNoun("adj-032", "noms-082", s)}${particle("object")}${verb("verbes-002", s, "casual")}`),
    makeSentence("course3-zoro-strange-book", "Zoro lit un livre bizarre.", (s, r) => `${noun("noms-120", s)}は${adjectiveBeforeNoun("adj-005", "noms-005", s)}${particle("object")}${verb("verbes-003", s, "casual")}`),
    makeSentence("course3-nami-practical-bag", "Nami achète un sac pratique.", (s, r) => `${noun("noms-121", s)}は${adjectiveBeforeNoun("adj-003", "noms-105", s)}${particle("object")}${verb("verbes-005", s, "casual")}`),
    makeSentence("course3-eren-scary-film", "Eren regarde un film effrayant.", (s, r) => `${noun("noms-122", s)}は${adjectiveBeforeNoun("adj-031", "noms-013", s)}${particle("object")}${verb("verbes-004", s, "casual")}`),
    makeSentence("course3-hinata-sad-book", "Hinata lit un livre triste.", (s, r) => `${noun("noms-123", s)}は${adjectiveBeforeNoun("adj-029", "noms-005", s)}${particle("object")}${verb("verbes-003", s, "casual")}`),
    makeSentence("course3-luffy-small-shop", "Luffy achète une petite boutique.", (s, r) => `${noun("noms-114", s)}は${adjectiveBeforeNoun("adj-033", "noms-083", s)}${particle("object")}${verb("verbes-005", s, "casual")}`),
    makeSentence("course3-sanji-not-delicious-food", "Sanji mange un plat qui n’est pas bon.", (s, r) => `${noun("noms-126", s)}は${adjectiveBeforeNounNegative("adj-024", "noms-032", s)}${particle("object")}${verb("verbes-001", s, "casual")}`),
    makeSentence("course3-naruto-energetic-dog", "Naruto regarde un chien plein d’énergie.", (s, r) => `${noun("noms-115", s)}は${adjectiveBeforeNoun("adj-008", "noms-026", s)}${particle("object")}${verb("verbes-004", s, "casual")}`),
    makeSentence("course3-gon-not-easy-book", "Gon lit un livre qui n’est pas facile.", (s, r) => `${noun("noms-124", s)}は${adjectiveBeforeNounNegative("adj-009", "noms-005", s)}${particle("object")}${verb("verbes-003", s, "casual")}`),
    makeSentence("course3-killua-difficult-book", "Killua lit un livre difficile.", (s, r) => `${noun("noms-125", s)}は${adjectiveBeforeNoun("adj-020", "noms-005", s)}${particle("object")}${verb("verbes-003", s, "casual")}`),
    makeSentence("course3-luffy-not-heavy-meat", "Luffy mange une viande qui n’est pas lourde.", (s, r) => `${noun("noms-114", s)}は${adjectiveBeforeNounNegative("adj-028", "noms-038", s)}${particle("object")}${verb("verbes-001", s, "casual")}`),
    makeSentence("course3-nami-famous-shop", "Nami achète une boutique célèbre.", (s, r) => `${noun("noms-121", s)}は${adjectiveBeforeNoun("adj-006", "noms-083", s)}${particle("object")}${verb("verbes-005", s, "casual")}`),
    makeSentence("course3-eren-dirty-water", "Eren boit de l’eau sale.", (s, r) => `${noun("noms-122", s)}は${adjectiveBeforeNoun("adj-030", "noms-037", s)}${particle("object")}${verb("verbes-002", s, "casual")}`),
    makeSentence("course3-sakura-unimportant-book", "Sakura achète un livre sans importance.", (s, r) => `${noun("noms-116", s)}は${adjectiveBeforeNounNegative("adj-007", "noms-005", s)}${particle("object")}${verb("verbes-005", s, "casual")}`),
    makeSentence("course3-hisoka-scary-book", "Hisoka lit un livre effrayant.", (s, r) => `${noun("noms-127", s)}は${adjectiveBeforeNoun("adj-031", "noms-005", s)}${particle("object")}${verb("verbes-003", s, "casual")}`),
    makeSentence("course3-naruto-practical-hotel", "Naruto réserve un hôtel pratique.", (s, r) => `${noun("noms-115", s)}は${adjectiveBeforeNoun("adj-003", "noms-084", s)}${particle("object")}${verb("verbes-013", s, "casual")}`),
    makeSentence("course3-kakashi-sharingan", "C’est le Sharingan de Kakashi.", (s, r) => `${noun("noms-128", s)}の${noun("noms-087", s)}です`),
    makeSentence("course3-hero-legend", "C’est la légende du héros.", (s, r) => `${noun("noms-089", s)}の${noun("noms-088", s)}です`),
    makeSentence("course3-legend-hero", "C’est le héros de la légende.", (s, r) => `${noun("noms-088", s)}の${noun("noms-089", s)}です`),
    makeSentence("course3-naruto-kunai", "C’est le kunai de Naruto.", (s, r) => `${noun("noms-115", s)}の${noun("noms-086", s)}です`),
    makeSentence("course3-konoha-shinobi", "C’est le ninja de Konoha.", (s, r) => `${noun("noms-090", s)}の${noun("noms-091", s)}です`),
    makeSentence("course3-magic-power", "Le pouvoir de la magie.", (s, r) => `${noun("noms-092", s)}の${noun("noms-093", s)}`),
    makeSentence("course3-east-blue-pirates", "Les pirates d’East Blue.", (s, r) => `${noun("noms-129", s)}の${noun("noms-074", s)}`),
    makeSentence("course3-strawhat-crew", "L’équipage du Chapeau de paille.", (s, r) => `${noun("noms-112", s)}の${noun("noms-113", s)}`),
    makeSentence("course3-naruto-dream", "C’est le rêve de Naruto.", (s, r) => `${noun("noms-115", s)}の${noun("noms-094", s)}です`),
    makeSentence("course3-tanjiro-sword", "C’est l’épée de Tanjiro.", (s, r) => `${noun("noms-118", s)}の${noun("noms-095", s)}です`),
    makeSentence("course3-luffy-red-hat", "Le chapeau de Luffy est rouge.", (s, r) => `${noun("noms-114", s)}の${noun("noms-053", s)}は${adjective("adj-061", s)}です`),
    makeSentence("course3-goku-power-amazing", "La puissance de Goku est incroyable.", (s, r) => `${noun("noms-119", s)}の${noun("noms-093", s)}は${adjective("adj-025", s)}です`),
    makeSentence("course3-moon-princess", "C’est la princesse de la Lune.", (s, r) => `${noun("noms-130", s)}の${noun("noms-096", s)}です`),
    makeSentence("course3-hero-school", "L’école des héros est le lycée Yuei.", (s, r) => `${noun("noms-089", s)}の${noun("noms-065", s)}は${noun("noms-097", s)}です`),
    makeSentence("course3-akatsuki-members", "Les membres de l’Akatsuki sont des personnes mauvaises.", (s, r) => `${noun("noms-098", s)}の${noun("noms-099", s)}は${adjectiveBeforeNoun("adj-040", "noms-016", s)}です`),
    makeSentence("course3-dark-magic-dangerous", "La magie des ténèbres est dangereuse.", (s, r) => addCopula(`${noun("noms-100", s)}の${noun("noms-092", s)}は${adjective("adj-072", s)}`, r, "na-predicate")),
    makeSentence("course3-steel-alchemist-strong", "L’alchimiste d’acier est fort.", (s, r) => `${noun("noms-133", s)}の${noun("noms-101", s)}は${adjective("adj-022", s)}`),
    makeSentence("course3-luffy-friend-eats-meat", "L’ami de Luffy mange de la viande.", (s, r) => `${noun("noms-114", s)}の${noun("noms-064", s)}は${noun("noms-038", s)}${particle("object")}${verb("verbes-001", s, "casual")}`),
    makeSentence("course3-usopp-town", "La ville d’Usopp.", (s, r) => `${noun("noms-147", s)}の${noun("noms-012", s)}`),
    makeSentence("course3-usopp-town-people", "Les habitants de la ville d’Usopp.", (s, r) => `${noun("noms-147", s)}の${noun("noms-012", s)}の${noun("noms-016", s)}`),
    makeSentence("course3-usopp-town-people-money", "L’argent des habitants de la ville d’Usopp.", (s, r) => `${noun("noms-147", s)}の${noun("noms-012", s)}の${noun("noms-016", s)}の${noun("noms-033", s)}`),
    makeSentence("course3-luffy-father", "C’est le père de Luffy.", (s, r) => `${noun("noms-114", s)}の${noun("noms-103", s)}です`),
    makeSentence("course3-happy-fish", "C’est le poisson de Happy.", (s, r) => `${noun("noms-104", s)}の${noun("noms-048", s)}です`),
    makeSentence("course3-pink-shoes", "Ce sont des chaussures roses.", (s, r) => `${noun("noms-108", s)}の${noun("noms-102", s)}です`),
    makeSentence("course3-green-car-fast", "La voiture verte est rapide.", (s, r) => `${noun("noms-106", s)}の${noun("noms-015", s)}は${adjective("adj-038", s)}です`),
    makeSentence("course3-pink-phone-expensive", "Le téléphone rose est cher.", (s, r) => `${noun("noms-108", s)}の${noun("noms-131", s)}は${adjective("adj-032", s)}です`),
    makeSentence("course3-red-pirate-orange-vegetable", "Le pirate rouge mange un légume orange.", (s, r) => `${adjectiveBeforeNoun("adj-061", "noms-074", s)}は${noun("noms-107", s)}の${noun("noms-047", s)}${particle("object")}${verb("verbes-001", s, "casual")}`),
    makeSentence("course3-green-car-question", "La voiture verte est-elle rapide ?", (s, r) => `${noun("noms-106", s)}の${noun("noms-015", s)}は${adjective("adj-038", s)}ですか`),
    makeSentence("course3-not-new-pink-phone", "Nami achète un téléphone qui n’est pas cher.", (s, r) => `${noun("noms-121", s)}は${adjectiveBeforeNounNegative("adj-032", "noms-131", s)}${particle("object")}${verb("verbes-005", s, "casual")}`),
    makeSentence("course3-hotel-reservation-question", "Naruto réserve-t-il un hôtel ?", (s, r) => `${noun("noms-115", s)}は${noun("noms-084", s)}${particle("object")}${verb("verbes-013", s, "casual")}か`),
    makeSentence("course3-cook-ramen", "Goku cuisine des ramens.", (s, r) => `${noun("noms-119", s)}は${noun("noms-018", s)}${particle("object")}${verb("verbes-014", s, "casual")}`),
    makeSentence("course3-travel-to-moon", "L’équipage voyage.", (s, r) => `${noun("noms-113", s)}は${verb("verbes-015", s, "casual")}`),
    makeSentence("course3-hero-reads-old-book", "Le héros lit un vieux livre.", (s, r) => `${noun("noms-089", s)}は${adjectiveBeforeNoun("adj-037", "noms-005", s)}${particle("object")}${verb("verbes-003", s, "casual")}`),
    makeSentence("course3-happy-drinks-orange", "Happy boit une boisson à l’orange.", (s, r) => `${noun("noms-104", s)}は${noun("noms-107", s)}の${noun("noms-082", s)}${particle("object")}${verb("verbes-002", s, "casual")}`),
    makeSentence("course3-naruto-buys-green-car", "Naruto achète une voiture verte.", (s, r) => `${noun("noms-115", s)}は${noun("noms-106", s)}の${noun("noms-015", s)}${particle("object")}${verb("verbes-005", s, "casual")}`),
    makeSentence("course3-sakura-cuts-hair-question", "Sakura coupe-t-elle les cheveux longs ?", (s, r) => `${noun("noms-116", s)}は${adjectiveBeforeNoun("adj-070", "noms-080", s)}${particle("object")}${verb("verbes-011", s, "casual")}か`)
  ];

  const particles = [

    { id: "p-course1-manga-question", answer: "か", hint: "か se place à la fin pour former une question fermée.", build: (s, r) => `${noun("noms-041", s)}は${adjective("adj-017", s)}${r === "polite" ? "です" : ""}□` },
    { id: "p-topic-cat", answer: "は", hint: "は marque le thème de la phrase.", build: (s) => `${adjectiveBeforeNoun("adj-013", "noms-025", s)}□${noun("noms-017", s)}が${displaySukiOrKirai(true, s)}です` },
    { id: "p-like-sushi", answer: "が", hint: "Avec 好き・嫌い, le mot aimé ou détesté se marque avec が.", build: (s) => `${noun("noms-025", s)}は${noun("noms-017", s)}□${displaySukiOrKirai(true, s)}です` },
    { id: "p-object-manga", answer: "を", hint: "を marque l’objet direct du verbe.", build: (s) => `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-017", "noms-041", s)}□${verb("verbes-003", s, "casual")}` },
    { id: "p-topic-water", answer: "は", hint: "Le thème de la phrase se place avant は.", build: (s) => `${noun("noms-043", s)}□${noun("noms-037", s)}を${verb("verbes-002", s, "casual")}` },
    { id: "p-topic-film", answer: "は", hint: "La phrase décrit le film : c’est le thème.", build: (s) => `${noun("noms-013", s)}□${adjective("adj-017", s)}` },
    { id: "p-topic-dislike", answer: "は", hint: "Le sujet de la phrase est le thème annoncé.", build: (s) => `${noun("noms-043", s)}□${noun("noms-017", s)}が${displaySukiOrKirai(false, s)}` },
    { id: "p-topic-onigiri", answer: "は", hint: "La phrase parle des onigiris noirs : は marque le thème.", build: (s) => `${adjectiveBeforeNoun("adj-065", "noms-040", s)}□${adjective("adj-024", s)}` },
    { id: "p-object-book", answer: "を", hint: "Le livre est ce que l’on achète.", build: (s) => `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-036", "noms-005", s)}□${verb("verbes-005", s, "casual")}` },
    { id: "p-like-rain", answer: "が", hint: "Avec 嫌い, la chose détestée est marquée par が.", build: (s) => `${noun("noms-025", s)}は${noun("noms-027", s)}□${displaySukiOrKirai(false, s)}` },
    { id: "p-object-study", answer: "を", hint: "Le japonais est le contenu de l’action d’étudier.", build: (s) => `${noun("noms-043", s)}は${noun("noms-008", s)}□${verb("verbes-006", s, "casual")}` },
    { id: "p-topic-anime", answer: "は", hint: "L’animé est ce dont on parle dans cette phrase.", build: (s) => `${noun("noms-035", s)}□${adjective("adj-005", s)}じゃない` },
    { id: "p-object-coffee", answer: "を", hint: "Le café est ce que l’on boit.", build: (s) => `${noun("noms-043", s)}は${noun("noms-019", s)}□${verb("verbes-002", s, "casual")}` },
    { id: "p-like-cat", answer: "が", hint: "Avec 好き, ce que l’on aime est marqué par が.", build: (s) => `${noun("noms-043", s)}は${noun("noms-025", s)}□${displaySukiOrKirai(true, s)}` },
    { id: "p-subject-japanese", answer: "は", hint: "は annonce le thème : ici, on parle de la langue japonaise.", build: (s) => `${noun("noms-008", s)}□${adjective("adj-010", s)}じゃない` },
    { id: "p-object-sushi", answer: "を", hint: "Les sushis sont ce que l’on mange ; l’objet direct prend を.", build: (s) => `${noun("noms-043", s)}は${noun("noms-017", s)}□${verb("verbes-001", s, "casual")}` },
    { id: "p-question-film", answer: "か", hint: "か se place à la fin de la phrase pour former une question fermée : 映画は面白いですか。", build: (s, r) => `${noun("noms-013", s)}は${adjective("adj-017", s)}${r === "polite" ? "です" : ""}□` },
    { id: "p-question-skill", answer: "か", hint: "上手（じょうず） signifie doué ; か se place à la fin de la question : 日本語が上手ですか。", build: (s, r) => `${noun("noms-008", s)}が${adjective("adj-001", s)}${r === "polite" ? "です" : ""}□` },
    { id: "p-question-study", answer: "か", hint: "か arrive après le verbe : 勉強しますか。", build: (s, r) => `${noun("noms-008", s)}を${verb("verbes-006", s, r)}□` },
    { id: "p-question-negative", answer: "か", hint: "Une question peut aussi porter sur une forme négative : 上手じゃありませんか。", build: (s, r) => `${adjective("adj-001", s)}${r === "polite" ? "じゃありません" : "じゃない"}□` },
    { id: "p-question-like", answer: "か", hint: "Dans une question avec 好き, garde が puis ajoute か à la fin.", build: (s, r) => `${noun("noms-025", s)}は${noun("noms-017", s)}が${displaySukiOrKirai(true, s)}${r === "polite" ? "です" : ""}□` },
    { id: "p-topic-room", answer: "は", hint: "La pièce est le thème de la phrase ; on place は après 部屋.", build: (s) => `${noun("noms-010", s)}□${adjective("adj-011", s)}です` },
    { id: "p-object-japanese", answer: "を", hint: "勉強する est l’action d’étudier : 日本語 est ce qu’on étudie.", build: (s, r) => `${noun("noms-043", s)}は${noun("noms-008", s)}□${verb("verbes-006", s, r)}` },
    { id: "p-like-vegetables", answer: "が", hint: "Avec 嫌い, la chose détestée est marquée par が.", build: (s) => `${noun("noms-026", s)}は${noun("noms-047", s)}□${displaySukiOrKirai(false, s)}` },
    { id: "p-question-anime", answer: "か", hint: "Pour demander si l’animé est bizarre, ajoute か à la fin : アニメは変ですか。", build: (s, r) => `${noun("noms-035", s)}は${adjective("adj-005", s)}${r === "polite" ? "です" : ""}□` },
    { id: "p-course2-like-cats", answer: "が", hint: "Avec 好き, l’élément aimé est marqué par が : ねこがすきです。", build: (s, r) => `${noun("noms-025", s)}□${displaySukiOrKirai(true, s)}${r === "polite" ? "です" : ""}` },
    { id: "p-course2-question-nani", answer: "か", hint: "か se place à la fin pour transformer la phrase en question : なにがすきですか。", build: (s, r) => `${noun("noms-042", s)}が${displaySukiOrKirai(true, s)}${r === "polite" ? "です" : ""}□` },
    { id: "p-course2-object-book", answer: "を", hint: "を marque ce que l’on lit : ほんをよみます。", build: (s, r) => `${noun("noms-005", s)}□${verb("verbes-003", s, r)}` },
    { id: "p-object-milk", answer: "を", hint: "Le lait est ce que l’on boit : を marque l’objet direct.", build: (s, r) => `${noun("noms-043", s)}は${noun("noms-046", s)}□${verb("verbes-002", s, r)}` },
    { id: "p-object-meat", answer: "を", hint: "La viande est ce que l’on achète dans cet exemple.", build: (s, r) => `${noun("noms-043", s)}は${noun("noms-038", s)}□${verb("verbes-005", s, r)}` },
    { id: "p-object-fish", answer: "を", hint: "Le poisson est ce que l’on achète : を se place après le nom.", build: (s, r) => `${noun("noms-043", s)}は${adjectiveBeforeNoun("adj-013", "noms-048", s)}□${verb("verbes-005", s, r)}` },
    { id: "p-course1-student-topic", answer: "は", hint: "は se place après le thème de la phrase : ici, l’étudiant.", build: (s, r) => `${noun("noms-003", s)}□${r === "polite" ? "です" : "だ"}` },
    { id: "p-course1-manga-topic", answer: "は", hint: "は marque ce dont on parle : le manga.", build: (s, r) => `${noun("noms-041", s)}□${adjective("adj-017", s)}${r === "polite" ? "です" : ""}` },
    { id: "p-course2-object-beer", answer: "を", hint: "La bière est ce que l’on boit : を marque l’objet direct.", build: (s, r) => `${noun("noms-043", s)}は${noun("noms-076", s)}□${verb("verbes-002", s, r)}` },
    { id: "p-course2-object-ramen", answer: "を", hint: "Le ramen est ce que l’on mange : を marque l’objet direct.", build: (s, r) => `${noun("noms-043", s)}は${noun("noms-018", s)}□${verb("verbes-001", s, r)}` },
    { id: "p-course2-like-music", answer: "が", hint: "Avec 好き, ce qu’on aime est marqué par が.", build: (s, r) => `${noun("noms-020", s)}□${displaySukiOrKirai(true, s)}${r === "polite" ? "です" : ""}` },
    { id: "p-course2-question-negative-like", answer: "か", hint: "Une question fermée se termine ici par か.", build: (s, r) => `${noun("noms-047", s)}が${adjective("adj-016", s)}じゃない${r === "polite" ? "です" : ""}□` },
    { id: "p-course2-question-drink-cola", answer: "か", hint: "か se place après le verbe pour former une question : コーラを飲みますか。", build: (s, r) => `${noun("noms-077", s)}を${verb("verbes-002", s, r)}□` },
    // Cours 3 — la particule の, les couleurs et les phrases avec を.
    { id: "p-course3-no-kakashi", answer: "の", hint: "の relie le possesseur Kakashi à ce qui lui appartient.", build: (s) => `${noun("noms-128", s)}□${noun("noms-087", s)}` },
    { id: "p-course3-no-konoha", answer: "の", hint: "の marque l’appartenance au groupe ou au lieu de Konoha.", build: (s) => `${noun("noms-090", s)}□${noun("noms-091", s)}` },
    { id: "p-course3-no-magic", answer: "の", hint: "魔法の力 : « la puissance de la magie ».", build: (s) => `${noun("noms-092", s)}□${noun("noms-093", s)}` },
    { id: "p-course3-no-hat", answer: "の", hint: "の relie Luffy à son chapeau : ルフィのぼうし.", build: (s) => `${noun("noms-114", s)}□${noun("noms-053", s)}は${adjective("adj-061", s)}です` },
    { id: "p-course3-no-green-car", answer: "の", hint: "みどりのくるま : une voiture verte ; la couleur-nom prend の.", build: (s) => `${noun("noms-106", s)}□${noun("noms-015", s)}は${adjective("adj-038", s)}です` },
    { id: "p-course3-no-pink-shoes", answer: "の", hint: "ピンクのくつ : des chaussures roses.", build: (s) => `${noun("noms-108", s)}□${noun("noms-102", s)}です` },
    { id: "p-course3-no-phone", answer: "の", hint: "ピンクのけいたい : le téléphone rose.", build: (s) => `${noun("noms-108", s)}□${noun("noms-131", s)}は${adjective("adj-032", s)}です` },
    { id: "p-course3-no-happy-fish", answer: "の", hint: "の indique que le poisson est celui de Happy.", build: (s) => `${noun("noms-104", s)}□${noun("noms-048", s)}です` },
    { id: "p-course3-no-strawhat-crew", answer: "の", hint: "麦わらの一味 : l’équipage du Chapeau de paille.", build: (s) => `${noun("noms-112", s)}□${noun("noms-113", s)}` },
    { id: "p-course3-no-usopp-town", answer: "の", hint: "Usoppu no machi : la ville d’Usopp.", build: (s) => `${noun("noms-147", s)}□${noun("noms-012", s)}` },
    { id: "p-course3-no-nested-town", answer: "の", hint: "La particule の peut s’enchaîner entre plusieurs noms.", build: (s) => `${noun("noms-147", s)}の${noun("noms-012", s)}□${noun("noms-016", s)}` },
    { id: "p-course3-wo-hair", answer: "を", hint: "髪を切る : les cheveux sont l’objet direct de l’action de couper.", build: (s) => `${noun("noms-116", s)}は${adjectiveBeforeNoun("adj-070", "noms-080", s)}□${verb("verbes-011", s, "casual")}` },
    { id: "p-course3-wo-cake", answer: "を", hint: "Le gâteau est l’objet que Sakura mange ; place を après le nom.", build: (s) => `${noun("noms-116", s)}は${adjectiveBeforeNoun("adj-026", "noms-081", s)}□${verb("verbes-001", s, "casual")}` },
    { id: "p-course3-topic-luffy", answer: "は", hint: "は indique le thème de la phrase : Luffy.", build: (s) => `${noun("noms-114", s)}□${noun("noms-038", s)}を${verb("verbes-005", s, "casual")}` },
    { id: "p-course3-wo-hotel", answer: "を", hint: "を marque l’objet de l’action よやくする : l’hôtel réservé.", build: (s) => `${noun("noms-115", s)}は${noun("noms-084", s)}□${verb("verbes-013", s, "casual")}` },
    { id: "p-course3-no-luffy-father", answer: "の", hint: "の relie Luffy à son père : ルフィのお父さん.", build: (s) => `${noun("noms-114", s)}□${noun("noms-103", s)}です` },
    { id: "p-course3-wo-orange-vegetable", answer: "を", hint: "を se place après le légume que le pirate mange.", build: (s) => `${adjectiveBeforeNoun("adj-061", "noms-074", s)}は${noun("noms-107", s)}の${noun("noms-047", s)}□${verb("verbes-001", s, "casual")}` },
    { id: "p-course3-no-hero-school", answer: "の", hint: "の relie le héros à son école : ヒーローの学校.", build: (s) => `${noun("noms-089", s)}□${noun("noms-065", s)}は${noun("noms-097", s)}です` },
    { id: "p-course3-no-legend", answer: "の", hint: "Dans 伝説のヒーロー, の relie « légende » et « héros ».", build: (s) => `${noun("noms-088", s)}□${noun("noms-089", s)}` },
    { id: "p-course3-no-dark-magic", answer: "の", hint: "闇の魔法 : « la magie des ténèbres ».", build: (s) => `${noun("noms-100", s)}□${noun("noms-092", s)}は${adjective("adj-072", s)}です` }
  ];

  const courseCatalog = window.JAPONAIS_COURSES;
  const coursePickerApi = window.JAPONAIS_COURSE_PICKER;
  const vocabularyCoursePicker = coursePickerApi?.mount("grammarVocabularyCourses", { title: "Vocabulaire", queryParam: "vocabCourses" });
  const conceptCoursePicker = coursePickerApi?.mount("grammarConceptCourses", { title: "Notions de grammaire", queryParam: "conceptCourses" });
  const particleVocabularyCoursePicker = coursePickerApi?.mount("particleVocabularyCourses", { title: "Vocabulaire", queryParam: "particleVocabCourses" });
  const particleConceptCoursePicker = coursePickerApi?.mount("particleConceptCourses", { title: "Notions de particules", queryParam: "particleConceptCourses" });

  function questionsForSelectedCourses(source, vocabPicker, conceptsPicker, metadataMap) {
    if (!courseCatalog) return source;
    const vocabSelection = vocabPicker?.getSelection() || { all: true, ids: [] };
    const conceptsSelection = conceptsPicker?.getSelection() || { all: true, ids: [] };
    return source.filter((question) => {
      const metadata = metadataMap[question.id];
      return courseCatalog.selectionAllowsVocabulary(metadata?.vocabularyIds, vocabSelection)
        && courseCatalog.selectionAllowsConcepts(metadata?.concepts, conceptsSelection);
    });
  }

  const state = { deck: [], index: 0, results: [], resolved: false, attempts: 0 };
  let mode = "fr-ja";
  let displayScript = "kana";
  let questionRegister = "polite";
  let activeOptions = [];
  let selectedChoiceKey = null;
  let activeSentencePool = sentences;
  let distractorUsage = new Map();

  const shuffle = (items) => {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  const normalizeChoice = (value) => String(value || "")
    .normalize("NFKC")
    .toLocaleLowerCase("fr")
    .replace(/[\s　。、！？!?.,，．]/g, "")
    .trim();

  const normalizeFrench = (value) => String(value || "")
    .toLocaleLowerCase("fr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, " ")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const frenchTokens = (value) => new Set(
    normalizeFrench(value).split(/\s+/).filter((token) => token.length > 1)
  );

  function sentenceSimilarity(left, right) {
    const a = normalizeFrench(left.french);
    const b = normalizeFrench(right.french);
    const leftTokens = frenchTokens(a);
    const rightTokens = frenchTokens(b);
    let score = 0;

    // Le recouvrement lexical compte, mais les mots partagés ne suffisent pas.
    leftTokens.forEach((token) => {
      if (rightTokens.has(token)) score += token.length > 5 ? 7 : token.length > 3 ? 5 : 2;
    });

    const features = (text, original) => ({
      negation: /\b(ne|n|pas|plus|jamais|aucun|aucune)\b/u.test(text),
      question: /\?\s*$/u.test(original),
      person: /\b(je|j|tu|il|elle|nous|vous|ils|elles)\b/u.test(text) ? "pronoun"
        : /^(le|la|les|un|une|des|du|de la|de l)\b/u.test(text) ? "noun-subject" : "implicit",
      verb: /\b(achete|achète|acheter)\b/u.test(text) ? "buy"
        : /\b(mange|manger)\b/u.test(text) ? "eat"
        : /\b(bois|boit|buvons|boire)\b/u.test(text) ? "drink"
        : /\b(lis|lit|lire)\b/u.test(text) ? "read"
        : /\b(regarde|regarder)\b/u.test(text) ? "watch"
        : /\b(aime|adore|adorent|deteste|aimer)\b/u.test(text) ? "like"
        : /\b(est|sont|suis|es|être)\b/u.test(text) ? "be"
        : /\b(va|vais|aller)\b/u.test(text) ? "go" : "other",
      objectMarker: /\b(un|une|le|la|les|du|de la|des|de l)\b/u.test(text),
      relative: /\b(qui|que|dont)\b/u.test(text),
      length: text.split(/\s+/u).filter(Boolean).length,
      adjectives: ["grand","petit","cher","chere","neuf","vieil","vieux","beau","belle","rouge","bleu","bleue","interessant","interessante","difficile","calme","bizarre","delicieux","delicieuse","rose","noir","noire"].filter((word) => new RegExp(`\\b${word}\\b`, "u").test(text))
    });
    const fa = features(a, left.french);
    const fb = features(b, right.french);
    if (fa.verb === fb.verb) score += 15;
    if (fa.negation === fb.negation) score += 9;
    if (fa.question === fb.question) score += 7;
    if (fa.person === fb.person) score += 6;
    if (fa.objectMarker === fb.objectMarker) score += 4;
    if (fa.relative === fb.relative) score += 3;
    score += Math.max(0, 6 - Math.abs(fa.length - fb.length) * 2);
    if (fa.adjectives.length && fb.adjectives.length) score += 5;
    if (fa.adjectives.some((word) => fb.adjectives.includes(word))) score += 10;
    return score;
  }

  function nearestSentences(question) {
    const ranked = activeSentencePool.filter((candidate) =>
      candidate.id !== question.id && candidate.french !== question.french
    ).map((candidate) => ({
      candidate,
      score: sentenceSimilarity(candidate, question) - (distractorUsage.get(candidate.id) || 0) * 12 + Math.random() * 4
    })).sort((a, b) => b.score - a.score).map((item) => item.candidate);
    // Les meilleurs distracteurs restent sémantiquement proches, mais le choix
    // varie entre plusieurs candidats pour éviter le même QCM à chaque session.
    const shortlistSize = Math.min(20, ranked.length);
    return [...shuffle(ranked.slice(0, shortlistSize)), ...shuffle(ranked.slice(shortlistSize))];
  }

  function optionKey(label, index) {
    return `${index}:${normalizeChoice(label)}`;
  }

  function buildSentenceOptions(question) {
    if (mode === "ja-fr") {
      const options = [{ label: question.french, correct: true }];
      for (const candidate of nearestSentences(question)) {
        if (options.length >= 4) break;
        const label = candidate.french;
        if (options.some((option) => normalizeChoice(option.label) === normalizeChoice(label))) continue;
        options.push({ label, correct: false, sourceId: candidate.id });
      }
      return shuffle(options).map((option, index) => ({ ...option, key: optionKey(option.label, index) }));
    }

    const options = [{ label: question.japanese(displayScript, questionRegister), correct: true }];
    const seen = new Set([normalizeChoice(options[0].label)]);
    for (const candidate of nearestSentences(question)) {
      if (options.length >= 4) break;
      const label = candidate.japanese(displayScript, questionRegister);
      const key = normalizeChoice(label);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      options.push({ label, correct: false, sourceId: candidate.id });
    }
    return shuffle(options).map((option, index) => ({ ...option, key: optionKey(option.label, index) }));
  }

  function renderChoices(options) {
    activeOptions = options;
    selectedChoiceKey = null;
    for (const option of options) {
      if (option.correct || !option.sourceId) continue;
      distractorUsage.set(option.sourceId, (distractorUsage.get(option.sourceId) || 0) + 1);
    }
    const container = $("choiceArea");
    container.replaceChildren();
    options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "grammar-choice";
      if (mode === "fr-ja" || mode === "particles") renderJapanese(button, option.label);
      else button.textContent = option.label;
      button.dataset.choiceKey = option.key;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => {
        if (state.resolved) return;
        selectedChoiceKey = option.key;
        for (const choice of container.querySelectorAll("button")) {
          const isSelected = choice.dataset.choiceKey === selectedChoiceKey;
          choice.classList.toggle("is-selected", isSelected);
          choice.classList.remove("is-wrong");
          choice.setAttribute("aria-pressed", String(isSelected));
        }
      });
      container.appendChild(button);
    });
  }

  function renderSentenceChoices(question) {
    renderChoices(buildSentenceOptions(question));
  }

  function renderParticleChoices(question) {
    const options = shuffle(["は", "が", "を", "か", "の"].map((label) => ({
      label,
      correct: label === question.answer
    }))).map((option, index) => ({ ...option, key: optionKey(option.label, index) }));
    renderChoices(options);
  }

  function currentRegister() {
    // Les formes polies et familières alternent automatiquement pendant la session.
    return Math.random() < 0.5 ? "polite" : "casual";
  }

  function startSession(replayItems, forcedMode) {
    if (!replayItems) {
      mode = forcedMode || document.querySelector('input[name="exerciseMode"]:checked').value;
      displayScript = document.querySelector('input[name="writingMode"]:checked').value;
    }
    let source;
    if (replayItems) {
      source = replayItems;
    } else if (mode === "particles") {
      source = questionsForSelectedCourses(particles, particleVocabularyCoursePicker, particleConceptCoursePicker, courseCatalog?.particleMetadata || {});
    } else {
      activeSentencePool = questionsForSelectedCourses(sentences, vocabularyCoursePicker, conceptCoursePicker, courseCatalog?.sentenceMetadata || {});
      source = activeSentencePool;
    }
    const messageElement = $(mode === "particles" ? "particleSetupMessage" : "setupMessage");
    if (!source.length) {
      if (messageElement) messageElement.textContent = "Aucune question ne correspond à cette combinaison. Sélectionne davantage de cours de vocabulaire ou de notions, ou rétablis « Tous les cours ».";
      return;
    }
    if (!replayItems && mode !== "particles") {
      const hasFourDistinctChoices = ["polite", "casual"].every((register) => {
        const labels = source.map((question) => mode === "ja-fr"
          ? normalizeChoice(question.french)
          : normalizeChoice(question.japanese(displayScript, register)));
        return new Set(labels).size >= 4;
      });
      if (!hasFourDistinctChoices) {
        if (messageElement) messageElement.textContent = "Cette sélection ne contient pas assez de phrases avec quatre réponses différentes. Ajoute un cours de vocabulaire ou de grammaire.";
        return;
      }
    }
    if (messageElement) messageElement.textContent = "";
    const shuffled = shuffle(source);
    const desired = $("questionCount").value;
    const count = replayItems ? replayItems.length : desired === "all" ? shuffled.length : Math.min(Number(desired), shuffled.length);
    state.deck = shuffled.slice(0, count);
    state.index = 0;
    state.results = [];
    state.progressRecorded = false;
    state.resolved = false;
    state.attempts = 0;
    activeOptions = [];
    selectedChoiceKey = null;
    distractorUsage = new Map();
    $("results").hidden = true;
    $("setup").hidden = true;
    $("particleSetup").hidden = true;
    const progressPanel = $("progressPanel");
    if (progressPanel) progressPanel.hidden = true;
    $("game").hidden = false;
    $("setupMessage").textContent = "";
    showCurrent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showAnswerModeForPrompt(question) {
    $("choiceArea").hidden = false;
    $("choiceValidateButton").hidden = false;
    $("choiceValidateButton").disabled = false;

    if (mode === "fr-ja") {
      $("promptText").textContent = question.french;
      $("promptHelp").textContent = "Choisis la phrase japonaise correcte parmi les quatre propositions. Les formes polies et familières alternent automatiquement.";
      renderSentenceChoices(question);
    } else if (mode === "ja-fr") {
      renderJapanese($("promptText"), question.japanese(displayScript, questionRegister));
      $("promptHelp").textContent = "Choisis la traduction française qui correspond à cette phrase.";
      renderSentenceChoices(question);
    } else {
      renderJapanese($("promptText"), displayedJapanese(question.build, displayScript, questionRegister).replace("□", "＿＿"));
      $("promptHelp").textContent = "Choisis la bonne particule parmi は, が, を, か et の.";
      renderParticleChoices(question);
    }
  }

  function showCurrent() {
    const question = state.deck[state.index];
    if (!question) return showResults();
    state.resolved = false;
    state.attempts = 0;
    selectedChoiceKey = null;
    questionRegister = currentRegister();
    $("progressText").textContent = `Question ${state.index + 1} / ${state.deck.length}`;
    $("scoreText").textContent = `${state.results.filter((result) => result.correct && result.wrongAttempts === 0).length} réussite(s) au premier essai`;
    $("progressBar").style.width = `${(state.index / state.deck.length) * 100}%`;
    $("questionType").textContent = mode === "particles"
      ? "Jeu des particules · は・が・を・か・の"
      : mode === "ja-fr" ? "Japonais → français" : "Français → japonais";
    $("feedback").textContent = "";
    $("feedback").className = "message";
    $("nextButton").hidden = true;
    $("skipButton").hidden = false;
    $("choiceValidateButton").hidden = false;
    $("choiceValidateButton").disabled = false;
    showAnswerModeForPrompt(question);
  }

  function settleQuestion(correct, userAnswer, message) {
    if (state.resolved) return;
    state.resolved = true;
    const question = state.deck[state.index];
    state.results.push({
      question,
      index: state.index,
      correct,
      wrongAttempts: state.attempts,
      userAnswer: userAnswer || "(passé)",
      mode,
      register: questionRegister,
      script: displayScript
    });
    $("feedback").textContent = message;
    $("feedback").className = `message ${correct ? "good" : "bad"}`;
    $("nextButton").hidden = false;
    $("skipButton").hidden = true;
    $("choiceValidateButton").hidden = true;
    for (const button of $("choiceArea").querySelectorAll("button")) {
      button.disabled = true;
      const option = activeOptions.find((item) => item.key === button.dataset.choiceKey);
      if (option?.correct) button.classList.add("is-correct");
      else if (option?.key === selectedChoiceKey && !correct) button.classList.add("is-wrong");
    }
  }

  function validateChoice() {
    if (state.resolved) return;
    if (!selectedChoiceKey) {
      $("feedback").textContent = "Sélectionne une proposition avant de valider.";
      $("feedback").className = "message bad";
      return;
    }
    const selected = activeOptions.find((option) => option.key === selectedChoiceKey);
    if (!selected) return;
    if (selected.correct) {
      const message = mode === "particles"
        ? `Bonne réponse ! ${state.deck[state.index].hint}`
        : "Bonne réponse !";
      settleQuestion(true, selected.label, message);
      return;
    }
    state.attempts += 1;
    const button = [...$("choiceArea").querySelectorAll("button")]
      .find((item) => item.dataset.choiceKey === selectedChoiceKey);
    if (button) button.classList.add("is-wrong");
    $("feedback").textContent = mode === "particles"
      ? `Pas tout à fait. Indice : ${state.deck[state.index].hint} Tu peux choisir une autre réponse.`
      : "Pas tout à fait. Choisis une autre proposition puis valide à nouveau.";
    $("feedback").className = "message bad";
  }

  function skipQuestion() {
    if (state.resolved) return;
    const question = state.deck[state.index];
    let message;
    if (mode === "particles") {
      message = `La bonne réponse est ${question.answer}. ${question.hint}`;
    } else if (mode === "ja-fr") {
      message = `La traduction attendue est : ${question.french}`;
    } else {
      message = `Une réponse possible : ${question.japanese(displayScript, questionRegister)}`;
    }
    settleQuestion(false, "(passé)", message);
  }

  function nextQuestion() {
    state.index += 1;
    if (state.index >= state.deck.length) showResults();
    else showCurrent();
  }

  function showResults() {
    if (!state.progressRecorded) {
      window.JAPONAIS_PROGRESS?.recordSession({
        game: "grammaire",
        mode,
        courseIds: mode === "particles"
          ? [...(particleVocabularyCoursePicker?.getSelection()?.ids || []), ...(particleConceptCoursePicker?.getSelection()?.ids || [])]
          : [...(vocabularyCoursePicker?.getSelection()?.ids || []), ...(conceptCoursePicker?.getSelection()?.ids || [])],
        results: state.results.map((result) => ({
          question: result.question,
          label: result.question.french || result.question.id,
          correct: result.correct,
          firstTryCorrect: result.correct && result.wrongAttempts === 0,
          attempts: result.wrongAttempts + (result.correct ? 1 : 0),
          wrongAttempts: result.wrongAttempts,
          skipped: result.userAnswer === "(passé)"
        }))
      });
      window.JAPONAIS_PROGRESS?.renderSummary("progressSummary", "progressHistory", "grammaire", "clearProgressButton");
      state.progressRecorded = true;
    }
    $("game").hidden = true;
    const progressPanel = $("progressPanel");
    if (progressPanel) progressPanel.hidden = false;
    $("results").hidden = false;
    $("progressBar").style.width = "100%";
    const correctCount = state.results.filter((result) => result.correct && result.wrongAttempts === 0).length;
    $("summaryText").textContent = `${correctCount} réussite(s) au premier essai sur ${state.results.length} questions. Les questions ratées ou passées peuvent être rejouées.`;
    renderResults();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderResults() {
    const sort = $("resultSort").value;
    const rows = [...state.results];
    if (sort === "errors") rows.sort((a, b) => Number(a.correct && a.wrongAttempts === 0) - Number(b.correct && b.wrongAttempts === 0));
    if (sort === "success") rows.sort((a, b) => Number(b.correct && b.wrongAttempts === 0) - Number(a.correct && a.wrongAttempts === 0));
    const container = $("resultRows");
    container.replaceChildren();
    rows.forEach((result) => {
      const row = document.createElement("div");
      const needsReview = !result.correct || result.wrongAttempts > 0;
      row.className = `grammar-result-row ${needsReview ? "is-missed" : "is-correct"}`;
      const title = document.createElement("div");
      title.className = "grammar-result-title";
      const questionTitle = result.question.french || "Compléter une particule";
      title.textContent = `${needsReview ? "À revoir" : "Réussi"} — ${questionTitle}`;
      const detail = document.createElement("div");
      detail.className = "grammar-result-detail";
      if (result.mode === "particles") {
        const completed = displayedJapanese(result.question.build, result.script, result.register).replace("□", result.script === "romaji" ? ({ "は":"wa", "が":"ga", "を":"o", "か":"ka", "の":"no" })[result.question.answer] : result.question.answer);
        detail.textContent = `${completed} · Ta réponse : ${result.userAnswer} · Bonne particule : ${result.question.answer} · ${result.question.hint}`;
      } else if (result.mode === "fr-ja") {
        detail.textContent = `Ta réponse : ${result.userAnswer} · Phrase japonaise : ${result.question.japanese(result.script, result.register)}`;
      } else {
        detail.textContent = `Ta réponse : ${result.userAnswer} · Traduction : ${result.question.french}`;
      }
      row.append(title, detail);
      container.appendChild(row);
    });
    $("replayMissedButton").disabled = !state.results.some((result) => !result.correct || result.wrongAttempts > 0);
  }

  window.JAPONAIS_PROGRESS?.renderSummary("progressSummary", "progressHistory", "grammaire", "clearProgressButton");
  $("startButton").addEventListener("click", () => startSession());
  $("particleGameButton").addEventListener("click", () => startSession(undefined, "particles"));
  $("choiceValidateButton").addEventListener("click", validateChoice);
  $("answerForm").addEventListener("submit", (event) => event.preventDefault());
  $("skipButton").addEventListener("click", skipQuestion);
  $("nextButton").addEventListener("click", nextQuestion);
  $("resultSort").addEventListener("change", renderResults);
  $("replayMissedButton").addEventListener("click", () => {
    const missed = state.results.filter((result) => !result.correct || result.wrongAttempts > 0).map((result) => result.question);
    if (missed.length) startSession(missed);
  });
  $("replayAllButton").addEventListener("click", () => startSession(state.results.map((result) => result.question)));
  $("newSessionButton").addEventListener("click", () => {
    $("results").hidden = true;
    const progressPanel = $("progressPanel");
    if (progressPanel) progressPanel.hidden = false;
    $("setup").hidden = false;
    $("particleSetup").hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
