
// Try Catch Example
try {
    hello.toUpperCase();
} catch {
    console.log("ERROR!!!!")
}
hello.toUpperCase();

console.log("AFTER!")

// Try Catch In A Function
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please pass a string next time!")
    }
}