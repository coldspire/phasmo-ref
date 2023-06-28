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
 * @typedef {Object} HuntConditions
 * @property {number|"Varies"} startingSanityThreshold
 * @property {Array<{ threshold: number; condition: string; }>} [superSanityThresholds]
 * @property {string[]} [additionalConditions]
 */

/**
 * @typedef {Object} Notes
 * @property {string[]} evidence - Notes for gathering evidence
 * @property {string[]} ability - Ability notes
 * @property {string[]} hunt - Hunt notes
 * @property {string[]} other - Notes that don't fit in elsewhere
 */

/**
 * @typedef {Object} Ghost
 * @property {string} name - Ghost name
 * @property {HuntConditions} huntConditions - Sanity threshold and other abilities that may cause a hunt
 * @property {Evidence[]} evidence - Evidence needed to verify a ghost
 * @property {Notes} [notes] - Optional additional information
 */

/**
 * The master list of ghosts.
 * @type { Ghost[] }
 */
const ghosts = [
  {
    name: "banshee",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Dots, Evidence.Fingerprints, Evidence.Orb],
    notes: {
      ability: [
        "Using a parabolic mic has a 33%-chance of hearing a unique Banshee shriek",
        "When performing a roam and target (see hunt notes) is within investigation area, 66% chance of roaming to the target",
      ],
      hunt: [
        "Targets one player at a time; will hunt that player, and sanity-check applies only to target (not average)",
        "Sanity threshold for hunt is sanity of target, not average sanity",
      ],
      evidence: [],
      other: ["Performs more singing events than normal"],
    },
  },
  {
    name: "demon",
    huntConditions: {
      startingSanityThreshold: 70,
      superSanityThresholds: [
        {
          threshold: 100,
          condition: "Can hunt simply by activating ability",
        },
      ],
    },
    evidence: [Evidence.Fingerprints, Evidence.Freezing, Evidence.Writing],
    notes: {
      ability: ["Attempts to initiate a hunt, regardless of average sanity"],
      hunt: [
        "Below-sanity-threshold hunts can still occur and are separate from ability-triggered hunts",
        "Cooldown time between hunts is 20 seconds, instead of the normal 25 seconds",
      ],
      evidence: [],
      other: [
        "Smudging a Demon prevents hunts for only 60 seconds, instead of the normal 90 seconds",
        "Crucifix has a 5-meter effective radius, instead of the normal 3 meters",
      ],
    },
  },
  {
    name: "deogen",
    huntConditions: {
      startingSanityThreshold: 40,
    },
    evidence: [Evidence.Dots, Evidence.SpiritBox, Evidence.Writing],
    notes: {
      ability: [],
      hunt: [
        "During a hunt, this ghost has line-of-sight to all investigators and does not need to wander to find one",
        "During hunt, this ghost moves very slowly when near a player",
      ],
      evidence: [
        "Above-average interactivity with DOTS and ghost writing",
        'Spirit Box usage within a meter has 33%-chance of heavy, "bull-like" breathing',
      ],
      other: [],
    },
  },
  {
    name: "goryo",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Dots, Evidence.Emf, Evidence.Fingerprints],
    notes: {
      ability: [],
      hunt: [],
      evidence: [
        "DOTS interaction occurs only if no players are in the same room as the ghost (though may interact with DOTS if roaming elsewhere)",
        "DOTS interaction appears only through a video feed",
      ],
      other: [
        "When roaming, can only roam short distances",
        "Cannot change favorite rooms on any difficulty (though the Monkey Paw can force a change)",
      ],
    },
  },
  {
    name: "hantu",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Fingerprints, Evidence.Freezing, Evidence.Orb],
    notes: {
      ability: [],
      hunt: [
        "The colder the room, the faster it moves (so be careful around the favorite room)",
        "When visible and breaker is off, cold breath is visible when Hantu is visible",
      ],
      evidence: [],
      other: [
        'Same evidence may also point to a Mimic (Hantu has "real" orbs; Mimic has fake ones). Check Spirit Box to rule out Mimic',
        "Can't turn on the fuse box; twice as likely to turn off the fuse box",
      ],
    },
  },
  {
    name: "jinn",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Emf, Evidence.Fingerprints, Evidence.Freezing],
    notes: {
      ability: [
        "Lowers sanity of players in same room/3-meter distance by 25%; fuse box will give EMF 2/5",
        "Turning off the fuse box will prevent this ghost from using its ability",
      ],
      hunt: [
        "During hunt, very fast if all conditions are met: fuse box is on, Jinn has line-of-sight, and is further than 3 meters away",
      ],
      evidence: [],
      other: ["Cannot turn off a breaker through interactions"],
    },
  },
  {
    name: "mare",
    huntConditions: {
      startingSanityThreshold: "Varies",
      superSanityThresholds: [
        {
          threshold: 60,
          condition: "Lights off in ghost's favorite room",
        },
        {
          threshold: 40,
          condition: "Lights on in ghost's favorite room",
        },
      ],
    },
    evidence: [Evidence.Writing, Evidence.Orb, Evidence.SpiritBox],
    notes: {
      ability: [
        "May turn off a light (or television, or computer) almost immediately if a light is turned on within 4 meters (cooldown: 10 seconds)",
        "Will perform light-shattering events more often than normal",
      ],
      hunt: [],
      evidence: [],
      other: [
        "More likely to turn off lights; cannot turn lights on",
        "When roaming, prefers unlit rooms",
        "Non-electrical sources of light (flashlights, candles, etc.) do not affect this ghost",
      ],
    },
  },
  {
    name: "moroi",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Freezing, Evidence.SpiritBox, Evidence.Writing],
    notes: {
      ability: [
        "Curses a player through Spirit Box interaction or parabolic-mic whispers",
        "A cursed player when not in a lit area (either by candle or lamp) has increased passive sanity drain. Sanity pills cure the curse",
      ],
      hunt: [
        "During a hunt, this ghost's speed is a function of how low the target's sanity is (e.g. lower sanity means faster ghost)",
        "Smudging blinds this ghost for 12 seconds instead of the normal six seconds",
      ],
      evidence: [],
      other: [],
    },
  },
  {
    name: "myling",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Emf, Evidence.Fingerprints, Evidence.Writing],
    notes: {
      ability: [],
      hunt: [
        "Quieter during a hunt -- footsteps will be audible only within the range where electrical malfunctions too (12 meters)",
      ],
      evidence: [],
      other: ["Produces more whispers when using the parabolic mic"],
    },
  },
  {
    name: "obake",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Emf, Evidence.Fingerprints, Evidence.Orb],
    notes: {
      ability: [
        "Cuts fingerprint-duration time in half. Can be used several times in succession",
      ],
      hunt: [
        "During hunt, has a 1-in-15 chance to shapeshift into another ghost of the same gender. Returns to original form after shapeshift",
        "During a hunt, changing from standing to crawling (or vice versa) counts as a shapeshift",
      ],
      evidence: [
        "Less chance of fingerprints (75% instead of 100%)",
        "May leave unique fingerprints: six-fingered handprint; two fingers on a light switch; five fingers on a keyboard and prison cell door",
      ],
      other: [],
    },
  },
  {
    name: "oni",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Dots, Evidence.Emf, Evidence.Freezing],
    notes: {
      ability: [],
      hunt: [
        "During a hunt, this ghost is more visible (flickers out less) than other ghosts",
      ],
      evidence: [],
      other: [
        "Causes more interactions than normal and more when people are in the ghost room",
        "During an event: won't send an airball; prefers showing full form during event; causes double sanity drain on player collision",
      ],
    },
  },
  {
    name: "onryo",
    huntConditions: {
      startingSanityThreshold: 60,
      additionalConditions: [
        "Every third flame blown out (can be prevented by normal methods, e.g. a crucifix), as long as no other flames are around",
      ],
    },
    evidence: [Evidence.Freezing, Evidence.Orb, Evidence.SpiritBox],
    notes: {
      ability: [
        "Blows out flames (candle, lighter, campfire). Ability usage contributes to both preventing and initiating hunts",
        "Can't hunt until all flames in the area (candle, flashlight, campfires) are out",
        "When attempting to hunt and a flame is in the area, the flame is blown out and the hunt fails",
        "Under 60% sanity, the frequency of blown-out flames increases due to the ghost attempting to hunt",
        "Flames blown out during a hunt count towards the three-flame counter",
        "The more players die, the faster candles are blown out",
      ],
      hunt: [],
      evidence: [],
      other: [],
    },
  },
  {
    name: "phantom",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Dots, Evidence.Fingerprints, Evidence.SpiritBox],
    notes: {
      ability: [
        "May pick a player and teleport to it, instead of a normal roam (causes an EMF-2)",
      ],
      hunt: [
        "If photo of ghost is taken during a hunt, the ghost will be invisible in the photo",
        "During hunt, flashes every 1-2 seconds, instead of every 0.3-1 seconds",
      ],
      evidence: [],
      other: [
        "Within 10 meters (roughly the range where a heartbeat is heard), event or hunt, causes extra 0.5%/second sanity drain",
        "If photo is taken during an event: ghost will disappear, electronics work again, heartbeat sound stops, but event sound continues",
      ],
    },
  },
  {
    name: "poltergeist",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Fingerprints, Evidence.Writing, Evidence.SpiritBox],
    notes: {
      ability: [
        "Throws multiple items at once (EMF-2; items are EMF-3). Causes sanity drain equal to number of items thrown times two",
      ],
      hunt: ["During a hunt, throws an item every 0.5 seconds"],
      evidence: [],
      other: ["Throws items more often and with more force"],
    },
  },
  {
    name: "raiju",
    huntConditions: {
      startingSanityThreshold: 50,
      superSanityThresholds: [
        {
          threshold: 65,
          condition: "When near electronic equipment",
        },
      ],
    },
    evidence: [Evidence.Dots, Evidence.Emf, Evidence.Orb],
    notes: {
      ability: [],
      hunt: [
        "During hunt or event, interferes with electronics at greater distance (15m, instead of 10m)",
        "During a hunt, being within 6m/8m/10m (for small/med/large maps) of electronic equipment causes extra speed (2.5m/s)",
      ],
      evidence: [],
      other: [
        "The following do not affect a Raiju: head-mounted cameras; video/photo cameras if thrown (not placed); motion/sound sensors and DOTS if thrown; inventory objects (unless flashlights are on); anything electrical not brought from the van",
      ],
    },
  },
  {
    name: "revenant",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Freezing, Evidence.Orb, Evidence.Writing],
    notes: {
      ability: [],
      hunt: [
        "During a hunt, moves very slowly (1m/s) when no players detected",
        "During a hunt, moves very fast (3m/s) when a player is detected and is near-impossible to run from",
        "When hunting and moving quickly, the ghost moves fast until it reaches the point where it last saw a player",
      ],
      evidence: [],
      other: [],
    },
  },
  {
    name: "shade",
    huntConditions: {
      startingSanityThreshold: 35,
      superSanityThresholds: [
        {
          threshold: -1,
          condition: "Never hunts if any players in the same room",
        },
      ],
    },
    evidence: [Evidence.Emf, Evidence.Freezing, Evidence.Writing],
    notes: {
      ability: [],
      hunt: [],
      evidence: [],
      other: [
        "Less likely to do interactions",
        "A player in the room prevents interactions and hunts, regardless of sanity",
        "Smaller average sanity means more likely to perform events",
        "During events, higher chance of being an airball; if appears, higher chance of appearing as a shadow",
        "If appears because of a cursed possession, has a chance to appear as a black shadow instead of full form",
      ],
    },
  },
  {
    name: "spirit",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Emf, Evidence.SpiritBox, Evidence.Writing],
    notes: {
      ability: [],
      hunt: [],
      evidence: [],
      other: [
        "When smudged, a Spirit won't start a non-cursed hunt for 3 minutes (instead of the normal 90 seconds)",
      ],
    },
  },
  {
    name: "thaye",
    huntConditions: {
      startingSanityThreshold: 75,
      additionalConditions: [
        "Threshold reduces by 6% by year aged (see ability)",
      ],
    },
    evidence: [Evidence.Dots, Evidence.Orb, Evidence.Writing],
    notes: {
      ability: [
        "Attempts to age every 1-2 minutes; if a player is in the room, the Thaye will age; else it waits another 30 seconds to try again",
        "Can age up to ten times per contract",
      ],
      hunt: [
        "Hunting speed is fast when young (2.75 m/s); slows to as low as 1 m/s when old",
      ],
      evidence: [
        `Appears on ${Evidence.Dots.shortName} and ${Evidence.Writing.shortName} more often`,
      ],
      other: [],
    },
  },
  {
    name: "the mimic",
    huntConditions: {
      startingSanityThreshold: "Varies",
      additionalConditions: [
        "Inherits threshold and abilities of mimicked ghost",
      ],
    },
    evidence: [
      Evidence.Fingerprints,
      Evidence.Freezing,
      Evidence.SpiritBox,
      Evidence.FakeOrb,
    ],
    notes: {
      ability: [
        "Changes mimicked ghost type every 30-120 seconds, but not during hunts",
        "Mimics: interaction/event rates and preferences, hunt thresholds and movement speeds, and abilities",
        "If the mimicked ghost has features that modify the same evidence used to find a Mimic, the Mimic will copy the feature (e.g. the Obake's six-fingered handprint)",
        "If a Thaye is mimicked, a random age is selected",
      ],
      hunt: [],
      evidence: [
        'Always shows "fake" orbs in addition to the required evidences, which can be very revealing on difficulties that reduce the amount of evidence provided',
      ],
      other: [],
    },
  },
  {
    name: "the twins",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Emf, Evidence.Freezing, Evidence.SpiritBox],
    notes: {
      ability: [
        "Perform two interactions within 16 meters (25% of EMF-5), which can make it difficult to tell the favorite room",
      ],
      hunt: [
        "When initiating hunt, 50% chance to start at current location (with lower movement speed), and 50% chance to start near the last interaction (faster speed)",
        "Despite the name insinuating two ghosts, two hunts cannot start simultaneously",
      ],
      evidence: [],
      other: [
        "A crucifix check applies to where the ghost is actually standing, even if it wanted to hunt near an interaction",
      ],
    },
  },
  {
    name: "wraith",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Dots, Evidence.Emf, Evidence.SpiritBox],
    notes: {
      ability: [
        "When not hunting, it may teleport near a player (EMF-2; 25% change of EMF-5) before continuing normal behavior",
      ],
      hunt: [],
      evidence: [],
      other: [
        "Never steps in salt or leaves UV footprints, though its appearance doesn't float and it still makes footstep sounds",
        "Placing salt in a summoning circle and summoning the ghost is a good way to spot (or rule out) a Wraith",
      ],
    },
  },
  {
    name: "yokai",
    huntConditions: {
      startingSanityThreshold: 50,
      superSanityThresholds: [
        {
          threshold: 80,
          condition: "When players talk within 2 meters",
        },
      ],
    },
    evidence: [Evidence.Dots, Evidence.Orb, Evidence.SpiritBox],
    notes: {
      ability: [],
      hunt: [
        "When hunting, the radius which it can hear players or equipment is much smaller than normal (2.5 m)",
      ],
      evidence: [],
      other: [
        "Using voice chat near this ghost will increase rate of activity",
        "When using the music box, this ghost must be closer to the player holding the box for the event and cursed hunt",
      ],
    },
  },
  {
    name: "yurei",
    huntConditions: {
      startingSanityThreshold: 50,
    },
    evidence: [Evidence.Dots, Evidence.Freezing, Evidence.Orb],
    notes: {
      ability: [
        "Causes players within 7.5 meters to lose 15% sanity",
        "Same ability also causes a random open door to be closed fully (EMF-2). All ghosts can close doors, but this ghost may do it more than normal",
        "If the room has no open doors, the ability is not used",
        "Lock and closet doors are not affected by this ability, but tent doors can be affected",
      ],
      hunt: [],
      evidence: [],
      other: [
        "When smudged, returns to favorite room and is trapped for 60 seconds",
        "The only ghost who can move/close the front door outside of a hunt",
      ],
    },
  },
];

module.exports = ghosts;
