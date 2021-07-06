const game = () => {
  let computerScore = 0;
  let playerScore = 0;

  const playRound = () => {
    const playerButtons = document.querySelectorAll('.button');
    const computerOptions = ['rock', 'paper', 'scissors'];

    playerButtons.forEach(button => {
      button.addEventListener('click', function () {
        const computerSelection = computerOptions[Math.floor(Math.random() * 3)];
        const playerSelection = button.getAttribute('data-selection');

        compare(playerSelection, computerSelection);
      });
    });
  };

  const updateScores = () => {
    const playerScoreText = document.querySelector('.user .user-score-number');
    const computerScoreText = document.querySelector('.computer .user-score-number');
    const winnerText = document.querySelector('.result-title');

    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;

    if(playerScore === 3) {
      winnerText.textContent = 'WINNER PLAYER';
      document.querySelector('body').classList.add('gameover');
    } else if (computerScore === 3) {
      winnerText.textContent = 'WINNER COMPUTER';
      document.querySelector('body').classList.add('gameover');
    }
  };

  const compare = (playerSelection, computerSelection) => {
    const winner = document.querySelector('.result-title');

    if (playerSelection === computerSelection) {
      winner.textContent = "It's a tie";
      return;
    }

    if (playerSelection === 'rock') {
      if (computerSelection === 'scissors') {
        winner.textContent = 'Player Wins';
        playerScore++
        updateScores();
        return;
      } else {
        winner.textContent = 'Computer Wins';
        computerScore++;
        updateScores();
        return;
      }
    }

    if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
        winner.textContent = 'Player Wins';
        playerScore++
        updateScores();
        return;
      } else {
        winner.textContent = 'Computer Wins';
        computerScore++;
        updateScores();
        return;
      }
    }

    if (playerSelection === 'scissors') {
      if (computerSelection === 'paper') {
        winner.textContent = 'Player Wins';
        playerScore++
        updateScores();
        return;
      } else {
        winner.textContent = 'Computer Wins';
        computerScore++;
        updateScores();
        return;
      }
    }
  };

  const playAgain = document.querySelector('.play-again-btn');
  
  playAgain.addEventListener('click', function(){
    location.reload();
  });

  playRound();
};

game();