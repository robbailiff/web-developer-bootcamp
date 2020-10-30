
// The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds

// In this example we use an arrow function to execute the code after 3 seconds (3000 milliseconds)
console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

console.log("GOODBYE!!")

// The setInterval() method also calls a function or evaluates an expression at specified intervals (in milliseconds)
// However, it will continue calling the function until clearInterval() is called, or the window is closed

// Prints a random decimal every 2 seconds until stopped
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

// Requires setIterval() to be sved to a variable which can be passed as an argument to clearInterval()
clearInterval(id);