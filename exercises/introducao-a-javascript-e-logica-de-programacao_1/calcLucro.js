// let valorCusto = -5;
// let valorVenda = 20;
// let imposto = 20;

// let impostoSobreCusto = (imposto / 100) * valorCusto;
// let valorCustoTotal = valorCusto + impostoSobreCusto;
// let lucro = valorVenda - valorCustoTotal;

// if (valorCusto < 0 || valorVenda < 0 || imposto < 0) {
//   return console.log('Erro, um ou mais valores inválidos');
// } else {
//   return console.log(lucro);
// }

function calcLucro(valorCusto, valorVenda, imposto){
  let impostoSobreCusto = (imposto / 100) * valorCusto;
  let valorCustoTotal = valorCusto + impostoSobreCusto;
  let lucro = valorVenda - valorCustoTotal;
  

  if (valorCusto < 0 || valorVenda < 0 || imposto < 0) {
    return console.log('Erro, um ou mais valores inválidos');
  } else {
    return console.log(lucro);
  }
}

console.log(calcLucro(5,20,20));