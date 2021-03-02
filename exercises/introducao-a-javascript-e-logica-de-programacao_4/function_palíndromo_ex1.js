function verificaPalindrome(palavra){
  if (palavra.charAt(0) === palavra.substring(palavra.length -1)){
    return true;
  }else {
    return false;
  }
}

console.log(verificaPalindrome('desenvolver'));
