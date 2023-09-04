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
  els.startBtn.disabled =
    timerState === TimerState.Running || timerState === TimerState.Expired;
  els.resetBtn.disabled = timerState === TimerState.Reset;
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
      setTimerButtonState(TimerState.Expired, els);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
    }, durationInMs);
  })(duration);
}

/**
 * @param {number} duration
 * @param {TimerEl} els
 */
function setTimerLogic(duration, els) {
  setTimerButtonState(TimerState.Reset, els);

  els.startBtn.addEventListener("click", () => {
    countdownFactory(duration, els);
  });

  els.resetBtn.addEventListener("click", () => {
    updateLabel(els.label, duration);
    setTimerButtonState(TimerState.Reset, els);
  });
}

function setupTimer(timerEl) {
  const duration = timerEl.dataset.duration;

  /** @type TimerEl **/
  const els = {
    container: timerEl,
    label: timerEl.children[0],
    startBtn: timerEl.children[1],
    resetBtn: timerEl.children[2],
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
