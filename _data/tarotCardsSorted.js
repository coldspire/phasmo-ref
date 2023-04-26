const cards = require("./tarotCards");

/**
 * A sorted set of cards.
 * @typedef { { sortName: { slug: string, friendly: string }, cards: object[] } } SortedCards
 */

/**
 * @type {SortedCards}
 */
const cardsByAlphaAsc = {
  sortName: {
    slug: "alpha-asc",
    friendly: "alphabetically, ascending",
  },
  cards: [...cards].sort((cardA, cardB) =>
    cardA.name.localeCompare(cardB.name)
  ),
};

/**
 * @type {SortedCards}
 */
const cardsByAlphaDesc = {
  sortName: {
    slug: "alpha-desc",
    friendly: "alphabetically, descending",
  },
  cards: [...cardsByAlphaAsc.cards].reverse(),
};

/**
 * @type {SortedCards}
 */
const cardsByDrawFreqAsc = {
  sortName: {
    slug: "draw-freq-asc",
    friendly: "draw-frequency, ascending",
  },
  cards: [...cardsByAlphaAsc.cards].sort((cardA, cardB) => {
    if (cardA.drawChancePct > cardB.drawChancePct) {
      return 1;
    }

    if (cardA.drawChancePct < cardB.drawChancePct) {
      return -1;
    }

    return 0;
  }),
};

/**
 * @type {SortedCards}
 */
const cardsByDrawFreqDesc = {
  sortName: {
    slug: "draw-freq-desc",
    friendly: "draw-frequency, descending",
  },
  cards: [...cardsByDrawFreqAsc.cards].reverse(),
};

const cardsSorted = [
  cardsByAlphaAsc,
  cardsByAlphaDesc,
  cardsByDrawFreqAsc,
  cardsByDrawFreqDesc,
];

module.exports = cardsSorted;
