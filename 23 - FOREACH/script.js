//JS

let botao = document.getElementById("botao")
let texto2 = document.querySelector("#texto2")

botao.addEventListener("click", function(){
    document.getElementById("texto").innerText= "Outro Texto"

    texto2.innerText = "Outro Texto 2"
})

//-------------------------------------------------

let caixas = document.querySelectorAll(".caixa")
let tema = document.getElementById("tema")
caixas.forEach(function(caixa){
    tema.addEventListener("click", function(){
        caixa.classList.toggle("escuro")
    })
})