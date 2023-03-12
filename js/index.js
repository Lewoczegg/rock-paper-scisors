function getComputerChoice() {
    const choices = ['rock', 'paper', 'scisors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}