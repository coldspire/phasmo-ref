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
    name: "onryo",
    huntSanityThreshold: [
      "60% normally",
      "Every third flame blown out (can be prevented by normal methods, e.g. a crucifix)",
    ],
    evidence: [Evidence.Freezing, Evidence.Orb, Evidence.SpiritBox],
    uniqueInfo: [
      "Can't hunt until all flames in the area (candle, flashlight, campfires) are out",
      "When attempting to hunt and a flame is in the area, the flame is blown out and the hunt fails",
      "Under 60% sanity, the frequency of blown-out flames increases due to the ghost attempting to hunt",
      "Flames blown out during a hunt count towards the three-flame counter",
      "The more players die, the faster candles are blown out",
    ],
  },
  {
    name: "phantom",
    huntSanityThreshold: 50,
    evidence: [Evidence.Dots, Evidence.Fingerprints, Evidence.SpiritBox],
    uniqueInfo: [
      "If photo of ghost is taken during a hunt, the ghost will be invisible in the photo",
      "If photo is taken during an event: ghost will disappear, electronics work again, heartbeat sound stops, but event sound continues",
      "Ability: May pick a player and teleport to it, instead of a normal roam (causes an EMF-2)",
      "Within 10 meters (roughly the range where a heartbeat is heard), event or hunt, causes extra 0.5%/second sanity drain",
      "During hunt, flashes every 1-2 seconds, instead of every 0.3-1 seconds",
    ],
  },
  {
    name: "poltergeist",
    huntSanityThreshold: 50,
    evidence: [Evidence.Fingerprints, Evidence.Writing, Evidence.SpiritBox],
    uniqueInfo: [
      "Throws items more often and with more force",
      "Ability allows it to throw multiple items at once (EMF-2; items are EMF-3). Causes sanity drain equal to number of items thrown times two",
      "During a hunt, throws an item every 0.5 seconds",
    ],
  },
  {
    name: "raiju",
    huntSanityThreshold: [
      "50% normally",
      "65% when near at least one piece of electronic equipment",
    ],
    evidence: [Evidence.Dots, Evidence.Emf, Evidence.Orb],
    uniqueInfo: [
      "During hunt or event, interferes with electronics at greater distance (15m, instead of 10m)",
      "During a hunt, being within 6m/8m/10m (for small/med/large maps) of electronic equipment causes extra speed (2.5m/s)",
      "The following do not affect a Raiju: head-mounted cameras; video/photo cameras if thrown (not placed); motion/sound sensors and DOTS if thrown; inventory objects (unless flashlights are on); anything electrical not brought from the van",
    ],
  },
  {
    name: "revenant",
    huntSanityThreshold: 50,
    evidence: [Evidence.Freezing, Evidence.Orb, Evidence.Writing],
    uniqueInfo: [
      "During a hunt, moves very slowly (1m/s) when no players detected",
      "During a hunt, moves twice as fast (3m/s) when a player is detected and is near-impossible to run from",
      "The Revenant moves fast until it reaches the point where it last saw a player",
    ],
  },
  {
    name: "shade",
    huntSanityThreshold: ["35% normally", "Never if any players in ghost room"],
    evidence: [Evidence.Emf, Evidence.Freezing, Evidence.Writing],
    uniqueInfo: [
      "Less likely to do interactions",
      "A player in the room prevents interactions and hunts, regardless of sanity",
      "Smaller average sanity means more likely to perform events",
      "During events, higher chance of being an airball; if appears, higher chance of appearing as a shadow",
      "If appears because of a cursed possession, has a chance to appear as a black shadow instead of full form",
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
