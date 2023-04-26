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

   const enviar = (document.querySelector("#submit-btn"));
   const checar = (document.querySelector("#agreement"));
   
   const check = () =>{
    if ( checar.checked ){
    return true
    }
    else{
    return false     
    }
  
   }
  
   const verificaçaoEnviar = () =>{
    if(check === true ){
    enviar.remove = disabled
    }
  
   }
   verificaçaoEnviar()
}



