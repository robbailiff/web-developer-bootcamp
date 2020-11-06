const btn = document.querySelector('#v2');

// Define a function to be executed when the btn element is clicked
btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

// Define a stand alone function to be called by an event
function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

// Executes the scream() function when a mouse enters the btn element
btn.onmouseenter = scream;

// Can add events on elements other than buttons such as a h1
document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

// It is RECOMMENDED to use the addEventListener() instead of other event properties
// Use addEventListener() to add multiple callback functions for an event. Event properties e.g. onclick() can only have one value
// Can also add options as a third argument for addEventListener() to add extra customisation

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
