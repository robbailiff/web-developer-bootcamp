//The innerHTML property sets or returns the HTML content (inner HTML) of an element.
// It returns the text, including all spacing and inner element tags

// Get the HTML content of a <p> element with id="myP"
let x = document.getElementById("myP").innerHTML; 


// The innerText property sets or returns the text content of the specified node, and all its descendants
// It returns just the text, WITHOUT spacing and inner element tags

// Get only the text of a <p> element with id="myP"
let x = document.getElementById("myP").innerText; 


// The textContent property sets or returns the text content of the specified node, and all its descendants.
// It returns the text with spacing, but without inner element tags

// Get the text content of a <p> element with id="myP"
let x = document.getElementById("myP").textContent; 


// Summary of the differences between the innner Text and textContext properties:

// textContent returns the text content of all elements, while innerText returns the content of all elements, except for <script> and <style> elements
// innerText will not return the text of elements that are hidden with CSS (textContent will)