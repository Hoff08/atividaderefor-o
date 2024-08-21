// Declare um array numeros
let numeros = [10, 20, 30, 40, 50];

// Use o método push para adicionar o valor 60 ao final do array e exiba o array atualizado no console
numeros.push(60);
console.log(numeros);

// Use o método pop para remover o último valor do array e exiba o valor removido e o array atualizado no console
let removido = numeros.pop();
console.log(removido);
console.log(numeros);

// Use o método splice para remover o terceiro elemento do array (número 30) e exiba o array atualizado no console
numeros.splice(2, 1);
console.log(numeros);

// Ordene o array em ordem decrescente e exiba o resultado no console
numeros.sort((a, b) => b - a);
console.log(numeros);
