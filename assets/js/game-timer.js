/* Chronométrage global des sessions de jeux (durée totale, hors temps de préparation). */
(() => {
  let startedAt = null;
  const format = (milliseconds) => {
    const total = Math.max(0, Math.floor(milliseconds / 1000));
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    return hours > 0
      ? `${hours} h ${String(minutes).padStart(2, "0")} min ${String(seconds).padStart(2, "0")} s`
      : minutes > 0
        ? `${minutes} min ${String(seconds).padStart(2, "0")} s`
        : `${seconds} s`;
  };
  window.JAPONAIS_GAME_TIMER = {
    start() { startedAt = performance.now(); },
    stop() {
      if (startedAt === null) return "0 s";
      const elapsed = performance.now() - startedAt;
      startedAt = null;
      return format(elapsed);
    },
  };
})();
