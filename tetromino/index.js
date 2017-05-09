module.exports = Tetromino
Tetromino.blocks = blocks
Tetromino.states = require('./states')
Tetromino.types = Object.keys(Tetromino.states)

function Tetromino(type) {
	return {
		type: type,
		position: null,
		rotation: null
	}
}

function blocks(tetromino) {
	return Tetromino.states[tetromino.type][tetromino.rotation].map(offset)
	function offset(cell) {
		return { x: cell.x + tetromino.position.x, y: cell.y + tetromino.position.y }
	}
}
