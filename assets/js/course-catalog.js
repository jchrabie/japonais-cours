/* Catalogue de progression construit à partir des fiches et vidéos des cours 1, 2 et 3.
 * Les cours proposés dans l'interface sont uniquement ceux dont le contenu est disponible.
 * vocabularyCourses = cours dans lesquels le mot est enseigné ou pratiqué.
 * Le tableau du glossaire n'affiche que le premier cours (le plus petit numéro).
 */
(() => {
  "use strict";

  const courses = [
    { id: 1, label: "Cours 1", title: "Bases, présentation, ordre des phrases et adjectifs (autonomie 1)" },
    { id: 2, label: "Cours 2", title: "Adjectifs, goûts, verbes, couleurs et particules (autonomie 2)" },
    { id: 3, label: "Cours 3", title: "Phrases avec は・を, adjectifs, の, couleurs et nombres (autonomie 3)" }
  ];

  const vocabularyCourses = {};
  const addCourses = (ids, ...courseIds) => {
    for (const id of ids) {
      const next = new Set([...(vocabularyCourses[id] || []), ...courseIds]);
      vocabularyCourses[id] = [...next].sort((a, b) => a - b);
    }
  };

  // Autonomie 1 : les 50 adjectifs du document « Adjectifs japonais — Niveau N5 ».
  addCourses([
    "adj-001","adj-002","adj-003","adj-004","adj-006","adj-007","adj-008","adj-009",
    "adj-011","adj-012","adj-013","adj-014","adj-015","adj-016","adj-017","adj-018",
    "adj-019","adj-020","adj-027","adj-028","adj-029","adj-031","adj-032","adj-033",
    "adj-034","adj-035","adj-036","adj-037","adj-038","adj-039","adj-040","adj-041",
    "adj-042","adj-043","adj-044","adj-046","adj-047","adj-048","adj-049","adj-050",
    "adj-051","adj-052","adj-053","adj-054","adj-055","adj-056","adj-057","adj-058",
    "adj-059","adj-060"
  ], 1);
  // Adjectifs explicitement prononcés dans la vidéo de l'autonomie 1.
  addCourses(["adj-010", "adj-024", "adj-067"], 1);

  // Cours 2 : adjectifs repris dans les exemples du PDF et des vidéos d'application.
  addCourses([
    "adj-001","adj-002","adj-003","adj-005","adj-006","adj-007","adj-008","adj-009",
    "adj-010","adj-011","adj-012","adj-013","adj-014","adj-015","adj-016","adj-017",
    "adj-018","adj-020","adj-023","adj-024","adj-032","adj-033","adj-034","adj-035",
    "adj-036","adj-044","adj-045","adj-049","adj-061","adj-062","adj-063","adj-064",
    "adj-065","adj-066","adj-068","adj-069"
  ], 2);

  // Cours 1 : vocabulaire des fiches « 日本語 », exemples de présentation et image de synthèse.
  addCourses([
    "noms-001", "noms-003", "noms-004", "noms-005", "noms-008", "noms-009", "noms-011", "noms-013",
    "noms-025", "noms-026", "noms-037", "noms-041", "noms-043",
    "noms-060", "noms-061", "noms-062", "noms-063", "noms-064", "noms-065", "noms-066",
    "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-072", "noms-073",
    "noms-074", "noms-075"
  ], 1);
  // Cours 2 / autonomie 2 : mots explicitement listés ou travaillés en phrases.
  addCourses([
    "noms-005", "noms-008", "noms-010", "noms-012", "noms-013", "noms-014", "noms-015",
    "noms-016", "noms-017", "noms-018", "noms-019", "noms-020", "noms-021", "noms-022",
    "noms-023", "noms-024", "noms-025", "noms-026", "noms-027", "noms-028", "noms-029",
    "noms-030", "noms-031", "noms-032", "noms-033", "noms-034", "noms-035", "noms-037",
    "noms-036", "noms-038", "noms-040", "noms-041", "noms-042", "noms-043", "noms-044", "noms-046", "noms-047",
    "noms-048", "noms-054", "noms-055", "noms-056", "noms-057", "noms-058", "noms-059",
    "noms-076", "noms-077", "noms-078", "noms-079"
  ], 2);

  // Cours 1 : manger/boire dans le vocabulaire de base, combattre, aller, courir et dormir dans les exemples.
  addCourses(["verbes-001", "verbes-002", "verbes-007", "verbes-008", "verbes-009", "verbes-010"], 1);
  // Cours 2 / autonomie 2 : liste officielle des cinq verbes et exercices d'application.
  addCourses(["verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-006"], 2);

  // Cours 3 — mots explicitement utilisés dans la fiche « wa, o, adjectifs et particule no » et dans les vidéos associées.
  addCourses([
    "adj-003","adj-005","adj-006","adj-007","adj-008","adj-009","adj-020","adj-022","adj-024","adj-025","adj-026","adj-028","adj-029","adj-030","adj-031","adj-032","adj-033","adj-034","adj-037","adj-038","adj-061","adj-062","adj-063","adj-064","adj-065","adj-066","adj-070","adj-071","adj-072","noms-005","noms-012","noms-013","noms-015","noms-016","noms-017","noms-018","noms-025","noms-026","noms-027","noms-032","noms-033","noms-037","noms-038","noms-040","noms-041","noms-043","noms-046","noms-047","noms-048","noms-053","noms-064","noms-065","noms-074","noms-075","noms-078","noms-079","noms-080","noms-081","noms-082","noms-083","noms-084","noms-085","noms-086","noms-087","noms-088","noms-089","noms-090","noms-091","noms-092","noms-093","noms-094","noms-095","noms-096","noms-097","noms-098","noms-099","noms-100","noms-101","noms-102","noms-103","noms-104","noms-105","noms-106","noms-107","noms-108","noms-109","noms-110","noms-111","noms-112","noms-113","noms-114","noms-115","noms-116","noms-117","noms-118","noms-119","noms-120","noms-121","noms-122","noms-123","noms-124","noms-125","noms-126","noms-127","noms-128","noms-129","noms-130","noms-131","noms-132","noms-133","noms-134","noms-135","noms-136","noms-137","noms-138","noms-139","noms-140","noms-141","noms-142","noms-143","noms-144","noms-145","noms-146","noms-147","verbes-001","verbes-002","verbes-003","verbes-004","verbes-005","verbes-011","verbes-012","verbes-013","verbes-014","verbes-015"
  ], 3);
  addCourses(["adj-040"], 3);

  // Une notion peut être révisée dans plusieurs cours ; les sélecteurs des jeux s'appuient sur ces associations.
  const grammarConceptCourses = {
    "copula-noun": [1],
    "negative-noun": [1],
    "copula-na": [1, 2, 3],
    "negative-na": [1, 2, 3],
    "copula-i": [1, 2, 3],
    "negative-i": [1, 2, 3],
    "topic-wa": [1, 3],
    "question-ka": [1, 2],
    "sentence-order": [1],
    "verb-final": [1, 2, 3],
    "pronoun-omission": [1],
    "no-plural": [1],
    "ni-place": [1],
    "suki-kirai": [2],
    "suki-negative": [2],
    "kirai-negative": [2],
    "dai-intensifier": [2],
    "like-ga": [2],
    "ga-skill": [2],
    "object-wo": [2, 3],
    "adjective-before-noun": [2, 3],
    "particle-no": [3],
    "no-possession": [3],
    "no-affiliation": [3],
    "no-type": [3],
    "color-no": [3],
    "verb-dictionary": [3],
    "suru-compounds": [3]
  };

  // vocabularyIds = tous les mots lexicaux obligatoires pour comprendre la phrase.
  // concepts = notion(s) que l'exercice veut réellement faire travailler (pas chaque particule simplement présente).
  const sentenceMetadata = {
    "likes-pretty-cat": { vocabularyIds: ["adj-013","noms-025","noms-017","adj-015"], concepts: ["adjective-before-noun","suki-kirai","like-ga"] },
    "does-not-like-sushi": { vocabularyIds: ["noms-043","noms-017","adj-015"], concepts: ["suki-negative","like-ga"] },
    "hates-vegetables": { vocabularyIds: ["noms-043","noms-047","adj-016"], concepts: ["suki-kirai","like-ga"] },
    "really-hates-rain": { vocabularyIds: ["noms-043","noms-027","adj-069"], concepts: ["dai-intensifier","like-ga"] },
    "adores-cats": { vocabularyIds: ["noms-043","noms-025","adj-068"], concepts: ["dai-intensifier","like-ga"] },
    "read-interesting-manga": { vocabularyIds: ["noms-043","adj-017","noms-041","verbes-003"], concepts: ["object-wo"] },
    "eat-delicious-ramen": { vocabularyIds: ["noms-043","adj-024","noms-018","verbes-001"], concepts: ["object-wo","adjective-before-noun"] },
    "drink-water": { vocabularyIds: ["noms-043","noms-037","verbes-002"], concepts: ["object-wo"] },
    "buy-new-book": { vocabularyIds: ["noms-043","adj-036","noms-005","verbes-005"], concepts: ["object-wo","adjective-before-noun"] },
    "watch-famous-film": { vocabularyIds: ["noms-043","adj-006","noms-013","verbes-004"], concepts: ["object-wo","adjective-before-noun"] },
    "film-interesting": { vocabularyIds: ["noms-013","adj-017"], concepts: ["copula-i"] },
    "film-not-interesting": { vocabularyIds: ["noms-013","adj-017"], concepts: ["negative-i"] },
    "anime-not-strange": { vocabularyIds: ["noms-035","adj-005"], concepts: ["negative-na"] },
    "not-good-at-japanese": { vocabularyIds: ["noms-043","noms-008","adj-001"], concepts: ["negative-na","ga-skill"] },
    "room-not-quiet": { vocabularyIds: ["noms-010","adj-011"], concepts: ["negative-na"] },
    "room-quiet": { vocabularyIds: ["noms-010","adj-011"], concepts: ["copula-na"] },
    "cat-small": { vocabularyIds: ["noms-025","adj-033"], concepts: ["copula-i"] },
    "dog-big": { vocabularyIds: ["noms-026","adj-034"], concepts: ["copula-i"] },
    "book-old": { vocabularyIds: ["noms-005","adj-037"], concepts: ["copula-i"] },
    "black-onigiri-delicious": { vocabularyIds: ["adj-065","noms-040","adj-024"], concepts: ["topic-wa","adjective-before-noun","copula-i"] },
    "drink-coffee": { vocabularyIds: ["noms-043","noms-019","verbes-002"], concepts: ["object-wo"] },
    "study-japanese": { vocabularyIds: ["noms-043","noms-008","verbes-006"], concepts: ["object-wo"] },
    "watch-strange-anime": { vocabularyIds: ["noms-043","adj-005","noms-035","verbes-004"], concepts: ["object-wo","adjective-before-noun"] },
    "read-old-book": { vocabularyIds: ["noms-043","adj-037","noms-005","verbes-003"], concepts: ["object-wo","adjective-before-noun"] },
    "ramen-delicious": { vocabularyIds: ["noms-018","adj-024"], concepts: ["copula-i"] },
    "dog-likes-sushi": { vocabularyIds: ["noms-026","noms-017","adj-015"], concepts: ["suki-kirai","like-ga"] },
    "cat-does-not-like-coffee": { vocabularyIds: ["noms-025","noms-019","adj-015"], concepts: ["suki-negative","like-ga"] },
    "cat-hates-rain": { vocabularyIds: ["noms-025","noms-027","adj-016"], concepts: ["suki-kirai","like-ga"] },
    "film-interesting-question": { vocabularyIds: ["noms-013","adj-017"], concepts: ["question-ka"] },
    "anime-strange-question": { vocabularyIds: ["noms-035","adj-005"], concepts: ["question-ka"] },
    "japanese-skill-question": { vocabularyIds: ["noms-008","adj-001"], concepts: ["question-ka","ga-skill"] },
    "study-japanese-question": { vocabularyIds: ["noms-008","verbes-006"], concepts: ["question-ka","object-wo"] },
    "cat-likes-sushi-question": { vocabularyIds: ["noms-025","noms-017","adj-015"], concepts: ["question-ka","suki-kirai","like-ga"] },
    "course1-japanese-person": { vocabularyIds: ["noms-001"], concepts: ["copula-noun"] },
    "course1-student": { vocabularyIds: ["noms-003"], concepts: ["copula-noun"] },
    "course1-not-teacher": { vocabularyIds: ["noms-004"], concepts: ["negative-noun"] },
    "town-quiet": { vocabularyIds: ["noms-012","adj-011"], concepts: ["copula-na"] },
    "town-not-quiet": { vocabularyIds: ["noms-012","adj-011"], concepts: ["negative-na"] },
    "course2-like-cats": { vocabularyIds: ["noms-025","adj-015"], concepts: ["suki-kirai","like-ga"] },
    "course2-hate-rain": { vocabularyIds: ["noms-027","adj-016"], concepts: ["suki-kirai","like-ga"] },
    "course2-not-like-vegetables": { vocabularyIds: ["noms-047","adj-015"], concepts: ["suki-negative","like-ga"] },
    "course2-like-coffee": { vocabularyIds: ["noms-019","adj-015"], concepts: ["suki-kirai","like-ga"] },
    "course2-what-do-you-like": { vocabularyIds: ["noms-042","adj-015"], concepts: ["question-ka","suki-kirai","like-ga"] },
    "course2-drink-milk": { vocabularyIds: ["noms-043","noms-046","verbes-002"], concepts: ["object-wo","verb-final"] },
    "course2-buy-meat": { vocabularyIds: ["noms-043","noms-038","verbes-005"], concepts: ["object-wo","verb-final"] },
    "course2-buy-beautiful-fish": { vocabularyIds: ["noms-043","adj-013","noms-048","verbes-005"], concepts: ["object-wo","adjective-before-noun","verb-final"] },
    "course2-blue-sword": { vocabularyIds: ["noms-043","adj-062","noms-078","verbes-005"], concepts: ["object-wo","adjective-before-noun"] },
    "course2-red-mountain": { vocabularyIds: ["noms-043","adj-061","noms-079","verbes-004"], concepts: ["object-wo","adjective-before-noun"] },
    "course1-country": { vocabularyIds: ["noms-043","noms-009"], concepts: ["copula-noun"] },
    "course1-manga-question": { vocabularyIds: ["noms-041","adj-017"], concepts: ["question-ka","copula-i"] },
    "course1-manga-statement": { vocabularyIds: ["noms-041","adj-017"], concepts: ["copula-i"] },
    "course1-kawaii-cat": { vocabularyIds: ["noms-025","adj-067"], concepts: ["copula-i"] },
    "course1-pan-question": { vocabularyIds: ["noms-071","verbes-001"], concepts: ["question-ka","verb-final"] },
    "course1-go-school": { vocabularyIds: ["noms-043","noms-065","verbes-008"], concepts: ["ni-place","verb-final"] },
    "course1-ninja-fights": { vocabularyIds: ["noms-075","verbes-007"], concepts: ["verb-final"] },

    "course1-not-student": { vocabularyIds: ["noms-003"], concepts: ["negative-noun"] },
    "course1-teacher": { vocabularyIds: ["noms-004"], concepts: ["copula-noun"] },
    "course1-not-japanese": { vocabularyIds: ["noms-001"], concepts: ["negative-noun"] },
    "course1-not-french": { vocabularyIds: ["noms-043","noms-009"], concepts: ["negative-noun","topic-wa"] },
    "course1-cat-not-small": { vocabularyIds: ["noms-025","adj-033"], concepts: ["negative-i"] },
    "course1-dog-not-big": { vocabularyIds: ["noms-026","adj-034"], concepts: ["negative-i"] },
    "course1-book-not-old": { vocabularyIds: ["noms-005","adj-037"], concepts: ["negative-i"] },
    "course1-book-good": { vocabularyIds: ["noms-005","adj-049"], concepts: ["copula-i"] },
    "course1-book-not-good": { vocabularyIds: ["noms-005","adj-049"], concepts: ["negative-i"] },
    "course1-manga-not-interesting": { vocabularyIds: ["noms-041","adj-017"], concepts: ["negative-i"] },
    "course1-japanese-difficult": { vocabularyIds: ["noms-008","adj-020"], concepts: ["copula-i"] },
    "course1-japanese-not-difficult": { vocabularyIds: ["noms-008","adj-020"], concepts: ["negative-i"] },
    "course1-cat-not-cute": { vocabularyIds: ["noms-025","adj-067"], concepts: ["negative-i"] },
    "course1-cat-big": { vocabularyIds: ["noms-025","adj-034"], concepts: ["copula-i"] },
    "course1-student-question": { vocabularyIds: ["noms-003"], concepts: ["question-ka","copula-noun"] },
    "course1-country-question": { vocabularyIds: ["noms-043","noms-009"], concepts: ["question-ka","copula-noun","topic-wa"] },
    "course2-not-like-cats": { vocabularyIds: ["noms-025","adj-015"], concepts: ["suki-negative","like-ga"] },
    "course2-not-like-ramen": { vocabularyIds: ["noms-018","adj-015"], concepts: ["suki-negative","like-ga"] },
    "course2-love-ramen": { vocabularyIds: ["noms-018","adj-068"], concepts: ["dai-intensifier","like-ga"] },
    "course2-really-hate-coffee": { vocabularyIds: ["noms-019","adj-069"], concepts: ["dai-intensifier","like-ga"] },
    "course2-not-hate-vegetables": { vocabularyIds: ["noms-047","adj-016"], concepts: ["kirai-negative","like-ga"] },
    "course2-love-music": { vocabularyIds: ["noms-020","adj-068"], concepts: ["dai-intensifier","like-ga"] },
    "course2-hate-study": { vocabularyIds: ["noms-031","adj-016"], concepts: ["suki-kirai","like-ga"] },
    "course2-love-anime": { vocabularyIds: ["noms-035","adj-068"], concepts: ["dai-intensifier","like-ga"] },
    "course2-not-like-anime": { vocabularyIds: ["noms-035","adj-015"], concepts: ["suki-negative","like-ga"] },
    "course2-read-book": { vocabularyIds: ["noms-043","noms-005","verbes-003"], concepts: ["object-wo","verb-final"] },
    "course2-eat-onigiri": { vocabularyIds: ["noms-043","noms-040","verbes-001"], concepts: ["object-wo","verb-final"] },
    "course2-watch-film": { vocabularyIds: ["noms-043","noms-013","verbes-004"], concepts: ["object-wo","verb-final"] },
    "course2-buy-fish": { vocabularyIds: ["noms-043","noms-048","verbes-005"], concepts: ["object-wo","verb-final"] },
    "course2-drink-beer": { vocabularyIds: ["noms-043","noms-076","verbes-002"], concepts: ["object-wo","verb-final"] },
    "course2-buy-not-new-book": { vocabularyIds: ["noms-043","adj-036","noms-005","verbes-005"], concepts: ["negative-i","adjective-before-noun","object-wo","verb-final"] },
    "course2-buy-not-blue-sword": { vocabularyIds: ["noms-043","adj-062","noms-078","verbes-005"], concepts: ["negative-i","adjective-before-noun","object-wo","verb-final"] },
    "course2-drink-delicious-coffee": { vocabularyIds: ["noms-043","adj-024","noms-019","verbes-002"], concepts: ["adjective-before-noun","object-wo","verb-final"] },
    "course2-love-travel": { vocabularyIds: ["noms-023","adj-015"], concepts: ["suki-kirai","like-ga"] },
    "course2-hate-work": { vocabularyIds: ["noms-030","adj-016"], concepts: ["suki-kirai","like-ga"] },
    "course2-love-games": { vocabularyIds: ["noms-024","adj-068"], concepts: ["dai-intensifier","like-ga"] },
    "course2-what-do-you-hate": { vocabularyIds: ["noms-042","adj-016"], concepts: ["question-ka","suki-kirai","like-ga"] },
    "course2-do-you-like-cats": { vocabularyIds: ["noms-025","adj-015"], concepts: ["question-ka","suki-kirai","like-ga"] },
    "course2-do-you-hate-coffee": { vocabularyIds: ["noms-019","adj-016"], concepts: ["question-ka","suki-kirai","like-ga"] },
    "course2-do-you-read-manga": { vocabularyIds: ["noms-041","verbes-003"], concepts: ["question-ka","object-wo","verb-final"] },
    "course2-drink-cola-question": { vocabularyIds: ["noms-077","verbes-002"], concepts: ["question-ka","object-wo","verb-final"] },
    "course2-dog-eats-meat": { vocabularyIds: ["noms-026","noms-038","verbes-001"], concepts: ["object-wo","verb-final"] },
    "course2-cat-drinks-water": { vocabularyIds: ["noms-025","noms-037","verbes-002"], concepts: ["object-wo","verb-final"] },
    // Cours 3 — chaque phrase indique tous les mots requis et la notion réellement travaillée.
    "course3-luffy-eats-ramen": { vocabularyIds: ["noms-114","noms-018","verbes-001"], concepts: ["topic-wa","object-wo","verb-dictionary","verb-final"] },
    "course3-naruto-delicious-ramen": { vocabularyIds: ["noms-115","adj-024","noms-018","verbes-001"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-sakura-long-hair": { vocabularyIds: ["noms-116","adj-070","noms-080","verbes-011"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-small-luffy-large-meat": { vocabularyIds: ["adj-033","noms-114","adj-034","noms-038","verbes-005"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-edward-old-book": { vocabularyIds: ["noms-117","adj-037","noms-005","verbes-003"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-tanjiro-tough-demon": { vocabularyIds: ["noms-118","adj-071","noms-085","verbes-011"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-luffy-delicious-meat": { vocabularyIds: ["noms-114","adj-024","noms-038","verbes-001"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-sakura-sweet-cake": { vocabularyIds: ["noms-116","adj-026","noms-081","verbes-001"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-goku-expensive-drink": { vocabularyIds: ["noms-119","adj-032","noms-082","verbes-002"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-zoro-strange-book": { vocabularyIds: ["noms-120","adj-005","noms-005","verbes-003"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-nami-practical-bag": { vocabularyIds: ["noms-121","adj-003","noms-105","verbes-005"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-eren-scary-film": { vocabularyIds: ["noms-122","adj-031","noms-013","verbes-004"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-hinata-sad-book": { vocabularyIds: ["noms-123","adj-029","noms-005","verbes-003"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-luffy-small-shop": { vocabularyIds: ["noms-114","adj-033","noms-083","verbes-005"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-sanji-not-delicious-food": { vocabularyIds: ["noms-126","adj-024","noms-032","verbes-001"], concepts: ["topic-wa","object-wo","negative-i","adjective-before-noun","verb-dictionary"] },
    "course3-naruto-energetic-dog": { vocabularyIds: ["noms-115","adj-008","noms-026","verbes-004"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-gon-not-easy-book": { vocabularyIds: ["noms-124","adj-009","noms-005","verbes-003"], concepts: ["topic-wa","object-wo","negative-na","adjective-before-noun","verb-dictionary"] },
    "course3-killua-difficult-book": { vocabularyIds: ["noms-125","adj-020","noms-005","verbes-003"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-luffy-not-heavy-meat": { vocabularyIds: ["noms-114","adj-028","noms-038","verbes-001"], concepts: ["topic-wa","object-wo","negative-i","adjective-before-noun","verb-dictionary"] },
    "course3-nami-famous-shop": { vocabularyIds: ["noms-121","adj-006","noms-083","verbes-005"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-eren-dirty-water": { vocabularyIds: ["noms-122","adj-030","noms-037","verbes-002"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-sakura-unimportant-book": { vocabularyIds: ["noms-116","adj-007","noms-005","verbes-005"], concepts: ["topic-wa","object-wo","negative-na","adjective-before-noun","verb-dictionary"] },
    "course3-hisoka-scary-book": { vocabularyIds: ["noms-127","adj-031","noms-005","verbes-003"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-naruto-practical-hotel": { vocabularyIds: ["noms-115","adj-003","noms-084","verbes-013"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","suru-compounds"] },
    "course3-kakashi-sharingan": { vocabularyIds: ["noms-128","noms-087"], concepts: ["particle-no","no-possession"] },
    "course3-hero-legend": { vocabularyIds: ["noms-089","noms-088"], concepts: ["particle-no","no-possession"] },
    "course3-legend-hero": { vocabularyIds: ["noms-088","noms-089"], concepts: ["particle-no","no-type"] },
    "course3-naruto-kunai": { vocabularyIds: ["noms-115","noms-086"], concepts: ["particle-no","no-possession"] },
    "course3-konoha-shinobi": { vocabularyIds: ["noms-090","noms-091"], concepts: ["particle-no","no-affiliation"] },
    "course3-magic-power": { vocabularyIds: ["noms-092","noms-093"], concepts: ["particle-no","no-type"] },
    "course3-east-blue-pirates": { vocabularyIds: ["noms-129","noms-074"], concepts: ["particle-no","no-affiliation"] },
    "course3-strawhat-crew": { vocabularyIds: ["noms-112","noms-113"], concepts: ["particle-no","no-affiliation"] },
    "course3-naruto-dream": { vocabularyIds: ["noms-115","noms-094"], concepts: ["particle-no","no-possession"] },
    "course3-tanjiro-sword": { vocabularyIds: ["noms-118","noms-095"], concepts: ["particle-no","no-possession"] },
    "course3-luffy-red-hat": { vocabularyIds: ["noms-114","noms-053","adj-061"], concepts: ["particle-no","no-possession","topic-wa","copula-i"] },
    "course3-goku-power-amazing": { vocabularyIds: ["noms-119","noms-093","adj-025"], concepts: ["particle-no","no-possession","topic-wa","copula-i"] },
    "course3-moon-princess": { vocabularyIds: ["noms-130","noms-096"], concepts: ["particle-no","no-type"] },
    "course3-hero-school": { vocabularyIds: ["noms-089","noms-065","noms-097"], concepts: ["particle-no","no-affiliation","topic-wa","copula-noun"] },
    "course3-akatsuki-members": { vocabularyIds: ["noms-098","noms-099","adj-040","noms-016"], concepts: ["particle-no","no-affiliation","topic-wa","adjective-before-noun"] },
    "course3-dark-magic-dangerous": { vocabularyIds: ["noms-100","noms-092","adj-072"], concepts: ["particle-no","no-type","topic-wa","copula-na"] },
    "course3-steel-alchemist-strong": { vocabularyIds: ["noms-133","noms-101","adj-022"], concepts: ["particle-no","no-type","topic-wa","copula-i"] },
    "course3-luffy-friend-eats-meat": { vocabularyIds: ["noms-114","noms-064","noms-038","verbes-001"], concepts: ["particle-no","no-possession","topic-wa","object-wo","verb-dictionary","verb-final"] },
    "course3-usopp-town": { vocabularyIds: ["noms-147","noms-012"], concepts: ["particle-no","no-possession"] },
    "course3-usopp-town-people": { vocabularyIds: ["noms-147","noms-012","noms-016"], concepts: ["particle-no","no-possession"] },
    "course3-usopp-town-people-money": { vocabularyIds: ["noms-147","noms-012","noms-016","noms-033"], concepts: ["particle-no","no-possession"] },
    "course3-luffy-father": { vocabularyIds: ["noms-114","noms-103"], concepts: ["particle-no","no-possession"] },
    "course3-happy-fish": { vocabularyIds: ["noms-104","noms-048"], concepts: ["particle-no","no-possession"] },
    "course3-pink-shoes": { vocabularyIds: ["noms-108","noms-102"], concepts: ["particle-no","color-no"] },
    "course3-green-car-fast": { vocabularyIds: ["noms-106","noms-015","adj-038"], concepts: ["particle-no","color-no","topic-wa","copula-i"] },
    "course3-pink-phone-expensive": { vocabularyIds: ["noms-108","noms-131","adj-032"], concepts: ["particle-no","color-no","topic-wa","copula-i"] },
    "course3-red-pirate-orange-vegetable": { vocabularyIds: ["adj-061","noms-074","noms-107","noms-047","verbes-001"], concepts: ["color-no","topic-wa","object-wo","verb-dictionary","verb-final"] },
    "course3-green-car-question": { vocabularyIds: ["noms-106","noms-015","adj-038"], concepts: ["particle-no","color-no","topic-wa","question-ka"] },
    "course3-not-new-pink-phone": { vocabularyIds: ["noms-121","adj-032","noms-131","verbes-005"], concepts: ["topic-wa","negative-i","adjective-before-noun","object-wo","verb-dictionary"] },
    "course3-hotel-reservation-question": { vocabularyIds: ["noms-115","noms-084","verbes-013"], concepts: ["topic-wa","object-wo","suru-compounds","question-ka"] },
    "course3-cook-ramen": { vocabularyIds: ["noms-119","noms-018","verbes-014"], concepts: ["topic-wa","object-wo","suru-compounds","verb-final"] },
    "course3-travel-to-moon": { vocabularyIds: ["noms-113","verbes-015"], concepts: ["topic-wa","suru-compounds","verb-final"] },
    "course3-hero-reads-old-book": { vocabularyIds: ["noms-089","adj-037","noms-005","verbes-003"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","verb-final"] },
    "course3-happy-drinks-orange": { vocabularyIds: ["noms-104","noms-107","noms-082","verbes-002"], concepts: ["particle-no","color-no","topic-wa","object-wo","verb-dictionary"] },
    "course3-naruto-buys-green-car": { vocabularyIds: ["noms-115","noms-106","noms-015","verbes-005"], concepts: ["particle-no","color-no","topic-wa","object-wo","verb-dictionary"] },
    "course3-sakura-cuts-hair-question": { vocabularyIds: ["noms-116","adj-070","noms-080","verbes-011"], concepts: ["topic-wa","object-wo","adjective-before-noun","verb-dictionary","question-ka"] },
  };

  const particleMetadata = {
    "p-topic-cat": { vocabularyIds: ["adj-013","noms-025","noms-017","adj-015"], concepts: ["topic-wa"] },
    "p-like-sushi": { vocabularyIds: ["noms-025","noms-017","adj-015"], concepts: ["like-ga"] },
    "p-object-manga": { vocabularyIds: ["noms-043","adj-017","noms-041","verbes-003"], concepts: ["object-wo"] },
    "p-topic-water": { vocabularyIds: ["noms-043","noms-037","verbes-002"], concepts: ["topic-wa"] },
    "p-topic-film": { vocabularyIds: ["noms-013","adj-017"], concepts: ["topic-wa"] },
    "p-topic-dislike": { vocabularyIds: ["noms-043","noms-017","adj-016"], concepts: ["topic-wa"] },
    "p-topic-onigiri": { vocabularyIds: ["adj-065","noms-040","adj-024"], concepts: ["topic-wa"] },
    "p-object-book": { vocabularyIds: ["noms-043","adj-036","noms-005","verbes-005"], concepts: ["object-wo"] },
    "p-like-rain": { vocabularyIds: ["noms-025","noms-027","adj-016"], concepts: ["like-ga"] },
    "p-object-study": { vocabularyIds: ["noms-043","noms-008","verbes-006"], concepts: ["object-wo"] },
    "p-topic-anime": { vocabularyIds: ["noms-035","adj-005"], concepts: ["topic-wa"] },
    "p-object-coffee": { vocabularyIds: ["noms-043","noms-019","verbes-002"], concepts: ["object-wo"] },
    "p-like-cat": { vocabularyIds: ["noms-043","noms-025","adj-015"], concepts: ["like-ga"] },
    "p-subject-japanese": { vocabularyIds: ["noms-008","adj-010"], concepts: ["topic-wa"] },
    "p-object-sushi": { vocabularyIds: ["noms-043","noms-017","verbes-001"], concepts: ["object-wo"] },
    "p-question-film": { vocabularyIds: ["noms-013","adj-017"], concepts: ["question-ka"] },
    "p-question-skill": { vocabularyIds: ["noms-008","adj-001"], concepts: ["question-ka","ga-skill"] },
    "p-question-study": { vocabularyIds: ["noms-008","verbes-006"], concepts: ["question-ka"] },
    "p-question-negative": { vocabularyIds: ["adj-001"], concepts: ["question-ka","negative-na"] },
    "p-question-like": { vocabularyIds: ["noms-025","noms-017","adj-015"], concepts: ["question-ka"] },
    "p-topic-room": { vocabularyIds: ["noms-010","adj-011"], concepts: ["topic-wa"] },
    "p-object-japanese": { vocabularyIds: ["noms-043","noms-008","verbes-006"], concepts: ["object-wo"] },
    "p-like-vegetables": { vocabularyIds: ["noms-026","noms-047","adj-016"], concepts: ["like-ga"] },
    "p-question-anime": { vocabularyIds: ["noms-035","adj-005"], concepts: ["question-ka"] },
    "p-course2-like-cats": { vocabularyIds: ["noms-025","adj-015"], concepts: ["like-ga"] },
    "p-course2-question-nani": { vocabularyIds: ["noms-042","adj-015"], concepts: ["question-ka"] },
    "p-course2-object-book": { vocabularyIds: ["noms-005","verbes-003"], concepts: ["object-wo"] },
    "p-course1-manga-question": { vocabularyIds: ["noms-041","adj-017"], concepts: ["question-ka"] },
    "p-object-milk": { vocabularyIds: ["noms-043","noms-046","verbes-002"], concepts: ["object-wo"] },
    "p-object-meat": { vocabularyIds: ["noms-043","noms-038","verbes-005"], concepts: ["object-wo"] },
    "p-object-fish": { vocabularyIds: ["noms-043","adj-013","noms-048","verbes-005"], concepts: ["object-wo"] },

    "p-course1-student-topic": { vocabularyIds: ["noms-003"], concepts: ["topic-wa"] },
    "p-course1-manga-topic": { vocabularyIds: ["noms-041","adj-017"], concepts: ["topic-wa"] },
    "p-course2-object-beer": { vocabularyIds: ["noms-043","noms-076","verbes-002"], concepts: ["object-wo"] },
    "p-course2-object-ramen": { vocabularyIds: ["noms-043","noms-018","verbes-001"], concepts: ["object-wo"] },
    "p-course2-like-music": { vocabularyIds: ["noms-020","adj-015"], concepts: ["like-ga"] },
    "p-course2-question-negative-like": { vocabularyIds: ["noms-047","adj-016"], concepts: ["question-ka","kirai-negative"] },
    "p-course2-question-drink-cola": { vocabularyIds: ["noms-077","verbes-002"], concepts: ["question-ka","object-wo"] },
    // Cours 3 — nouveaux exercices dédiés à の et réinvestissement de は / を.
    "p-course3-no-kakashi": { vocabularyIds: ["noms-128","noms-087"], concepts: ["particle-no","no-possession"] },
    "p-course3-no-konoha": { vocabularyIds: ["noms-090","noms-091"], concepts: ["particle-no","no-affiliation"] },
    "p-course3-no-magic": { vocabularyIds: ["noms-092","noms-093"], concepts: ["particle-no","no-type"] },
    "p-course3-no-hat": { vocabularyIds: ["noms-114","noms-053","adj-061"], concepts: ["particle-no","no-possession","topic-wa"] },
    "p-course3-no-green-car": { vocabularyIds: ["noms-106","noms-015","adj-038"], concepts: ["particle-no","color-no","topic-wa"] },
    "p-course3-no-pink-shoes": { vocabularyIds: ["noms-108","noms-102"], concepts: ["particle-no","color-no"] },
    "p-course3-no-phone": { vocabularyIds: ["noms-108","noms-131","adj-032"], concepts: ["particle-no","color-no","topic-wa"] },
    "p-course3-no-happy-fish": { vocabularyIds: ["noms-104","noms-048"], concepts: ["particle-no","no-possession"] },
    "p-course3-no-strawhat-crew": { vocabularyIds: ["noms-112","noms-113"], concepts: ["particle-no","no-affiliation"] },
    "p-course3-no-usopp-town": { vocabularyIds: ["noms-147","noms-012"], concepts: ["particle-no","no-possession"] },
    "p-course3-no-nested-town": { vocabularyIds: ["noms-147","noms-012","noms-016"], concepts: ["particle-no","no-possession"] },
    "p-course3-wo-hair": { vocabularyIds: ["noms-116","adj-070","noms-080","verbes-011"], concepts: ["object-wo","adjective-before-noun","verb-dictionary"] },
    "p-course3-wo-cake": { vocabularyIds: ["noms-116","adj-026","noms-081","verbes-001"], concepts: ["object-wo","adjective-before-noun","verb-dictionary"] },
    "p-course3-topic-luffy": { vocabularyIds: ["noms-114","noms-038","verbes-005"], concepts: ["topic-wa","object-wo","verb-dictionary"] },
    "p-course3-wo-hotel": { vocabularyIds: ["noms-115","noms-084","verbes-013"], concepts: ["object-wo","suru-compounds","verb-dictionary"] },
    "p-course3-no-luffy-father": { vocabularyIds: ["noms-114","noms-103"], concepts: ["particle-no","no-possession"] },
    "p-course3-wo-orange-vegetable": { vocabularyIds: ["adj-061","noms-074","noms-107","noms-047","verbes-001"], concepts: ["object-wo","particle-no","color-no"] },
    "p-course3-no-hero-school": { vocabularyIds: ["noms-089","noms-065","noms-097"], concepts: ["particle-no","no-affiliation","topic-wa"] },
    "p-course3-no-legend": { vocabularyIds: ["noms-088","noms-089"], concepts: ["particle-no","no-type"] },
    "p-course3-no-dark-magic": { vocabularyIds: ["noms-100","noms-092","adj-072"], concepts: ["particle-no","no-type","topic-wa"] },
  };

  const existingCourseIds = new Set(courses.map((course) => course.id));
  const existingMemberships = (ids) => [...new Set((ids || []).map(Number))]
    .filter((courseId) => existingCourseIds.has(courseId))
    .sort((a, b) => a - b);

  function selectionAllowsVocabulary(ids, selection) {
    // Les mots sans cours confirmé restent visibles dans les glossaires (« À associer »),
    // mais ne sont pas proposés dans les jeux, même avec « Tous les cours ».
    if (!ids || !ids.length) return false;
    const membershipsByWord = ids.map((id) => existingMemberships(vocabularyCourses[id]));
    if (!selection) return membershipsByWord.every((memberships) => memberships.length > 0);
    if (selection.all) return membershipsByWord.every((memberships) => memberships.length > 0);
    const selected = new Set(selection.ids || []);
    if (!selected.size) return false;
    return membershipsByWord.every((memberships) => memberships.some((courseId) => selected.has(courseId)));
  }

  function selectionAllowsConcepts(ids, selection) {
    if (!selection || selection.all) return true;
    const selected = new Set(selection.ids || []);
    if (!ids || !ids.length) return false;
    return ids.every((id) => {
      const memberships = existingMemberships(grammarConceptCourses[id]);
      return memberships.some((courseId) => selected.has(courseId));
    });
  }

  function coursesForVocabulary(id) {
    return existingMemberships(vocabularyCourses[id]);
  }

  function firstCourseForVocabulary(id) {
    return coursesForVocabulary(id)[0] || null;
  }

  function isVocabularyAssigned(id) {
    return coursesForVocabulary(id).length > 0;
  }

  function labelForCourse(id) {
    const course = courses.find((item) => item.id === Number(id));
    return course ? course.label : "";
  }

  window.JAPONAIS_COURSES = {
    courses,
    vocabularyCourses,
    grammarConceptCourses,
    sentenceMetadata,
    particleMetadata,
    coursesForVocabulary,
    firstCourseForVocabulary,
    isVocabularyAssigned,
    labelForCourse,
    selectionAllowsVocabulary,
    selectionAllowsConcepts
  };
})();
