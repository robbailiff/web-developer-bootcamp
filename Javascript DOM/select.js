// Selects a single element based on #id
const banner = document.getElementById('banner');

// Selects all the elements with the specified tag
const allImages = document.getElementsByTagName('img');

// Loop over each image and print out the source
for (let img of allImages) {
    console.log(img.src);
}

// Selects all the elements with the specified .class
const squareImages = document.getElementsByClassName('square');

// Changed the source of all the images with the square class
for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

// The Document method querySelector() returns the first Element within the document that matches the specified selector
const firstSquare = document.querySelector('.square');
// Can chain CSS selectors together to get more specific elements
const secondSquare = document.querySelector('.square:nth-of-type(2)')

// The Element method querySelectorAll() returns a collection of elements matching the specified group of selectors
const links = document.querySelectorAll('p a');

// Loop over each link and print out the source
for (let link of links) {
    console.log(link.href)
}