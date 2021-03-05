// let numbers = [2, 3, 6, 7, 10, 1];

function maiorValor(numbers){
  for (let index = 0; index < numbers.length; index += 1) {
    let max = Math.max(...numbers);
    if (numbers[index] == max){
      return (index);
    }
  }
};

console.log(maiorValor([2, 3, 6, 7, 10, 1]));