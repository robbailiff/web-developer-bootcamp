// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}

// All keys will be turned into strings!

// To retrieve a value:
dog.age; // returns 7
dog["age"]; // returns 7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

// Add new values
dog['legs'] = 4;

// Can add arrays into an object using bracket notation
dog['favFood'] = ["bones","scraps", "catfood"];
dog.favFood[1] // returns "scraps"

// Or can add arrays into an object using dot notation
dog.friends = ["Fido", "Rover"];
dog.friends[0] // returns "Fido"

// Can also nest objects within arrays
const dogs = [
    {
        name: "Ben",
        age: 7,
        breed: "Collie"
    },
    {
        name: "Rex",
        age: 7,
        breed: "Ladrador"
    },
    {
        name: "Ted",
        age: 7,
        breed: "Mixed"
    }
]
