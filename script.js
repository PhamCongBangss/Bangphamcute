'use strict';

let secretNumber = Math.round(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let inputNumer = Number(document.querySelector('.guess').value);
  if (score > 0) {
    if (!inputNumer) {
      document.querySelector('.message').textContent =
        'Please input the number';
    } else {
      if (inputNumer === secretNumber) {
        document.querySelector('.message').textContent = 'Congratulation';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      } else if (inputNumer > secretNumber) {
        document.querySelector('.message').textContent =
          'The secret number is lower';
        score--;
        document.querySelector('.score').textContent = score;
        if (score === 0) {
          document.querySelector('.message').textContent = 'You lost';
          document.querySelector('body').style.backgroundColor =
            'rgb(220, 113, 113)';
          document.querySelector('.number').textContent = secretNumber;
        }
      } else {
        document.querySelector('.message').textContent =
          'The secret number is higher';
        score--;
        document.querySelector('.score').textContent = score;
        if (score === 0) {
          document.querySelector('.message').textContent = 'You lost';
          document.querySelector('body').style.backgroundColor =
            'rgb(220, 113, 113)';
          document.querySelector('.number').textContent = secretNumber;
        }
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.round(Math.random() * 100) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 10;
});
