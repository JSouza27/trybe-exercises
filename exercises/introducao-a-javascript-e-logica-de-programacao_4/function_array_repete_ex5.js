// exercício feito com a ajuda do gabarito

function valorRpetido(numeros) {
  let contRep = 0;
  let contNum = 0;
  let indexNumeroRepetido = 0;

  for (let index in numeros){
    let verificaNumero = numeros[index];

    for (let index2 in numeros){
      if (verificaNumero === numeros[index2]){
        contNum++;
      }
    }
    if (contNum > contRep){
      contRep = contNum;
      indexNumeroRepetido = index;
    }
    contNum = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(valorRpetido([2, 3, 2, 5, 8, 2, 3]));