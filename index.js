const states = require('./states')

exports.types = Object.keys(states)
exports.states = states
exports.blocks = function blocks(piece) {
  return states[piece.type][piece.rotation].map(offset)
  function offset(cell) {
    return [cell[0] + piece.position[0], cell[1] + piece.position[1]]
  }
}
