const assert = require('assert');

const greaterThanTen = (array) => {
  let results = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results += array[index];
    }
  }
  return results;
};

assert.strictEqual(typeof greaterThanTen, 'function');