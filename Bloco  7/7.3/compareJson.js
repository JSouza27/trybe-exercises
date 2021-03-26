const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
assert.deepStrictEqual(obj1, obj2, 'Erro: obj are not strictly the same');
assert.deepStrictEqual(obj1, obj3, 'Erro: obj are not strictly the same');
assert.notDeepStrictEqual(obj3, obj2, 'Error: object values ​​are strictly equal');

