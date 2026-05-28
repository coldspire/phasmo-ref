/**
 * Map sizes.
 * @readonly
 * @enum {number}
 */
const MapSize = {
  Small: 0,
  Medium: 1,
  Large: 2,
};

/**
 * Cursed possessions
 * @readonly
 * @enum {string}
 */
const CursedPossession = {
  HauntedMirror: "Haunted mirror",
  MonkeyPaw: "Monkey paw",
  MusicBox: "Music box",
  OuijaBoard: "Ouija board",
  SummoningCircle: "Summoning circle",
  TarotCards: "Tarot cards",
  VoodooDoll: "Voodoo doll",
};

/**
 * Location names
 * @readonly
 * @enum {number}
 */
const LocationNames = {
  Bleasdale: 0,
  Brownstone: 1,
  Edgefield: 2,
  Grafton: 3,
  MapleLodge: 4,
  Nells: 5,
  PointHope: 6,
  Prison: 7,
  Ridgeview: 8,
  SunnyMeadows: 9,
  Tanglewood: 10,
  Willow: 11,
  Woodwind: 12,
};

/**
 * @typedef {Object} Location
 * @property {string} name
 * @property {string} nameShort
 * @property {number} mapSize
 * @property {Object.<CursedPossession, string>} possessionLocations
 */

/** @typedef {Object.<Location>} Locations
 */

/**
 * @type Locations
 */
