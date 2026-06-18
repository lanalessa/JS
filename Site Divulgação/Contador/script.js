let numero = 0 

let intervalo = setInterval(function (){
    numero+= 100 // de qnt ele vai aumentar
    document.getElementById("contador").innerText = numero


    if (numero >= 10000){ // de qnt ele vai parar
        clearInterval(intervalo);
    }

}, 100) // de qnt tempo ele vai aumentar (1000 = 1 segundo)