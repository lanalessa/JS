function adicionar(){
    //trazer o input e a lista
    let tarefa = document.getElementById("tarefa").value
    let lista = document.getElementById ("lista")

    
    let tarefaInput = document.getElementById("tarefa") //tirar o texto p n precisar apagar


    //Não aceitar uma tarefa vazia

    if (tarefa ==""){
        alert ("Digite uma tarefa")
        return
    }

    //criar o li
    let novaTarefa = document.createElement("li") //qlqr div, p, tag, etc
    novaTarefa.innerText = tarefa

    //adicionar li no site
    lista.appendChild(novaTarefa)
    
    //limpar input
    tarefaInput.value = ""

    //apagar a tarefa
    novaTarefa.onclick = function(){
        lista.removeChild(novaTarefa) //qnd clica na tarefa ela some
    }
}