/**
 * @typedef {{container: HTMLElement; label: HTMLElement; startBtn: HTMLButtonElement; resetBtn: HTMLButtonElement}} TimerEl
 */

/**
 * @readonly
 * @enum {number}
 */
const TimerState = {
  Reset: 0,
  Running: 1,
  Expired: 2,
};

/**
 *
 * @param {HTMLElement} labelEl
 * @param {number} value
 */
function updateLabel(labelEl, value) {
  labelEl.innerText = value.toString();
}

/**
 * @param {TimerState} timerState
 * @param {TimerEl} els
 */
function setTimerButtonState(timerState, els) {
  const isReset = timerState === TimerState.Reset;
  const isRunning = timerState === TimerState.Running;
  const isExpired = timerState === TimerState.Expired;

  els.startBtn.disabled = isRunning || isExpired;
  els.resetBtn.disabled = isReset;

  els.container.classList.toggle("timer--reset", isReset);
  els.container.classList.toggle("timer--running", isRunning);
  els.container.classList.toggle("timer--expired", isExpired);
}

/**
 * @param {number} duration
 * @param {TimerEl }els
 */
function countdownFactory(duration, els) {
  return ((duration) => {
    const durationInMs = duration * 1000;
    let countdownValue = duration;

    updateLabel(els.label, countdownValue);
    setTimerButtonState(TimerState.Running, els);
    const countdownInterval = setInterval(() => {
      countdownValue -= 1;
      updateLabel(els.label, countdownValue);
    }, 1000);

    const timerTimeout = setTimeout(() => {
      setTimerButtonState(TimerState.Expired, els);
      clearInterval(countdownInterval);
    }, durationInMs);

    const stopTimer = () => {
      clearInterval(countdownInterval);
      clearTimeout(timerTimeout);
      updateLabel(els.label, duration);
    };

    return {
      stopTimer,
    };
  })(duration);
}

/**
 * @param {number} duration
 * @param {TimerEl} els
 */
function setTimerLogic(duration, els) {
  setTimerButtonState(TimerState.Reset, els);
  let countdown;

  els.startBtn.addEventListener("click", () => {
    countdown = countdownFactory(duration, els);
  });

  els.resetBtn.addEventListener("click", () => {
    if (countdown) {
      countdown.stopTimer();
    }
    setTimerButtonState(TimerState.Reset, els);
  });
}

function setupTimer(timerEl) {
  const duration = timerEl.dataset.duration;

  /** @type TimerEl **/
  const els = {
    container: timerEl,
    heading: timerEl.children[0],
    label: timerEl.children[1],
    startBtn: timerEl.children[2],
    resetBtn: timerEl.children[3],
  };

  if (!duration) {
    els.label.innerText = "Duration missing for this timer.";
    els.startBtn.hidden = true;
    els.resetBtn.hidden = true;
    return;
  }

  els.label.innerText = duration;
  setTimerLogic(+duration, els);
}

function setupAllTimers() {
  const timers = Array.from(document.getElementsByClassName("timer"));
  timers.forEach((timerEl) => {
    setupTimer(timerEl);
  });
}

setupAllTimers();
