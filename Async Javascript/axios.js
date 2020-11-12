// Axios is a promise based HTTP client for the browser and node.js

// The get() method makes a request, intercepts a response and then parses the data (all in one method!)
// Makes things easier than fetch() by removing the data parsing step (and therefore an extra callback)
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price)
    })
    .catch(err => {
        console.log("ERROR!", err)
    })

// Example using axios with async
const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("ERROR!", e)
    }
}

// Dad Joke API Example
// ====================

// Select HTML elements
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

// Async function to get a joke and append it to the webpage
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

// Example of async function with axios and headers
// Here we need to configure the header to be able to access the API data
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}
// Add new joke on button click
button.addEventListener('click', addNewJoke)
