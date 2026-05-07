// JS
//forms
let formulario = document.getElementById('formulario');
//inputs
let descricao = document.getElementById('descricao');
let valor = document.getElementById('valor');
//select
let tipo = document.getElementById('tipo');
//lista
let listagem = document.getElementById('listagem');
//resumo
let totalEntrada = document.getElementById('totalEntrada');
let totalSaida = document.getElementById('totalSaida');
let totalSaldo = document.getElementById('totalSaldo');
let totalMovimentacoes = document.getElementById('totalMovimentacoes');
let contEntrada = document.getElementById('contEntradaCard');
let contSaida = document.getElementById('contSaidaCard');

let movimentações = []; //array para armazenar as movimentações / dados
formulario.addEventListener('submit', function(event){
    event.preventDefault(); //impede o comportamento padrão (recarregar a página) 
    let texto = descricao.value; // o que o usuário digitou
    let numero = Number(valor.value); // converte para número
    let categoria = tipo.value; // entrada ou saída

    movimentações.push({
        descricao: texto,
        valor: numero,
        tipo: categoria
    });

    mostrar();
    formulario.reset(); // limpa o formulário

});

function mostrar (){
    listagem.innerText = ""; //limpa a lista 

    //    0      1       2       3      4
    // [maçã, banana, laranja, morago, uva]
    // fruta[0] = maçã

    let entrada = 0;
    let saida = 0;
    let entradasCount = 0;
    let saidasCount = 0;

    for(let i = 0; i < movimentações.length; i++){
        let item = movimentações[i];

        let li = document.createElement('li'); 
        li.innerText = item.descricao + " - R$ " + item.valor.toFixed(2);
        listagem.appendChild(li); 

        if(item.tipo == "entrada"){
            entrada += item.valor;
            entradasCount += 1;
        } else {
            saida += item.valor;
            saidasCount += 1;
        }
    }
    totalEntrada.innerText = "R$ " + entrada.toFixed(2);
    totalSaida.innerText = "R$ " + saida.toFixed(2);

    const saldo = entrada - saida;
    totalSaldo.innerText = "R$ " + saldo.toFixed(2);

    totalSaldo.classList.remove('positive', 'negative');
    if (saldo > 0) {
        totalSaldo.classList.add('positive');
    } else if (saldo < 0) {
        totalSaldo.classList.add('negative');
    }

    totalMovimentacoes.innerText = movimentações.length;
    contEntrada.innerText = entradasCount + " registro" + (entradasCount !== 1 ? "s" : "");
    contSaida.innerText = saidasCount + " registro" + (saidasCount !== 1 ? "s" : "");
}
