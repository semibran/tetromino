const states = require('./states')

exports.blocks = blocks
exports.states = states
exports.types = Object.keys(states)

function blocks(piece) {
	return states[piece.type][piece.rotation].map(offset)
	function offset(cell) {
		return { x: cell.x + piece.position.x, y: cell.y + piece.position.y }
	}
}
