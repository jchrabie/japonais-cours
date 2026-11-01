/* Construit l’en-tête, la navigation et les raccourcis de pratique par cours. */
(() => {
  const config = window.JAPONAIS_SITE;
  if (!config) return;
  const body = document.body;
  if (!document.querySelector('link[href$="navigation-redesign.css"]')) {
    const redesignStyles = document.createElement("link");
    redesignStyles.rel = "stylesheet";
    redesignStyles.href = "assets/css/navigation-redesign.css";
    document.head.appendChild(redesignStyles);
  }
  const filePageKey =
    window.location.pathname
      .split("/")
      .pop()
      .replace(/\.html?$/i, "") || "index";
  const categoryPage = ["game", "glossaire"].includes(body.dataset.page);
  const pageKey =
    body.dataset.pageKey ||
    (categoryPage ? filePageKey : body.dataset.page || filePageKey);
  const page =
    config.pages[pageKey] || config.pages[filePageKey] || config.pages.index;
  document.title = page.documentTitle || page.title;

  const header = document.createElement("header");
  header.id = "site-header";
  const wrap = document.createElement("div");
  wrap.className = "wrap";

  const brandLine = document.createElement("div");
  brandLine.className = "site-brand-line";
  const brandMark = document.createElement("span");
  brandMark.className = "site-brand-mark";
  brandMark.setAttribute("aria-hidden", "true");
  brandMark.textContent = "あ";
  const heading = document.createElement("div");
  heading.className = "site-heading";
  const h1 = document.createElement("h1");
  h1.textContent = page.title;
  const subtitle = document.createElement("p");
  subtitle.textContent = page.subtitle || "";
  heading.append(h1, subtitle);
  brandLine.append(brandMark, heading);

  const search = document.createElement("div");
  search.className = "site-vocabulary-search";
  search.innerHTML = `
    <label for="globalVocabularySearch">Rechercher dans les glossaires</label>
    <div class="global-search-field">
      <span aria-hidden="true" class="global-search-icon">⌕</span>
      <input id="globalVocabularySearch" type="search" autocomplete="off"
        placeholder="Un mot japonais, du romaji ou sa traduction…"
        aria-autocomplete="list" aria-controls="globalVocabularySuggestions"
        aria-expanded="false" />
      <button type="button" class="global-search-clear" aria-label="Effacer la recherche" hidden>×</button>
    </div>
    <div id="globalVocabularySuggestions" class="global-search-suggestions"
      role="listbox" aria-label="Suggestions des glossaires" hidden></div>
    <p class="global-search-hint">Adjectifs · Noms · Verbes</p>
  `;

  const nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Navigation principale");

  if (pageKey !== "index") {
    const home = document.createElement("a");
    home.href = "index.html";
    home.className = "nav-home";
    home.textContent = "Accueil";
    nav.appendChild(home);
  }

  let activeGroup = null;
  let activeNavItem = null;
  for (const group of config.groups) {
    const details = document.createElement("details");
    details.className = "nav-group";
    const summary = document.createElement("summary");
    summary.textContent = group.label.replace(/^📚\\s*/, "");
    details.appendChild(summary);
    const menu = document.createElement("div");
    menu.className = "nav-menu";
    for (const item of group.items) {
      // Les pages de catégorie restent accessibles depuis l’accueil et le fil d’Ariane,
      // mais ne sont pas répétées dans les menus déroulants.
      const currentFile = item.href.split("#")[0];
      if (currentFile === `${filePageKey}.html`) {
        activeGroup = group;
        activeNavItem = item;
      }
      if (item.label === "Vue d’ensemble") continue;
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;
      if (currentFile === `${filePageKey}.html`) {
        link.setAttribute("aria-current", "page");
        link.classList.add("current-page");
      }
      menu.appendChild(link);
    }
    if (
      group.items.some(
        (item) => item.href.split("#")[0] === `${filePageKey}.html`
      )
    ) {
      details.classList.add("active-group");
    }
    details.appendChild(menu);
    nav.appendChild(details);
  }

  for (const item of config.quickLinks || []) {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    if (item.href === `${filePageKey}.html`) {
      link.setAttribute("aria-current", "page");
      link.classList.add("current-page");
    }
    nav.appendChild(link);
  }

  if (page.localLink) {
    const local = document.createElement("a");
    local.className = "nav-local-action";
    local.href = page.localLink.href;
    local.textContent = page.localLink.label;
    nav.appendChild(local);
  }

  brandLine.appendChild(search);
  wrap.append(brandLine, nav);
  header.appendChild(wrap);
  body.prepend(header);

  // Recherche transversale dans les trois glossaires. Les résultats renvoient
  // vers le glossaire concerné avec le terme prérempli.
  const searchInput = search.querySelector("#globalVocabularySearch");
  const suggestions = search.querySelector("#globalVocabularySuggestions");
  const clearSearch = search.querySelector(".global-search-clear");
  let vocabularyIndex = [];
  let activeSuggestion = -1;

  function normalizeSearch(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("fr")
      .trim();
  }
  function displayMeaning(value) {
    return Array.isArray(value) ? value.join(" / ") : String(value || "");
  }
  function closeSuggestions() {
    suggestions.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
    searchInput.removeAttribute("aria-activedescendant");
    activeSuggestion = -1;
  }
  function chooseSuggestion(index) {
    const option = suggestions.querySelectorAll('[role="option"]')[index];
    if (option) window.location.href = option.dataset.href;
  }
  function renderSuggestions() {
    const query = normalizeSearch(searchInput.value);
    clearSearch.hidden = !searchInput.value;
    if (query.length < 2 || !vocabularyIndex.length) {
      closeSuggestions();
      return;
    }
    const matches = vocabularyIndex
      .filter((entry) => entry.searchText.includes(query))
      .slice(0, 8);
    suggestions.replaceChildren();
    if (!matches.length) {
      const empty = document.createElement("div");
      empty.className = "global-search-empty";
      empty.textContent = "Aucun mot trouvé dans les glossaires.";
      suggestions.appendChild(empty);
    } else {
      for (const entry of matches) {
        const option = document.createElement("a");
        option.className = "global-search-option";
        option.id = `global-vocab-option-${suggestions.children.length}`;
        option.setAttribute("role", "option");
        option.setAttribute("aria-selected", "false");
        option.href = entry.href;
        option.dataset.href = entry.href;
        const japanese = document.createElement("strong");
        japanese.className = "global-search-japanese";
        japanese.textContent = entry.kanji || entry.kana || "";
        const detail = document.createElement("span");
        detail.className = "global-search-detail";
        detail.textContent = [
          entry.kana,
          entry.romaji,
          displayMeaning(entry.signification),
        ]
          .filter(Boolean)
          .join(" · ");
        const category = document.createElement("small");
        category.textContent = entry.category;
        option.append(japanese, detail, category);
        option.addEventListener("mousedown", (event) => event.preventDefault());
        option.addEventListener("click", (event) => {
          event.preventDefault();
          window.location.href = option.href;
        });
        suggestions.appendChild(option);
      }
    }
    suggestions.hidden = false;
    searchInput.setAttribute("aria-expanded", "true");
    activeSuggestion = -1;
  }
  function loadVocabularyIndex() {
    const buildIndex = () => {
      const data = window.JAPONAIS_VOCABULARY;
      if (!data) return;
      const categories = [
        ["adj", "Adjectif", "adjectifs.html"],
        ["noms", "Nom", "noms.html"],
        ["verbes", "Verbe", "verbes.html"],
      ];
      vocabularyIndex = categories.flatMap(([key, label, file]) =>
        (Array.isArray(data[key]) ? data[key] : []).map((entry) => {
          const terms = [
            entry.kanji,
            entry.kana,
            entry.romaji,
            displayMeaning(entry.signification),
            entry.formePolie,
            entry.typeAdjectif,
          ];
          return {
            ...entry,
            category: label,
            href: `${file}?q=${encodeURIComponent(
              entry.kana || entry.kanji || entry.romaji || ""
            )}`,
            searchText: normalizeSearch(terms.filter(Boolean).join(" ")),
          };
        })
      );
    };
    if (window.JAPONAIS_VOCABULARY) {
      buildIndex();
      return;
    }
    const script = document.createElement("script");
    script.src = "assets/js/vocabulary-data.js";
    script.onload = buildIndex;
    script.onerror = () => {
      searchInput.placeholder = "Recherche indisponible";
    };
    document.head.appendChild(script);
  }
  searchInput.addEventListener("input", renderSuggestions);
  searchInput.addEventListener("keydown", (event) => {
    const options = suggestions.querySelectorAll('[role="option"]');
    if (event.key === "ArrowDown" && !suggestions.hidden && options.length) {
      event.preventDefault();
      activeSuggestion = (activeSuggestion + 1) % options.length;
    } else if (
      event.key === "ArrowUp" &&
      !suggestions.hidden &&
      options.length
    ) {
      event.preventDefault();
      activeSuggestion =
        (activeSuggestion - 1 + options.length) % options.length;
    } else if (event.key === "Enter" && activeSuggestion >= 0) {
      event.preventDefault();
      chooseSuggestion(activeSuggestion);
      return;
    } else if (event.key === "Escape") {
      closeSuggestions();
      return;
    } else return;
    options.forEach((option, index) => {
      option.setAttribute("aria-selected", String(index === activeSuggestion));
    });
    searchInput.setAttribute(
      "aria-activedescendant",
      options[activeSuggestion].id || ""
    );
  });
  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    renderSuggestions();
    searchInput.focus();
  });
  document.addEventListener("click", (event) => {
    if (!search.contains(event.target)) closeSuggestions();
  });
  loadVocabularyIndex();

  // Accès direct au jeu de vocabulaire en conservant le glossaire de départ.
  if (page.vocabularyCategory && main) {
    const section = document.createElement("section");
    section.className = "card glossary-game-callout";
    const title = document.createElement("h2");
    title.textContent = "S’entraîner avec ce glossaire";
    const description = document.createElement("p");
    description.textContent =
      "Révise les mots de ce glossaire avec les QCM et les niveaux romaji, kana ou kanji.";
    const link = document.createElement("a");
    link.className = "game-link";
    link.href = `vocabulaire.html?cat=${encodeURIComponent(
      page.vocabularyCategory
    )}`;
    const linkTitle = document.createElement("strong");
    linkTitle.textContent = "🎮 Lancer le jeu avec ces mots";
    const linkDescription = document.createElement("span");
    linkDescription.textContent =
      "Les questions seront limitées à cette catégorie.";
    link.append(linkTitle, linkDescription);
    section.append(title, description, link);
    main.prepend(section);
  }

  // Les fiches de cours proposent des raccourcis préfiltrés sur le dernier cours étudié.
  if (page.courseId && main) {
    if (!document.querySelector('link[href$="course-filters.css"]')) {
      const courseStyles = document.createElement("link");
      courseStyles.rel = "stylesheet";
      courseStyles.href = "assets/css/course-filters.css";
      document.head.appendChild(courseStyles);
    }
    const courseId = Number(page.courseId);
    const section = document.createElement("section");
    section.className = "card course-practice-card";
    section.id = "course-practice";
    const title = document.createElement("h2");
    title.textContent = `Pratiquer le cours ${courseId}`;
    const description = document.createElement("p");
    description.textContent =
      "Les jeux s’ouvrent avec ce cours pré-sélectionné. Tu peux ensuite modifier les cours dans les filtres.";
    const grid = document.createElement("div");
    grid.className = "game-grid course-practice-grid";
    const links = [
      {
        href: `vocabulaire.html?courses=${courseId}`,
        title: "Vocabulaire",
        text: "Réviser les mots appris dans ce cours.",
      },
      {
        href: `grammaire.html?vocabCourses=${courseId}&conceptCourses=${courseId}`,
        title: "Grammaire",
        text: "Construire des phrases avec le vocabulaire et les notions de ce cours.",
      },
      {
        href: `grammaire.html?particleVocabCourses=${courseId}&particleConceptCourses=${courseId}#particleSetup`,
        title: "Particules",
        text: "Travailler les particules étudiées dans ce cours.",
      },
      {
        href: `adjectifs.html?courses=${courseId}`,
        title: "Adjectifs",
        text: "Consulter les adjectifs de ce cours.",
      },
      {
        href: `noms.html?courses=${courseId}`,
        title: "Noms",
        text: "Consulter les noms de ce cours.",
      },
      {
        href: `verbes.html?courses=${courseId}`,
        title: "Verbes",
        text: "Consulter les verbes de ce cours.",
      },
    ];
    for (const item of links) {
      const link = document.createElement("a");
      link.className = "game-link";
      link.href = item.href;
      const strong = document.createElement("strong");
      strong.textContent = item.title;
      const span = document.createElement("span");
      span.textContent = item.text;
      link.append(strong, span);
      grid.appendChild(link);
    }
    section.append(title, description, grid);
    const backLink = main.querySelector('a[href="index.html"]');
    if (backLink) main.insertBefore(section, backLink.closest("p") || backLink);
    else main.appendChild(section);
  }

  let footer = document.querySelector("footer");
  if (!footer) {
    footer = document.createElement("footer");
    body.appendChild(footer);
  }
  footer.classList.add("site-legal-footer");
  footer.replaceChildren();
  const ownership = document.createElement("p");
  ownership.append(
    document.createTextNode(
      config.footerLead ||
        `${config.brand || "Manabi no Michi"} est la propriété de `
    )
  );
  const ownerLink = document.createElement("a");
  ownerLink.href = config.footerLinkUrl || "https://www.kanaeru.fr/dashboard/";
  ownerLink.textContent = config.footerLinkLabel || "Kanaeru";
  ownerLink.target = "_blank";
  ownerLink.rel = "noopener noreferrer";
  ownership.append(ownerLink, document.createTextNode("."));
  const notice = document.createElement("p");
  notice.textContent =
    config.footerNotice ||
    "Toute reproduction ou duplication non autorisée est interdite.";
  footer.append(ownership, notice);
  if (!document.querySelector('link[href$="legal-footer.css"]')) {
    const legalStyles = document.createElement("link");
    legalStyles.rel = "stylesheet";
    legalStyles.href = "assets/css/legal-footer.css";
    document.head.appendChild(legalStyles);
  }

  const menus = Array.from(nav.querySelectorAll("details"));
  const closeMenus = (except = null) =>
    menus.forEach((menu) => {
      if (menu !== except) menu.open = false;
    });
  nav.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest("a");
    if (link) {
      closeMenus();
      return;
    }
    const summary = event.target.closest("summary");
    if (summary) closeMenus(summary.closest("details"));
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) closeMenus();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openMenu = menus.find((menu) => menu.open);
    if (!openMenu) return;
    const trigger = openMenu.querySelector("summary");
    closeMenus();
    trigger?.focus();
  });
  window.addEventListener("pageshow", () => closeMenus());

  // Réglage du thème : système (par défaut), nuit forcée ou jour forcé.
  if (!document.querySelector('link[href$="theme-toggle.css"]')) {
    const themeStyles = document.createElement("link");
    themeStyles.rel = "stylesheet";
    themeStyles.href = "assets/css/theme-toggle.css";
    document.head.appendChild(themeStyles);
  }
  const themeModes = ["system", "dark", "light"];
  const themeDetails = {
    system: { icon: "◐", label: "Thème : préférence système", next: "Passer en mode nuit" },
    dark: { icon: "☾", label: "Thème : nuit forcée", next: "Passer en mode jour" },
    light: { icon: "☀", label: "Thème : jour forcé", next: "Revenir à la préférence système" },
  };
  let themeMode = "system";
  try {
    const savedMode = window.localStorage.getItem("manabi-theme-mode");
    if (themeModes.includes(savedMode)) themeMode = savedMode;
  } catch (_) { /* Le stockage peut être indisponible ; le mode système reste utilisable. */ }
  const applyTheme = () => {
    if (themeMode === "system") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", themeMode);
    const details = themeDetails[themeMode];
    themeButton.querySelector(".theme-fab-icon").textContent = details.icon;
    themeButton.setAttribute("aria-label", `${details.label}. ${details.next}.`);
    themeButton.title = `${details.label} — ${details.next}`;
    themeButton.querySelector(".theme-fab-label").textContent = details.label;
  };
  const themeButton = document.createElement("button");
  themeButton.type = "button";
  themeButton.className = "theme-fab";
  themeButton.innerHTML = '<span class="theme-fab-icon" aria-hidden="true">◐</span><span class="theme-fab-label" aria-hidden="true">Thème : préférence système</span>';
  themeButton.addEventListener("click", () => {
    themeMode = themeModes[(themeModes.indexOf(themeMode) + 1) % themeModes.length];
    try { window.localStorage.setItem("manabi-theme-mode", themeMode); } catch (_) { /* Préférence valable pour cette page. */ }
    applyTheme();
  });
  document.body.appendChild(themeButton);
  applyTheme();
})();
