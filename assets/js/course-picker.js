/* Sélecteur de cours compact : dernier cours, tous les cours ou choix personnalisé. */
(() => {
  "use strict";
  const catalog = window.JAPONAIS_COURSES;
  if (!catalog) return;

  const params = new URLSearchParams(window.location.search);
  const latestCourseId = () => Math.max(0, ...catalog.courses.map((course) => Number(course.id)));

  function mount(containerOrId, options = {}) {
    const container = typeof containerOrId === "string"
      ? document.getElementById(containerOrId)
      : containerOrId;
    if (!container) return { getSelection: () => ({ all: true, ids: [] }) };

    const title = options.title || "Cours";
    const courses = Array.isArray(catalog.courses) ? catalog.courses : [];
    const validIds = new Set(courses.map((course) => Number(course.id)));
    const queryValue = options.queryParam ? params.get(options.queryParam) : null;
    let selected = new Set(courses.map((course) => Number(course.id)));

    if (queryValue) {
      if (queryValue.toLowerCase() === "last" || queryValue.toLowerCase() === "latest") {
        selected = new Set([latestCourseId()].filter((id) => validIds.has(id)));
      } else if (queryValue.toLowerCase() === "all") {
        selected = new Set(courses.map((course) => Number(course.id)));
      } else {
        const parsed = queryValue.split(/[;,]/).map(Number).filter((id) => validIds.has(id));
        if (parsed.length) selected = new Set(parsed);
      }
    } else if (Array.isArray(options.selectedIds)) {
      const parsed = options.selectedIds.map(Number).filter((id) => validIds.has(id));
      if (parsed.length) selected = new Set(parsed);
    }

    const details = document.createElement("details");
    details.className = "course-picker";
    const summary = document.createElement("summary");
    const summaryTitle = document.createElement("span");
    summaryTitle.className = "course-picker-title";
    const summaryValue = document.createElement("span");
    summaryValue.className = "course-picker-value";
    summary.append(summaryTitle, summaryValue);

    const body = document.createElement("div");
    body.className = "course-picker-body";
    const actions = document.createElement("div");
    actions.className = "course-picker-actions";

    const addAction = (label, action) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "course-picker-action";
      button.textContent = label;
      button.addEventListener("click", action);
      actions.appendChild(button);
      return button;
    };

    const list = document.createElement("div");
    list.className = "course-picker-list";
    list.setAttribute("role", "group");
    list.setAttribute("aria-label", title);
    const checkboxById = new Map();

    function getSelection() {
      const ids = [...selected].sort((a, b) => a - b);
      return { all: courses.length > 0 && ids.length === courses.length, ids };
    }

    function updateSummary() {
      const selection = getSelection();
      summaryTitle.textContent = title;
      if (selection.all) summaryValue.textContent = "Tous les cours";
      else if (!selection.ids.length) summaryValue.textContent = "Aucun";
      else if (selection.ids.length === 1 && selection.ids[0] === latestCourseId()) summaryValue.textContent = `Dernier cours · Cours ${selection.ids[0]}`;
      else if (selection.ids.length <= 3) summaryValue.textContent = selection.ids.map((id) => `Cours ${id}`).join(" · ");
      else summaryValue.textContent = `${selection.ids.length} cours sélectionnés`;
      summary.setAttribute("aria-label", `${title} : ${summaryValue.textContent}`);
    }

    function notifyChange() {
      updateSummary();
      if (typeof options.onChange === "function") options.onChange(getSelection());
    }

    for (const course of courses) {
      const id = Number(course.id);
      const label = document.createElement("label");
      label.className = "course-picker-option";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = String(id);
      checkbox.checked = selected.has(id);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) selected.add(id);
        else selected.delete(id);
        notifyChange();
      });
      checkboxById.set(id, checkbox);
      const text = document.createElement("span");
      text.textContent = course.label;
      label.append(checkbox, text);
      list.appendChild(label);
    }

    const syncChecks = () => {
      for (const [id, checkbox] of checkboxById) checkbox.checked = selected.has(id);
      notifyChange();
    };

    addAction("Dernier cours", () => {
      selected = new Set([latestCourseId()].filter((id) => validIds.has(id)));
      syncChecks();
    });
    addAction("Tous les cours", () => {
      selected = new Set(courses.map((course) => Number(course.id)));
      syncChecks();
    });
    if (courses.length) {
      body.append(actions, list);
      details.append(summary, body);
      container.replaceChildren(details);
    } else {
      summaryTitle.textContent = title;
      summaryValue.textContent = "Aucun cours disponible";
      summary.append(summaryValue);
      container.replaceChildren(summary);
    }
    updateSummary();
    return { getSelection, setAll: () => { selected = new Set(courses.map((course) => Number(course.id))); syncChecks(); }, setNone: () => { selected.clear(); syncChecks(); } };
  }

  window.JAPONAIS_COURSE_PICKER = { mount };
})();
