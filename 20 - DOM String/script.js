//JS
let nome = "Lana"
console.log(nome)
console.log(nome.toLowerCase())// minusculo
console.log(nome.toUpperCase())//miusculo


let nome2 = nome[0] //L
console.log(nome2)

let palavra = "refrigerante"
//1234567891011
let parte = palavra.slice(2, 7)          //PEDIR P ELA EXPLICAR
console.log(parte)

/* Crie um input, peça uma palavra para o usuário e
mostre ela maiuscula */
function mudar() {
    let resposta = document.getElementById("resposta").
        value
    let novoTexto = document.getElementById
        ("novoTexto")
    novoTexto.innerText = resposta.toUpperCase()
}
/*DESAFĮO: Crie um input, peça uma palavra para o
usuário, e mostre a última letra da palavra
DICA: Precisa de length*/
function contar() {
    let palavra2 = document.getElementById("palavra2").value
    let ultimaLetra = document.getElementById ("ultimaLetra")
   
    let texto = palavra2.length
    let final = texto - 1
    ultimaLetra.innerText = palavra2[final]
}
