'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const widthNumber = width => {
  document.querySelector('.number').style.width = width;
};

const backgroundColorBody = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const displaySecretNumber = number => {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', _ => {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('No number!');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct number!');
    backgroundColorBody('#60b347');
    widthNumber('30rem');
    displaySecretNumber(secretNumber);
    if (score > document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', _ => {
  displaySecretNumber('?');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore((score = 20));
  backgroundColorBody('#222');
  widthNumber('15rem');
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
