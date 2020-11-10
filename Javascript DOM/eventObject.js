
//When an event occurs in HTML, the event belongs to a certain event object, like a mouse click event belongs to the MouseEvent object
// All event objects are based on the Event Object, and inherit all of their properties and methods

// Can print out the event object by passing the user defined argument 'evt' (it can be called anything) to the callback function of the event
document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

// The KeyboardEvent.key is a read-only property which returns the value of the key pressed by the user
// The KeyboardEvent.code property represents a physical key on the keyboard (as opposed to the character generated by pressing the key)
const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
    console.log(e.key)
    console.log(e.code)
})
input.addEventListener('keyup', function () {
    console.log("KEYUP")
})

// Create a switch statement that only does something when specific keys on the keyboard are pressed
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
    }
})