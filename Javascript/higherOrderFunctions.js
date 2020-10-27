// Functions As Arguments

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie)

// Returning Functions

// Can define an unnamed function a return value within a function
// This returned function can be saved to  variable and executed like a regular function

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!");
            console.log("YOU WIN A MILLION DOLLARS!!");
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
        }
    }
}

// Save returned function to a variable
const mystery = makeBetweenFunc()
// Execute returned function
mystery()


// Example of a function which generates functions based on the parameters given
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

// Examples of several new functions returned from a 'generator' function
const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc (19, 64);
const isOAP = makeBetweenFunc (65, 120);

isChild(7); // Returns true
isOAP(64); // Returns false
