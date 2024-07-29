let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (human, computer, target) => {
  const num = parseFloat(human);
  if (isNaN(num)) {
    alert('Write a valid number');
    return;
  }

  if (num < 0 || num > 9) {
    alert('Your guess is out of range. Write a number between 0 and 9');
    return;
  }

  if (getAbsoluteDistance(num, target) <= getAbsoluteDistance(computer, target)) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (value) =>
  value === "human" ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;
