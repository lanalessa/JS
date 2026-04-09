//JS
let nome = "Lana"
let maiuscula = nome.toUpperCase()
let minuscula = nome.toLowerCase()

console.log(nome)
console.log(maiuscula)
console.log(minuscula)
//equalsIgnoreCase - Java
//if(nome.toLowerCase() == "juliana")



function mudar() {
let texto = document.getElementById("texto").value
let maiuscula = document.getElementById("maiuscula")
let minuscula = document.getElementById("minuscula")

let letras = document.getElementById("letras")

maiuscula.innerText = texto.toUpperCase()
minuscula.innerText = texto.toLowerCase()

letras.innerText = texto.length

console.log(texto[0])////////
}





function parte() {
let palavra = document.getElementById("palavra").value
let resultado = document.getElementById("resultado")

//SLICE (INICIO, FIM)
let parte = palavra.slice(0,3) 

// S    e   n   a   i
// 0    1   2   3   4

resultado.innerText= parte 

let final = document.getElementById("final")
final.innerText = palavra[palavra.length-1]
}


//Crie dois inputs cada um peedindo uma palavra para o usuario, crie um botao juntar que mostra as duas palavras juntas em um p

function juntar() {
let bt1 = document.getElementById("bt1").value
let bt2 = document.getElementById("bt2").value
let juntos = document.getElementById("juntos")

juntos.innerText = bt1 + " " + bt2
}
