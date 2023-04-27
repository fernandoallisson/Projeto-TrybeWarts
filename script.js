window.onload = () => {

   const button = (document.querySelector("#button"));

   const erroEmail = () => {
      const email = (document.querySelector("#email").value);
      const senha = (document.querySelector("#password").value);
      if (email == "tryber@teste.com" && senha == "123456") {
         alert("Olá, Tryber!")
      } else {
         alert("Email ou senha inválidos.");
      };
   }
   button.addEventListener("click", erroEmail);

   const enviar = document.querySelector("#submit-btn");
   const checar = document.querySelector("#agreement");

   const check = () => {
      if (checar.checked) {
         return true;
      } return false;

   }

   const verificacaoEnviar = () => {
      if (check()) {
         enviar.disabled = false;
      } else {
         enviar.disabled = true;
      } 
   }

   checar.addEventListener('click', verificacaoEnviar);

}