const locations = {
  [LocationNames.Tanglewood]: {
    name: "6 Tanglewood Drive",
    shortName: "Tanglewood",
    mapSize: MapSize.Small,
    possessionLocations: {
      [CursedPossession.HauntedMirror]:
        "On wall outside door to master bedroom",
      [CursedPossession.MonkeyPaw]: "Garage, on top of fertilizer bag",
      [CursedPossession.MusicBox]: "Master bedroom closet, next to safe",
      [CursedPossession.OuijaBoard]: "Basement, under train table at far end",
      [CursedPossession.SummoningCircle]:
        "Basement, far side next to workbenches",
      [CursedPossession.TarotCards]: "Living room, on end table by the window",
      [CursedPossession.VoodooDoll]:
        "Nancy's room, on floor in front of big stuffed bear",
    },
  },
  [LocationNames.Ridgeview]: {
    name: "10 Ridgeview Court",
    shortName: "Ridgeview",
    mapSize: MapSize.Small,
    possessionLocations: {
      [CursedPossession.HauntedMirror]:
        "On wall above lamp opposite basement door",
      [CursedPossession.MonkeyPaw]: "Boys bedroom, table",
      [CursedPossession.MusicBox]: "Girls bedroom, table next to entry door",
      [CursedPossession.OuijaBoard]: "Utility room shelf",
      [CursedPossession.SummoningCircle]: "Basement",
      [CursedPossession.TarotCards]: "Table next to house entry door",
      [CursedPossession.VoodooDoll]: "Piano room, bench next to piano",
    },
  },
  [LocationNames.Willow]: {
    name: "13 Willow Street",
    shortName: "Willow",
    mapSize: MapSize.Small,
    possessionLocations: {
      [CursedPossession.HauntedMirror]:
        "Garage, corner of utility section on the floor",
      [CursedPossession.MonkeyPaw]: "Hallway cabinet",
      [CursedPossession.MusicBox]: "Table next to house entry door",
      [CursedPossession.OuijaBoard]:
        "Garage, on top of washing machine and dryer",
      [CursedPossession.SummoningCircle]: "Basement hallway",
      [CursedPossession.TarotCards]: "Living room, end table next to couch",
      [CursedPossession.VoodooDoll]: "Boys bedroom cabinet",
    },
  },
  [LocationNames.Edgefield]: {
    name: "42 Edgefield Road",
    shortName: "Edgefield",
    mapSize: MapSize.Small,
    possessionLocations: {
      [CursedPossession.HauntedMirror]:
        "On wall in front of stairs leading to second floor",
      [CursedPossession.MonkeyPaw]: "Nursery, top of blue dresser",
      [CursedPossession.MusicBox]: "Living room, table with lamp",
      [CursedPossession.OuijaBoard]: "Utility room, on floor under metal rack",
      [CursedPossession.SummoningCircle]: "Basement, back of the back room ",
      [CursedPossession.TarotCards]: "Foyer table",
      [CursedPossession.VoodooDoll]: "Large blue bedroom, bed",
    },
  },
  [LocationNames.Bleasdale]: {
    name: "Bleasdale Farmhouse",
    shortName: "Bleasdale",
    mapSize: MapSize.Small,
    possessionLocations: {
      [CursedPossession.HauntedMirror]:
        "Trophy room, back corner cabinet on floor",
      [CursedPossession.MonkeyPaw]: "Study, bookshelf in corner",
      [CursedPossession.MusicBox]: "Tea room shelf",
      [CursedPossession.OuijaBoard]:
        "Living room, next to one of the couches, facing the fireplace",
      [CursedPossession.SummoningCircle]: "Utility room",
      [CursedPossession.TarotCards]: "Attic bedroom table",
      [CursedPossession.VoodooDoll]: "Primary bedroom, front of the bed",
    },
  },
  [LocationNames.Woodwind]: {
    name: "Camp Woodwind",
    shortName: "Woodwind",
    mapSize: MapSize.Small,
    possessionLocations: {
      [CursedPossession.HauntedMirror]:
        "Leaning on tree with string lights near campfire",
      [CursedPossession.MonkeyPaw]:
        "Lovers Bench, left side next to marshmallow sticks",
      [CursedPossession.MusicBox]: "Yellow tent, inside",
      [CursedPossession.OuijaBoard]: "Games tent",
      [CursedPossession.SummoningCircle]: "Food tent",
      [CursedPossession.TarotCards]: "Picnic area table",
      [CursedPossession.VoodooDoll]: "Outside cyan tent next to the red tent",
    },
  },
  [LocationNames.Grafton]: {
    name: "Grafton Farmhouse",
    shortName: "Grafton",
    mapSize: MapSize.Small,
    possessionLocations: {
      [CursedPossession.HauntedMirror]:
        "Master bedroom, on dresser across from entry door",
      [CursedPossession.MonkeyPaw]: "Dining room, on dresser next to fireplace",
      [CursedPossession.MusicBox]: "Twin bedroom, nightstand",
      [CursedPossession.OuijaBoard]:
        "Attic, towards the back under a tall lamp",
      [CursedPossession.SummoningCircle]: "Child's bedroom",
      [CursedPossession.TarotCards]:
        "Library, left side, on table with typewriter",
      [CursedPossession.VoodooDoll]: "Mannequins room, on work table",
    },
  },
  [LocationNames.Brownstone]: {
    name: "Brownstone High School",
    shortName: "Brownstone",
    mapSize: MapSize.Large,
    possessionLocations: {
      [CursedPossession.HauntedMirror]: "Lobby, behind right column",
      [CursedPossession.MonkeyPaw]: "Lobby, on box in front of right column",
      [CursedPossession.MusicBox]: "Lobby, on bench along right wall",
      [CursedPossession.OuijaBoard]: "Lobby, behind left column",
      [CursedPossession.SummoningCircle]: "Lobby, end of the lobby",
      [CursedPossession.TarotCards]: "Lobby, on bench along left wall",
      [CursedPossession.VoodooDoll]: "Lobby, bench at the end of the lobby",
    },
  },
  [LocationNames.MapleLodge]: {
    name: "Maple Lodge Campsite",
    shortName: "Maple Lodge",
    mapSize: MapSize.Medium,
    possessionLocations: {
      [CursedPossession.HauntedMirror]: "Blue tent, inside",
      [CursedPossession.MonkeyPaw]: "Pier, on teal chair",
      [CursedPossession.MusicBox]: "Cabin, outside on porch on metal table",
      [CursedPossession.OuijaBoard]: "Cleaning closet shelf",
      [CursedPossession.SummoningCircle]: "Cabin kitchen",
      [CursedPossession.TarotCards]:
        "White tent, outside on table to left of tent",
      [CursedPossession.VoodooDoll]: "Campfire besides wine bottle",
    },
  },
  [LocationNames.SunnyMeadows]: {
    name: "Sunny Meadows Mental Institution",
    shortName: "Sunny Meadows",
    mapSize: MapSize.Large,
    possessionLocations: {
      [CursedPossession.HauntedMirror]: "Chapel in front of large crucifix",
      [CursedPossession.MonkeyPaw]: "Chapel in front of large crucifix",
      [CursedPossession.MusicBox]: "Chapel in front of large crucifix",
      [CursedPossession.OuijaBoard]: "Chapel in front of large crucifix",
      [CursedPossession.SummoningCircle]: "Chapel in front of large crucifix",
      [CursedPossession.TarotCards]: "Chapel in front of large crucifix",
      [CursedPossession.VoodooDoll]: "Chapel in front of large crucifix",
    },
  },
  [LocationNames.Prison]: {
    name: "Prison",
    shortName: "Prison",
    mapSize: MapSize.Medium,
    possessionLocations: {
      [CursedPossession.HauntedMirror]: "Lobby, under row of chairs",
      [CursedPossession.MonkeyPaw]:
        "Lobby, next to blue crate on table inside front door",
      [CursedPossession.MusicBox]:
        "Lobby, in black crate on table inside front door",
      [CursedPossession.OuijaBoard]:
        "Lobby, underneath table with creates inside front door",
      [CursedPossession.SummoningCircle]: "Lobby, end of hallway",
      [CursedPossession.TarotCards]:
        "Lobby, in blue crate on table inside front door",
      [CursedPossession.VoodooDoll]:
        "Lobby, between crates on table inside front door",
    },
  },
  [LocationNames.PointHope]: {
    name: "Point Hope",
    shortName: "Point Hope",
    mapSize: MapSize.Medium,
    possessionLocations: {
      [CursedPossession.HauntedMirror]:
        "Dining floor, leaning against cabinet at far end of dining table",
      [CursedPossession.MonkeyPaw]: "Maintenance floor, on work table",
      [CursedPossession.MusicBox]: "Master bedroom, on vanity near entry door",
      [CursedPossession.OuijaBoard]:
        "Leisure floor, in floor shelves on side away from entry",
      [CursedPossession.SummoningCircle]: "Bathroom floor",
      [CursedPossession.TarotCards]: "Living room, on side table facing TV",
      [CursedPossession.VoodooDoll]: "Child's bedroom, on dresser",
    },
  },
  [LocationNames.Nells]: {
    name: "Nell's Diner",
    shortName: "Nell's",
    mapSize: MapSize.Small,
    possessionLocations: {
      [CursedPossession.HauntedMirror]:
        "Break room, chair on far side of vending machine",
      [CursedPossession.MonkeyPaw]:
        "Kitchen, on cutting board on edge of work island closest to entry doors",
      [CursedPossession.MusicBox]:
        "Manager's office, on table just inside door",
      [CursedPossession.OuijaBoard]:
        "Janitor's closet, on top of cardboard box next to shelves",
      [CursedPossession.SummoningCircle]: "Men's bathroom (back bathroom)",
      [CursedPossession.TarotCards]:
        "Counter area, behind counter next to register",
      [CursedPossession.VoodooDoll]:
        "Diner area, second-to-last booth on the left",
    },
  },
};

export default locations;
