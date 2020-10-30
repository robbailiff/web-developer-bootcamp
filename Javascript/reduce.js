
// The reduce() method executes a reducer function (user defined) on each element of the array, resulting in single output value

// Reduce Example

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// Calculate total without reduce()
let total = 0;
for (let price of prices) {
    total += price
}
console.log(total)

// Calculate total with reduce()
const total = prices.reduce((total, price) => {
    return total + price
})

// Calculate total wih reduce() and implicit return
const total = prices.reduce((total, price) => total + price)

// Find the minimum price in the array
// Min starts out as just the first element, but gets updated if another element is smaller
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

// Movies Example With Reduce

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// Find the highest rated movie using reduce()
const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

// We can provide an initial value as the 2nd arg to reduce:
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num) //20
evens.reduce((sum, num) => sum + num, 100) //120
