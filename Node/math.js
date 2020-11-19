// Example file to be used with module.export

const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

exports.square = square;
exports.PI = PI;

// Need to specific what we want to export
// This allows it to be used in another file
// Can also add all the methods and properties to a single object and export that instead
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;


