
// An arrow function expression is a compact alternative to a traditional function expression, but it can't be used in all situations
// Useful to use as one time functions, similar to lambda functions in Python

// Regular function expression
const add = function(x,y) {
    return x + y;
}

// Arrow function expression
const add = (x, y) => {
    return x + y;
}

// Implicit returns can be used instead of normal returns if you only have one statement in a function
// You can omit the return keyword but have they have an unusual syntax and you must also replace curly braces with parentheses
// If it also on one line, you can also omit the parentheses - confusing!

// Arrow function with implicit return and no parentheses
const add = (a, b) => a + b;

// If a function has only one arument, the parathese can be omitted
const square = num => {
    return num * num;
}

// An arrow function with no arguments needs empty parentheses
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

// An arrow function with an implicit return
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

// Movies Example with Arrow Function

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// Regular Function Expression
const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})


// Arrow Function Expression with Implicit Return
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

// Using 'this' keyword with arrow functions

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
            // If we define a regular function, 'this' refers to the setTimeout() method (which is a global object), and not to the person object
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}


