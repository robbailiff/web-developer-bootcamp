
// The map() method creates a new array with the results of calling a function on every element in the calling array

// In the example below we double every number in the numbers array and save it as the doubles array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const doubles = numbers.map(function (num) {
    return num * 2;
})

// In the next example make all the movie titles in movies and save them as the titles array

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

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})


// Define a function which should accept an array of strings, containing additional space characters at the beginning and end. 
// The function should use the array map method to return a new array, full of trimmed names

function cleanNames(arr) {
    const trimmed = arr.map(function (str) {
        return str.trim();
    });
return trimmed;   
}