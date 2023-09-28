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
        value: cardValuePosition + 2,
      });
    });
  });

  return deck;
};

const getRandomCard = () => {
  const randomCard = Math.floor(Math.random() * getDeck().length);

  return getDeck()[randomCard];
};

const gameContainer = document.querySelector(".main-container");
const greaterButton = document.querySelector(".greater-button");
const smallerButton = document.querySelector(".smaller-button");
const startButton = document.querySelector(".start-button");
const gameCard = document.querySelector(".game-card");

startButton.addEventListener("click", () => {
  startButton.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  gameCard.classList.add("card-reverse");
  gameCard.classList.remove("card-upwards");
});

const showGameCard = () => {
  let card = getRandomCard();
  const cardNumber = document.querySelector(".number");
  const cornerSuitTop = document.querySelector(".user-span-suit");
  const cornerSuitBottom = document.querySelector(".bottom-suit");

  cardNumber.textContent = card.value;

  cornerSuitTop.textContent = card.suit;

  cornerSuitBottom.textContent = card.suit;
};

showGameCard();
