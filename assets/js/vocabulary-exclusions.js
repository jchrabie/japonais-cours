/*
 * Exclusions du vocabulaire d'apprentissage.
 * Les noms de personnages, lieux et concepts propres aux univers fictifs
 * restent utilisables dans les exemples de phrases, mais n'apparaissent pas
 * dans les glossaires ni dans les jeux qui se basent sur ces glossaires.
 * Ce script doit être chargé après vocabulary-data.js et avant glossary.js
 * ou vocabulary-game.js.
 */
(() => {
  "use strict";

  const vocabulary = window.JAPONAIS_VOCABULARY;
  if (!vocabulary) return;

  const excludedIds = new Set([
    "noms-087", // Sharingan : pouvoir fictif
    "noms-090", // Konoha : village fictif
    "noms-097", // Lycée Yuei : établissement fictif
    "noms-098", // Akatsuki : groupe fictif
    "noms-104", // Happy : personnage fictif
    "noms-114", // Luffy
    "noms-115", // Naruto
    // noms-116 (Sakura) est conservé sous la forme du mot commun « fleur de cerisier ».
    "noms-117", // Edward
    "noms-118", // Tanjirō
    "noms-119", // Goku
    "noms-120", // Zoro
    "noms-121", // Nami
    "noms-122", // Eren
    "noms-123", // Hinata
    "noms-124", // Gon
    "noms-125", // Killua
    "noms-126", // Sanji
    "noms-127", // Hisoka
    "noms-128", // Kakashi
    "noms-129", // East Blue : région fictive
    "noms-147"  // Usopp
  ]);

  for (const category of ["adj", "noms", "verbes"]) {
    if (Array.isArray(vocabulary[category])) {
      const entries = vocabulary[category];
      const retained = entries.filter((entry) => !excludedIds.has(entry.id));
      entries.splice(0, entries.length, ...retained);
    }
  }

  // Sakura est gardé comme vocabulaire de nature, pas comme nom de personnage.
  const sakura = vocabulary.noms.find((entry) => entry.id === "noms-116");
  if (sakura) {
    sakura.kanji = "桜";
    sakura.kana = "さくら";
    sakura.romaji = "sakura";
    sakura.signification = ["fleur de cerisier"];
  }

  // Conserver le nom commun « paille », sans le sens propre lié à un équipage fictif.
  const straw = vocabulary.noms.find((entry) => entry.id === "noms-112");
  if (straw) straw.signification = ["paille"];
})();
