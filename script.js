let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();


function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
            score.ties++;
        } else if (computerMove === 'Paper') {
            result = 'Computer wins';
            score.losses++;
        } else if (computerMove === 'Scissors') {
            result = 'Player wins';
            score.wins++;
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'Player wins';
            score.wins++;
        } else if (computerMove === 'Paper') {
            result = 'Tie';
            score.ties++;
        } else if (computerMove === 'Scissors') {
            result = 'Computer wins';
            score.losses++;
        }
    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'Computer wins';
            score.losses++;
        } else if (computerMove === 'Paper') {
            result = 'Player wins';
            score.wins++;
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
            score.ties++;
        }
    }


    const scoreString = JSON.stringify(score);
    localStorage.setItem('score', scoreString);

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-computer-move').innerHTML = '<p>Computer chose:</p>' + "<img class='moves' src='images/" + computerMove + ".png' alt='" + computerMove + "' />";

}


function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
}


function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
}


function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = 'Wins: ' + score.wins + '   Losses: ' + score.losses + '   Ties: ' + score.ties;
}
