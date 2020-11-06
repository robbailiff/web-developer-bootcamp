
// Select all the anchor tags and change the link texts on all of them
const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}

// The style property is used to get as well as set the inline style of an element
// If the applied CSS is not inline, it returns an empty string
// Properties use camel case instead of CSS syntax
for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// Use to get the applied CSS from a separate file
window.getComputedStyle(h1);

// Can access the properties off the selection
window.getComputedStyle(h1).color;
window.getComputedStyle(h1).fontSize;

// Can set an element's class attribute to a style in a stylesheet
const h2 = document.querySelector('h2');
// The classList() method returns a collection of the class attributes of the element
// It is read-only, although you can modify it using the add() and remove() methods
// NB: Can also use the syntax => h2.setAttribute('class', 'purple')
h2.classList.add('purple');
h2.classList.add('border');
h2.classList.remove('border');

// Can turn classes on and off with the toggle() method
h2.classList.toggle('purple');

// Exercises

// Select the  id of container using JavaScript and set it's text alignment to 'center'
const container = document.querySelector('#container');
container.style.textAlign = 'center';

// Select the image and use JavaScript to give it a width of 150px and a border radius of 50%
const image = document.querySelector('img');
image.style.width = '150px';
image.style.borderRadius = '50%';

// Select all spans, iterate over them, and assign them each one of the colors from the colors array
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

const spans = document.querySelectorAll('span');

let count = 0;
for (let span of spans) {
    span.style.color = colors[count];
    count++;
}

// Iterate over all the <li> elements and toggle the class of 'highlight' on each one
const list = document.querySelectorAll('li');

for(let item of list) {
    item.classList.toggle('highlight');
}