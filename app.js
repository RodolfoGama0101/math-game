let soma;
let qtd = 10; // Valor inicial
let operation = 'add'; // Operação inicial (adição)
let pontos = parseInt(localStorage.getItem("pontos")) || 0; // Carrega os pontos do localStorage ou inicia com 0

// Função para exibir os pontos na tela
function updatePointsDisplay() {
    document.getElementById("points").innerHTML = `Pontos: ${pontos}`;
}

// Função para atualizar a classe com base nos pontos
function updateClass() {
    let classe;
    
    if (pontos >= 1000) {
        classe = "PHD";
    } else if (pontos >= 700) {
        classe = "Doutor";
    } else if (pontos >= 500) {
        classe = "Mestre";
    } else if (pontos >= 400) {
        classe = "Professor";
    } else if (pontos >= 300) {
        classe = "Nerd";
    } else if (pontos >= 200) {
        classe = "Aluno";
    } else if (pontos >= 100) {
        classe = "Estudante";
    } else {
        classe = "Iniciante";
    }

    document.getElementById("class").innerHTML = `Classe: ${classe}`;
}

// Função para mudar o título conforme a operação
function updateTitle() {
    const title = document.querySelector(".title-game");
    if (operation === "add") {
        title.innerHTML = "Jogo da Adição";
    } else if (operation === "sub") {
        title.innerHTML = "Jogo da Subtração";
    } else if (operation === "mul") {
        title.innerHTML = "Jogo da Multiplicação";
    }
}

function newRandomNum() {
    // Pega o valor de qtd e operação escolhida
    qtd = parseInt(document.getElementById("qtd").value) || 10;
    operation = document.getElementById("operation").value;

    // Gera dois números aleatórios
    const num1 = Math.floor(Math.random() * qtd) + 1;
    const num2 = Math.floor(Math.random() * qtd) + 1;

    // Calcula a operação baseada na escolha
    switch (operation) {
        case 'add':
            soma = num1 + num2;
            document.getElementById("question").innerHTML = `${num1} + ${num2} =`;
            break;
        case 'sub':
            soma = num1 - num2;
            document.getElementById("question").innerHTML = `${num1} - ${num2} =`;
            break;
        case 'mul':
            soma = num1 * num2;
            document.getElementById("question").innerHTML = `${num1} x ${num2} =`;
            break;
        default:
            soma = num1 + num2;
            document.getElementById("question").innerHTML = `${num1} + ${num2} =`;
    }

    // Limpa a resposta anterior
    document.getElementById("correct").innerHTML = "";
    document.getElementById("input-answer").value = "";
}

function verify() {
    const inputAnswer = document.getElementById("input-answer").value;

    if (inputAnswer === "") {
        document.getElementById("correct").innerHTML = "Por favor, insira um valor!";
        return;
    }

    if (parseInt(inputAnswer) === soma) {
        document.getElementById("correct").innerHTML = "Resposta correta!";
        pontos += 1; // Incrementa os pontos
        localStorage.setItem("pontos", pontos); // Salva os pontos no localStorage
    } else {
        document.getElementById("correct").innerHTML = `A resposta correta era ${soma}`;
        pontos -= 1; // Incrementa os pontos
        localStorage.setItem("pontos", pontos); // Salva os pontos no localStorage
    }

    updatePointsDisplay(); // Atualiza a exibição dos pontos
    updateClass(); // Atualiza a classe conforme os pontos
}

// Chama a função newRandomNum quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    newRandomNum();
    updatePointsDisplay(); // Exibe os pontos ao carregar a página
    updateClass(); // Exibe a classe ao carregar a página
});


document.getElementById("input-answer").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        verify();
    } 
})