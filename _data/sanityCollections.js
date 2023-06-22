const ghosts = require("./ghosts");

/**
 * @typedef { { sanityNum: number; ghosts: string[]; } } SanityPair[]
 * @typedef { { ghost: string; reason: string; } } SuperCondition
 * @typedef { { sanityNum: number; superConditions: SuperCondition[] } } SuperSanityPairs[]
 */

/**
 * @return { SanityPair[] }
 */
function getSanityStartingSortDesc() {
  const sanityCollection = {};

  ghosts.forEach((ghost) => {
    const startingSanity = ghost.huntConditions.startingSanityThreshold;

    if (Array.isArray(sanityCollection[startingSanity])) {
      sanityCollection[startingSanity].push(ghost);
    } else {
      sanityCollection[startingSanity] = [ghost];
    }
  });

  Object.values(sanityCollection).forEach((ghosts) => {
    ghosts.sort((ghostA, ghostB) => ghostA.name.localeCompare(ghostB));
  });

  /**
   * @type {SanityPair[]}
   */
  const sanityPairs = Object.entries(sanityCollection).map(
    ([sanityNum, ghosts]) => ({ sanityNum, ghosts })
  );

  return sanityPairs.sort().reverse();
}

function getSanitySuperSortDesc() {
  const sanityCollection = {};

  ghosts.forEach((ghost) => {
    if (Array.isArray(ghost.huntConditions.superSanityThresholds)) {
      const superThresholds = ghost.huntConditions.superSanityThresholds;
      superThresholds.forEach((threshold) => {
        const superSanityPair = {
          ghost: ghost.name,
          condition: threshold.condition,
        };
        if (Array.isArray(sanityCollection[threshold.threshold])) {
          sanityCollection[threshold.threshold].push(superSanityPair);
        } else {
          sanityCollection[threshold.threshold] = [superSanityPair];
        }
      });
    }
  });

  Object.values(sanityCollection).forEach((superPairs) => {
    superPairs.sort((pairA, pairB) => {
      return pairA.ghost.localeCompare(pairB.ghost);
    });
  });

  const sanityPairs = Object.entries(sanityCollection).map(
    ([sanityNum, superPairs]) => ({ sanityNum, superPairs })
  );

  return sanityPairs
    .sort((pairA, pairB) => pairA.sanityNum - pairB.sanityNum)
    .reverse();
}

const sanityCollections = {
  sanityStartingSortDesc: getSanityStartingSortDesc(),
  sanitySuperSortDesc: getSanitySuperSortDesc(),
};

module.exports = sanityCollections;
