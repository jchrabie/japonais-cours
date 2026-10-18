/* Les glossaires, leurs filtres de cours et leurs tableaux partagent les mêmes données. */
(() => {
  "use strict";
  const configs = [
    { id: "adjTable", dataKey: "adj", columns: ["kanji", "kana", "romaji", "signification", "typeAdjectif", "course"] },
    { id: "nounTable", dataKey: "noms", columns: ["kanji", "kana", "romaji", "signification", "course"] },
    { id: "verbTable", dataKey: "verbes", columns: ["kanji", "kana", "romaji", "signification", "formePolie", "course"] }
  ];
  const activeTables = configs.filter(({ id }) => document.getElementById(id));
  if (!activeTables.length) return;
  const filters = new Map();
  const $ = (id) => document.getElementById(id);

  function loadScript(src, predicate) {
    if (predicate()) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => predicate() ? resolve() : reject(new Error(`Le script ${src} n'a pas créé son API attendue.`));
      script.onerror = () => reject(new Error(`Impossible de charger ${src}.`));
      document.head.appendChild(script);
    });
  }

  function ensureStyles() {
    if (document.querySelector('link[href$="course-filters.css"]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "assets/css/course-filters.css";
    document.head.appendChild(link);
  }

  function courseIdsFor(entry) {
    return window.JAPONAIS_COURSES?.coursesForVocabulary(entry.id) || [];
  }

  function cellValue(entry, column) {
    if (column === "signification") return Array.isArray(entry.signification) ? entry.signification.join(" / ") : "";
    if (column === "course") {
      const firstCourse = window.JAPONAIS_COURSES?.firstCourseForVocabulary(entry.id);
      return firstCourse ? `Cours ${firstCourse}` : "À associer";
    }
    return entry[column] ?? "";
  }

  function addCourseHeader(table) {
    const header = table.querySelector("thead tr");
    if (!header || [...header.cells].some((cell) => cell.dataset.courseHeader === "true")) return;
    const th = document.createElement("th");
    th.textContent = "Premier cours";
    th.dataset.courseHeader = "true";
    header.appendChild(th);
  }

  function mountCourseFilter(config, table) {
    const mount = document.createElement("div");
    mount.className = "course-picker-mount";
    mount.id = `${config.dataKey}GlossaryCoursePicker`;
    const wrapper = table.parentElement;
    wrapper?.parentElement?.insertBefore(mount, wrapper);
    const api = window.JAPONAIS_COURSE_PICKER?.mount(mount, {
      title: "Cours",
      queryParam: "courses",
      onChange: () => applyFilters(config.id)
    });
    filters.set(config.id, api || { getSelection: () => ({ all: true, ids: [] }) });
  }

  function renderGlossaries() {
    const vocabulary = window.JAPONAIS_VOCABULARY;
    if (!vocabulary) {
      console.error("Le fichier assets/js/vocabulary-data.js ne définit pas JAPONAIS_VOCABULARY.");
      return;
    }
    for (const config of activeTables) {
      const table = $(config.id);
      const tbody = table?.querySelector("tbody");
      const entries = vocabulary[config.dataKey];
      if (!tbody || !Array.isArray(entries)) continue;
      addCourseHeader(table);
      mountCourseFilter(config, table);
      const fragment = document.createDocumentFragment();
      for (const entry of entries) {
        const row = document.createElement("tr");
        row.dataset.vocabularyId = entry.id || "";
        row.dataset.adjectiveType = entry.typeAdjectif || "";
        row.dataset.courseIds = courseIdsFor(entry).join(",");
        for (const column of config.columns) {
          const cell = document.createElement("td");
          if (column === "kanji") cell.className = "jp";
          if (column === "course" && !row.dataset.courseIds) cell.className = "course-unassigned";
          cell.textContent = cellValue(entry, column);
          row.appendChild(cell);
        }
        fragment.appendChild(row);
      }
      tbody.replaceChildren(fragment);
      table.dataset.source = "assets/js/vocabulary-data.js";
    }
    for (const config of activeTables) applyFilters(config.id);
  }

  function applyFilters(tableId) {
    const inputId = ({ adjTable: "adjSearch", nounTable: "nounSearch", verbTable: "verbSearch" })[tableId];
    const typeId = tableId === "adjTable" ? "adjType" : null;
    const input = $(inputId);
    const table = $(tableId);
    if (!table) return;
    const query = (input?.value || "").toLocaleLowerCase("fr");
    const type = typeId ? ($(typeId)?.value || "") : "";
    const selection = filters.get(tableId)?.getSelection() || { all: true, ids: [] };
    const selected = new Set(selection.ids || []);
    table.querySelectorAll("tbody tr").forEach((row) => {
      const matchesText = row.innerText.toLocaleLowerCase("fr").includes(query);
      const matchesType = !type || (row.dataset.adjectiveType || "").includes(type);
      const memberships = (row.dataset.courseIds || "").split(",").filter(Boolean).map(Number);
      const matchesCourse = selection.all || memberships.some((id) => selected.has(id));
      row.style.display = matchesText && matchesType && matchesCourse ? "" : "none";
    });
  }

  window.filterTable = (inputId, tableId) => applyFilters(tableId);

  async function boot() {
    try {
      ensureStyles();
      await loadScript("assets/js/vocabulary-data.js", () => Boolean(window.JAPONAIS_VOCABULARY));
      await loadScript("assets/js/course-catalog.js", () => Boolean(window.JAPONAIS_COURSES));
      await loadScript("assets/js/course-picker.js", () => Boolean(window.JAPONAIS_COURSE_PICKER));
      renderGlossaries();
    } catch (error) {
      console.error(error);
    }
  }
  boot();
})();
