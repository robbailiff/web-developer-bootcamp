const express = require("express");
const app = express();

// This code responds to every single request
// A request only receives one response, so this stops other more specific requests from being responded to differently
// app.use((req, res) => {
//     console.log("We got a new request.");
//     res.send("Hello, we got your request. This is a response.")
// })

app.get('/', (req,res) => {
    res.send("Welcome to the home page.")
})

// The colon defines a route parameter typed in by the user
// e.g. if we typed in 'r/horses', the route parameter would be 'horses'
app.get("/r/:subreddit", (req, res) => {
    console.log(req.params);
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

// Can add multiple variables to a route
app.get("/r/:subreddit/:postId", (req, res) => {
    console.log(req.params);
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send("Post request to cats.")
})

app.get('/cats', (req,res) => {
    res.send("Meow!")
})

app.get('/dogs', (req,res) => {
    res.send("Woof!")
})

app.get('/search', (req, res) => {
    console.log(req.query);
    const {q} = req.query;
    if(!q){
        res.send("Nothing found if nothing searched!")
    }
    res.send(`<h1>Search result for: ${q} </h1>`)
})

// The star as an argument catches any routes that are not defined/handled
// It must be placed after the routes in the script
app.get('*', (req, res) => {
    res.send("I don't know that route!")
})

app.listen(3000, () => {
    console.log("Listening on port 3000...")
})