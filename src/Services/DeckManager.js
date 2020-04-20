export const getDeck = () => {
  const numberCards = [
    {value: 1, nb: 3},
    {value: 2, nb: 3},
    {value: 14, nb: 3},
    {value: 15, nb: 3},
    {value: 3, nb: 4},
    {value: 13, nb: 4},
    {value: 4, nb: 5},
    {value: 12, nb: 5},
    {value: 5, nb: 6},
    {value: 11, nb: 6},
    {value: 6, nb: 7},
    {value: 10, nb: 7},
    {value: 7, nb: 8},
    {value: 9, nb: 8},
    {value: 8, nb: 9},
  ];

  const actionCards = [
    {action: 'pool', nb: 9},
    {action: 'interim', nb: 9},
    {action: 'bis', nb: 9},
    {action: 'landscaper', nb: 18},
    {action: 'estate_agent', nb: 18},
    {action: 'geometer', nb: 18},
  ];


  const deck = [];
  let randomCard, i, n;

  for (n of numberCards) {
    i = 1;
    for (i; i <= n.nb; i++) {
      randomCard = getRandomAction(actionCards);

      deck.push({value: n.value, action: randomCard.action});
      --randomCard.nb;
    }
  }

  shuffle(deck);

  return deck;
};

const getRandomAction = (actionCards) => {
  const cards = actionCards.filter((c) => c.nb > 0);

  return cards[Math.floor(Math.random() * cards.length)];
};

const shuffle = (deck) => {
  let location1, location2, tmp, i = 0;
  for (i; i < 1000; i++) {
    location1 = Math.floor((Math.random() * deck.length));
    location2 = Math.floor((Math.random() * deck.length));
    tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
};
