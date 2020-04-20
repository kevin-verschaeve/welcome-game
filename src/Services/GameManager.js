import { getDeck } from "./DeckManager";

export function newGame() {
  const deck = getDeck();
  const firstRow = deck.splice(deck.length - 3, deck.length);
  const secondRow = deck.splice(deck.length - 3, deck.length);

  return {
    deck,
    firstRow,
    secondRow,
  };
}
