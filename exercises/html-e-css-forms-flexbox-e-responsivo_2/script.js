const selectEstado = document.getElementById('estado');

const estados = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
}

for (let key in estados) {
  const optionEl = document.createElement('option');
  optionEl.innerHTML = key;
  selectEstado.appendChild(optionEl);
}

// código baseado no gabarito
function validarData(data) {
  // criar uma condição em que verifica se tem a barra '/'
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    // caso a condição seja true ele irá armazenar os valores de acordo com suas posições idicadas nas variáveis abaixo
    const dia = data.substr(0,2);
    const mes = data.substr(3,2);
    const ano = data.substr(6, 4);

    // condição para verificar se os valores digitados no input segue o padrão de data
    if ((dia > 0 && dia < 31) && (mes > 0 && mes <= 12) && (ano > 0 && ano.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const inputData = document.querySelector('#data-inicio');
  const data = inputData.value;
  const userData = validarData(data);

  if (!userData && data.length) {
    alert('data inválida');
    return false;
  }
  return userData;
}