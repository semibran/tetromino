const fs = require('fs')
const Tetromino = {
  I: require('./i'),
  J: require('./j'),
  L: require('./l'),
  O: require('./o'),
  S: require('./s'),
  T: require('./t'),
  Z: require('./z')
}

for (let type in Tetromino)
	Tetromino[type] = Tetromino[type].map(layout => layout.split('').reduce(reducer, []))

var result = JSON.stringify(Tetromino).replace(/"/g, '')

fs.writeFile('lib/index.js', `module.exports=${result}`, err => {
	if (err)
		throw err
})

function reducer(layout, char, index) {
	var x = index % 4
	var y = (index - x) / 4
	if (char === '#')
		layout.push({ x, y })
	return layout
}
