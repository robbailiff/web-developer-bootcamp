// When you require a directory it looks for an index.js file to execute
const blue = require('./blue')
const sadie = require('./sadie')
const janet = require('./janet')

const allCats = [blue, sadie, janet]

module.exports = allCats;