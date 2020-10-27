
// Simple If/Else

let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5!!!")
} else {
    console.log("Your number is greater than 0.5!!!")
}
console.log(random);

// Prompt Example

const dayOfWeek = prompt('Enter A Day').toLowerCase();

if (dayOfWeek === 'monday') {
    console.log("Ughh, I hate Mondays!")
} else if (dayOfWeek === 'saturday') {
    console.log("Yay I love Saturdays!")
} else if (dayOfWeek === 'friday') {
    console.log("Fridays are decent, especially after work!")
} else {
    console.log("Meh")
}

// Ticket Price Example

const age = 890;

if (age < 5) {
    console.log("You are a baby. You get in for free!")
} else if (age < 10) {
    console.log("You are a child. You pay £10")
} else if (age < 65) {
    console.log("You are an adult. You pay £20")
} else {
    console.log("You are an OAP. You pay £10")
}

// Nesting Conditionals

const password = prompt("Please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("Password too short! Must be 6+ characters")
}



