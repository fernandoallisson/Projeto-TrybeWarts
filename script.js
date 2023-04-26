const email = (document.querySelector("#email").value);
const senha = (document.querySelector("#password").value);
const button = (document.querySelector("#button"))

const erroEmail = () => {
    console.log(email)
    console.log(senha)
 if(email == "trybe@test.com" && senha == "123456"){
    alert("Olá, Tryber!")
 }
 else{
    alert("Email ou senha inválidos.")
 }
}
button.addEventListener("click", erroEmail )
