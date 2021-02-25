let pecaXadrez = 'Torre';
let minisculo = pecaXadrez.toLowerCase();

switch (minisculo) {
  case 'torre':
    return console.log('torre -> horizontal ou vertical');
    break;
  
  case 'cavalo':
    return console.log('cavalo -> horizontal ou vertical');
    break;

  case 'bispo':
    return console.log('bispo -> diagonal');
    break;

  case 'rei':
    return console.log('rei -> qualquer direção');
    break;

  case 'rainha':
    return console.log('rainha -> quaquer direção');
    break;

  case 'peão':
    return console.log('peão -> vertical');
    break;

  default:
    return console.log('nome da peça inválida');
}