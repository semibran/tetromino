var pieces = {
  I: require('./i'),
  J: require('./j'),
  L: require('./l'),
  O: require('./o'),
  S: require('./s'),
  T: require('./t'),
  Z: require('./z')
}

module.exports = pieces

var types = pieces.types = Object.keys(pieces)
for (var type of types) {
	var data = pieces[type]
	data.rotations = data.rotations.map(orientation => orientation.split('').reduce((result, char, index) => {
		if (char === '#') {
			var x = index % 4
			var y = (index - x) / 4
			var pos = [x, y]
			result.push(pos)
		}
		return result
	}, []))
}
