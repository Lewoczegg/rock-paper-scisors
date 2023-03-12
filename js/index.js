function getComputerChoice() {
    const choices = ['rock', 'paper', 'scisors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log('Draw!');
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock');
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scisors') {
        console.log('You Win! Rock beats Scisors');
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats Rock');
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scisors') {
        console.log('You Lose! Scisors beats Paper');
    }
    else if (playerSelection.toLowerCase() === 'scisors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scisors');
    }
    else if (playerSelection.toLowerCase() === 'scisors' && computerSelection === 'paper') {
        console.log('You Win! Scisors beats Paper');
    }
}