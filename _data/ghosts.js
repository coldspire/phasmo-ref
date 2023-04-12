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
 * @type { {name: string, huntSanityThreshold: (number|string[]), evidence: Evidence[], uniqueInfo: string[] }[] }
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
    huntSanityThreshold: [
      "70% for normal hunts",
      "Can use ability to hunt regardless of sanity threshold",
    ],
    evidence: [Evidence.Fingerprints, Evidence.Freezing, Evidence.Writing],
    uniqueInfo: [
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
    name: "hantu",
    huntSanityThreshold: 50,
    evidence: [Evidence.Fingerprints, Evidence.Freezing, Evidence.Orb],
    uniqueInfo: [
      "The colder the room, the faster it moves (so be careful around the favorite room)",
      "Can't turn on the fuse box; twice as likely to turn off the fuse box",
      "When visible and breaker is off, cold breath is visible when Hantu is visible",
      "Same evidence may also point to a Mimic. Check Spirit Box to rule out Mimic",
    ],
  },
  {
    name: "jinn",
    huntSanityThreshold: 50,
    evidence: [Evidence.Emf, Evidence.Fingerprints, Evidence.Freezing],
    uniqueInfo: [
      "Cannot turn off a breaker through interactions",
      "Ability lowers sanity of players in same room/3-meter distance by 25%; fuse box will give EMF 2/5",
      "During hunt, very fast if all conditions are met: fuse box is on, Jinn has line-of-sight, and is further than 3 meters away",
    ],
  },
  {
    name: "mare",
    huntSanityThreshold: [
      "60% if lights off in ghost's current room",
      "40% if lights on in ghost's current room",
    ],
    evidence: [Evidence.Writing, Evidence.Orb, Evidence.SpiritBox],
    uniqueInfo: [
      "More likely to turn off lights; cannot turn lights on",
      "Ability: May turn off a light (or television, or computer) almost immediately if a light is turned on within 4 meters (cooldown: 10 seconds)",
      "When roaming, prefers unlit rooms",
      "Non-electrical sources of light (flashlights, candles, etc.) do not affect the Mare",
    ],
  },
  {
    name: "moroi",
    huntSanityThreshold: 50,
    evidence: [Evidence.Freezing, Evidence.SpiritBox, Evidence.Writing],
    uniqueInfo: [
      "Ability: Curses a player through Spirit Box interaction or parabolic-mic whispers",
      "A cursed player when not in a lit area (either by candle or lamp) has increased passive sanity drain. Sanity pills cure the curse",
      "During a hunt, a Moroi's speed is a function of how low the target's sanity is",
      "Smudging baffles the Moroi for 12 seconds instead of the normal six seconds",
    ],
  },
  {
    name: "myling",
    huntSanityThreshold: 50,
    evidence: [Evidence.Emf, Evidence.Fingerprints, Evidence.Writing],
    uniqueInfo: [
      "Produces more whispers when using the parabolic mic",
      "Quieter during a hunt -- footsteps will be audible only within the range where electrical malfunctions too (12 meters)",
    ],
  },
  {
    name: "obake",
    huntSanityThreshold: 50,
    evidence: [Evidence.Emf, Evidence.Fingerprints, Evidence.Orb],
    uniqueInfo: [
      "Less chance of fingerprints (75% instead of 100%)",
      "May leave unique fingerprints: six-fingered handprint; two fingers on a light switch; five fingers on a keyboard and prison cell door",
      "Can use ability to cut fingerprint-duration time in half. Can be used several times in succession",
      "During a hunt, has a 1-in-15 chance to shapeshift into another ghost of the same gender. Returns to original form after shapeshift",
      "During a hunt, going from standing to crawling (or vice versa) counts as a shapeshift",
    ],
  },
  {
    name: "oni",
    huntSanityThreshold: 50,
    evidence: [Evidence.Dots, Evidence.Emf, Evidence.Freezing],
    uniqueInfo: [
      "Causes more interactions than normal and more when people are in the ghost room",
      "During an event: won't send an airball; prefers showing full form during event; causes double sanity drain on player collision",
      "During a hunt, is more visible (flickers out less) than other ghosts",
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
