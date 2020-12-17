const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection Open")
    })
    .catch(err => {
        console.log("An error has occurred!")
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// Models are fancy constructors compiled from Schema definitions which create a collection in the DB
// By convention the name of the collection (first argument) should be capitalised
// When mongoose creates the model it pluralises it so 'Movie' => 'movies'
// The variable is a model-class (a template for new Movie objects)
const Movie = mongoose.model('Movie', movieSchema);

// Create an instance of the model (called a document)
const amadeus = new Movie({title: "Amadeus", year: 1986, score: 9.2, rating:"R"})

// insertMany returns a promise
Movie.insertMany([
        { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
        { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
        { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
        { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
        { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
    ])
.then(data => {
    console.log("Items saved to database")
    console.log(data)
})