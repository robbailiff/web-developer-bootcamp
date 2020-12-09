const express = require("express");
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");
const app = express();

// This tells the app to parse url encoded payloads (i.e. form submits)
app.use(express.urlencoded({ extended: true }));
// This tells the app to parse json payloads
app.use(express.json());
// HTML forms only submit get & post by default. This will allow us to use other methods such as Put, Patch or Delete
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Fake data
let comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "LOL that is so funny!!!"   
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: "I like to go bird watching with my dog"   
    },
    {
        id: uuid(),
        username: "Sk8erBoi",
        comment: "Plz delete your account Todd"   
    },
    {
        id: uuid(),
        username: "onlysaywoof",
        comment: "woof woof woof"   
    }
]

// Index route (get all comments)
app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
})

// New route (gets form to create new comment)
app.get("/comments/new", (req, res) => {
    res.render("comments/new");
})

// Create route (creates new comment and adds to array)
app.post("/comments", (req, res) => {
    const { username, comment} = req.body;
    // Adds the form data to the data array
    comments.push({ username, comment, id: uuid() });
    // After a post request you need to redirect to avoid posting the form multiple times
    // The default redirect is a GET request
    res.redirect("/comments");
})

// Show route (get one specific comment)
app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    // Use the find array method and pass in a function which returns true if a comment id is the same the url argument id
    const comment = comments.find(c => c.id === id);
    res.render("comments/show", { comment });
})

// Edit route (gets form to update an existing comment)
app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", { comment });
})

// Update route (update an existing comment)
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    // Save the new comment in the payload to a variable
    const newCommentText = req.body.comment;
    // Find the comment with a particular id
    const foundComment = comments.find(c => c.id === id);
    // Update the found comment text to be the same as the new comment
    foundComment.comment = newCommentText;
    // Finally redirect back the index
    res.redirect("/comments");
})

// Delete route
app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    // Filters out the selected id and returns a new array with all other comments inside
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments");
})

app.get("/tacos", (req, res) => {
    res.send("GET /tacos response");
})

app.post("/tacos", (req, res) => {
    const { meat, qty} = req.body;
    res.send(`Here are your ${qty} ${meat} tacos`);
})

app.listen(3000, () => {
    console.log("Listening on port 3000...")
})