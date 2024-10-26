'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = '24';
//console.log(document.querySelector('.guess').value);

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('no number');
        // document.querySelector('.message').textContent = 'No number!';
    } else if (guess === SecretNumber) {
        displayMessage('correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = SecretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== SecretNumber) {
        if (score > 1) {
            displayMessage(guess > SecretNumber ? 'high!' : 'low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lost';
            document.querySelector('.score').textContent = 0;
        }

        // } else if (guess > SecretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'too high!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = 'you lost';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // } else if (guess < SecretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'too low!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = 'you lost';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }
    }
});
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    displayMessage('start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highscore;
});