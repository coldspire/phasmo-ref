/**
 * Calculate a string used for a linear-gradient property from provided colors
 * @param {string[]} colors
 * @return string
 */
function calculateBackgroundImageGradient(colors) {
  const gradientAngle = "90deg";

  if (colors.length === 1) {
    return `${gradientAngle}, ${colors[0]}, ${colors[0]}`;
  }

  return colors.reduce(
    (colorsSoFar, nextColor) => `${colorsSoFar}, ${nextColor}`,
    `${gradientAngle}`
  );
}

/**
 * Calculate a string used for a border color from provided colors
 * @param {string[]} colors
 * @return string
 */
function calculateMixedBorderColor(colors) {
  const mixColors = colors.reduce(
    (colorsSoFar, nextColor) => `${colorsSoFar}, ${nextColor}`
  );

  return `color-mix(in lch, ${mixColors}, black 15%)`;
}

/**
 * Calculate a string for a fade color for a card.
 * A fade can only be one color, so an array of colors is replaced with a neutral gray.
 * @param {string[]} colors
 * @return string
 */
function calculateCardFadeColor(colors) {
  const fadeColor = colors.length === 1 ? colors[0] : "black";

  return `color-mix(in xyz, ${fadeColor}, white 75%)`;
}

/**
 * A Tarot card
 */
class Card {
  /**
   * @return string
   */
  get drawChanceOneInX() {
    return `1 in ${this.drawChangeOneInXValue}`;
  }

  /**
   *
   * @param {string} name
   * @param {string} effect
   * @param {string} burnColorInGame
   * @param {string[]} burnColorCssColors
   * @param {number} drawChancePct
   * @param {string[]} notes = []
   */
  constructor(
    name,
    effect,
    burnColorInGame,
    burnColorCssColors,
    drawChancePct,
    notes = []
  ) {
    this.name = name;
    this.effect = effect;
    this.burnColor = {
      inGame: burnColorInGame,
      css: {
        background: calculateBackgroundImageGradient(burnColorCssColors),
        border: calculateMixedBorderColor(burnColorCssColors),
        fade: calculateCardFadeColor(burnColorCssColors),
      },
    };
    this.drawChancePct = drawChancePct;
    this.drawChangeOneInXValue = Math.round(100 / this.drawChancePct);
    this.notes = [...notes];
  }
}

/**
 * Primary list of Tarot cards.
 * @type { { name: string, hasThePrefix: boolean, effect: string, burnColor: { inGame: string, cssColor: string }, drawChance: string, drawChanceOneIn: function, notes: string[] }[] }
 */
const cards = [
  new Card("tower", "Cause interactions", "blue", ["#0080ee"], 20, [
    "Double ghost activity for 20 seconds",
  ]),
  new Card(
    "wheel of fortune",
    "Sanity change: Gain 25% if burns green; lose 25% if burns red",
    "green or red",
    ["#00dd00", "#a5b800", "#e18700", "#ff4714"],
    20
  ),
  new Card("sun", "Refill sanity to 100%", "yellow", ["#ffd700"], 20, [
    "Decrease hunt chances",
  ]),
  new Card("moon", "Drop sanity to 0%", "grey", ["#cccccc"], 20, [
    "Increase hunt chances",
  ]),
  new Card("devil", "Trigger a ghost event", "pink", ["#f25277"], 10, [
    "Event is directed at player nearest to the ghost",
  ]),
  new Card(
    "hermit",
    "Teleport and trap ghost in favorite room for 60 seconds",
    "cyan",
    ["#53e1e6"],
    10,
    ["No effect on hunts"]
  ),
  new Card(
    "high priestess",
    "Revive a random dead player",
    "light yellow",
    ["#fce883"],
    2,
    [
      "If no-one is dead, the respawn is banked (limit one)",
      "Playing solo means you gain an extra life",
      "The same player cannot be revived twice",
    ]
  ),
  new Card("hanged man", "Card-drawer dies", "none", ["#888", "black"], 1),
  new Card("death", "Start a cursed hunt", "dark purple", ["#8400c3"], 10),
  new Card("fool", "No effect", "light purple", ["#ba48e0"], 17, [
    "A drawn card turns into the Fool when burning",
  ]),
];

module.exports = cards;
