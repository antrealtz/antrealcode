let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    const target = Math.floor(Math.random() * 10);
    console.log(`Generated Target: ${target}`);
    return target;
}

const getAbsoluteDistance = (num1, num2) => {
    const distance = Math.abs(num1 - num2);
    console.log(`Calculating Absolute Distance between ${num1} and ${num2}: ${distance}`);
    return distance;
}

const compareGuesses = (human, computer, target) => {
    console.log(`Comparing Guesses: Human - ${human}, Computer - ${computer}, Target - ${target}`);
    const num = parseFloat(human);
    const humanDistance = getAbsoluteDistance(num, target);
    const computerDistance = getAbsoluteDistance(computer, target);

    console.log(`1. Human Distance: ${humanDistance}, Computer Distance: ${computerDistance}`);

    if (isNaN(num)) {
        alert('Write a valid number');
        return undefined;
    }

    if (num < 0 || num > 9) {
        alert('Your guess is out of range. Write a number between 0 and 9');
        return undefined;
    };

    if (isNaN(humanDistance) || isNaN(computerDistance)) {
        return undefined;
    }
    console.log(`2. Human Distance: ${humanDistance}, Computer Distance: ${computerDistance}`);

    const result = humanDistance <= computerDistance ? true : false;
    console.log(`Result of compareGuesses: ${result}`);
    return result;
};


const updateScore = (value) => {
    console.log(`Updating Score: Is Human Winner - ${value}`);
    if (value === undefined) {
        return;
    } else if (value === 'human') {
        humanScore++;
    } else {
        computerScore++;
    };
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

const advanceRound = () => {
    currentRoundNumber++;
    console.log(`Advancing Round: Current Round Number - ${currentRoundNumber}`);
}

const toggleButton = document.getElementById('spoilerButton');
const gameContainer = document.getElementById('game-container');
const instructions = document.getElementById('instructions');

toggleButton.addEventListener('click', () => {
    if (toggleButton.classList.contains('off')) {
        // Showing
        toggleButton.classList.remove('off');
        toggleButton.classList.add('on');
        gameContainer.classList.remove('hide');
        gameContainer.classList.add('show');
        instructions.classList.remove('hide');
        instructions.classList.add('show');
        // Display
        gameContainer.style.display = 'flex';
        instructions.style.display = 'flex';
    } else {
        // Hiding
        toggleButton.classList.remove('on');
        toggleButton.classList.add('off');
        gameContainer.classList.remove('show');
        gameContainer.classList.add('hide');
        instructions.classList.remove('show');
        instructions.classList.add('hide');
        // Display
        gameContainer.addEventListener('transitionend', function handleTransitionEnd(event) {
            if (event.propertyName === 'opacity') {
                gameContainer.style.display = 'none';
                gameContainer.removeEventListener('transitionend', handleTransitionEnd);
            }
        });
        instructions.addEventListener('transitionend', function handleTransitionEnd(event) {
            if (event.propertyName === 'opacity') {
                instructions.style.display = 'none';
                instructions.removeEventListener('transitionend', handleTransitionEnd);
            }
        });
    }
});