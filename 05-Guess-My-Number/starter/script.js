'use strict';

// Define random number and initial score when the game start
let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20
let highScore = 0

// Function to check number from input (.guess) and compare to random rumber 
const checkNumber = () => {
    const guess = Number(document.querySelector('.guess').value)
    console.log (guess)

    // When input no number
    if (!guess) {
        document.querySelector('.message').textContent = "⛔ No number!"

    // When guess to high
    } else if (guess > secretNumber) {
        if (score > 1) {
        document.querySelector('.message').textContent = "⬆️ Number is to high!"
        score--;
        document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = "😭 You lost the game!"
            document.querySelector('.score').textContent = 0
        }

    // When guess to low
    } else if (guess < secretNumber) {
        if (score > 1) {
        document.querySelector('.message').textContent = "⬇️ Number is to low!"
        score--;
        document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = "😭 You lost the game!"
            document.querySelector('.score').textContent = 0
        }
    
    // When guess is corrent
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "🎉 Correct number!"
        document.querySelector('.number').textContent = secretNumber // Change the number display/HTML when guess is right
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        highScore = score
        console.log(highScore)
        document.querySelector('.highscore').textContent = highScore
    }
}

// Event listener when check button is clicked and run the function of check number
document.querySelector('.check').addEventListener(
    'click', checkNumber
)


const resetGame = () => {
    console.log('tombol Again! di tekan')
    score = 20
    secretNumber = Math.trunc(Math.random()*20)+1
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ""
}

document.querySelector('.again').addEventListener(
    'click', resetGame
)