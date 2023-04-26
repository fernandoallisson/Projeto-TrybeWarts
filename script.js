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

}

