const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// Virtuals are document properties that you can get and set but that do not get persisted to MongoDB
// The getters are useful for formatting or combining fields
// Can also use setters which are useful for de-composing a single value into multiple values for storage
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

// Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions
personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!!")
})
personSchema.post('save', async function () {
    console.log("JUST SAVED!!!!")
})


const Person = mongoose.model('Person', personSchema);


