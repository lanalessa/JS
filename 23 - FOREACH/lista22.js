// EXERCÍCIO 1

let caixas = document.querySelectorAll(".caixa")
let botao = document.getElementById("botao")

botao.addEventListener("click", function(){

    caixas.forEach(function(caixa){
        caixa.style.backgroundColor = "lightblue"
    })

})

// -------------------------------------------------

// EXERCÍCIO 2

let itens = document.querySelectorAll(".item")
let add = document.getElementById("add")

add.addEventListener("click", function(){

    itens.forEach(function(item){
        item.classList.add("ativo")
    })

})

// -------------------------------------------------

// EXERCÍCIO 3

let box = document.querySelectorAll(".box")

box.forEach(function(box){

    box.addEventListener("click", function(){
        console.log("clicou")
    })

})

// -------------------------------------------------

// EXERCÍCIO 4 E 5

let rosaBoxes = document.querySelectorAll(".rosaBox")

rosaBoxes.forEach(function(box){

    box.addEventListener("click", function(){
        box.classList.toggle("rosa")
    })

})

// -------------------------------------------------

// EXERCÍCIO 6 E 7

let destaqueBoxes = document.querySelectorAll(".destaqueBox")

destaqueBoxes.forEach(function(box){

    box.addEventListener("click", function(){
        box.classList.toggle("destaque")
    })

})

// -------------------------------------------------

// EXERCÍCIO 8

let cards = document.querySelectorAll(".card")

cards.forEach(function(card){

    card.addEventListener("click", function(){

        cards.forEach(function(c){
            c.classList.remove("cardAtivo")
        })

        card.classList.add("cardAtivo")

    })

})

// -------------------------------------------------

// EXERCÍCIO 9

let menus = document.querySelectorAll(".menu")

menus.forEach(function(menu){

    menu.addEventListener("click", function(){

        menus.forEach(function(item){
            item.classList.remove("menuAtivo")
        })

        menu.classList.add("menuAtivo")

    })

})