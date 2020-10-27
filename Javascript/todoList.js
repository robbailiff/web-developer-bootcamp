// Input to take user commands ==> new, list, delete or quit
let input = prompt('what would you like to do?');
// To-do List stores as an array
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
// Main loop runs until you quit
while (input !== 'quit' && input !== 'q') {
    // Loops through todos array and returns all the entries
    if (input === 'list') {
        console.log('*****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************')
      // Creates a new item and adds it to the todos array
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
      // Select an index number in the array corresponding to the list item to delete
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        // Will only accept a valid number or will return 'Unknown index' message
        if (!Number.isNaN(index)) {
            // Splice deletes 1 item from the user index and returns an array with one item in it
            const deleted = todos.splice(index, 1);
            // Use deleted[0] to access the first (and only) element in the array
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    // Input to continue issuing commands (in the main loop)
    input = prompt('what would you like to do?')
}
// Display message after existing the main loop
console.log('OK QUIT THE APP!')