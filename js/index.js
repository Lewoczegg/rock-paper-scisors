let playerWins = 0;
let computerWins = 0;
let playerScore = document.querySelector('#player-score');
let comuterScore = document.querySelector('#computer-score');
let information = document.querySelector('.round-information');

let playAgainBtn = document.querySelector('.play-again-btn');
playAgainBtn.addEventListener('click', restartGame);

let weapons = document.querySelectorAll('.weapon');
    weapons.forEach((weapon) => {
        weapon.addEventListener('click', () => {
            let computerChoice = getComputerChoice();
            let playerChoice = weapon.children[1].innerHTML;
            if(playerWins < 5 && computerWins < 5) {
                playRound(playerChoice, computerChoice);
            }
        });
    })

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scisors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === computerSelection) {
        information.textContent = 'Draw!';
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        information.textContent = 'You Lose! Paper beats Rock';
        computerWins++;
        comuterScore.textContent = computerWins;
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scisors') {
        information.textContent = 'You Win! Rock beats Scisors';
        playerWins++;
        playerScore.textContent = playerWins;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        information.textContent = 'You Win! Paper beats Rock';
        playerWins++;
        playerScore.textContent = playerWins;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scisors') {
        information.textContent = 'You Lose! Scisors beats Paper';
        computerWins++;
        comuterScore.textContent = computerWins;
    }
    else if (playerSelection.toLowerCase() === 'scisors' && computerSelection === 'rock') {
        information.textContent = 'You Lose! Rock beats Scisors';
        computerWins++;
        comuterScore.textContent = computerWins;
    }
    else if (playerSelection.toLowerCase() === 'scisors' && computerSelection === 'paper') {
        information.textContent = 'You Win! Scisors beats Paper';
        playerWins++;
        playerScore.textContent = playerWins;
    }
    else {
        information.textContent = 'Error, invalid input';
    }

    if(playerWins === 5) {
        information.textContent = 'You won the match';
        playAgainBtn.style.visibility = 'visible';
    } else if (computerWins === 5) {
        information.textContent = 'You lost the match';
        playAgainBtn.style.visibility = 'visible';
    }
}

function restartGame() {
    console.log('ok');
    playerWins = 0;
    computerWins = 0;
    playerScore.textContent = 0;
    comuterScore.textContent = 0;
    information.textContent = '';
    playAgainBtn.style.visibility = 'hidden';
}




