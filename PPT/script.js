//JS
function jogar(escolha) {
    let opcoes = ['pedra', 'papel', 'tesoura']
    //computador escolhendo de forma aleatoria
    let computador = opcoes[Math.floor(Math.random() * 3)]

    let resultado = ""
    if (escolha == computador) {
        resultado = "Empate"
    } else if ((escolha == "pedra" && computador == "tesoura") || (escolha == "papel" && computador == "pedra") || (escolha == "tesoura" && computador == "papel")){
        resultado = "Você ganhou"
    }else {
        resultado = "você perdeu"
    }
    let resultado1 = document.getElementById
        ("resultado")

    resultado1.innerText = "Jogador: " + escolha + " | Computador: " + computador + " = " + resultado
}