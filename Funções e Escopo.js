// Declare uma função soma
function soma(a, b) {
    return a + b;
}

// Declare uma função ehPar
function ehPar(numero) {
    return numero % 2 === 0;
}

// Declare uma função dobraValores
function dobraValores(array) {
    return array.map(valor => valor * 2);
}

// Crie uma função contaCaracteres
function contaCaracteres(texto) {
    return texto.length;
}

// Declare uma função fatorial
function fatorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}
