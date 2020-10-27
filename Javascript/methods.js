
// Methods are functions that have been added as a property of an object

const myMath = {
    // Syntax for method definition
    square: function(num) {
        return num * num;
    },
    // Shorthand syntax for methods
    cube(num) {
        return num ** 3;
    }
}

// Square Geometry Exercise
const square = {
    area(side) {
        return Math.pow(side, 2);
    },
    perimeter(side) {
        return side * 4;
    }
}

// The 'this' keyword in an object refers to the owner object
// Here 'this' refers to the 'cat' object
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

// However, it has different values depending on where it is used:

// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.

// Object This Exercise
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG";
    }
}