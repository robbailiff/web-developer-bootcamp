// During the the Promise function declaration, the constructor executes a function called the executor. 
// The executor is custom code that ties an outcome to a promise. You, the programmer, write the executor.  
// The signature of this function is expected to be function(resolve, reject)
// At the time when the constructor generates the new promiseObj, it also generates a corresponding pair of functions for resolve and reject
// The actual names of these functions can be whatever is desired, i.e. they are named as the parameters of executor

// A pending promise can either be fulfilled with a value or rejected with a reason (error). 
// When either of these options happens, the associated handlers queued up by a promise's then method are called. 

// Example of defining a function with a promise
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!');
        }, 1000)
    })
}

// // Can use then() and catch() when calling the promise function
fakeRequest('/dogs/1')
    .then((data) => {
        console.log("DONE WITH REQUEST!")
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log("OH NO!", err)
    })

// Example of a callback function
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

// Example of callback hell
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    delayedColorChange('indigo', 1000, () => {
                        delayedColorChange('violet', 1000, () => {

                        })
                    })
                })
            })
        })
    })
});

// Define a new function with a promise
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// Much cleaner code using arrow functions with implicit return
delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))