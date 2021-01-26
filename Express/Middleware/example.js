const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('common'));

// Define our own middleware which runs on every request
// The next() function executes the middleware succeeding the current middleware
// If next() is not called, the next middleware will not be executed
app.use((req, res, next) => {
    console.log('This is my first middleware!')
    next();
    // This doesn't run until next() has been resolved
    console.log('This is my first middleware after calling next()')
})
app.use((req, res, next) => {
    console.log('This is my second middleware!')
    next();
})
app.use((req, res, next) => {
    console.log('This is my third middleware!')
    next();
})

app.get('/', (req, res) => {
    res.send('Home Page!')
})

app.get('/dogs', (req, res) => {
    res.send('Woof woof!')
})

app.listen(3000, () => {
    console.log('App is listening on localhost:3000')
})