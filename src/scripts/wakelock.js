function supportsWakeLock() {
  return "wakeLock" in navigator;
}

function getSentinelManager() {
  return (function () {
    /** @type WakeLockSentinel */
    let wakeLock = null;
    const getLock = async function () {
      try {
        wakeLock = await navigator.wakeLock.request("screen");
      } catch (err) {
        console.error(`Wake lock request failed: ${err.message}`);
      }
    };

    const releaseLock = async function () {
      if (wakeLock) {
        await wakeLock.release();
      }
    };

    return {
      getLock,
      releaseLock,
    };
  })();
}

function setupWakeLock() {
  const wakeLockOpt = document.querySelector("#wake-lock");
  const wakeLockLabel = document.querySelector("#wake-lock__label");

  let sentinelManager;
  if (supportsWakeLock()) {
    sentinelManager = getSentinelManager();
  } else {
    wakeLockOpt.disabled = true;
    wakeLockLabel.classList.add("wake-lock--unsupported");
    sentinelManager = null;
  }

  return sentinelManager;
}

const wakeLock = setupWakeLock();
if (wakeLock) {
  document
    .querySelector("#wake-lock")
    .addEventListener("click", ({ target }) => {
      const isChecked = target.checked;
      if (isChecked) {
        wakeLock.getLock();
      } else {
        wakeLock.releaseLock();
      }
    });
}
