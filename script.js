/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
function botaoEntrar() {
  const email = document.querySelector('#email');
  const senha = document.getElementById('senha');
  const botao = document.getElementById('botao1');

  botao.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
botaoEntrar();

// function limiteTextarea(valor) {
//   const quant = 500;
//   const total = valor.length;
//   if (total <= quant) {
//     const resto = quant - total;
//     document.getElementById('counter').innerHTML = resto;
//   } else {
//     document.getElementById('textarea').value = valor.substr(0, quant);
//   }
// }

// function limiteTextarea() {
//   const desc = document.querySelector('#textarea');
//   desc.addEventListener('keypress', (e) => {
//     const maxChars = desc.maxlenth;
//     const inputLength = desc.value.length;

//     if(inputLength >= maxChars) {
//       e.preventDefault();
//     }

//   });
// }
// limiteTextarea();

function countCharacters() {
  const fieldArea = document.getElementById('textarea');
  fieldArea.addEventListener('keydown', () => {
    const fieldMaxLength = fieldArea.maxLength;
    const fieldValueLength = fieldArea.value.length;
    console.log(fieldValueLength);
    const result = document.getElementById('counter');
    const equation = fieldMaxLength - fieldValueLength;
    if (fieldValueLength + 1 <= fieldMaxLength) {
      result.innerText = `${equation} carácteres restantes`;
    }
    // Se os carácteres digitados tiver alcançado o maxlength
    if (fieldValueLength === fieldMaxLength) {
      result.innerText = 'Limite de carácteres excedido';
    }
  });
}

countCharacters();

function botaoSubmit() {
  const submit = document.getElementById('submit-btn');
  const checkbox = document.getElementById('agreement');

  checkbox.addEventListener('click', () => {
    submit.disabled = false;
  });
}

botaoSubmit();

// Referência:
// https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea
