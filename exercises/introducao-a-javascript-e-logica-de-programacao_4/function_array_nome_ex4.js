function maiorNome(str){
  for(index in str){
    if (str[index].length > str.length){
      return str[index];
    }
  };
};

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

