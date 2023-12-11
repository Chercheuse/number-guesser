let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (human, computer, target) => {
  let humanDifr = Math.abs(human - target);
  let compDifr = Math.abs(computer - target);
  console.log(humanDifr);
  console.log(compDifr);
  if (humanDifr <= compDifr) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    return (humanScore += 1);
  } else if (winner === "computer") {
    return (computerScore += 1);
  }
};

const advanceRound = () => {
  return (currentRoundNumber += 1);
};
