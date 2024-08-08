let target;

const humanGuessInput = document.getElementById('human-guess-input');

const roundNumberDisplay = document.getElementById('round-number');

const computerGuessDisplay = document.getElementById('computer-guess');
const humanGuessDisplay = document.getElementById('human-guess');

const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const targetNumberDisplay = document.getElementById('target-number');
const computerWinsDisplay = document.getElementById('computer-wins');

const numberContainerDisplay = document.getElementById('number-container');

const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round')

guessButton.addEventListener('click', () => {
	// Generate the target value
	target = generateTarget();
	// Retrieve the player's guess
	const currentHumanGuess = humanGuessInput.value;
	// Make a random 'computer guess'
	const computerGuess = Math.floor(Math.random() * 10);

	// Display the computer guess and the target
	computerGuessDisplay.innerText = computerGuess;
	targetNumberDisplay.innerText = target;
    humanGuessDisplay.innerText = currentHumanGuess;

	// Determine if the human or computer wins:
	const humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target)
	// const winner = humanIsWinner ? 'human' : 'computer'
    const winner = () => {
        if (isNaN(humanIsWinner)) {
            return undefined
        } else if (humanIsWinner) {
            return 'human'
        } else {
            return 'computer'
        }
    }

    // Hiding inputs
    numberContainerDisplay.style.display = 'none';

    // Showing score
    humanGuessDisplay.style.display = 'block';

	// Update the correct score:
	updateScore(winner());

	// Display the winner
	if (isNaN(humanIsWinner)) {
        undefined;
    } else if (humanIsWinner) {
		guessButton.innerText = 'You Win!';
		guessButton.classList.toggle('winning-text')
	} else {
		computerWinsDisplay.innerText = 'Computer Wins!';
	}

	// winnerDisplay.innerText = humanIsWinner ? 'You win!' : 'Computer wins!';

	// Display the current scores:
	humanScoreDisplay.innerText = humanScore;
	computerScoreDisplay.innerText = computerScore;

	// Set the correct disabled state for the buttons
	guessButton.setAttribute('disabled', true)
	nextRoundButton.removeAttribute('disabled');

    // Changes button text
    if (currentHumanGuess && humanGuessInput.value > 0 && humanGuessInput.value < 9) {
        nextRoundButton.innerText = 'Next Round';
    } else {
        nextRoundButton.innerText = 'Try again';
    };
});

nextRoundButton.addEventListener('click', () => {

    // Changes button text
    if (nextRoundButton) {
        nextRoundButton.innerText = 'Next Round';
    }

	// Increase the round number
	// advanceRound();
    if (humanGuessInput.value > 0 && humanGuessInput.value < 9) {
        advanceRound();
        console.log(`--- It's advance`)
    } else {
        console.log(`--- It's retry`)
    };

    // Showing inputs
    numberContainerDisplay.style.display = 'flex';

    // Hiding score
    humanGuessDisplay.style.display = 'none';

	// Display the new round number
	roundNumberDisplay.innerText = currentRoundNumber;

	// Set the correct disabled state for the buttons
	nextRoundButton.setAttribute('disabled', true);
	guessButton.removeAttribute('disabled');

	// Reset the guess input box and the target number display:
	targetNumberDisplay.innerText = '?';
	guessButton.innerText = 'Make a Guess';
	humanGuessInput.value = '';
	computerGuessDisplay.innerText = '?';
	computerWinsDisplay.innerText = ' ';
	guessButton.classList.remove('winning-text');
});

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

addButton.addEventListener('click', () => {
	humanGuessInput.value = +humanGuessInput.value + 1;
	handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener('click', () => {
	humanGuessInput.value = +humanGuessInput.value - 1;
	handleValueChange(humanGuessInput.value);
});

const handleValueChange = value => {
	if (value > 0 && value <= 9) {
		subtractButton.removeAttribute('disabled');
		addButton.removeAttribute('disabled');
	} else if (value > 9) {
		addButton.setAttribute('disabled', true);
	} else if (value <= 0) {
		subtractButton.setAttribute('disabled', true);
	}
}

humanGuessInput.addEventListener('input', function (e) {
	handleValueChange(e.target.value);
});
