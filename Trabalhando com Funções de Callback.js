// Declare uma função executaOperacao
function executaOperacao(a, b, operacao) {
    return operacao(a, b);
}

// Use a função executaOperacao para somar dois números, passando uma função de soma como callback
console.log(executaOperacao(5, 3, soma));

// Use a função executaOperacao para multiplicar dois números, passando uma função de multiplicação como callback
function multiplicacao(a, b) {
    return a * b;
}
console.log(executaOperacao(5, 3, multiplicacao));

// Crie uma função repetirOperacao
function repetirOperacao(vezes, operacao) {
    for (let i = 0; i < vezes; i++) {
        console.log(operacao(i, i + 1));
    }
}

// Declare uma função contarOcorrencias
function contarOcorrencias(texto, caractere) {
    let contador = 0;
    texto.split('').forEach(char => {
        if (char === caractere) {
            contador++;
        }
    });
    return contador;
}
