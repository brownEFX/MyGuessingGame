//Guessing game
/*
let secret = 7;
let answer = prompt (“Please guess the secret number (1-20)”);
// Convert the string guess to an integer so that we can compare
var guess = parseInt (answer);

Please add an if statement which checks if the guess is correct, if it is, then display a message: Correct Guess!, otherwise “Sorry, incorrect Guess!
How can you combine line 2 and 3 into one line
Expand the program to do this in a while loop, only exiting when the guess was correct
While the guess is incorrect, test also if it is too low or too high and display the message “Incorrect, too low” or “Incorrect, too high”.
When you are done make the secret number random.
*/

//let secret = 7;

// Generate a random number between 1 and 20, including both 1 and 20
function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	let secret = generateRandomNumber(1, 20);
	
	let answer;
//var guess = parseInt(answer);

do {
	// Prompt the user for input
	answer = parseInt(prompt("Please guess the secret number (1-20)"));
		
		if (answer === " " || answer < 1 || answer > 20) {
			alert("Please enter a secret number from 1 and 20.");
		} else if (answer == secret) {
			alert(`Your guess is ${answer}. Correct Guess!`);
			//alert(`Your guess is ${answer}. Sorry, incorrect Guess!`);
		} else if (answer < secret) {
			alert(`Your guess of ${answer} is incorrect and too low. Please try again`);
		} else {
			alert(`Your guess of ${answer} is incorrect and too high. Please try again`);
		} 
	} while (!(answer == secret)); // (answer < 1 && answer > 20);



