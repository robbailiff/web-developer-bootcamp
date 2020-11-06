
// The idea of event delegation is simple. Instead of attaching the event listeners directly to the buttons, you delegate listening to the parent 
// When a button is clicked, the listener of the parent element catches the bubbling event

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

// Using the event delegation requires 3 steps:
// 1. Determine the parent of elements to watch for events
// 2. Attach the event listener to the parent element
// 3. Use event.target to select the target element

// Here you need to specifically click on an <li> element (newTweet) in order for it to be removed
// If you clicked on any other element in the container, it would not remove it
// However, if you didn't have e.target.nodeName === 'LI' in the code, it would remove any element clicked within the tweetsContainer

tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})
