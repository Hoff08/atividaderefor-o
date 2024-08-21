// Declare uma variável nulo e atribua a ela o valor null
let nulo = null;

// Verifique se nulo é igual a undefined (usando ==) e se nulo é estritamente igual a undefined (usando ===). Exiba os resultados no console
console.log(nulo == undefined);
console.log(nulo === undefined);

// Declare uma variável indefinido sem atribuir nenhum valor
let indefinido;

// Verifique se indefinido é NaN usando a função isNaN e exiba o resultado no console
console.log(isNaN(indefinido));

// Declare uma variável numStr2 com o valor "123abc" (string) e tente convertê-la para um número. Verifique se o resultado é NaN e exiba o resultado no console
let numStr2 = "123abc";
let numConvertido = Number(numStr2);
console.log(isNaN(numConvertido));
