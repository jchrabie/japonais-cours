/* Construit l’en-tête, la navigation et le footer communs de Manabi no Michi. */
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

  for (const group of config.groups || []) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = group.label;
    details.appendChild(summary);
    const menu = document.createElement("div");
    menu.className = "nav-menu";
    for (const item of group.items || []) {
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

  for (const item of config.quickLinks || []) {
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
  if (page.vocabularyCategory && main) {
    const section = document.createElement("section");
    section.className = "card glossary-game-callout";
    const title = document.createElement("h2");
    title.textContent = "S’entraîner avec ce glossaire";
    const description = document.createElement("p");
    description.textContent = "Révise les mots de ce glossaire avec les QCM et les modes romaji, kana ou kanji.";
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

  /* Le footer est créé au besoin : il apparaît donc même sur les pages qui n’en avaient pas. */
  let footer = document.querySelector("footer");
  if (!footer) {
    footer = document.createElement("footer");
    body.appendChild(footer);
  }
  footer.classList.add("site-footer");
  footer.replaceChildren();

  const ownership = document.createElement("p");
  ownership.className = "site-footer__ownership";
  ownership.append(document.createTextNode(config.footerLead || "Propriété de "));
  const kanaeru = document.createElement("a");
  kanaeru.href = config.footerLinkUrl || "https://www.kanaeru.fr/dashboard/";
  kanaeru.textContent = config.footerLinkLabel || "Kanaeru";
  kanaeru.target = "_blank";
  kanaeru.rel = "noopener noreferrer";
  ownership.append(kanaeru);
  ownership.append(document.createTextNode("."));

  const legal = document.createElement("p");
  legal.className = "site-footer__legal";
  legal.textContent = config.footerNotice || "Toute reproduction ou duplication non autorisée est interdite.";

  const brand = document.createElement("p");
  brand.className = "site-footer__brand";
  brand.textContent = "Manabi no Michi · 学びの道";

  footer.append(ownership, legal, brand);

  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "assets/css/legal-footer.css";
  document.head.appendChild(styleLink);

  const menus = Array.from(nav.querySelectorAll("details"));
  const closeMenus = (except = null) => menus.forEach((menu) => {
    if (menu !== except) menu.open = false;
  });

  nav.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest("a");
    if (link) { closeMenus(); return; }
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
})();
