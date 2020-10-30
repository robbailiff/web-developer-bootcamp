
// forEach() calls a provided callback function once for each element in an array in ascending order 
// It can be called on a predefined function or defined as an anoymous (unnamed) function inline

// forEach() Example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Function defined inline
numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
})

// Predefined Function Example

function print(element) {
    console.log(element);
}

numbers.forEach(print);

// You can get the same effect use a For Of loop
for (let el of numbers) {
    console.log(el);
}

// In this example we have an array of movie objects
// For each movie we want to print a string with the movie title and rating

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

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})

