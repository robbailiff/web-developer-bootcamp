const express = require('express');
const app = express();
const morgan = require('morgan');

// Middleware logger
app.use(morgan('common'));

// User defined middleware to log the current time
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method);
    next();
})

// Middleware to log when I certain route is requested
app.use('/dogs', (req, res, next) => {
    console.log('I love dogs!')
    next();
})

// Middleware that check whether a password (actually a query) is correct to access content at a certain route
// NB - This is NOT how you actaully implement a password IRL
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget'){
        next();
    }
    res.send('Sorry you need a password');
}

app.get('/', (req, res) => {
    console.log(`Request Time: ${req.requestTime}`)
    res.send('Home Page!')
})

app.get('/dogs', (req, res) => {
    console.log(`Request Time: ${req.requestTime}`)
    res.send('Woof woof!')
})

// Can only access this route if the correct query is passed
app.get('/secret', verifyPassword, (req, res) => {
    console.log(`Request Time: ${req.requestTime}`)
    res.send('Coca Cola recipe')
})

// Define our own 404 handling middleware
// It will only run if none of the preceeding routes were matched
app.use((req, res) => {
    res.status(404).send('Not Found!')
})

app.listen(3000, () => {
    console.log('App is listening on localhost:3000')
})