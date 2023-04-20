/**
 * Primary list of Tarot cards.
 * @type { { name: string, hasThePrefix: boolean, effect: string, burnColor: { inGame: string, cssColor: string }, drawChance: string, notes: string[] }[] }
 */
const cards = [
  {
    name: "tower",
    hasThePrefix: true,
    effect: "Causes interaction",
    burnColor: {
      inGame: "blue",
      cssColor: "#0080ee",
    },
    drawChance: "1 in 5 (20%)",
    notes: ["Doubles ghost activity for 20 seconds"],
  },
  {
    name: "wheel of fortune",
    hasThePrefix: true,
    effect: "25% sanity gain if burns green; 25% sanity loss if burns red",
    burnColor: {
      inGame: "green or red",
      cssColor: "#00dd00 #ff4714 #ff4714 #00dd00",
    },
    drawChance: "1 in 5 (20%)",
    notes: [],
  },
  {
    name: "sun",
    hasThePrefix: true,
    effect: "Refill sanity to 100%",
    burnColor: {
      inGame: "yellow",
      cssColor: "#ffd700",
    },
    drawChance: "1 in 20 (5%)",
    notes: ["Decreases hunt chances"],
  },
  {
    name: "moon",
    hasThePrefix: true,
    effect: "Drop sanity to 0%",
    burnColor: {
      inGame: "grey",
      cssColor: "gainsboro",
    },
    drawChance: "1 in 20 (5%)",
    notes: ["Increases hunt chances"],
  },
  {
    name: "devil",
    hasThePrefix: true,
    effect: "Triggers a ghost event",
    burnColor: {
      inGame: "pink",
      cssColor: "#f25277",
    },
    drawChance: "1 in 10 (10%)",
    notes: ["Ghost event is directed at player nearest to the ghost"],
  },
  {
    name: "hermit",
    hasThePrefix: true,
    effect: "Teleports and traps ghost in favorite room for 60 seconds",
    burnColor: {
      inGame: "cyan",
      cssColor: "#53e1e6",
    },
    drawChance: "1 in 10 (10%)",
    notes: ["No effect on hunts"],
  },
  {
    name: "high priestess",
    hasThePrefix: true,
    effect: "Revive a random dead player",
    burnColor: {
      inGame: "light yellow",
      cssColor: "#FCE883",
    },
    drawChance: "1 in 50 (2%)",
    notes: [
      "If no-one is dead, the respawn is banked (limit one)",
      "Playing solo means you gain an extra life",
      "The same player cannot be revived twice",
    ],
  },
  {
    name: "hanged man",
    hasThePrefix: true,
    effect: "Instant death of the card-drawer",
    burnColor: {
      inGame: "none",
      cssColor: "black",
    },
    drawChance: "1 in 100 (1%)",
  },
  {
    name: "death",
    hasThePrefix: false,
    effect: "Starts a cursed hunt",
    burnColor: {
      inGame: "dark purple",
      cssColor: "#8400c3",
    },
    drawChance: "1 in 10 (10%)",
    notes: [],
  },
  {
    name: "fool",
    hasThePrefix: true,
    effect: "No effect",
    burnColor: {
      inGame: "light purple",
      cssColor: "#ba48e0",
    },
    drawChance: "1 in 17 normally; always during a hunt",
    notes: ["A drawn card turns into the Fool when burning"],
  },
];

module.exports = cards;
