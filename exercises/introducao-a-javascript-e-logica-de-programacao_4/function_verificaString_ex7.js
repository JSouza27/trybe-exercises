//codigo criado com a ajuda do documeto de javascrip do site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

function verificaFimPalavra(word, ending){
  return word.endsWith(ending);
}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));