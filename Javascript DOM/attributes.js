
// The Element.attributes property returns a live collection of all attributes registered to the specified element
// Each attribute is a key/value pair of strings that represents any information regarding that attribute

// Banner Example

// Select the banner tag
document.querySelector('#banner')

// Select the banner tag and change it's id attrubute
document.querySelector('#banner').id = 'newbanner'

// Return the href link of an anchor tag
document.querySelector('a').href

// Return the src link of the banner class
document.querySelector('#banner').src

// Href Example

// A selection can be saved to variable and the attributes can be accessed from the variable
const firstLink = document.querySelector('a')

// Can access attributes the .attribute syntax
firstLink.href

// Can use the getAttribute() method which simply returns the value of a specified attribute on the element
firstLink.getAttribute('href')

// Can use the setAttribute() method which changes the value of an attribute on the specified element
firstLink.setAttribute('href', 'http://www.google.com')

// Input Example

// Can use CSS selections syntax to select specific elements
const input = document.querySelector('input[type="text"]')

// Can see the input type (text here)
input.type

// Change the input from text to password
input.type = "password"

// Change it back again using the setAttribute() method
input.setAttribute('type','text')


​

