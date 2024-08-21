// Crie uma data representando o seu próximo aniversário
let proximoAniversario = new Date("2024-12-25");

// Crie uma data representando a data atual
let dataAtual = new Date();

// Calcule a diferença em dias entre a data atual e o seu próximo aniversário e exiba o resultado no console
let diferencaEmDias = Math.ceil((proximoAniversario - dataAtual) / (1000 * 60 * 60 * 24));
console.log(diferencaEmDias);

// Formate a data atual no formato "YYYY-MM-DD" e exiba no console
let dataFormatada = dataAtual.toISOString().split('T')[0];
console.log(dataFormatada);

// Adicione 30 dias à data atual e exiba a nova data no console
dataAtual.setDate(dataAtual.getDate() + 30);
console.log(dataAtual.toISOString().split('T')[0]);
