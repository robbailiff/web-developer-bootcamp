
// Select the form elements
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    // preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be
    // In this case it just stops the page trying to change
    e.preventDefault();

    // Can select input individually but this is cumbersome for lots of values
    const usernameInputS = document.querySelectorAll('input')[0];
    const tweetInputS = document.querySelectorAll('input')[1];

    // Can instead access it through the elements property which links to the name attribute in our HTML
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

// Function to add a new tweet
const addTweet = (username, tweet) => {
    // Create new list and bold tag elements
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    // Append the username to the bold tag => <b>Username</b>
    bTag.append(username)
    // Then append the bold tag to the list tag and append the tweet text => <b>Username</b> - Tweet text</li>
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    // Append the new tweet to the main page
    tweetsContainer.append(newTweet);
}

