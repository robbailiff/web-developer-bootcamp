// JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages
// The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON

// Example of a JSON text string
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`

// We can use the JSON.parse() method to parse the JSON string into a Javascript Object
const parsedData = JSON.parse(data);

// Example car object
let car = {
    make: "Ford",
    model: "Fiesta",
    colour: "Silver",
    doors: 5,
    mileage: 55000
}

// Can also turn objects into JSON strings using JSON.stringify() method
let str = JSON.stringify(car)
console.log(str)