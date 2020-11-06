const h1 = document.querySelector('h1');
const input = document.querySelector('input');

// The input event fires when the value of an <input>, <select>, or <textarea> element has been changed
input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})

// The change event is fired for <input>, <select>, and <textarea> elements when an alteration to the element's value is committed by the user
input.addEventListener('change', function (e) {
    console.log("CHANGE!")
})

// Depending on the kind of element being changed and the way the user interacts with the element, the change event fires at a different moment:

// 1. When the element is :checked (by clicking or using the keyboard) for <input type="radio"> and <input type="checkbox">;
// 2. When the user commits the change explicitly (e.g., by selecting a value from a <select>'s dropdown with a mouse click, 
//    by selecting a date from a date picker for <input type="date">, by selecting a file in the file picker for <input type="file">, etc.);
// 3. When the element loses focus after its value was changed, but not commited (e.g., after editing the value of <textarea> or <input type="text">).
