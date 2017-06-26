# tetromino
> Minimal data structures for representing [tetrominos](https://en.wikipedia.org/wiki/Tetromino)

![The seven tetrominos](img/tetrominos.png)

## install
```sh
npm install tetromino
```

## usage
```js
const { types, states, blocks } = require('tetromino')
```

A tetromino can be represented as an object with the three fields `type`, `rotation`, and `position`.
```js
var tetromino = {
  type: 'L',
  position: [3, 0],
  rotation: 0
}
```

From this information, we can easily determine the location of each of the four cells that the tetromino occupies.
```js
> blocks(tetromino)
[ [ 3, 1 ], [ 4, 1 ], [ 5, 1 ], [ 5, 0 ] ]
```

### type
The `type` of a tetromino is a single character denoting its unique name. The image above lists the tetrominos in the order `[I, J, L, O, S, T, Z]` - in fact, this particular array is exposed as `types`:
```js
> types
[ 'I', 'J', 'L', 'O', 'S', 'T', 'Z' ]
```
This array may be used to choose a random tetromino to spawn.
```js
> types[Math.floor(Math.random() * types.length)]
'S'
```

### rotation
A tetromino's `rotation` is a zero-based index corresponding to a "rotation state" found in `states`. Most tetrominos have 4 rotation states, with the `O` piece being the exception. It only has one state and therefore cannot rotate.
```js
> states.J.length
4

> states.O.length
1
```

### position
The `position` of a tetromino is a two-dimensional vector of the form `[x, y]`. Since the center point of each tetromino will vary, `position` is relative to the top-left point of the 4x4 region containing the piece.

![4x4 region](img/tetromino.png)

### states
The `states` object details the locations of each cell of the desired tetromino relative to this point in compliance with the [SRS](http://tetris.wikia.com/wiki/SRS).

Use it by specifying both [a tetromino type](#type) and [a rotation index](#rotation).
```js
> states[tetromino.type][tetromino.rotation]
[ [ 0, 1 ], [ 1, 1 ], [ 2, 1 ], [ 2, 0 ] ]
```

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
