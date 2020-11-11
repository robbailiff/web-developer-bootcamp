
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains

// Asynchronous functions automatically return a promise
async function hello() {
}

// Example of an async arrow function
// The throw statement throws a user-defined exception, which can be a value or an error object e.g. throw new Error('Message')
// Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. 
// If no catch block exists among caller functions, the program will terminate.
const sing = async () => {
    throw "OH NO, PROBLEM!"
    return 'LA LA LA LA'
}

// Can use then() and catch() with any async function
sing()
    .then(data => {
        console.log("PROMISE RESOLVED WITH:", data)
    })
    .catch(err => {
        console.log("OH NO, PROMISE REJECTED!")
        console.log(err)
    })


// Define an async function to simulate a login
// On the first line, it throws an error if the username or password are wrong
// On the second line, it returns a welcome message if the passwors is correct
// On the third line, it throws an error if the password was incorrect
const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

// Pass the login details to the async function
// If successful it returns the promise resolved string ('WELCOME!')
// If there is an error it returns the promise rejected string ('Missing Credentials' or 'Invalid Password')
login('todd', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })


// The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected) 
// It then resumes the execution of the async function after fulfillment and the value of the await expression is that of the fulfilled Promise


// Function with a promise
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// Chained callback using promise and then
delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))

// Async function with await keyword
async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"
}

// Can use then() to callback the async function
rainbow().then(() => console.log("END OF RAINBOW!"))

// Or can create a new async function with await
async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!")
}
// Then call it explicitly
printRainbow();

// Fake Request Example
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// This function awaits a request and then stores the returned data in a variable
// If the fakeRequest() promise is rejected it will terminate the program, so it is placed in a try/catch blocks
async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }
}
