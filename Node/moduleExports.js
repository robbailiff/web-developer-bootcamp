// Import objects from the math.js file
// Curly brackets signify destructuring of the module object
// If you don't do this you must use math.square(9) to access the module objects
const { PI, square } = require('./math');

console.log(PI)

console.log(square(9))

// Can also import an entire directory
const cats = require('./shelter')
console.log("REQUIRED AN ENTIRE DIRECTORY!", cats)
