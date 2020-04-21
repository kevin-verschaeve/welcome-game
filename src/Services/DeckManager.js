const allCards = [
  {value: 1, action: "estate_agent"},
  {value: 1, action: "geometer"},
  {value: 1, action: "landscaper"}, 
  {value: 2, action: "estate_agent"},
  {value: 2, action: "geometer"},
  {value: 2, action: "landscaper"},  
  {value: 3, action: "bis"},  
  {value: 3, action: "pool"},  
  {value: 3, action: "geometer"},
  {value: 3, action: "interim"},
  {value: 4, action: "bis"},
  {value: 4, action: "interim"},
  {value: 4, action: "pool"},
  {value: 4, action: "estate_agent"},
  {value: 4, action: "landscaper"},
  {value: 5, action: "landscaper"},
  {value: 5, action: "landscaper"},
  {value: 5, action: "geometer"},
  {value: 5, action: "geometer"},
  {value: 5, action: "estate_agent"},
  {value: 5, action: "estate_agent"},
  {value: 6, action: "pool"},
  {value: 6, action: "interim"},
  {value: 6, action: "bis"},
  {value: 6, action: "landscaper"},
  {value: 6, action: "estate_agent"},
  {value: 6, action: "geometer"},
  {value: 6, action: "geometer"},
  {value: 7, action: "estate_agent"},
  {value: 7, action: "estate_agent"},
  {value: 7, action: "landscaper"},
  {value: 7, action: "landscaper"},
  {value: 7, action: "geometer"},
  {value: 7, action: "pool"},
  {value: 7, action: "bis"},
  {value: 7, action: "interim"},
  {value: 8, action: "landscaper"},
  {value: 8, action: "landscaper"},
  {value: 8, action: "estate_agent"},
  {value: 8, action: "estate_agent"},
  {value: 8, action: "geometer"},
  {value: 8, action: "geometer"},
  {value: 8, action: "pool"},
  {value: 8, action: "bis"},
  {value: 8, action: "interim"},
  {value: 9, action: "estate_agent"}, 
  {value: 9, action: "estate_agent"}, 
  {value: 9, action: "landscaper"}, 
  {value: 9, action: "landscaper"}, 
  {value: 9, action: "interim"}, 
  {value: 9, action: "geometer"}, 
  {value: 9, action: "bis"}, 
  {value: 9, action: "pool"}, 
  {value: 10, action: "landscaper"}, 
  {value: 10, action: "interim"}, 
  {value: 10, action: "geometer"}, 
  {value: 10, action: "geometer"}, 
  {value: 10, action: "bis"}, 
  {value: 10, action: "pool"}, 
  {value: 10, action: "estate_agent"}, 
  {value: 11, action: "landscaper"},
  {value: 11, action: "landscaper"},
  {value: 11, action: "geometer"},
  {value: 11, action: "geometer"},
  {value: 11, action: "estate_agent"},
  {value: 11, action: "estate_agent"},
  {value: 12, action: "landscaper"}, 
  {value: 12, action: "interim"}, 
  {value: 12, action: "bis"}, 
  {value: 12, action: "pool"}, 
  {value: 12, action: "estate_agent"}, 
  {value: 13, action: "geometer"}, 
  {value: 13, action: "interim"}, 
  {value: 13, action: "bis"}, 
  {value: 13, action: "pool"},
  {value: 14, action: "estate_agent"},
  {value: 14, action: "geometer"},
  {value: 14, action: "landscaper"},  
  {value: 15, action: "estate_agent"},
  {value: 15, action: "geometer"},
  {value: 15, action: "landscaper"},    
]

export const getDeck = () => {
  const deck = [];
  let randomCard, n;

  for (n of allCards) {
    deck.push({value: n.value, action: n.action});
  }

  shuffle(deck);

  return deck;
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
