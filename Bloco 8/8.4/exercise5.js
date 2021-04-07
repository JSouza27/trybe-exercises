const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const sumLetterA = names.reduce((value, currValue) => value + currValue.split('').reduce((acc, curr) => {
    if(curr === 'a' || curr === 'A') return acc + 1; return acc;
  }, 0),0);

  return sumLetterA;
}

assert.deepStrictEqual(containsA(), 20);
// código criado com a ajuda do gabarito