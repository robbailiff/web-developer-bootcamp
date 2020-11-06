
// Create a simple colour selector on a button click
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgbColour = `rgb(${red}, ${green}, ${blue})`
    document.body.style.backgroundColor = rgbColour;
    h1.innerText = rgbColour;
})