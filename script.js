const button = (document.querySelector('#button')); // Pega  o botão enviar (o botão de submeter do form do header);
const counter = document.querySelector('#textareacounter'); // A div que conterá a quantidade de caracteres faltando para parar de escrever;
const area = document.querySelector('#textareainput'); // Essa é a área que terá no máximo 500 caracteres.
const contador = 500;

const erroEmail = () => {
  const email = (document.querySelector('#email').value); // Pega o input do e-mail;
  const senha = (document.querySelector('#password').value); // Pega o input de senha;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const check = () => {
  const checar = document.querySelector('#agreement'); // Checkbox de verificação para que o #submit-btn seja ativado;
  if (checar.checked) {
    return true;
  } return false;
};

   const verificacaoEnviar = () => {
      if (check()) {
         enviar.disabled = false;
      } else {
         enviar.disabled = true;
      } 
   }

   checar.addEventListener('click', verificacaoEnviar);

   const counter = document.querySelector("#textareacounter");
   const area = document.querySelector("#textareainput");
   let contador = 500
  
   area.addEventListener("input",() => {
   
const numeroCarac = area.value.length; 
counter.innerHTML = contador - numeroCarac
   
    
   })
}