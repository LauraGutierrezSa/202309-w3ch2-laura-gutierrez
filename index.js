const gameContainer = document.querySelector(".main-container");
const greaterButton = document.querySelector(".greater-button");
const smallerButton = document.querySelector(".smaller-button");
const startButton = document.querySelector(".start-button");
const gameCard = document.querySelector(".game-card");
const playerCard = document.querySelector(".current-card");
const gameTopSuit = document.querySelector(".game-span-suit");
const gameNumber = document.querySelector(".game-card-number");
const gameBottomSuit = document.querySelector(".bottom-game-suit");
const resultMessage = document.querySelector(".result-message");

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

startButton.addEventListener("click", () => {
  startButton.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  generatePlayerCard();
  generateGameCard();
});

const generatePlayerCard = () => {
  let playerCard = getRandomCard();
  const cardNumber = document.querySelector(".number");
  const cornerSuitTop = document.querySelector(".user-span-suit");
  const cornerSuitBottom = document.querySelector(".bottom-suit");

  cardNumber.textContent = playerCard.value;

  cornerSuitTop.textContent = playerCard.suit;

  cornerSuitBottom.textContent = playerCard.suit;

  return playerCard;
};

const generateGameCard = () => {
  let gameCard = getRandomCard();
  const cardNumber = document.querySelector(".game-card-number");
  const cornerSuitTop = document.querySelector(".game-span-suit");
  const cornerSuitBottom = document.querySelector(".bottom-game-suit");

  cardNumber.textContent = gameCard.value;

  cornerSuitTop.textContent = gameCard.suit;

  cornerSuitBottom.textContent = gameCard.suit;

  return gameCard;
};
const compareCardsValue = () => {
  if (playerCard.value < gameCard.value) {
    return true;
  } else {
    return false;
  }
};

greaterButton.addEventListener("click", () => {
  gameTopSuit.classList.remove("hidden");
  gameBottomSuit.classList.remove("hidden");
  gameNumber.classList.remove("hidden");
  gameCard.classList.remove("card-reverse");
  gameCard.classList.add("card-upwards");

  if (compareCardsValue() === true) {
    resultMessage.textContent = "Oh no :( you were wrong 🎻😔";
  } else {
    resultMessage.textContent = "Hell yeah! You were right 😎👍";
  }
});

smallerButton.addEventListener("click", () => {
  gameTopSuit.classList.remove("hidden");
  gameBottomSuit.classList.remove("hidden");
  gameNumber.classList.remove("hidden");
  gameCard.classList.remove("card-reverse");
  gameCard.classList.add("card-upwards");

  if (compareCardsValue() === false) {
    resultMessage.textContent = "Hell yeah! You were right 😎👍";
  } else {
    resultMessage.textContent = "Oh no :( you were wrong 🎻😔";
  }
});
