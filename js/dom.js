const gameContainer = document.querySelector(".main-container");
const greaterButton = document.querySelector(".greater-button");
const smallerButton = document.querySelector(".smaller-button");
const startButton = document.querySelector(".start-button");
const gameCard = document.querySelector(".game-card");

startButton.addEventListener("click", () => {
  upwardsRandomCard = getRandomCard();
  reverseRandomCard = getRandomCard();

  startButton.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  gameCard.classList.add("card-reverse");
  gameCard.classList.remove("card-upwards");
});
