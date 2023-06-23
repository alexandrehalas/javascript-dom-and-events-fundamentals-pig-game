'use strict';

// elements

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

const increaseScore = function (activePlayer, diceNumber) {
  currentScore += diceNumber;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

// starting conditions

score0Element.textContent = 0;
score1Element.textContent = 0;
hideDice();

let activePlayer = 0;
let currentScore = 0;

// buttons

btnRoll.addEventListener('click', function () {
  const diceNumber = generateRandomDiceRoll();
  displayDice(diceNumber);
  if (diceNumber !== 1) {
    increaseScore(activePlayer, diceNumber);
  }
});
