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
        { label: "Vue d’ensemble", href: "vocabulaire-jeux.html" },
        { label: "Jeu de vocabulaire", href: "vocabulaire.html" },
        { label: "Adjectifs", href: "adjectifs.html" },
        { label: "Noms", href: "noms.html" },
        { label: "Verbes", href: "verbes.html" }
      ]
    },
    {
      label: "✍️ Écriture japonaise",
      items: [
        { label: "Vue d’ensemble", href: "ecriture.html" },
        { label: "Hiragana", href: "hiragana.html" },
        { label: "Katakana", href: "katakana.html" },
        { label: "Kanji", href: "kanji.html#selection" }
      ]
    },
    {
      label: "⏰ Nombres et temps",
      items: [
        { label: "Vue d’ensemble", href: "nombres-temps.html" },
        { label: "Nombres", href: "nombres.html#numberGame" },
        { label: "Heures", href: "heures.html" }
      ]
    },
    {
      label: "文法 Grammaire",
      items: [
        { label: "Vue d’ensemble", href: "grammaire.html" },
        { label: "Jeu de grammaire", href: "grammaire-jeu.html" },
        { label: "Jeu des particules", href: "particules.html" },
        { label: "Mots interrogatifs", href: "mots-interrogatifs.html" }
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
    ecriture: {
      title: "✍️ Écriture japonaise",
      documentTitle: "Écriture japonaise · Manabi no Michi",
      subtitle: "Apprends à reconnaître, lire et écrire les hiragana, katakana et kanji."
    },
    "nombres-temps": {
      title: "⏰ Nombres et temps",
      documentTitle: "Nombres et temps · Manabi no Michi",
      subtitle: "Entraîne-toi à lire les nombres et à exprimer l’heure en japonais."
    },
    "vocabulaire-jeux": {
      title: "📚 Vocabulaire",
      documentTitle: "Vocabulaire · Manabi no Michi",
      subtitle: "Mémorise les mots appris grâce aux glossaires et au jeu de vocabulaire."
    },

    nombres: {
      title: "数字 — Jeu des nombres",
      documentTitle: "Nombres · Manabi no Michi",
      subtitle: "Lis et écris les nombres japonais, du plus simple aux grands nombres.",
      localLink: { href: "#numberGame", label: "Configurer le jeu" }
    },
    heures: {
      title: "⏰ Jeu des heures",
      documentTitle: "Heures · Manabi no Michi",
      subtitle: "Lis une horloge et choisis la bonne façon d’exprimer l’heure en japonais."
    },
    cours4: {
      title: "📘 Cours 4 — nombres, forme ます et mots interrogatifs",
      documentTitle: "Cours 4 — Manabi no Michi",
      subtitle: "Compter en japonais, conjuguer les verbes au registre poli et poser des questions.",
      courseId: 4
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
      documentTitle: "Kanji · Manabi no Michi",
      subtitle: "Reconnais les kanji débutants et mémorise leurs sens et lectures.",
      localLink: { href: "#selection", label: "Choisir les kanji" }
    },
    vocabulaire: {
      title: "語彙 — Jeu de vocabulaire",
      documentTitle: "Jeu de vocabulaire · Manabi no Michi",
      subtitle: "Révise les mots présents dans les glossaires, en QCM et dans les deux sens.",
      localLink: { href: "#setup", label: "Configurer la session" }
    },
    particules: {
      title: "は・が・を — Jeu des particules",
      documentTitle: "Jeu des particules · Manabi no Michi",
      subtitle: "Place plusieurs particules dans une même phrase, par glisser-déposer ou au toucher."
    },
    grammaire: {
      title: "文法 Grammaire",
      documentTitle: "Grammaire · Manabi no Michi",
      subtitle: "Choisis un jeu pour travailler les phrases, les particules et les mots interrogatifs."
    },
    "grammaire-jeu": {
      title: "文法 — Jeu de grammaire",
      documentTitle: "Jeu de grammaire · Manabi no Michi",
      subtitle: "Construis et comprends des phrases japonaises.",
      localLink: { href: "#setup", label: "Configurer le jeu" }
    },
    particules: {
      title: "は・が・を — Jeu des particules",
      documentTitle: "Jeu des particules · Manabi no Michi",
      subtitle: "Place les particules manquantes dans les phrases japonaises."
    },
    "mots-interrogatifs": {
      title: "疑問詞 — Mots interrogatifs",
      documentTitle: "Mots interrogatifs · Manabi no Michi",
      subtitle: "Entraîne-toi à choisir le bon mot interrogatif en japonais."
    },
    "liens-utiles": {
      title: "🔗 Liens utiles pour apprendre le japonais",
      documentTitle: "Liens utiles · Manabi no Michi",
      subtitle: "Dictionnaires, grammaire, écoute et ressources pour continuer à progresser."
    }
  }
};
