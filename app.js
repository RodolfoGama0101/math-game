let soma;
let qtd = 10; // Valor inicial
let operation = 'add'; // Operação inicial (adição)

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
    console.log(inputAnswer);

    if (inputAnswer === "") {
        document.getElementById("correct").innerHTML = "Por favor, insira um valor!";
        return;
    }

    if (parseInt(inputAnswer) === soma) {
        document.getElementById("correct").innerHTML = "Resposta correta!";
    } else {
        document.getElementById("correct").innerHTML = `A resposta correta era ${soma}`;
    }
}

// Chama a função newRandomNum quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    newRandomNum();
});
