// Object literal is not considered an iterable by Javascript
// This means you cannot use a For Of Loop

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// Use FOR...IN to iterate an object

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// Using Object methods to iterate
// Turn data into an array with Object.values() method and then use for...of

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)
