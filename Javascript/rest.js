
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

// Every function has an arguments object, which is an array-like object with a length() but no other array methods
// It contains all the arguments passed into a function, but it isn't available inside of arrow functions


// This syntax DOES NOT WORK because arguments is not an array and doesn't have the reduce() method

function sum() {
    return arguments.reduce((total, el) => total + el)
}

// The rest() method works by collecting the 'rest' of the parameters and is a 'real' array
// It the same (...args) syntax as spread

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

// Can call required or default parameters before calling rest
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
