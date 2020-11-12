// Select the form
const form = document.querySelector('#searchForm');
// When the form is submitted, execute a function which submits our search query, makes a request to the API, then gets a response and parses it
// Then it executes the make image function to add the result images to the page and then empties the search box
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})
// Function to extract the image from the returned data and add it to the page
const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}