// Declare uma variável texto
let texto = "Aprendendo JavaScript é divertido e recompensador!";

// Converta o valor de texto para maiúsculas e exiba no console
console.log(texto.toUpperCase());

// Verifique se texto contém a palavra "divertido" e exiba o resultado no console
console.log(texto.includes("divertido"));

// Divida texto em um array de palavras e exiba o array resultante no console
let palavras = texto.split(" ");
console.log(palavras);

// Junte as palavras do array resultante em uma única string, separadas por hífens, e exiba o resultado no console
let textoComHifens = palavras.join("-");
console.log(textoComHifens);
