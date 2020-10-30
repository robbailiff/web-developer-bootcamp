
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

// Array Destructuring

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// Value Extraction by Indexing 
const highScore = scores[0];
const secondHighScore = scores[1];

// Value Extraction Using Destructuring Syntax
// Essentially copying each value out of the array in index order to it's own variable
// Need square brackets to indicate that we are destructuring an array
// Can also be used with the rest operator

const [gold, silver, bronze, ...everyoneElse] = scores;


// Object Destructuring

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// Regular Property Extraction
const firstName = user.firstName;
const lastName = user.lastName;
const email = user.email;

// Property Extraction Using Object Destructuring
// Need curly brackets to indicate that we are destructuring an object
const { email, firstName, lastName, city, bio } = user;

// Can rename the variable a property is assigned to when it is extracted using colon syntax
const { born: birthYear, died: deathYear = 'N/A' } = user;

// Can add a default value for if the property doesn't exist, but it will be overwritten if it does
const { city, state, died = 'N/A' } = user2;


// Param Destructuring

// Standard method of accessing properties
function fullName(user) {
    return `${user.firstName} ${user.lastName}`
}

// Can use object destructing to return property values
function fullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`
}

// Can use destructing on the parameters to shorten the code
// Can also add default values
function fullName({ firstName, lastName = "Smith"}) {
    return `${firstName} ${lastName}`
}


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

// Arrow function with implcit return
movies.filter((movie) => movie.score >= 90)
// Destructure the params and you don't need to refer the movie object, only the property
movies.filter(({ score }) => score >= 90)

// Arrow function
movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})

// Arrow function using param destructuring
movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})