'use strict';

// elements

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const currentScore0Element = document.querySelector('#current--0');
const currentScore1Element = document.querySelector('#current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// functions

const hideDice = function () {
  diceElement.classList.add('hidden');
};

const generateRandomDiceRoll = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const displayDice = function (diceNumber) {
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${diceNumber}.png`;
};

const increaseCurrentScore = function (diceNumber) {
  currentScore += diceNumber;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

const resetCurrentScore = function () {
  currentScore = 0;
  increaseCurrentScore(0);
};

const increaseScore = function () {
  debugger;
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
};

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// starting conditions

score0Element.textContent = 0;
score1Element.textContent = 0;
hideDice();

// variables

let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0];

// buttons

btnRoll.addEventListener('click', function () {
  const diceNumber = generateRandomDiceRoll();
  displayDice(diceNumber);
  if (diceNumber !== 1) {
    increaseCurrentScore(diceNumber);
  } else {
    resetCurrentScore();
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  increaseScore();
  resetCurrentScore();
  switchPlayer();
});
