/* Source de vérité pour les titres, sous-titres, menus et navigation. */
window.JAPONAIS_SITE = {
  footer: "Fiche de révision personnelle — à compléter au fil des cours.",
  groups: [
    {
      label: "📘 Cours",
      items: [
        { label: "Cours 1 — bases et présentation", href: "cours1.html" },
        {
          label: "Cours 2 — adjectifs, goûts et particules",
          href: "cours2.html",
        },
        {
          label: "Cours 3 — phrases, の, couleurs et nombres",
          href: "cours3.html",
        },
      ],
    },
    {
      label: "📚 Glossaires",
      items: [
        { label: "Adjectifs", href: "adjectifs.html" },
        { label: "Noms", href: "noms.html" },
        { label: "Verbes", href: "verbes.html" },
      ],
    },
    {
      label: "🎮 Mini-jeux",
      items: [
        { label: "Hiragana", href: "hiragana.html" },
        { label: "Katakana", href: "katakana.html" },
        { label: "Kanji & nombres", href: "kanji.html" },
        { label: "Vocabulaire", href: "vocabulaire.html" },
        { label: "Grammaire & particules", href: "grammaire.html" },
      ],
    },
  ],
  quickLinks: [{ label: "🔗 Liens utiles", href: "liens-utiles.html" }],
  pages: {
    index: {
      title: "🇯🇵 Japonais — cours & glossaires",
      documentTitle: "Japonais — cours & glossaires",
      subtitle:
        "Fiches de révision simples • japonais, romaji et traduction française",
    },
    cours1: {
      title: "📘 Cours 1 — bases du japonais et présentation",
      documentTitle: "Cours 1 — bases et présentation • Japonais",
      subtitle:
        "Se présenter, comprendre は et l’ordre des mots, puis réviser les adjectifs en autonomie.",
      courseId: 1,
    },
    cours2: {
      title: "📘 Cours 2 — adjectifs, goûts, verbes et particules",
      documentTitle: "Cours 2 — adjectifs et particules • Japonais",
      subtitle:
        "Adjectifs en い / な, 好き・嫌い, が et を, verbes et couleurs.",
      courseId: 2,
    },
    cours3: {
      title: "📘 Cours 3 — phrases avec は・を・の",
      documentTitle: "Cours 3 — particule の, adjectifs et nombres • Japonais",
      subtitle:
        "Phrases avec は・を, adjectifs, possession et couleurs avec の, puis compter en japonais (autonomie 3).",
      courseId: 3,
    },
    adjectifs: {
      title: "🇯🇵 Glossaire japonais — Adjectifs",
      documentTitle: "Glossaire japonais — Adjectifs",
      subtitle:
        "Retrouve les adjectifs par kanji, kana, romaji ou traduction, filtre par type et par cours.",
      activeGroup: "Glossaires",
      vocabularyCategory: "adj",
    },
    noms: {
      title: "🇯🇵 Glossaire japonais — Noms",
      documentTitle: "Glossaire japonais — Noms",
      subtitle:
        "Retrouve les noms japonais par écriture, lecture, romaji ou traduction.",
      activeGroup: "Glossaires",
      vocabularyCategory: "noms",
    },
    verbes: {
      title: "🇯🇵 Glossaire japonais — Verbes",
      documentTitle: "Glossaire japonais — Verbes",
      subtitle:
        "Retrouve les verbes, leur lecture, leur sens et leur forme polie.",
      activeGroup: "Glossaires",
      vocabularyCategory: "verbes",
    },
    hiragana: {
      title: "ひらがな — Mini-jeu Hiragana",
      documentTitle: "Mini-jeu Hiragana • Japonais",
      subtitle:
        "Reconnais les caractères, écris leur lecture en romaji et repère ceux à retravailler.",
      localLink: { href: "#selection", label: "Choisir les kana" },
    },
    katakana: {
      title: "カタカナ — Mini-jeu Katakana",
      documentTitle: "Mini-jeu Katakana • Japonais",
      subtitle:
        "Reconnais les katakana, écris leur lecture en romaji et repère ceux à retravailler.",
      localLink: { href: "#selection", label: "Choisir les kana" },
    },
    kanji: {
      title: "漢字 — Mini-jeu Kanji JLPT N5",
      documentTitle: "Mini-jeu Kanji JLPT N5 • Japonais",
      subtitle:
        "Reconnais les kanji débutants : écris leur sens en français, puis découvre des lectures courantes.",
      localLink: { href: "#selection", label: "Choisir les kanji" },
    },
    vocabulaire: {
      title: "語彙 — Jeu de vocabulaire",
      documentTitle: "Jeu de vocabulaire • Japonais",
      subtitle:
        "Révise uniquement les mots présents dans tes glossaires, en QCM et dans les deux sens.",
      localLink: { href: "#setup", label: "Configurer la session" },
    },
    grammaire: {
      title: "文法 — Grammaire et jeu des particules",
      documentTitle: "Grammaire japonaise • Japonais",
      subtitle:
        "Travaille les phrases affirmatives et négatives, et maîtrise は・が・を・か・の.",
      localLink: { href: "#setup", label: "Choisir un exercice" },
    },
    "liens-utiles": {
      title: "🔗 Liens utiles pour apprendre le japonais",
      documentTitle: "Liens utiles • Japonais",
      subtitle:
        "Dictionnaires, grammaire, écoute et entraînement : des ressources pour compléter les cours.",
    },
  },
};
