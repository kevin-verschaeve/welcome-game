import { getDeck } from "./DeckManager";

export function newGame(withPlans = true) {
  const deck = getDeck();
  const firstRow = deck.splice(deck.length - 3, deck.length);
  const secondRow = deck.splice(deck.length - 3, deck.length);

  if (!withPlans) {
    return {
      deck,
      firstRow,
      secondRow
    };
  }

  const plans = [
    {objective: Math.floor(Math.random() * 5) + 1, done: false, level: 1},
    {objective: Math.floor(Math.random() * 5) + 1, done: false, level: 2},
    {objective: Math.floor(Math.random() * 5) + 1, done: false, level: 3},
  ];

  return {
    deck,
    firstRow,
    secondRow,
    plans,
  };
}
