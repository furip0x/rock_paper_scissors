let game = () => {

  let playerScore = 0;
  let computerScore = 0;

  let computerPlay = () => {
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
  };

  let playerPlay = () => {
    playerSelectionText = prompt('"Rock","Paper", "Scissors?"').toLowerCase();
    const playerSelectionFirstChar = playerSelectionText.charAt(0).toUpperCase();
    return playerSelectionFirstChar + playerSelectionText.slice(1);
  }

  let playRound = (playerSelection, computerSelection) => {
    for (let i = 0; i < 5; i++) {
      playerSelection = playerPlay();
      computerSelection = computerPlay();

      console.log(`Player: ${playerSelection} || Computer: ${computerSelection}`)
    }

    return "You Lose! Paper beats Rock";
  };

  playRound();

};

game()