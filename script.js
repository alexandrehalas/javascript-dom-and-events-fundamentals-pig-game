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

const hasWinner = function () {
  return scores[activePlayer] >= 100;
};

const finishGame = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  playing = false;
  hideDice();
};

// starting conditions

score0Element.textContent = 0;
score1Element.textContent = 0;
hideDice();

// variables

let playing = true;
let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0];

// buttons

btnRoll.addEventListener('click', function () {
  if (!playing) {
    return;
  }
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
  if (!playing) {
    return;
  }
  increaseScore();
  if (hasWinner()) {
    finishGame();
  }
  resetCurrentScore();
  switchPlayer();
});
