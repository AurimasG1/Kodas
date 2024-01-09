// Wrap the code in an IIFE (Immediately Invoked Function Expression)
(function () {
  let minutesInput;
  let secondsInput;
  let timerDisplay;
  let startStopBtn;
  let resetBtn;
  let timer;
  let totalSeconds;
  let remainingSeconds;

  function init() {
    minutesInput = document.getElementById('minutesInput');
    secondsInput = document.getElementById('secondsInput');
    timerDisplay = document.getElementById('timeDisplay');
    startStopBtn = document.getElementById('startStopBtn');
    resetBtn = document.getElementById('resetBtn');

    startStopBtn.addEventListener('click', function () {
      if (startStopBtn.textContent === 'Start') {
        startTimer();
        startStopBtn.textContent = 'Stop';
      } else {
        stopTimer();
        startStopBtn.textContent = 'Start';
      }
    });

    resetBtn.addEventListener('click', function () {
      resetTimer();
      if (startStopBtn.textContent === 'Stop') {
        startStopBtn.textContent = 'Start';
      }
    });

    // Listen for input events on minutesInput and secondsInput
    minutesInput.addEventListener('input', handleInput);
    secondsInput.addEventListener('input', handleInput);

    updateDisplay();
  }

  function updateDisplay() {
    const min = String(Math.trunc(totalSeconds / 60)).padStart(2, '0');
    const sec = String(totalSeconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${min}:${sec}`;
  }

  function handleInput() {
    // Validate input and update totalSeconds
    const minutes = parseInt(minutesInput.value, 10) || 0;
    const seconds = parseInt(secondsInput.value, 10) || 0;

    totalSeconds = minutes * 60 + seconds;

    if (totalSeconds < 0) {
      alert('Įveskite laiką: x, x');
      totalSeconds = 0;
    }

    updateDisplay();
  }

  function startTimer() {
    if (!timer) {
      remainingSeconds = totalSeconds;
    }

    if (totalSeconds >= 0) {
      updateDisplay();
      timer = setInterval(function () {
        if (totalSeconds === 0) {
          clearInterval(timer);
          alert('Laikas baigėsi');
          resetTimer();
        } else {
          updateDisplay();
          totalSeconds--;
        }
      }, 1000);
    } else {
      alert('Įveskite laiką: x, x');
    }
  }

  function stopTimer() {
    clearInterval(timer);
    remainingSeconds = totalSeconds;
    updateDisplay();
  }

  function resetTimer() {
    stopTimer();
    totalSeconds =
      parseInt(minutesInput.value, 10) * 60 + parseInt(secondsInput.value, 10);
    remainingSeconds = 0; // Reset the remaining seconds
    updateDisplay();
  }

  // Call init function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', init);
})();
