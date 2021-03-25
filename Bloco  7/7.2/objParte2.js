const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// função para adicionar a chave 'turno' com valor 'manhã' na lesson2
const addTurno = (obj, newKey, value) => {
  obj[newKey] = value;
}

addTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);

// função para listar as 'keys' de um objeto
function listKey(obj) {
  console.log(Object.keys(obj));
}

listKey(lesson3);

// função que mostra o tamanho do objeto
function sizeObj(obj) {
  const arrLesson = Object.entries(obj);
  console.log(arrLesson.length);
}

sizeObj(lesson1);

// função para listar valores de um objeto
const listValues = (obj) => {
  console.log(Object.values(obj))
}

listValues(lesson2);

// agrupa todas as lesson em um objeto
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

console.log(allLessons);

// retorna o total de estudantes nas aulas
const totalEstudantes = () => {
  let soma = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

  console.log(soma);
}

totalEstudantes();

// função para obter o valor da chave desejada em um objeto
const getValues = (obj, key) => {
  console.log(Object.values(obj)[key])
}

getValues(lesson1, 0);

// verifica se existe o par (chave / valor) no objeto
const checkValueKey = (obj, nameKey, valueKey) => {
  const arrLesson = Object.entries(obj);
  let condition = 'false';
  for(let index = 0; index < arrLesson.length; index +=1) {
   if (arrLesson[index][0] === nameKey && arrLesson[index][1] === valueKey) {
     condition = 'true';
   }
  }
  console.log(condition);
}

checkValueKey(lesson3, 'turno', 'noite');
checkValueKey(lesson3, 'materia', 'Maria Clara');
// bônus

