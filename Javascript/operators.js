
// And Operator
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid Password!")
} else {
    console.log("Incorrect format for a password!")
}

// Age Example
const age = 100;
if ((age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("$20")
} else {
    console.log("Invalid age!")
}

// Not Operator
const firstName = prompt("Enter your first name");
if(!firstName) {
    firstName = prompt("Please try again");
}

// Combining &&, || and NOT
const age = 8;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You are not a baby or an OAP!")
}



