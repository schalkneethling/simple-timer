(function () {
  "use strict";

  const timerOutput = document.getElementById("timer");
  const startTimer = document.getElementById("start-timer");
  const resetTimer = document.getElementById("reset-timer");

  let timer;

  timerOutput.textContent = "Idle...";

  function countDown(timerDuration) {
    timer = setTimeout(() => {
      if (timerDuration === 0) {
        const audioElement = document.getElementById("audio");
        timerOutput.textContent = "Done";
        audioElement.play();
        return;
      }

      timerOutput.textContent =
        timerDuration > 1
          ? `${timerDuration} minutes`
          : `${timerDuration} minute`;
      timerDuration = timerDuration - 1;
      countDown(timerDuration);
    }, 60000);
  }

  startTimer.addEventListener("click", () => {
    const durationInput = document.getElementById("duration").value;
    timerOutput.textContent =
      durationInput > 1
        ? `${durationInput} minutes`
        : `${durationInput} minute`;
    countDown(durationInput - 1);
    timerOutput.classList.add("pulse");
  });

  resetTimer.addEventListener("click", () => {
    clearTimeout(timer);
    timerOutput.textContent = `Idle...`;
    timerOutput.classList.remove("pulse");
  });
})();
