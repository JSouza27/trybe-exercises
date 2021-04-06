let newString;
const changeLetter = (stringDetermined, stringReplace) => {
  newString = stringDetermined.replace('x', stringReplace);
}

changeLetter('Tryber x aqui!', 'Jonathan');

const skills = ['JavaScript', 'Nodejs', 'CSS', 'HTML5', 'Frameworks'];

const concat = (newString, skills) => {
  console.log(`${newString} Minhas cinco principais habilidades são:
  - ${skills.sort()[0]};
  - ${skills.sort()[1]};
  - ${skills.sort()[2]};
  - ${skills.sort()[3]};
  - ${skills.sort()[4]};
  #goTrybe.`);
}

concat(newString, skills);
