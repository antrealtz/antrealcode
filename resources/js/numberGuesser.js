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
const game = document.getElementById('game');

toggleButton.addEventListener('click', () => {
    game.removeEventListener('transitionend', handleTransitionEnd);

    if (toggleButton.classList.contains('off')) {
        // Displaying
        game.style.display = 'flex';

        game.offsetHeight; // Force reflow

        // Showing
        requestAnimationFrame(() => {
            game.classList.remove('hide');
            game.classList.add('show');
        });

        // Button career
        toggleButton.classList.remove('off');
        toggleButton.classList.add('on');
        toggleButton.textContent = 'career';
    } else {
        // Hiding
        game.classList.remove('show');
        game.classList.add('hide');

        // Waiting until animation ends
        game.addEventListener('transitionend', handleTransitionEnd);

        // Button result
        toggleButton.classList.remove('on');
        toggleButton.classList.add('off');
        toggleButton.textContent = 'result';
    }

    // Handle the transition end event
    function handleTransitionEnd(event) {
        if (event.propertyName === 'opacity' && game.classList.contains('hide')) {
            game.style.display = 'none';
        }
    }
});
