// let nota = 101;
// let porcentagem = nota / 100 * 100;

// if (porcentagem >= 90 && porcentagem <= 100){
//   return console.log('A');
// }
// else if (porcentagem >= 80 && porcentagem < 90){
//   return console.log('B');
// }
// else if (porcentagem >= 70 && porcentagem < 80){
//   return console.log('C');
// }
// else if (porcentagem >= 60 && porcentagem < 70){
//   return console.log('D');
// }
// else if (porcentagem >= 50 && porcentagem < 60){
//   return console.log('E');
// }
// else if (porcentagem < 50 && porcentagem >= 0){
//   return console.log('F');
// }
// else {
//   return console.log('nota inválida, o programa será encerrado!');
// }

function conversorDeNota(nota){
  let porcentagem = nota / 100 * 100;

  if (porcentagem >= 90 && porcentagem <= 100){
    return console.log('A');
  }
  else if (porcentagem >= 80 && porcentagem < 90){
    return console.log('B');
  }
  else if (porcentagem >= 70 && porcentagem < 80){
    return console.log('C');
  }
  else if (porcentagem >= 60 && porcentagem < 70){
    return console.log('D');
  }
  else if (porcentagem >= 50 && porcentagem < 60){
    return console.log('E');
  }
  else if (porcentagem < 50 && porcentagem >= 0){
    return console.log('F');
  }
  else {
    return console.log('nota inválida, o programa será encerrado!');
  }
}

console.log(conversorDeNota(75));