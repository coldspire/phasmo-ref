function ghostMeetsSuperCondition(superNums, playerSanity) {
  let meetsSuper = false;
  superNums.forEach((superNum) => {
    if (+superNum >= +playerSanity) {
      meetsSuper = true;
    }
  });

  return meetsSuper;
}

function ghostMeetsStartingSanity(sanityNums, playerSanity) {
  let meetsThreshold = false;
  sanityNums.forEach((sanityNum) => {
    if (+sanityNum >= +playerSanity) {
      meetsThreshold = true;
    }
  });

  return meetsThreshold;
}

function updateSanityLabel(playerSanity) {
  const sanityEl = document.querySelector("#selected-sanity-value");
  sanityEl.textContent = playerSanity;
}

function filterGhostsBySanity(playerSanity) {
  updateSanityLabel(playerSanity);

  const ghostEls = Array.from(
    document.getElementsByClassName("ghost-sanity-hook")
  );
  ghostEls.forEach((ghostEl) => {
    const sanityNums = (ghostEl.dataset.sanityList ?? []).split(",");
    const superNums = (ghostEl.dataset.superList ?? []).split(",");

    const meetsThreshold = ghostMeetsStartingSanity(sanityNums, playerSanity);
    const meetsSuper = ghostMeetsSuperCondition(superNums, playerSanity);

    ghostEl.classList.toggle("can-hunt", meetsThreshold || meetsSuper);
    ghostEl.classList.toggle(
      "is-super-condition",
      !meetsThreshold && meetsSuper
    );
    ghostEl.classList.toggle("cannot-hunt", !meetsThreshold && !meetsSuper);
  });
}

document.addEventListener("input", (event) => {
  if (event.target.id === "selected-sanity") {
    const playerSanity = event.target.value;
    filterGhostsBySanity(playerSanity);
  }
});

// Get starting value
const startingSanityRangeValue =
  document.querySelector("#selected-sanity").value;
filterGhostsBySanity(startingSanityRangeValue);
