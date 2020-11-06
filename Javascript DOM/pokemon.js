
// The images all follow the naming convention below
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// The base URL for which numbers can be appended
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// Select the container where the images will be created
const container = document.querySelector('#container');

// Loop which iterates 151 times (the number of pokemon) and creates a div with the class of pokemon for each item
// It then gives it a label (current number) and then sets the source to the base URL plus the current number
for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`

    // Append the image and label to the pokemon div
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    // Append the pokemon div to the container
    container.appendChild(pokemon)
}
