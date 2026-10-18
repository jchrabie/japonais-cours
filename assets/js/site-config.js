/* Source de vérité pour les titres, sous-titres et navigation de Manabi no Michi. */
window.JAPONAIS_SITE = {
  brand: "Manabi no Michi",
  footerLead: "Manabi no Michi est la propriété de ",
  footerLinkLabel: "Kanaeru",
  footerLinkUrl: "https://www.kanaeru.fr/dashboard/",
  footerNotice: "Toute reproduction, copie ou duplication non autorisée, totale ou partielle, est interdite et pourra faire l’objet de poursuites judiciaires.",
  groups: [
    {
      label: "📚 Vocabulaire",
      items: [
        { label: "Adjectifs", href: "adjectifs.html" },
        { label: "Noms", href: "noms.html" },
        { label: "Verbes", href: "verbes.html" }
      ]
    },
    {
      label: "🎮 Jeux",
      items: [
        { label: "Hiragana", href: "hiragana.html" },
        { label: "Katakana", href: "katakana.html" },
        { label: "Kanji & nombres", href: "kanji.html" },
        { label: "Vocabulaire", href: "vocabulaire.html" },
        { label: "Grammaire & particules", href: "grammaire.html" }
      ]
    }
  ],
  quickLinks: [
    { label: "🔗 Liens utiles", href: "liens-utiles.html" }
  ],
  pages: {
    index: {
      title: "Manabi no Michi · 学びの道",
      documentTitle: "Manabi no Michi — 学びの道",
      subtitle: "Le chemin de l’apprentissage du japonais, un pas après l’autre."
    },
    adjectifs: {
      title: "📘 Glossaire japonais — Adjectifs",
      documentTitle: "Adjectifs · Manabi no Michi",
      subtitle: "Retrouve les adjectifs par kanji, kana, romaji ou traduction, et filtre par type.",
      vocabularyCategory: "adj"
    },
    noms: {
      title: "📚 Glossaire japonais — Noms",
      documentTitle: "Noms · Manabi no Michi",
      subtitle: "Retrouve les noms japonais par écriture, lecture, romaji ou traduction.",
      vocabularyCategory: "noms"
    },
    verbes: {
      title: "🔤 Glossaire japonais — Verbes",
      documentTitle: "Verbes · Manabi no Michi",
      subtitle: "Retrouve les verbes, leur lecture, leur sens et leur forme polie.",
      vocabularyCategory: "verbes"
    },
    hiragana: {
      title: "ひらがな — Mini-jeu Hiragana",
      documentTitle: "Hiragana · Manabi no Michi",
      subtitle: "Reconnais les caractères, écris leur lecture en romaji et repère ceux à retravailler.",
      localLink: { href: "#selection", label: "Choisir les kana" }
    },
    katakana: {
      title: "カタカナ — Mini-jeu Katakana",
      documentTitle: "Katakana · Manabi no Michi",
      subtitle: "Reconnais les katakana, écris leur lecture en romaji et repère ceux à retravailler.",
      localLink: { href: "#selection", label: "Choisir les kana" }
    },
    kanji: {
      title: "漢字 — Mini-jeu Kanji JLPT N5",
      documentTitle: "Kanji & nombres · Manabi no Michi",
      subtitle: "Reconnais les kanji débutants et entraîne-toi à lire les nombres japonais.",
      localLink: { href: "#selection", label: "Choisir les kanji" }
    },
    vocabulaire: {
      title: "語彙 — Jeu de vocabulaire",
      documentTitle: "Jeu de vocabulaire · Manabi no Michi",
      subtitle: "Révise les mots présents dans les glossaires, en QCM et dans les deux sens.",
      localLink: { href: "#setup", label: "Configurer la session" }
    },
    grammaire: {
      title: "文法 — Grammaire et jeu des particules",
      documentTitle: "Grammaire · Manabi no Michi",
      subtitle: "Travaille les phrases affirmatives et négatives, et maîtrise は・が・を・か・の.",
      localLink: { href: "#setup", label: "Choisir un exercice" }
    },
    "liens-utiles": {
      title: "🔗 Liens utiles pour apprendre le japonais",
      documentTitle: "Liens utiles · Manabi no Michi",
      subtitle: "Dictionnaires, grammaire, écoute et ressources pour continuer à progresser."
    }
  }
};
