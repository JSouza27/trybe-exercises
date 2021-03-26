const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
   greeting.push( `Hello ${people[person]}`);
  }
  return greeting;
};

assert.strictEqual(typeof greetPeople, 'function');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);

