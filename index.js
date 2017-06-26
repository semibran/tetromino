const states = require('./states')

exports.types = Object.keys(states)
exports.states = states
exports.blocks = function (piece) {
  var position = piece.position
  var cells = states[piece.type][piece.rotation]
  var length = cells.length
  var blocks = new Array(length)
  for (var i = 0; i < length; i++) {
    var cell = cells[i]
    blocks[i] = [cell[0] + position[0], cell[1] + position[1]]
  }
  return blocks
}
