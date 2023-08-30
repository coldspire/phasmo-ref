function filterGhostsBySanity(playerSanity) {
  const ghostEls = Array.from(
    document.getElementsByClassName("ghost-sanity-hook")
  );
  ghostEls.forEach((ghostEl) => {
    const sanityNums = (ghostEl.dataset.sanityList ?? []).split(",");
    let ghostCanHunt = false;
    sanityNums.forEach((sanityNum) => {
      if (+sanityNum >= +playerSanity) {
        ghostCanHunt = true;
      }
    });
    ghostEl.classList.toggle("can-hunt", ghostCanHunt);
    ghostEl.classList.toggle("cannot-hunt", !ghostCanHunt);
  });
}

document.addEventListener("input", (event) => {
  if (event.target.id === "selected-sanity") {
    const playerSanity = event.target.value;
    filterGhostsBySanity(playerSanity);
  }
});
