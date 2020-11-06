
// Event bubbling is a type of event propagation in the HTML DOM API
// It happens when an event occurs inside nested elements, and both elements have registered a handle for that event
// With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

// In the example below, we want to change the container colour when the button is clicked or hide it if anywhere else is clicked
// Event bubbling causes the whole div to hide when anywhere in the div is clicked, including the button and we don't see the colour change
// We can solve this issue by using the stopPropagation() method on the button click event to prevent it from 'bubbling up' and activating the container click event

const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    // The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases
    e.stopPropagation();
})
container.addEventListener('click', function () {
    container.classList.toggle('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}