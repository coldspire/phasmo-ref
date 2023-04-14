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
  FakeOrb: {
    name: "Fake ghost orb (from Mimic)",
    shortName: "Fake orb",
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
 * @type { {name: string, huntSanityThreshold: (number|string[]), evidence: Evidence[], notes: string[] }[] }
 */
const ghosts = [
  {
    name: "banshee",
    huntSanityThreshold: 50,
    evidence: [Evidence.Dots, Evidence.Fingerprints, Evidence.Orb],
    notes: [
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
    notes: [
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
    notes: [
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
    notes: [
      "DOTS interaction appears only through a video feed",
      "Doesn't roam far from its favorite room",
      "Cannot change favorite rooms on any difficulty (though the Monkey Paw can force a change)",
    ],
  },
  {
    name: "hantu",
    huntSanityThreshold: 50,
    evidence: [Evidence.Fingerprints, Evidence.Freezing, Evidence.Orb],
    notes: [
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
    notes: [
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
    notes: [
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
    notes: [
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
    notes: [
      "Produces more whispers when using the parabolic mic",
      "Quieter during a hunt -- footsteps will be audible only within the range where electrical malfunctions too (12 meters)",
    ],
  },
  {
    name: "obake",
    huntSanityThreshold: 50,
    evidence: [Evidence.Emf, Evidence.Fingerprints, Evidence.Orb],
    notes: [
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
    notes: [
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
    notes: [
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
    notes: [
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
    notes: [
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
    notes: [
      "During hunt or event, interferes with electronics at greater distance (15m, instead of 10m)",
      "During a hunt, being within 6m/8m/10m (for small/med/large maps) of electronic equipment causes extra speed (2.5m/s)",
      "The following do not affect a Raiju: head-mounted cameras; video/photo cameras if thrown (not placed); motion/sound sensors and DOTS if thrown; inventory objects (unless flashlights are on); anything electrical not brought from the van",
    ],
  },
  {
    name: "revenant",
    huntSanityThreshold: 50,
    evidence: [Evidence.Freezing, Evidence.Orb, Evidence.Writing],
    notes: [
      "During a hunt, moves very slowly (1m/s) when no players detected",
      "During a hunt, moves twice as fast (3m/s) when a player is detected and is near-impossible to run from",
      "The Revenant moves fast until it reaches the point where it last saw a player",
    ],
  },
  {
    name: "shade",
    huntSanityThreshold: ["35% normally", "Never if any players in ghost room"],
    evidence: [Evidence.Emf, Evidence.Freezing, Evidence.Writing],
    notes: [
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
    notes: [
      "When smudged, a Spirit won't start a non-cursed hunt for 3 minutes (instead of the normal 90 seconds)",
      "",
    ],
  },
  {
    name: "thaye",
    huntSanityThreshold: [
      "75% at start (before aging)",
      "Reduces by -6% per year aged",
    ],
    evidence: [Evidence.Dots, Evidence.Orb, Evidence.Writing],
    notes: [
      `Appears on ${Evidence.Dots.shortName} and ${Evidence.Writing.shortName} more often`,
      "Ability attempts to age every 1-2 minutes; if a player is in the room, the Thaye will age; else it waits another 30 seconds to try again",
      "Can age up to ten times per contract",
      "Speed is fast when young (2.75 m/s); slows to as low as 1 m/s when aging",
    ],
  },
  {
    name: "the mimic",
    huntSanityThreshold: [
      "Inherits threshold and abilities of currently-mimicked ghost",
    ],
    evidence: [
      Evidence.Fingerprints,
      Evidence.Freezing,
      Evidence.SpiritBox,
      Evidence.FakeOrb,
    ],
    notes: [
      "Mimics: interaction/event rates and preferences, hunt thresholds and movement speeds, and abilities",
      "If the mimicked ghost has features that modify the same evidence used to find a Mimic, the Mimic will copy the feature (e.g. the Obake's six-fingered handprint)",
      "Changes mimicked ghost type every 30-120 seconds, but not during hunts",
      "If a Thaye is mimicked, a random age is selected",
    ],
  },
  {
    name: "the twins",
    huntSanityThreshold: 50,
    evidence: [Evidence.Emf, Evidence.Freezing, Evidence.SpiritBox],
    notes: [
      "Ability allow it to perform two interactions within 16 meters (25% of EMF-5), which can make it difficult to tell the favorite room",
      "When initiating hunt, 50% chance to start at current location (with lower movement speed), and 50% chance to start near the last interaction (faster speed)",
      "Despite the name, two hunts cannot start simultaneously",
      "A crucifix check applies to where the ghost is actually standing, even if it wanted to hunt near an interaction",
    ],
  },
  {
    name: "wraith",
    huntSanityThreshold: 50,
    evidence: [Evidence.Dots, Evidence.Emf, Evidence.SpiritBox],
    notes: [
      "Never steps in salt or leaves UV footprints, though its appearance doesn't float and it still makes footstep sounds",
      "When not hunting, its ability gives it a chance to teleport near a player (EMF-2; 25% change of EMF-5) before continuing normal behavior",
      "Placing salt in a summoning circle and summoning the ghost is a good way to spot (or rule out) a Wraith",
    ],
  },
  {
    name: "yokai",
    huntSanityThreshold: [
      "50% normally",
      "80% if players talking within 2 meters",
    ],
    evidence: [Evidence.Dots, Evidence.Orb, Evidence.SpiritBox],
    notes: [
      "When hunting, the radius which it can hear players or equipment is much smaller than normal (2.5 m)",
      "When using the music box, the Yokai needs to be closer to the player holding the box for the event and cursed hunt",
    ],
  },
  {
    name: "yurei",
    huntSanityThreshold: 50,
    evidence: [Evidence.Dots, Evidence.Freezing, Evidence.Orb],
    notes: [
      "When smudged, returns to favorite room and is trapped for 60 seconds",
      "Ability causes players within 7.5 meters to lose 15% sanity",
      "Same ability also causes a random open door to be closed fully (EMF-2), which means it closes doors a lot more than normal",
      "The only ghost who can move/close the front door outside of a hunt",
      "If the room has no open doors, the ability is not used",
    ],
  },
];

module.exports = ghosts;
