const longestWord = (string) => {
  const newArray = string.split(' ');
  let word = newArray.sort((a, b) => b.length - a.length)[0];
  
  return word;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
