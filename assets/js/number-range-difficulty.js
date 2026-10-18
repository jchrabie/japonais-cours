/* Le niveau du jeu des nombres définit la plage numérique, pas un chronomètre.
 * À charger après assets/js/kanji-game.js.
 * Ne modifie pas le chronomètre du quiz de kanji (qui utilise startTimer/stopTimer).
 */
(() => {
  "use strict";

  const startButton = document.getElementById("startNumberGame");
  if (!startButton) return;

  // Neutralise uniquement le timer de la partie nombres.
  if (typeof window.stopNumberTimer === "function") {
    window.stopNumberTimer();
  }
  window.startNumberTimer = () => {};
  window.stopNumberTimer = () => {};

  // Le choix de difficulté indique la plage et remplace donc l'affichage du timer.
  document.getElementById("numberTimerDisplay")?.remove();
  document.getElementById("numberTimerBar")?.closest(".timer-track")?.remove();

  startButton.addEventListener(
    "click",
    (event) => {
      // Intercepte le gestionnaire historique qui générait toujours des nombres
      // jusqu'à 99 999 et applique la plage sélectionnée à la place.
      event.preventDefault();
      event.stopImmediatePropagation();

      const toJapanese = document.getElementById("numberToJapanese").checked;
      const toNumbers = document.getElementById("japaneseToNumber").checked;
      const message = document.getElementById("numberMessage");

      if (!toJapanese && !toNumbers) {
        message.textContent = "Choisis au moins un sens de conversion.";
        document.getElementById("numberGamePlay").style.display = "block";
        return;
      }

      const selectedDifficulty = document.querySelector(
        'input[name="numberDifficulty"]:checked'
      ).value;
      const maxByDifficulty = {
        easy: 99,
        medium: 9999,
        hard: 99999,
      };
      const maxNumber = maxByDifficulty[selectedDifficulty] || maxByDifficulty.easy;
      const generated = [];

      for (let i = 0; i < 10; i += 1) {
        const n = 1 + Math.floor(Math.random() * maxNumber);
        const direction = toJapanese && toNumbers
          ? (Math.random() < 0.5 ? "toJ" : "toN")
          : toJapanese ? "toJ" : "toN";
        const kanji = numberToKanji(n);
        const hiragana = numberToHiragana(n);
        const promptForm = direction === "toN"
          ? (Math.random() < 0.5 ? "kanji" : "hira")
          : "digits";

        generated.push({
          id: `${i}-${n}-${direction}`,
          n,
          direction,
          kanji,
          hira: hiragana,
          promptForm,
          answer: direction === "toJ" ? `${kanji} ou ${hiragana}` : String(n),
        });
      }

      beginNumberSession(generated);
    },
    true
  );
})();
