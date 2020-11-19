let franc = require('franc')
let langs = require('langs');

const sentence = process.argv[2];
const code = franc(sentence);

try {
    const language = langs.where("3", code);
    console.log(`We think the language is: ${language.name}`);
} catch (e) {
    console.log("The language is not recognised!");
}
