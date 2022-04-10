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
const computerScore = document.createElement('h2');
computerScore.style.color = 'blue';
const humanScore = document.createElement('h2');
humanScore.style.color = 'red';
const winner = document.createElement('h2');
winner.style.color = 'green';

let human = 0,
    computer = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        winner.textContent = '';
        const playerSelection = e.target.dataset.value;
        const computerSelection = computerPlay();
        const gamePlay = playRound(playerSelection, computerSelection);

        if (gamePlay === 'tie') {
            announce.textContent = 'Both actions were same! Try again!';
        } else if (gamePlay) {
            announce.textContent = `You WIN! ${playerSelection} beat(s) ${computerSelection}`;
            human += 1;
            humanScore.textContent = `You: ${human}`;
        } else {
            announce.textContent = `You LOSE! ${computerSelection} beat(s) ${playerSelection}`;
            computer += 1;
            computerScore.textContent = `Computer: ${computer}`;
        }

        body.appendChild(announce);
        body.appendChild(humanScore);
        body.appendChild(computerScore);

        if (human === 5 || computer === 5) {
            const output = human === 5 ? 'You' : 'Computer';

            human = 0;
            computer = 0;
            announce.textContent = '';
            computerScore.textContent = '';
            humanScore.textContent = '';

            winner.textContent = `${output} won!! 🎉🎉`;
            body.appendChild(winner);
        }
    });
});
