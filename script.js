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
// function contador() {
//   let contador = document.getElementById('counter');
// }

// contador();
