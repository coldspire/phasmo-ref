/**
 * Types of evidence
 * @type { Object.<string, { name: string, shortName: string}> }
 */
const Evidence = {
  Dots: {
    name: "D.O.T.S. projector",
    shortName: "DOTS",
  },
  Freezing: {
    name: "Freezing temperatures",
    shortName: "Freezing temps",
  },
  Emf: {
    name: "EMF level 5",
    shortName: "EMF-5",
  },
  Fingerprints: {
    name: "Fingerprints",
    shortName: "Fingerprints",
  },
  Orb: {
    name: "Ghost orb",
    shortName: "Orb",
  },
  SpiritBox: {
    name: "Spirit Box",
    shortName: "Spirit Box",
  },
  Writing: {
    name: "Ghost writing",
    shortName: "Writing",
  },
};

/**
 * The master list of ghosts.
 * @type { {name: string, huntSanityThreshold: number, evidence: Evidence[], uniqueInfo: string[] }[] }
 */
const ghosts = [
  {
    name: "banshee",
    huntSanityThreshold: 50,
    evidence: [Evidence.Dots, Evidence.Fingerprints, Evidence.Orb],
    uniqueInfo: [
      "Using a parabolic mic has a 33%-chance of hearing a unique Banshee shriek",
      "Targets one player at a time; will hunt that player, and sanity-check applies only to target (not average)",
      "Performs more singing events than normal",
    ],
  },
  {
    name: "demon",
    huntSanityThreshold: 70,
    evidence: [Evidence.Fingerprints, Evidence.Freezing, Evidence.Writing],
    uniqueInfo: [
      "Has an ability to start a hunt regardless of player sanity average",
      "Below-sanity-threshold hunts can still occur and are separate from ability-triggered hunts",
      "Cooldown time between hunts is 20 seconds, instead of the normal 25 seconds",
      "Smudging a Demon prevents hunts for only 60 seconds, instead of the normal 90 seconds",
      "Crucifix has a 5-meter effective radius, instead of the normal 3 meters",
    ],
  },
  {
    name: "deogen",
    huntSanityThreshold: 40,
    evidence: [Evidence.Dots, Evidence.SpiritBox, Evidence.Writing],
    uniqueInfo: [
      "Above-average interactivity with DOTS and ghost writing",
      'Spirit Box usage within a meter has 33%-chance of heavy, "bull-like" breathing',
      "During hunt, has line-of-sight to all players and does not need to roam",
      "During hunt, moves very slowly when near a player",
    ],
  },
  {
    name: "goryo",
    huntSanityThreshold: 50,
    evidence: [Evidence.Dots, Evidence.Emf, Evidence.Fingerprints],
    uniqueInfo: [
      "DOTS interaction appears only through a video feed",
      "Doesn't roam far from its favorite room",
      "Cannot change favorite rooms on any difficulty (though the Monkey Paw can force a change)",
    ],
  },
  {
    name: "spirit",
    huntSanityThreshold: 50,
    evidence: [Evidence.Emf, Evidence.SpiritBox, Evidence.Writing],
    uniqueInfo: [
      "When smudged, a Spirit won't start a non-cursed hunt for 3 minutes (instead of the normal 90 seconds)",
    ],
  },
];

module.exports = ghosts;
