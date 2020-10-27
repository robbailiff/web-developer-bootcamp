// Subreddit Example
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// For Loop Syntax
for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

// For Of Loop Syntax
for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}

// Nested Array Example
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// For Loop Syntax
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

// For Of Loop Syntax ==> Much cleaner
for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

// For Of Loop String Example
for (let char of "hello world") {
    console.log(char)
}
