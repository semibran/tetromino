var pieces = {
  I: require('./i'),
  J: require('./j'),
  L: require('./l'),
  O: require('./o'),
  S: require('./s'),
  T: require('./t'),
  Z: require('./z')
}

pieces.types = Object.keys(pieces)
module.exports = pieces
