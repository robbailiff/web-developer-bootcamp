// Basic Function
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

// Function with arguments
function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

// Function with arguments and internal loop
function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

// Function which returns the sum of 2 values
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    // Return is how we get values out of a function, which can be saved to a variable
    // Return stops the code execution at that point and only returns one value
    return x + y;
}

// Functions can also be declared with a function expression which stores a function in a variable
const add = function (x, y) {
    return x + y;
}

// ==================
// Function Exercises
// ==================

// Function which prints out the message 3 times in uppercase
function rant(message){
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

// Function which prints whether 2 dice roll numbers are snake eyes
function isSnakeEyes(die1, die2){
    if (die1 == 1 && die2 == 1){
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!")
    }
}

// Function to decide whether it is warm enough to wear shorts
function isShortsWeather(temperature){
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}

// Return last element of an array or null if array is empty
function lastElement(arr){
    if (arr.length > 0) {
        return arr[arr.length - 1];
    } else {
        return null;
    }
}

// Capitalise the first letter of a string
function capitalize(str){
    let firstLetter = str[0].toUpperCase();
    let endLetters = str.slice(1, str.length+1);
    return firstLetter + endLetters
}

// Return the sum of an array of numbers
function sumArray(numArray){
    let sum = 0;
    for (let num of numArray) {
        sum += num;
    }
    return sum;
}

// Return day of week based on input from 1 - 7 or null if another input
function returnDay(num) {
    if (num < 1 || num > 7) {
        return null;
    } else {
        const days = {
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
            7: "Sunday"
        }
        return days[num];
    }
}