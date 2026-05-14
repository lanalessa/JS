// JS

let perguntas = [
    {
        pergunta: "Qual esporte era o principal destaque da série One Tree Hill?",
        respostas: ["Futebol", "Basquete", "Natação", "Beisebol"],
        correta: 1,
        imagem: "img/download (1).jpg"
    },
    {
        pergunta: "Quem eram os meio-irmãos rivais da história?",
        respostas: ["Lucas e Nathan", "Skills e Mouth", "Jake e Tim", "Dan e Keith"],
        correta: 0,
            imagem: "img/irmaos.jpg"
    },
    {
        pergunta: "Qual era o nome do time da escola?",
        respostas: ["Tree Hill Tigers", "Ravens", "Bulldogs", "Eagles"],
        correta: 1,
        imagem: "img/ravens.jpg"
    },
    {
        pergunta: "Quem era o pai de Lucas e Nathan?",
        respostas: ["Keith", "Whitey", "Dan", "Mouth"],
        correta: 2,
        imagem: "img/dan.jpg"
    },
    {
    pergunta: "Na cena presente na imagem, o que a série queria representar?",
    respostas: [
        "A pressão emocional e inseguranças da personagem",
        "Um sonho engraçado da Brooke",
        "Uma campanha da escola",
        "Uma apresentação de teatro"
    ],
    correta: 0,
    imagem: "img/Brooke Davis.jpg"
},
    {
        pergunta: "Qual personagem era apaixonada por música e arte?",
        respostas: ["Brooke", "Peyton", "Haley", "Quinn"],
        correta: 1,
        imagem: "img/peyton.jpg"
    },
   {
    pergunta: "Qual par se casou no inicio de One Tree Hill?",
    respostas: [
        "Lucas e Brooke",
        "Nathan e Haley",
        "Dan e Peyton",
        "Skills e Quinn"
    ],
    correta: 1,
    imagem: "img/casal.jpg"


},
    {
        pergunta: "Qual personagem virou cantora durante a série?",
        respostas: ["Brooke", "Haley", "Peyton", "Rachel"],
        correta: 1,
        imagem: "img/download (2).jpg"
    },
    {
        pergunta: "Em qual cidade fictícia a série se passa?",
        respostas: ["Rosewood", "Tree Hill", "Beacon Hills", "Riverdale"],
        correta: 1,
        imagem: "img/Oth.jpg"
    },
    {
        pergunta: "Quem treinava o time Ravens?",
        respostas: ["Dan", "Keith", "Whitey", "Lucas"],
        correta: 2,
        imagem: "img/download (3).jpg"
    }
];

// Variaveis de controle
let perguntaAtual = 0; //qual pergunta ta sendo exibida
let pontuacao = 0;

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual];
    //pega a pergunta atual dentro do array

    document.getElementById("pergunta").innerText = pergunta.pergunta
    document.getElementById("imagem").src = pergunta.imagem

    let respostasDiv = document.getElementById("respostas");
    respostasDiv.innerHTML = ""; //limpa as respostas anteriores
    pergunta.respostas.forEach(function(resposta, index) {
        respostasDiv.innerHTML += `<button onclick="verificarResposta(${index})">${resposta}</button>`;  
    });
}

function verificarResposta(index) {
    let pergunta = perguntas[perguntaAtual];
    if (index === pergunta.correta) {
    resultado.innerText = "Resposta correta!";
    pontuacao++;
    } else {
    resultado.innerText = "Resposta incorreta!";
    }
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultadoFinal()
    }
}

function mostrarResultadoFinal() {
    document.getElementById("container").innerHTML = `
    <h2>Quiz finalizado!</h2>
    <p>Sua pontuação foi: ${pontuacao} </p>
    <button onclick="location.reload()">Jogar novamente</button>`
    // location.reload()recarrega a página para jogar novamente

}

mostrarPergunta(); 

