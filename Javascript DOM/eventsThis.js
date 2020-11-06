
// Define a function pick a random colour
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// To use this function on different selections, need to repeat the code within each for loop (commented out)
// Or we could create a generic function which uses the 'this' keyword to refer to the specific instance

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize)
    // button.style.backgroundColor = makeRandColor();
    // button.style.color = makeRandColor();
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
    // h1.style.backgroundColor = makeRandColor();
    // h1.style.color = makeRandColor();
}

// Function to apply text and background colour to an element
// 'This' refers to the current object it is being called on
function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
