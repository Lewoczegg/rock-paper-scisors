function getComputerChoice() {
    const choices = ['rock', 'paper', 'scisors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log('Draw!');
        return 0;
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock');
        return -1;
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scisors') {
        console.log('You Win! Rock beats Scisors');
        return 1;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats Rock');
        return 1;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scisors') {
        console.log('You Lose! Scisors beats Paper');
        return -1;
    }
    else if (playerSelection.toLowerCase() === 'scisors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scisors');
        return -1;
    }
    else if (playerSelection.toLowerCase() === 'scisors' && computerSelection === 'paper') {
        console.log('You Win! Scisors beats Paper');
        return 1;
    }
    else {
        console.log('Invalid input, type rock, paper or scisors')
    }
}

function game() {
    let finalResult = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Your choice, type rock, paper or scisors');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        finalResult += result;
    }

    if(finalResult > 0) {
        console.log('You won a game');
    } else if (finalResult < 0) {
        console.log('You lost a game');
    } else {
        console.log(`It's a draw`);
    }
}

game();
