// JS
let botao = document.getElementById ("botao")
let texto1 = document.getElementById ("texto1")
let remover = document.getElementById ("remover")
let alternar = document.getElementById ("alternar")


botao.addEventListener("click", function(){
    texto1.classList.add("ativo")
})

remover.addEventListener("click", function(){
    texto1.classList.remove("ativo")
})

alternar.addEventListener("click", function(){
    texto1.classList.toggle("ativo")
})

//-------------------------------------------------

let destaque = document.getElementById("destaque")

destaque.addEventListener("click", function(){
    texto2.classList.add("destaque")
})

//-------------------------------------------------

let grande = document.getElementById("grande")

grande.addEventListener("click", function(){
    texto3.classList.toggle("grande")
})

//-------------------------------------------------

let escondido = document.getElementById("escondido")

escondido.addEventListener("click", function(){
    texto4.classList.toggle("escondido")
})

//-------------------------------------------------

let texto5 = document.getElementById("texto5")

texto5.addEventListener("mouseover", function(){
    texto5.classList.add("hover")
})

texto5.addEventListener("mouseout", function(){
    texto5.classList.remove("hover")
})  

//-------------------------------------------------

let botao8 = document.getElementById("botao8")

botao8.addEventListener("click", function(){
    botao8.classList.toggle("botao8")
})

//-------------------------------------------------

let itens = document.querySelectorAll(".item")

itens.forEach(function(item){
    item.addEventListener("click", function(){
        item.classList.toggle("selecionado")
    })
})

//-------------------------------------------------

let darkMode = document.getElementById("darkMode")

darkMode.addEventListener("click", function(){
    document.body.classList.toggle("dark")
})

//-------------------------------------------------

let menuBtn = document.getElementById("menuBtn")
let menu = document.getElementById("menu")

menuBtn.addEventListener("click", function(){
    menu.classList.toggle("mostrar")
})

//-------------------------------------------------

let caixa = document.getElementById("caixa")

caixa.addEventListener("click", function(){
    caixa.classList.toggle("cores")
})

caixa.addEventListener("mouseover", function(){
    caixa.classList.add("borda")
})

caixa.addEventListener("mouseout", function(){
    caixa.classList.remove("borda")
})

//-------------------------------------------------

let boxCor = document.getElementById("boxCor")

let vermelhoBtn = document.getElementById("vermelhoBtn")
let azulBtn = document.getElementById("azulBtn")
let verdeBtn = document.getElementById("verdeBtn")

function limparCores(){
    boxCor.classList.remove("vermelho", "azul", "verde")
}

vermelhoBtn.addEventListener("click", function(){
    limparCores()
    boxCor.classList.add("vermelho")
})

azulBtn.addEventListener("click", function(){
    limparCores()
    boxCor.classList.add("azul")
})

verdeBtn.addEventListener("click", function(){
    limparCores()
    boxCor.classList.add("verde")
})

