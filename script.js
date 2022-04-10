function computerPlay() {
    const actions = ['rock', 'paper', 'scissors'];

    const random = Math.floor(Math.random() * 3);

    return actions[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rocks';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock';
    } else if (
        playerSelection === 'paper' &&
        computerSelection === 'scissors'
    ) {
        return 'You Lose! Scissors beat Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (
        playerSelection === 'scissors' &&
        computerSelection === 'paper'
    ) {
        return 'You Win! Scissors beat Rock';
    }

    return 'Play Again!!!';
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const playerSelection = e.target.dataset.value;
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    });
});
