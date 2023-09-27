const cardValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const cardSuits = ["♥", "♦", "♣", "♠"];

const getDeck = () => {
  const deck = [];
  cardValues.forEach((cardValues, cardValuePosition) => {
    cardSuits.forEach((cardSuits) => {
      deck.push({
        cardNumber: cardValues,
        suit: cardSuits,
        value: cardValuePosition,
      });
    });
  });
  return deck;
};
