/* Construit l’en-tête, la navigation et les raccourcis de pratique par cours. */
(() => {
  const config = window.JAPONAIS_SITE;
  if (!config) return;
  const body = document.body;
  const filePageKey = window.location.pathname.split("/").pop().replace(/\.html?$/i, "") || "index";
  const categoryPage = ["game", "glossaire"].includes(body.dataset.page);
  const pageKey = body.dataset.pageKey || (categoryPage ? filePageKey : (body.dataset.page || filePageKey));
  const page = config.pages[pageKey] || config.pages[filePageKey] || config.pages.index;
  document.title = page.documentTitle || page.title;

  const header = document.createElement("header");
  header.id = "site-header";
  const wrap = document.createElement("div");
  wrap.className = "wrap";
  const h1 = document.createElement("h1");
  h1.textContent = page.title;
  const subtitle = document.createElement("p");
  subtitle.textContent = page.subtitle || "";
  const nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Navigation principale");

  if (pageKey !== "index") {
    const home = document.createElement("a");
    home.href = "index.html";
    home.textContent = "🏠 Accueil";
    nav.appendChild(home);
  }

  for (const group of config.groups) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = group.label;
    details.appendChild(summary);
    const menu = document.createElement("div");
    menu.className = "nav-menu";
    for (const item of group.items) {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;
      if (item.href === `${pageKey}.html`) {
        link.setAttribute("aria-current", "page");
        link.classList.add("current-page");
      }
      menu.appendChild(link);
    }
    details.appendChild(menu);
    nav.appendChild(details);
  }

  for (const item of (config.quickLinks || [])) {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    if (item.href === `${pageKey}.html`) {
      link.setAttribute("aria-current", "page");
      link.classList.add("current-page");
    }
    nav.appendChild(link);
  }

  if (page.localLink) {
    const local = document.createElement("a");
    local.href = page.localLink.href;
    local.textContent = page.localLink.label;
    nav.appendChild(local);
  }

  wrap.append(h1, subtitle, nav);
  header.appendChild(wrap);
  body.prepend(header);

  const main = document.querySelector("main");
  // Accès direct au jeu de vocabulaire en conservant le glossaire de départ.
  if (page.vocabularyCategory && main) {
    const section = document.createElement("section");
    section.className = "card glossary-game-callout";
    const title = document.createElement("h2");
    title.textContent = "S’entraîner avec ce glossaire";
    const description = document.createElement("p");
    description.textContent = "Révise les mots de ce glossaire avec les QCM et les niveaux romaji, kana ou kanji.";
    const link = document.createElement("a");
    link.className = "game-link";
    link.href = `vocabulaire.html?cat=${encodeURIComponent(page.vocabularyCategory)}`;
    const linkTitle = document.createElement("strong");
    linkTitle.textContent = "🎮 Lancer le jeu avec ces mots";
    const linkDescription = document.createElement("span");
    linkDescription.textContent = "Les questions seront limitées à cette catégorie.";
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
    description.textContent = "Les jeux s’ouvrent avec ce cours pré-sélectionné. Tu peux ensuite modifier les cours dans les filtres.";
    const grid = document.createElement("div");
    grid.className = "game-grid course-practice-grid";
    const links = [
      { href: `vocabulaire.html?courses=${courseId}`, title: "Vocabulaire", text: "Réviser les mots appris dans ce cours." },
      { href: `grammaire.html?vocabCourses=${courseId}&conceptCourses=${courseId}`, title: "Grammaire", text: "Construire des phrases avec le vocabulaire et les notions de ce cours." },
      { href: `grammaire.html?particleVocabCourses=${courseId}&particleConceptCourses=${courseId}#particleSetup`, title: "Particules", text: "Travailler les particules étudiées dans ce cours." },
      { href: `adjectifs.html?courses=${courseId}`, title: "Adjectifs", text: "Consulter les adjectifs de ce cours." },
      { href: `noms.html?courses=${courseId}`, title: "Noms", text: "Consulter les noms de ce cours." },
      { href: `verbes.html?courses=${courseId}`, title: "Verbes", text: "Consulter les verbes de ce cours." }
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

  const footer = document.querySelector("footer");
  if (footer) footer.textContent = config.footer;

  const menus = Array.from(nav.querySelectorAll("details"));
  const closeMenus = (except = null) => menus.forEach((menu) => { if (menu !== except) menu.open = false; });
  nav.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest("a");
    if (link) { closeMenus(); return; }
    const summary = event.target.closest("summary");
    if (summary) closeMenus(summary.closest("details"));
  });
  document.addEventListener("click", (event) => { if (!nav.contains(event.target)) closeMenus(); });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openMenu = menus.find((menu) => menu.open);
    if (!openMenu) return;
    const trigger = openMenu.querySelector("summary");
    closeMenus();
    trigger?.focus();
  });
  window.addEventListener("pageshow", () => closeMenus());
})();
