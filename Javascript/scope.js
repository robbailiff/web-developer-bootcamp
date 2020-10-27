
// Function Scope - cannot access variables outside of function
let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

const bird = 'Scarlet Macaw';
function birdWatch() {
    const bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch()

// Block Scope - cannot access variables outide of a code block (the curly braces)
// NB: the var keyword is scoped to functions but not to blocks
let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    var msg = 'Circle'
}
console.log(radius); // Can access - it is outside of block
console.log(PI); // Cannot access - inside of block
console.log(msg) // Can access - inside of block but var does not support block level scope

for (let i = 0; i < 5; i++) {
    let msg = "Hello World";
    console.log(msg)
}
console.log(msg)
console.log(i)

// Lexical Scope - variable defined outside a function can be accessible inside another function defined after the variable declaration
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            // The heroes variable is defined in the outer function but can still be accessed by the inner function
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}