const ghosts = require("./ghosts");

/**
 * @typedef { { sanityNum: number; ghosts: string[]; } } SanityPair[]
 */

/**
 * @return { SanityPair[] }
 */
function getSanityStartingSortDesc() {
  const sanityCollection = {};

  ghosts.forEach((ghost) => {
    const ghostName = ghost.name;
    const startingSanity = ghost.huntConditions.startingSanityThreshold;

    if (Array.isArray(sanityCollection[startingSanity])) {
      sanityCollection[startingSanity].push(ghostName);
    } else {
      sanityCollection[startingSanity] = [ghostName];
    }
  });

  Object.values(sanityCollection).forEach((ghostNames) => {
    ghostNames.sort();
  });

  /**
   * @type {SanityPair[]}
   */
  const sanityPairs = Object.entries(sanityCollection).map(
    ([sanityNum, ghosts]) => ({ sanityNum, ghosts })
  );

  return sanityPairs.sort().reverse();
}

const sanityCollections = {
  sanityStartingSortDesc: getSanityStartingSortDesc(),
};

module.exports = sanityCollections;
