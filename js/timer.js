(function () {
  "use strict";

  const clockHand = document.getElementById("clock-hand");
  const timerContainer = document.getElementById("timer");
  const timerOutput = document.getElementById("timer-output");
  const startTimer = document.getElementById("start-timer");
  const resetTimer = document.getElementById("reset-timer");

  let timer;

  function countDown(timerDuration) {
    timer = setTimeout(() => {
      if (timerDuration === 0) {
        const audioElement = document.getElementById("audio");
        timerOutput.textContent = "Done";
        audioElement.play();
        timerOutput.classList.remove("pulse");
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
    clockHand.classList.add("animate");
    timerContainer.classList.add("pulse");
  });

  resetTimer.addEventListener("click", () => {
    clearTimeout(timer);
    timerOutput.textContent = "00:00:00";
    clockHand.classList.remove("animate");
    timerContainer.classList.remove("pulse");
  });
})();
