// let a = 10;
// let b = 29;
// let c = 5;

// if (a > b && a > c) {
//   return console.log(a);
// }
// else if (b > a && b > c) {
//   return console.log(b);
// }
// else {
//   return console.log(c);
// }

function retornarMaiorValor(a,b,c){
  if (a > b && a > c) {
    return console.log(a);
  }
  else if (b > a && b > c) {
    return console.log(b);
  }
  else {
    return console.log(c);
  }
}

console.log(retornarMaiorValor(10,29,5));