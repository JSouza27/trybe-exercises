function menorValor(numbers){
  for(let index = 0; index < numbers.length; index += 1){
    let min = Math.min(...numbers);
    if (numbers[index] == min){
      return (index);
    }
  }
};

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));