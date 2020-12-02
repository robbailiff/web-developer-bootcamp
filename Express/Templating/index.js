const express = require("express");
const path = require("path");
const app = express();
const redditData = require("./data.json");

// Location of directory where static files such as images, CSS files, and JS files are stored
// Set up the location to avoid file path issues
app.use(express.static(path.join(__dirname,'public')));

// EJS is a simple templating language that lets you generate HTML markup with plain JavaScript
// This command sets the app to use EJS, meaning we don't need to "require" it
app.set("view engine", "ejs");

// Set up the views location (by default it is current working directory)
// This takes our current directory name (__dirname) and joins it with /views to create a new filepath
// It is best practice to do this to make sure the views folder is accessible regardless of current working directory
app.set("views", path.join(__dirname, "/views"));

// When you call render() you can use just the name if you set the engine as ejs and are using the default /views folder
// i.e. You can write res.render("home") rather than having to write res.render("views/home.ejs")
app.get("/", (req, res) => {
    res.render("home");
})

app.get("/cats", (req, res) => {
    const cats = ["Blue", "Rocket", "Monty", "Clyde", "Barry"];
    res.render("cats", { cats });
})


app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    // Access the corresponding subreddit data object from the data.json file
    const data = redditData[subreddit];
    if (data) {
        // ...data syntax is spreading the data which allows access to the objects sub properties in the template
        res.render("subreddit", { ...data });
    } else {
        res.render("notfound", { subreddit });
    }
});

app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // The object makes the value of num available to the template under the name rand
    // You can also just pass the name of the variable in as {num}, which is effectively the same as {num: num}
    res.render("random", {rand: num}); 
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
});