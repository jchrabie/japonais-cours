/* Catalogue de progression construit à partir des fiches et vidéos des cours 1 à 5.
 * Les cours proposés dans l'interface sont uniquement ceux dont le contenu est disponible.
 * vocabularyCourses = cours dans lesquels le mot est enseigné ou pratiqué.
 * Le tableau du glossaire n'affiche que le premier cours (le plus petit numéro).
 */
(() => {
  "use strict";

  const courses = [
    { id: 1, label: "Cours 1", title: "Bases, présentation, ordre des phrases et adjectifs (autonomie 1)" },
    { id: 2, label: "Cours 2", title: "Adjectifs, goûts, verbes, couleurs et particules (autonomie 2)" },
    { id: 3, label: "Cours 3", title: "Phrases avec は・を, adjectifs, の, couleurs et nombres (autonomie 3)" },
    { id: 4, label: "Cours 4", title: "Nombres, forme polie en ます et mots interrogatifs (autonomie 4)" },
    { id: 5, label: "Cours 5", title: "Mots interrogatifs, démonstratifs こそあど, ville, achats et horaires (autonomie 5)" }
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

  // Cours 4 : nombres, verbes à la forme polie / négative et vocabulaire interrogatif de l’autonomie 4.
  addCourses([
    "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-153", "noms-154", "noms-155", "noms-156", "noms-157", "noms-158", "noms-159", "noms-160", "noms-161", "noms-042", "noms-011", "noms-013", "noms-035", "noms-083", "noms-084", "noms-007", "noms-067", "noms-102", "noms-040", "noms-008", "noms-005", "noms-019", "noms-037", "verbes-016", "verbes-017", "verbes-018", "verbes-019", "verbes-020", "verbes-021", "verbes-022", "verbes-023", "verbes-024", "verbes-025", "verbes-026", "verbes-027", "verbes-028", "verbes-029", "verbes-030", "verbes-031", "verbes-032", "verbes-033", "verbes-034", "verbes-035", "verbes-036", "verbes-037", "verbes-038", "verbes-039", "verbes-040", "verbes-041", "verbes-042", "verbes-043", "verbes-044", "verbes-045", "verbes-046", "verbes-047", "verbes-048", "verbes-049", "verbes-050", "verbes-051", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-010", "verbes-011", "verbes-012", "verbes-013", "verbes-014"
  ], 4);
  addCourses(["verbes-052"], 4);
  // Inclut aussi les mots plus anciens réutilisés dans les phrases du cours 4.
  addCourses(["noms-042", "verbes-003", "noms-013", "verbes-049", "verbes-005", "noms-148", "noms-011", "noms-152", "noms-150", "verbes-050", "noms-156", "noms-151", "verbes-001", "noms-084", "noms-155", "adj-015", "noms-149", "noms-008", "verbes-032", "noms-005", "verbes-031", "noms-035", "verbes-004", "noms-037", "verbes-002", "noms-161", "verbes-017", "verbes-018", "verbes-019", "noms-067", "verbes-039", "noms-154", "verbes-046", "verbes-051", "verbes-020", "noms-048", "verbes-034", "verbes-042", "noms-102", "verbes-048", "noms-001", "noms-043", "noms-160", "adj-024", "verbes-014", "verbes-016", "verbes-010", "verbes-035", "verbes-021", "verbes-025", "verbes-022", "verbes-040", "verbes-047", "verbes-045", "verbes-026", "verbes-028", "noms-153"], 4);


  // Cours 5 : vocabulaire de la ville, des achats, des démonstratifs et de l'heure.
  addCourses([
    "noms-005","noms-011","noms-012","noms-016","noms-017","noms-018","noms-019","noms-025","noms-026","noms-028","noms-029",
    "noms-032","noms-035","noms-037","noms-040","noms-041","noms-042","noms-043","noms-046","noms-048","noms-060",
    "noms-067","noms-068","noms-069","noms-070","noms-071","noms-081","noms-083","noms-084","noms-102",
    "noms-148","noms-149","noms-150","noms-151","noms-152","noms-153","noms-154","noms-155","noms-156","noms-157","noms-158","noms-159","noms-160","noms-161",
    "noms-162","noms-163","noms-164","noms-165","noms-166","noms-167","noms-168","noms-169","noms-170","noms-171","noms-172","noms-173","noms-174","noms-175","noms-176","noms-177","noms-178","noms-179","noms-180","noms-181","noms-182","noms-183","noms-184","noms-185","noms-186","noms-187","noms-188","noms-189","noms-190","noms-191","noms-192","noms-193","noms-194","noms-195","noms-196","noms-197","noms-198","noms-199","noms-200","noms-201","noms-202",
    "verbes-001","verbes-002","verbes-003","verbes-004","verbes-005","verbes-008","verbes-012","verbes-014","verbes-016","verbes-035","verbes-049","verbes-050"
  ], 5);
  addCourses(["adj-032","adj-035"], 5);

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
    "suru-compounds": [3],
    "verb-masu": [4],
    "verb-masen": [4],
    "question-words": [4, 5],
    "question-nani": [4, 5],
    "question-doko": [4, 5],
    "question-dore": [4, 5],
    "question-ikura": [4, 5],
    "question-ikutsu": [4, 5],
    "counting-numbers": [3, 4],
    "kosoado-demonstratives": [5],
    "time-expression": [5],
    "time-ni": [5]
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
      "c4-nani-yomimasu": { vocabularyIds: ["noms-042","verbes-003"], concepts: ["question-words","question-nani","verb-masu"] },
    "c4-nan-no-eiga": { vocabularyIds: ["noms-042","noms-013"], concepts: ["question-words","question-nani"] },
    "c4-nani-sagashimasu": { vocabularyIds: ["noms-042","verbes-049"], concepts: ["question-words","question-nani","verb-masu"] },
    "c4-nani-kaimasu": { vocabularyIds: ["noms-042","verbes-005"], concepts: ["question-words","question-nani","verb-masu"] },
    "c4-doko-eki": { vocabularyIds: ["noms-148","noms-011"], concepts: ["question-words","question-doko"] },
    "c4-dore-gurai-eki": { vocabularyIds: ["noms-152","noms-011"], concepts: ["question-words","question-dore"] },
    "c4-ikura-harau": { vocabularyIds: ["noms-150","verbes-050"], concepts: ["question-words","question-ikura","verb-masu"] },
    "c4-nedan-ikura": { vocabularyIds: ["noms-156","noms-150"], concepts: ["question-words","question-ikura"] },
    "c4-ikutsu-taberu": { vocabularyIds: ["noms-151","verbes-001"], concepts: ["question-words","question-ikutsu","verb-masu"] },
    "c4-hoteru-dore-gurai": { vocabularyIds: ["noms-084","noms-152"], concepts: ["question-words","question-dore"] },
    "c4-resutoran-nan-no": { vocabularyIds: ["noms-155","noms-042","verbes-049"], concepts: ["question-words","question-nani","verb-masu"] },
    "c4-nani-ga-suki": { vocabularyIds: ["noms-042","adj-015"], concepts: ["question-words","question-nani"] },
    "c4-nani-desu": { vocabularyIds: ["noms-042"], concepts: ["question-words","question-nani"] },
    "c4-dore-kaimasu": { vocabularyIds: ["noms-149","verbes-005"], concepts: ["question-words","question-dore","verb-masu"] },
    "c4-ikura-desu": { vocabularyIds: ["noms-150"], concepts: ["question-words","question-ikura"] },
    "c4-ikutsu-desu": { vocabularyIds: ["noms-151"], concepts: ["question-words","question-ikutsu"] },
    "c4-hanasu-masu": { vocabularyIds: ["noms-008","verbes-032"], concepts: ["verb-masu"] },
    "c4-kaku-masu": { vocabularyIds: ["noms-005","verbes-031"], concepts: ["verb-masu"] },
    "c4-mimasen-anime": { vocabularyIds: ["noms-035","verbes-004"], concepts: ["verb-masen"] },
    "c4-nomimasen-mizu": { vocabularyIds: ["noms-037","verbes-002"], concepts: ["verb-masen"] },
    "c4-akemasu-doa": { vocabularyIds: ["noms-161","verbes-017"], concepts: ["verb-masu"] },
    "c4-shimemasu-doa": { vocabularyIds: ["noms-161","verbes-018"], concepts: ["verb-masu"] },
    "c4-oshieru-nihongo": { vocabularyIds: ["noms-008","verbes-019"], concepts: ["verb-masu"] },
    "c4-matsu-train": { vocabularyIds: ["noms-067","verbes-039"], concepts: ["verb-masu"] },
    "c4-hairu-chikatetsu": { vocabularyIds: ["noms-154","verbes-046"], concepts: ["verb-masu"] },
    "c4-tomaru-hoteru": { vocabularyIds: ["noms-084","verbes-051"], concepts: ["verb-masu"] },
    "c4-kangaeru-book": { vocabularyIds: ["noms-005","verbes-020"], concepts: ["verb-masu"] },
    "c4-oyogu-sakana": { vocabularyIds: ["noms-048","verbes-034"], concepts: ["verb-masu"] },
    "c4-kaeru-eki": { vocabularyIds: ["noms-011","verbes-042"], concepts: ["verb-masu"] },
    "c4-nugu-kutsu": { vocabularyIds: ["noms-102","verbes-048"], concepts: ["verb-masu"] },
    "c4-nihonjin-anime": { vocabularyIds: ["noms-001","noms-035","verbes-004"], concepts: ["verb-masu"] },
    "c4-train-ticket-search": { vocabularyIds: ["noms-043","noms-067","noms-160","verbes-049"], concepts: ["verb-masu"] },
    "c4-cook-fish": { vocabularyIds: ["noms-043","adj-024","noms-048","verbes-014"], concepts: ["verb-masu"] },
    "c4-get-up": { vocabularyIds: ["noms-043","verbes-016"], concepts: ["verb-masu"] },
    "c4-sleep": { vocabularyIds: ["noms-043","verbes-010"], concepts: ["verb-masu"] },
    "c4-walk": { vocabularyIds: ["noms-043","verbes-035"], concepts: ["verb-masu"] },
    "c4-answer": { vocabularyIds: ["noms-043","verbes-021"], concepts: ["verb-masu"] },
    "c4-decide": { vocabularyIds: ["noms-043","verbes-025"], concepts: ["verb-masu"] },
    "c4-begin": { vocabularyIds: ["noms-043","verbes-022"], concepts: ["verb-masu"] },
    "c4-play": { vocabularyIds: ["noms-043","verbes-040"], concepts: ["verb-masu"] },
    "c4-hurry": { vocabularyIds: ["noms-043","verbes-047"], concepts: ["verb-masu"] },
    "c4-take-ticket": { vocabularyIds: ["noms-043","noms-160","verbes-045"], concepts: ["verb-masu"] },
    "c4-borrow-book": { vocabularyIds: ["noms-043","noms-005","verbes-026"], concepts: ["verb-masu"] },
    "c4-give-book": { vocabularyIds: ["noms-043","noms-005","verbes-028"], concepts: ["verb-masu"] },
    "c4-enter-building": { vocabularyIds: ["noms-043","noms-153","verbes-046"], concepts: ["verb-masu"] },
    "c4-how-many-anime": { vocabularyIds: ["noms-151","noms-035","verbes-004"], concepts: ["question-words","question-ikutsu","verb-masu"] },
    "c4-wakaru": { vocabularyIds: ["noms-043","noms-008","verbes-052"], concepts: ["verb-masu"] },
    "c4-wakaru-negative": { vocabularyIds: ["noms-043","noms-008","verbes-052"], concepts: ["verb-masen"] },
  // Cours 5 — démonstratifs, mots interrogatifs et expressions horaires.
    "c5-kosoado-01": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-02": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-03": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-04": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-05": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-06": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-07": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-08": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-09": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-10": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-11": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-12": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-13": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-14": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-15": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-16": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-17": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-18": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-19": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-20": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-21": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-22": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-23": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-24": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-25": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-26": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-27": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-28": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-29": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-kosoado-30": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["kosoado-demonstratives"] },
    "c5-nani-nan": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["question-nani"] },
    "c5-doko-hotel": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["question-doko"] },
    "c5-dore-choice": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["question-dore"] },
    "c5-dore-gurai-duration": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["question-words"] },
    "c5-gozen-seven": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["time-expression"] },
    "c5-gozen-seven-okiru": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["time-ni"] },
    "c5-gogo-seven-cook": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["time-ni"] },
    "c5-eleven-oh-two": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["time-expression"] },
    "c5-six-oh-two": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["time-expression"] },
    "c5-six-forty-three": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["time-expression"] },
    "c5-gogo-ten": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035"], concepts: ["time-expression"] },
  // Exemples pratiques supplémentaires du cours 5.
    "c5-eki-doko": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-doko"] },
    "c5-toire-doko": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-doko"] },
    "c5-konbini-doko": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-doko"] },
    "c5-doko-ikeba": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-doko"] },
    "c5-bus-tei-doko": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-doko"] },
    "c5-kore-ikura": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-ikura"] },
    "c5-kippu-ikura": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-ikura"] },
    "c5-zenbu-ikura": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-ikura"] },
    "c5-ikutsu-kaimasu": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-ikutsu"] },
    "c5-ikutsu-tabemasu": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-ikutsu"] },
    "c5-aruite-doregurai": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-words"] },
    "c5-chikatetsu-doregurai": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-words"] },
    "c5-konbini-doregurai": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-words"] },
    "c5-gofun-gurai": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["time-expression"] },
    "c5-tooi-desuka": { vocabularyIds: ["noms-011", "noms-005", "noms-016", "noms-017", "noms-018", "noms-019", "noms-025", "noms-026", "noms-037", "noms-040", "noms-041", "noms-042", "noms-043", "noms-046", "noms-048", "noms-060", "noms-067", "noms-068", "noms-069", "noms-070", "noms-071", "noms-081", "noms-083", "noms-084", "noms-102", "noms-148", "noms-149", "noms-150", "noms-151", "noms-152", "noms-154", "noms-155", "noms-160", "noms-166", "noms-173", "noms-174", "noms-186", "noms-187", "noms-188", "noms-189", "noms-190", "noms-191", "noms-192", "verbes-001", "verbes-002", "verbes-003", "verbes-004", "verbes-005", "verbes-008", "verbes-012", "verbes-014", "verbes-016", "verbes-035", "verbes-049", "verbes-050"], concepts: ["question-words"] }
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
