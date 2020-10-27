// Making an array:
const colours = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colours[0]; // returns "red"

// They have a length:
colours.length; // returns 3

// push() adds value to the END of an array
colours.push("green", "blue", "purple")

// pop() removes and returns last value in array
colours.pop() // removes 'purple'

// unshift() adds value to START of an array
colours.unshift("pink")

// shift() removes and returns first element in an array
colours.shift() // removes 'pink'

// concat() method is used to merge two or more arrays. 
const shades = ["white", "grey", "black"]
let merged = colours.concat(shades) // returns ["red", "orange", "yellow", "green", "blue", "white", "grey", "black"]

// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present
colours.indexOf('yellow') // returns 2

// reverse() method reverses an array in place.
shades.reverse() // returns ["black", "grey", "white"]

// slice() method returns a portion of an array into a new array object selected from start to end indices
colours.slice(2,4) // returns ["yellow", "green"]

// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// Syntax ==> array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
colours.splice(-1, 1, "cyan") // returns ["red", "orange", "yellow", "green", "cyan"]