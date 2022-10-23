"use strict";
const luckyNumber = document.querySelector(".luckyNumber");
const guessInput = document.querySelector(".guessInput");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const hints = document.querySelector(".hints");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

// Setting random numbers
let myLuckyNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(myLuckyNumber);

// Setting score number
let scoreNumber = 10;

// CHECK CLICK
check.addEventListener("click", () => {
  // Reducing score numbers
  scoreNumber--;
  score.textContent = scoreNumber;
  //   console.log(scoreNumber);

  // showing guess number
  const guessNumber = Number(guessInput.value);
  luckyNumber.textContent = guessNumber;

  // checking guess number conditions
  if (myLuckyNumber === guessNumber) {
    hints.textContent = "It's Correct Number, You Win!";
    hints.classList.remove("hintsRed");
    highscore.textContent = scoreNumber;
    check.classList.add("d-none");
    again.classList.remove("d-none");
  } else if (guessNumber === 0) {
    hints.textContent = "Pls, enter a value!";
    hints.classList.add("hintsRed");
    if (scoreNumber < 0) {
      outOfScores();
    }
  } else if (myLuckyNumber > guessNumber) {
    hints.textContent = "It's too low!";
    hints.classList.add("hintsRed");
    if (scoreNumber < 0) {
      outOfScores();
    }
  } else if (myLuckyNumber < guessNumber) {
    hints.textContent = "It's too high!";
    hints.classList.add("hintsRed");
    if (scoreNumber < 0) {
      outOfScores();
    }
  }
});

// Out of scores condition
const outOfScores = () => {
  hints.textContent = "Game Over, you're out of scores!";
  score.textContent = "-";
  check.classList.add("d-none");
  again.classList.remove("d-none");
};

// AGAIN CLICK
again.addEventListener("click", () => {
  luckyNumber.textContent = "??";
  hints.textContent = "Guess number between 0 and 20!";
  hints.classList.remove("hintsRed");
  guessInput.value = "";
  check.classList.remove("d-none");
  again.classList.add("d-none");
  // Comparing highscore and score
  const previousHighscore = highscore.textContent;
  highscore.textContent =
    previousHighscore < scoreNumber ? scoreNumber : previousHighscore;
  // resetting score into 10 again
  scoreNumber = 10;
  score.textContent = scoreNumber;
  // resetting lucky number again
  myLuckyNumber = Math.trunc(Math.random() * 20 + 1);
  // console.log(myLuckyNumber);
});
