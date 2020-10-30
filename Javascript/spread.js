
// The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected

// Spread In Functions Example

const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

// The max() method expects separate arguments for the numbers, not an array so it doesn't know how to run and returns NaN
// The spread syntax (...nums) expand an array into separate arguments that the max() method can understand

Math.max(nums) // Returns NaN
Math.max(...nums) // Returns 53456


// Spread In Arrays Example

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

// Use spread to combine 2 arrays into a new array
// Does a similar thing to concat() method but you can also add more than multiple arguments, and can append other data types
const allPets = [...cats, ...dogs, "Speedy"];


// Spread In Objects Example

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

// Create a new object by use spread syntax with feline to copy the object. Can also add new properties in the same statement
const panther = {...feline, colour: "black"}

// Can combine objects using spread, but where there is a conflict in properties, the last argument takes precendence
// In this example, catDog will end up with family: 'Caninae' because it came last and overwrites family: 'Felidae'
const catDog = { ...feline, ...canine };


// Real World Example

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }



