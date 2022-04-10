function computerPlay() {
    const actions = ['rock', 'paper', 'scissors'];

    const random = Math.floor(Math.random() * 3);

    return actions[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) return 'tie';

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return true;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return false;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return true;
    } else if (
        playerSelection === 'paper' &&
        computerSelection === 'scissors'
    ) {
        return false;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return false;
    } else if (
        playerSelection === 'scissors' &&
        computerSelection === 'paper'
    ) {
        return true;
    }
}

const body = document.body;
const buttons = document.querySelectorAll('button');
const announce = document.createElement('div');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const playerSelection = e.target.dataset.value;
        const computerSelection = computerPlay();
        const gamePlay = playRound(playerSelection, computerSelection);

        if (gamePlay === 'tie') return;
        else if (gamePlay) {
            announce.textContent = `You WIN! ${playerSelection} beat(s) ${computerSelection}`;
        } else {
            announce.textContent = `You LOSE! ${computerSelection} beat(s) ${playerSelection}`;
        }

        body.appendChild(announce);
    });
});
