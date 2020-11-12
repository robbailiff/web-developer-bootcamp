// The fetch() method allows you to make network requests similar to XMLHttpRequest (XHR) 
// The main difference is that the Fetch API uses Promises, which enables a simpler and cleaner API
// The big improvement comes when avoiding callback hell and having to remember the complex API of XMLHttpRequest


// The fetch() method takes one mandatory argument, the path to the resource you want to fetch. 
// It returns a Promise that resolves to the Response to that request, whether it is successful or not. 


// Example using promises, then and catch
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    // The json() method takes a Response stream and reads it to completion
    // It returns a promise that resolves with the result of parsing the body text as JSON
    .then(res => {
        console.log("RESPONSE, WAITING TO PARSE...", res)
        return res.json()
    })
    .then(data => {
        console.log("DATA PARSED...")
        console.log(data.ticker.price)
    })
    .catch(e => {
        console.log("OH NO! ERROR!", e)
    })

// Example using an async and await
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price)
    } catch (e) {
        console.log("SOMETHING WENT WRONG!!!", e)
    }
}