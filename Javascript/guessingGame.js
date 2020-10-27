// First enter the maximum number that the guess could be (larger is more difficult)
// Use parseInt() to transform the input to number datatype
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

// Genrate the target number using the Math.random() method
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

// Main game while loop which only ends if guess === targetNum or 'q'
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}

// Evaluates after the game loop ends
if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}