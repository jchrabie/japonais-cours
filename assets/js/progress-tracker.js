/* Historique local des sessions et progression par mot / phrase / particule. Aucune date de révision n'est suggérée. */
(() => {
  "use strict";
  const STORAGE_KEY = "japonais-site-progress-v1";
  const read = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
        items: parsed.items && typeof parsed.items === "object" ? parsed.items : {}
      };
    } catch {
      return { sessions: [], items: {} };
    }
  };
  const write = (state) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (error) {
      console.warn("L’historique ne peut pas être enregistré dans ce navigateur.", error);
      return false;
    }
  };
  const normalizeResult = (result) => {
    const question = result.question || result.item || {};
    const entries = Array.isArray(question.quizEntries) ? question.quizEntries : [question];
    return entries.filter((entry) => entry && entry.id).map((entry) => {
      const attempts = Math.max(1, Number(result.attempts ?? ((result.wrongAttempts || 0) + (result.correct ? 1 : 0))));
      const correct = Boolean(result.correct ?? result.gotIt);
      return {
        key: entry.id,
        label: String(result.label || entry.signification?.join(" / ") || result.question?.french || entry.kanji || entry.id),
        correct,
        firstTry: Boolean(result.firstTryCorrect ?? result.firstTry ?? (correct && (result.wrongAttempts || 0) === 0)),
        attempts,
        errors: Math.max(0, attempts - (correct ? 1 : 0)),
        skipped: Boolean(result.skipped)
      };
    });
  };

  function recordSession({ game, mode, courseIds = [], results = [] }) {
    if (!Array.isArray(results) || !results.length) return;
    const state = read();
    const date = new Date().toISOString();
    const normalized = results.flatMap(normalizeResult);
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const correctFirstTry = results.filter((result) => Boolean(result.firstTryCorrect ?? result.firstTry ?? (result.correct && (result.wrongAttempts || 0) === 0))).length;
    const correct = results.filter((result) => Boolean(result.correct ?? result.gotIt)).length;

    for (const result of normalized) {
      const key = `${game}:${mode}:${result.key}`;
      const current = state.items[key] || {
        game, mode, itemId: result.key, label: result.label,
        sessions: 0, attempts: 0, correct: 0, firstTryCorrect: 0, errors: 0, skipped: 0
      };
      current.label = result.label || current.label;
      current.sessions += 1;
      current.attempts += result.attempts;
      current.correct += result.correct ? 1 : 0;
      current.firstTryCorrect += result.firstTry ? 1 : 0;
      current.errors += result.errors;
      current.skipped += result.skipped ? 1 : 0;
      current.lastResult = result.correct ? "correct" : "incorrect";
      current.lastSeen = date;
      state.items[key] = current;
    }

    state.sessions.unshift({
      id, game, mode, date, total: results.length, correct, correctFirstTry,
      courseIds: [...new Set(courseIds.map(Number).filter(Number.isFinite))].sort((a, b) => a - b),
      labels: results.slice(0, 12).map((result) => String(result.label || result.question?.french || result.question?.id || result.item?.kanji || "Exercice")),
    });
    state.sessions = state.sessions.slice(0, 100);
    write(state);
  }

  function renderSummary(summaryId, historyId, game, resetButtonId) {
    const summary = document.getElementById(summaryId);
    const history = document.getElementById(historyId);
    if (!summary || !history) return;
    const state = read();
    const sessions = state.sessions.filter((session) => !game || session.game === game);
    const items = Object.values(state.items).filter((item) => !game || item.game === game);
    const attempts = items.reduce((sum, item) => sum + item.attempts, 0);
    const errors = items.reduce((sum, item) => sum + item.errors, 0);
    const firstTry = items.reduce((sum, item) => sum + item.firstTryCorrect, 0);
    const successful = items.reduce((sum, item) => sum + item.correct, 0);
    const totalAsked = items.reduce((sum, item) => sum + item.sessions, 0);
    const firstTryRate = totalAsked ? Math.round((firstTry / totalAsked) * 100) : 0;
    const successRate = totalAsked ? Math.round((successful / totalAsked) * 100) : 0;

    summary.replaceChildren();
    if (!sessions.length) {
      summary.textContent = "Aucune session enregistrée sur cet appareil pour le moment.";
    } else {
      const metrics = document.createElement("div");
      metrics.className = "progress-metrics";
      [
        ["Sessions", String(sessions.length)],
        ["Exercices suivis", String(items.length)],
        ["Réussites", `${successRate}%`],
        ["Réussies du premier coup", `${firstTryRate}%`]
      ].forEach(([label, value]) => {
        const item = document.createElement("div");
        item.className = "progress-metric";
        const strong = document.createElement("strong");
        strong.textContent = value;
        const caption = document.createElement("span");
        caption.textContent = label;
        item.append(strong, caption);
        metrics.appendChild(item);
      });
      summary.appendChild(metrics);
      const small = document.createElement("p");
      small.className = "progress-footnote";
      small.textContent = `Historique local : ${attempts} tentatives comptabilisées, ${errors} erreurs ou passages. Aucun calendrier de révision n’est généré.`;
      summary.appendChild(small);
    }

    history.replaceChildren();
    const heading = document.createElement("h3");
    heading.textContent = "Dernières sessions";
    history.appendChild(heading);
    if (!sessions.length) {
      const empty = document.createElement("p");
      empty.className = "progress-footnote";
      empty.textContent = "Les résultats apparaîtront ici quand tu auras terminé une session.";
      history.appendChild(empty);
    } else {
      const list = document.createElement("ol");
      list.className = "progress-history-list";
      sessions.slice(0, 6).forEach((session) => {
        const row = document.createElement("li");
        const date = new Date(session.date);
        const when = document.createElement("time");
        when.dateTime = session.date;
        when.textContent = Number.isNaN(date.getTime()) ? "Date inconnue" : date.toLocaleString("fr-FR", { dateStyle: "medium", timeStyle: "short" });
        const details = document.createElement("span");
        details.textContent = `${session.mode === "ja-fr" ? "Japonais → français" : session.mode === "fr-ja" ? "Français → japonais" : session.mode === "particles" ? "Particules" : session.mode} · ${session.correctFirstTry}/${session.total} au premier essai${session.courseIds?.length ? ` · cours ${session.courseIds.join(", ")}` : ""}`;
        row.append(when, details);
        list.appendChild(row);
      });
      history.appendChild(list);
    }

    const needsWork = items.filter((item) => item.errors > 0)
      .sort((a, b) => b.errors - a.errors || (a.correct / Math.max(1, a.sessions)) - (b.correct / Math.max(1, b.sessions)))
      .slice(0, 5);
    const reviewHeading = document.createElement("h3");
    reviewHeading.textContent = "Éléments avec des erreurs";
    history.appendChild(reviewHeading);
    if (!needsWork.length) {
      const none = document.createElement("p");
      none.className = "progress-footnote";
      none.textContent = "Aucune erreur enregistrée pour le moment.";
      history.appendChild(none);
    } else {
      const reviewList = document.createElement("ul");
      reviewList.className = "progress-history-list";
      needsWork.forEach((item) => {
        const row = document.createElement("li");
        const label = document.createElement("strong");
        label.textContent = item.label;
        const details = document.createElement("span");
        details.textContent = `${item.errors} erreur(s)/passage(s) · vu ${item.sessions} fois`;
        row.append(label, details);
        reviewList.appendChild(row);
      });
      history.appendChild(reviewList);
    }

    const reset = resetButtonId ? document.getElementById(resetButtonId) : null;
    if (reset && !reset.dataset.progressBound) {
      reset.dataset.progressBound = "true";
      reset.addEventListener("click", () => {
        if (!window.confirm("Effacer l’historique de ce jeu sur cet appareil ? Cette action est irréversible.")) return;
        const fresh = read();
        fresh.sessions = fresh.sessions.filter((session) => session.game !== game);
        Object.keys(fresh.items).forEach((key) => { if (fresh.items[key].game === game) delete fresh.items[key]; });
        write(fresh);
        renderSummary(summaryId, historyId, game, resetButtonId);
      });
    }
  }

  window.JAPONAIS_PROGRESS = { recordSession, renderSummary, read };
})();
