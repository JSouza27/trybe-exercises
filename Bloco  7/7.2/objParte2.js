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
const listKey = (obj) => {
  console.log(Object.keys(obj));
}

listKey(lesson3);

// função que mostra o tamanho do objeto
function sizeObj(obj) {
  const arrLesson = Object.entries(obj);
  console.log(arrLesson.length);
}

sizeObj(lesson1);