// AJAX stands for Asynchronous JavaScript And XML and is a method of making HTTP Requests with Javascript
// AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes
// This means that it is possible to update parts of a web page, without reloading the whole page
// The name is misleading since modern implementations commonly utilize JSON instead of XML

// This is the old way of making requests and is very clunky
// Also do not support promises

// Example of making an XMLHTTP Request

// Create a request object
const req = new XMLHttpRequest();
// Callback function to execute on successful load
req.onload = function () {
    console.log("ALL DONE WITH REQUEST!!!")
    console.log(this);
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}
// Callback function to execute if an error occurs
req.onerror = function () {
    console.log("ERROR!!!")
    console.log(this);
}
// Finally open and send the request
req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send();