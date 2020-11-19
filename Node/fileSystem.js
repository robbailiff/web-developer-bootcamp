// Example of Node File System Module

// The fs module needs require('fs') in order to be used and is not present by default
const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// Example of async version of mkdir
fs.mkdir('Dogs', { recursive: true }, (err) => {
    console.log("IN THE CALLBACK!!")
    if (err) throw err;
});
// This gets executed first before the callback console.log() because it fs.mkdir is asynchronous and doesn't pause the code
console.log("I come after the mkdir command!")

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}