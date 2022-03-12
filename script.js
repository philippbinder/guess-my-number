'use strict';

// console.log(
//   'querySelector message.textContent:',
//   document.querySelector('.message').textContent
// );
// // selects like in CSS - 1) gets the element with the class message 2) gets the textContent property
// document.querySelector('.message').textContent = '🎉 Correct number!';

// Create Number between 1 and 20 without decimals
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret number:', secretNumber);

let scoreNumber = 20;

// select the button where part of the class name is "check" &
// add an event listener for clicking on the element & handle the reaction with a function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log('typeof guess:', typeof guess);
  console.log('guess value:', document.querySelector('.guess').value);

  // No input in the input field: Valuie will be 0 & 0 is fasly -> fullfills !guess
  // Change CSS when game ends - Style changes are applied as an inline style!

  // When there is no input by the player
  if (!guess) {
    document.querySelector('.message').textContent =
      '⛔ No number entered. Please take a guess.';
  }
  // Guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🥳 You guessed correctly! No need to waste your time anymore.';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = 'gold';
  }
  // Guess is too high
  else if (guess > secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent =
        '😭 Your guess was too high.';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    }
    // Lose game
    else {
      document.querySelector('.message').textContent = '💀 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').style.color = 'black';
    }
  }
  // Guess is too low
  else if (guess < secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent =
        '😭 Your guess was too low.';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    }
    // Lose game
    else {
      document.querySelector('.message').textContent = '💀 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').style.color = 'black';
    }
  }
});
