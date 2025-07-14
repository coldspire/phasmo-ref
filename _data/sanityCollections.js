import ghosts from "./ghosts.js";

/**
 * @typedef { { sanityNum: number; ghosts: string[]; } } SanityPair[]
 * @typedef { { ghost: string; reason: string; } } SuperCondition
 * @typedef { { sanityNum: number; superConditions: SuperCondition[] } } SuperSanityPairs[]
 *
 * @typedef { { sanityNum: number; isSuperCondition: boolean } } SanityCondition
 * @typedef { Object.<ghost, Array.<SanityCondition>>} GhostSanityConditions
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
          ghost,
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
      return pairA.ghost.name.localeCompare(pairB.ghost.name);
    });
  });

  const sanityPairs = Object.entries(sanityCollection).map(
    ([sanityNum, superPairs]) => ({ sanityNum, superPairs })
  );

  return sanityPairs
    .sort((pairA, pairB) => pairA.sanityNum - pairB.sanityNum)
    .reverse();
}

function getGhostSanityConditions() {
  /**
   * @type {GhostSanityConditions}
   */
  const ghostSanityConditions = {};

  ghosts.forEach((ghost) => {
    // Mimic can have any sanity number, so we can't track it
    if (ghost.name === "the mimic") {
      return;
    }

    const huntConditions = ghost.huntConditions;

    ghostSanityConditions[ghost.name] = [];
    if (ghost.huntConditions.startingSanityThreshold !== "Varies") {
      ghostSanityConditions[ghost.name].push({
        sanityNum: huntConditions.startingSanityThreshold,
        isSuperCondition: false,
      });
    }

    if (huntConditions.superSanityThresholds) {
      huntConditions.superSanityThresholds.forEach(
        ({ threshold, condition }) => {
          ghostSanityConditions[ghost.name].push({
            sanityNum: threshold,
            isSuperCondition: true,
          });
        }
      );
    }
  });

  Object.values(ghostSanityConditions).forEach((sanityPairs) => {
    sanityPairs.sort(
      (sanityA, sanityB) => sanityB.sanityNum - sanityA.sanityNum
    );
  });

  return ghostSanityConditions;
}

const sanityCollections = {
  sanityStartingSortDesc: getSanityStartingSortDesc(),
  sanitySuperSortDesc: getSanitySuperSortDesc(),
  ghostSanityConditions: getGhostSanityConditions(),
};

export default sanityCollections;
