//JS
function converter() {
let nome = document.getElementById("nome").value
let resultado1 = document.getElementById("resultado1")

resultado1.innerText = nome.toLowerCase()

}

//------------------------------------

function mudar() {
let texto = document.getElementById("texto").value
let letras = document.getElementById("letras")

letras.innerText = texto.length

}


//------------------------------------

function parte() {
let palavra = document.getElementById("palavra").value

let final3 = document.getElementById("final3")
final3.innerText = palavra[palavra.length-1]
}


//------------------------------------

function letras() {
let palavra4 = document.getElementById("palavra4").value
let resultado4 = document.getElementById("resultado4")

//SLICE (INICIO, FIM)
let letras = palavra4.slice(0,4) 
resultado4.innerText= letras 

}

//------------------------------------


function ultimasLetras() {
let palavra5 = document.getElementById("palavra5").value
let resultado5 = document.getElementById("resultado5")

//SLICE (INICIO, FIM)
let letra5 = palavra5.slice(-3) 
resultado5.innerText= letra5
}

//------------------------------------

function juntar() {
let bt1 = document.getElementById("bt1").value
let bt2 = document.getElementById("bt2").value
let juntos = document.getElementById("juntos")

juntos.innerText = bt1 + " " + bt2
}

//------------------------------------

function clique() {
let nome1 = document.getElementById("nome7").value
let frase = document.getElementById("frase")

frase.innerText ="A primeira letra do seu nome é: " + nome1.slice(0,1)

}


//------------------------------------
function bemVindo(){
let nome3 = document.getElementById("nome3").value
let maiusculo = nome3.toLocaleUpperCase()
mensagem.innerText = "Olá, " + maiusculo + "! Seja bem-vinda ao sistema."
}

//------------------------------------

function verificar(){
let nome4 = document.getElementById("nome4").value
if(nome4.length <= 5){
contagem.innerText = "Nome curto"
} else {
contagem.innerText = "Nome longo"
}
}



