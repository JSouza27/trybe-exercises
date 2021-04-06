const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const reduced = arrays.reduce((acc, value) => 
    acc.concat(value), []);
    return reduced;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);