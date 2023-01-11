const options = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let pcScore = 0;
let maxScore = 10;
let winUndecided = true;

function displayWinner(playerValue, pcValue, gameCase) {
  document.getElementById("player-value").innerHTML = playerValue;
  document.getElementById("pc-value").innerHTML = pcValue;

  if (gameCase === 1 || gameCase === 5 || gameCase === 9) {
    document.getElementById("action").innerHTML = "same as";
    document.getElementById("outcome").innerHTML = "It's a tie!";
  } else if (gameCase === 2) {
    document.getElementById("action").innerHTML = "is covered by";
    document.getElementById("outcome").innerHTML = "You lose";
  } else if (gameCase === 3) {
    document.getElementById("action").innerHTML = "blunts";
    document.getElementById("outcome").innerHTML = "You win";
  } else if (gameCase === 4) {
    document.getElementById("action").innerHTML = "covers";
    document.getElementById("outcome").innerHTML = "You win";
  } else if (gameCase === 6) {
    document.getElementById("action").innerHTML = "is cut by";
    document.getElementById("outcome").innerHTML = "You lose";
  } else if (gameCase === 7) {
    document.getElementById("action").innerHTML = "is blunted by";
    document.getElementById("outcome").innerHTML = "You lose";
  } else if (gameCase === 8) {
    document.getElementById("action").innerHTML = "cuts";
    document.getElementById("outcome").innerHTML = "You win";
  }

  if (gameCase === 3 || gameCase === 4 || gameCase === 8) {
    playerScore += 1;
  } else if (gameCase === 2 || gameCase === 6 || gameCase === 7) {
    pcScore += 1;
  }
  if ((playerScore >= maxScore || pcScore >= maxScore) && winUndecided) {
    // DRY
    if (playerScore == maxScore) {
      document.getElementById("player-value").innerHTML = "";
      document.getElementById("pc-value").innerHTML = "";
      document.getElementById("action").innerHTML = "YOU WIN!";
      document.getElementById("outcome").innerHTML = "COMP LOSES!";
    } else if (pcScore == maxScore) {
      document.getElementById("player-value").innerHTML = "";
      document.getElementById("pc-value").innerHTML = "";
      document.getElementById("action").innerHTML = "YOU LOSE!";
      document.getElementById("outcome").innerHTML = "COMP WINS!";
    }
    winUndecided = false;
  }
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("pc-score").innerHTML = pcScore;
}

function randomOptionPc() {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

function chooseOptionPc() {
  const previousChoice = document.getElementById("pc-value").innerHTML;
  const previousOutcome = document.getElementById("outcome").innerHTML;
  if (Math.random < 0.9) {
    if (previousOutcome == "You win") {
      //computer lost
      if (previousChoice == "Rock") {
        return "Scissors";
      } else if (previousChoice == "Paper") {
        return "Rock";
      } else if (previousChoice == "Scissors") {
        return "Paper";
      }
    } else if (previousOutcome == "You lose") {
      //computer won
      if (previousChoice == "Rock") {
        return "Paper";
      } else if (previousChoice == "Paper") {
        return "Scissors";
      } else if (previousChoice == "Scissors") {
        return "Rock";
      }
    }
  }
  return randomOptionPc();
}

function showPcValue(pcValue) {
  if (pcValue === "Rock") {
    document.getElementById("pc-wrapper").innerHTML =
      '<img src="img/rock.svg" alt="rock"</img>';
  } else if (pcValue === "Paper") {
    document.getElementById("pc-wrapper").innerHTML =
      '<img src="img/paper.svg" alt="paper"</img>';
  } else if (pcValue === "Scissors") {
    document.getElementById("pc-wrapper").innerHTML =
      '<img src="img/scissors.svg" alt="scissors"</img>';
  }
}

function letsPlay(value) {
  console.log("Your weapon of choice: " + value);
  let pcValue = randomOptionPc();

  console.log("Comp choice: " + pcValue);
  showPcValue(pcValue);

  if (value === "Rock") {
    if (pcValue === "Rock") {
      displayWinner(value, pcValue, 1);
    } else if (pcValue === "Paper") {
      displayWinner(value, pcValue, 2);
    } else if (pcValue === "Scissors") {
      displayWinner(value, pcValue, 3);
    }
  }

  if (value === "Paper") {
    if (pcValue === "Rock") {
      displayWinner(value, pcValue, 4);
    } else if (pcValue === "Paper") {
      displayWinner(value, pcValue, 5);
    } else if (pcValue === "Scissors") {
      displayWinner(value, pcValue, 6);
    }
  }

  if (value === "Scissors") {
    if (pcValue === "Rock") {
      displayWinner(value, pcValue, 7);
    } else if (pcValue === "Paper") {
      displayWinner(value, pcValue, 8);
    } else if (pcValue === "Scissors") {
      displayWinner(value, pcValue, 9);
    }
  }
}
