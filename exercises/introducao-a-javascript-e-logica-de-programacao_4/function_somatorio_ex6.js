function somatorio(n){
  let base = 0;

  for (let i = 1; i <= n; i +=1){
    base = base + i;
  }
  return base;
}

console.log(somatorio(5));