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
  Prison: 5,
  Ridgeview: 6,
  SunnyMeadows: 7,
  Tanglewood: 8,
  Willow: 9,
  Woodwind: 10,
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
      [CursedPossession.MonkeyPaw]: "Dining room, in dish cabinet",
      [CursedPossession.MusicBox]: "Nursery, on shelf just inside door",
      [CursedPossession.OuijaBoard]: "Basement, on table at far end",
      [CursedPossession.SummoningCircle]: "Basement",
      [CursedPossession.TarotCards]: "Living room, on end table by the window",
      [CursedPossession.VoodooDoll]: "Garage, on top of trash can",
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
      [CursedPossession.HauntedMirror]: "Office wall",
      [CursedPossession.MonkeyPaw]: "Master bedroom, on top of chest",
      [CursedPossession.MusicBox]: "Living room, table with lamp",
      [CursedPossession.OuijaBoard]: "Garage workbench",
      [CursedPossession.SummoningCircle]: "Attic",
      [CursedPossession.TarotCards]: "Office table",
      [CursedPossession.VoodooDoll]: "Upstairs hallway couch",
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
        "Living room, on wall next to kitchen door",
      [CursedPossession.MonkeyPaw]: "Twin bedroom table",
      [CursedPossession.MusicBox]: "Foyer shelf",
      [CursedPossession.OuijaBoard]: "Master bedroom closet",
      [CursedPossession.SummoningCircle]: "Storage area",
      [CursedPossession.TarotCards]: "Dining room table",
      [CursedPossession.VoodooDoll]: "Nursery chest",
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
};

export default locations;
