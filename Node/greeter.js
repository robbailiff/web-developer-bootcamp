// Remove first 2 elements of the array (which are file paths), then pass arguments written in the command line to the for-of loop
// Here, it just prints "Hi there" plus a name passed as an argument
const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}

