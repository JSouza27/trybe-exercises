// let salarioBruto = 9000;

// let aliquotaInss_8 = salarioBruto * 0.08;
// let aliquotaInss_9 = salarioBruto * 0.09;
// let aliquotaInss_11 = salarioBruto * 0.11;
// let aliquotaInss_max = 570.88;

// switch (true) {
//   case (salarioBruto <= 1556.94):
//     salarioBase = salarioBruto - aliquotaInss_8;
//     break;

//   case (salarioBruto >= 1556.95 && salarioBruto <= 2594.92):
//     salarioBase = salarioBruto - aliquotaInss_9;
//     break;

//   case (salarioBruto >= 2594.93 && salarioBruto <= 5189.82):
//     salarioBase = salarioBruto - aliquotaInss_11;
//     break;

//   case (salarioBruto > 5189.82):
//     salarioBase = salarioBruto - aliquotaInss_max;
//     break;
// }

// let aliquotaIR_7_5 = salarioBase * 0.075;
// let aliquotaIR_15 = salarioBase * 0.15;
// let aliquotaIR_22_5 = salarioBase * 0.225;
// let aliquotaIR_27_5 = salarioBase * 0.275;

// switch (true) {
//   case (salarioBase <= 1903.98):
//     valorIR = 0;
//     break;

//   case (salarioBase >= 1903.99 && salarioBase <= 2826.65):
//     valorIR = aliquotaIR_7_5 - 142.80;
//     break;

//   case (salarioBase >= 2826.66 && salarioBase <= 3751.05):
//     valorIR = aliquotaIR_15 - 354.80;
//     break;

//   case (salarioBase >= 3751.06 && salarioBase <= 4664.68):
//     valorIR = aliquotaIR_22_5 - 636.13;
//     break;

//   case (salarioBase > 4664.68):
//     valorIR = aliquotaIR_27_5 - 869.36;
//     break;
// }

// let salarioLiquido = salarioBase - valorIR;

// console.log(salarioLiquido);

function salarioAReceber(salarioBruto){

  let aliquotaInss_8 = salarioBruto * 0.08;
  let aliquotaInss_9 = salarioBruto * 0.09;
  let aliquotaInss_11 = salarioBruto * 0.11;
  let aliquotaInss_max = 570.88;
  
  switch (true) {
    case (salarioBruto <= 1556.94):
      salarioBase = salarioBruto - aliquotaInss_8;
      break;
  
    case (salarioBruto >= 1556.95 && salarioBruto <= 2594.92):
      salarioBase = salarioBruto - aliquotaInss_9;
      break;
  
    case (salarioBruto >= 2594.93 && salarioBruto <= 5189.82):
      salarioBase = salarioBruto - aliquotaInss_11;
      break;
  
    case (salarioBruto > 5189.82):
      salarioBase = salarioBruto - aliquotaInss_max;
      break;
  }
  
  let aliquotaIR_7_5 = salarioBase * 0.075;
  let aliquotaIR_15 = salarioBase * 0.15;
  let aliquotaIR_22_5 = salarioBase * 0.225;
  let aliquotaIR_27_5 = salarioBase * 0.275;
  
  switch (true) {
    case (salarioBase <= 1903.98):
      valorIR = 0;
      break;
  
    case (salarioBase >= 1903.99 && salarioBase <= 2826.65):
      valorIR = aliquotaIR_7_5 - 142.80;
      break;
  
    case (salarioBase >= 2826.66 && salarioBase <= 3751.05):
      valorIR = aliquotaIR_15 - 354.80;
      break;
  
    case (salarioBase >= 3751.06 && salarioBase <= 4664.68):
      valorIR = aliquotaIR_22_5 - 636.13;
      break;
  
    case (salarioBase > 4664.68):
      valorIR = aliquotaIR_27_5 - 869.36;
      break;
  }
  return salarioBase - valorIR;
}

console.log(salarioAReceber(9000).toFixed(2));