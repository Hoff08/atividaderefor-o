// Crie um objeto pessoa
let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
        rua: "Rua das Flores",
        cidade: "São José",
        estado: "SC"
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
    }
};

// Acesse e exiba o valor da propriedade cidade do endereco no console
console.log(pessoa.endereco.cidade);

// Atualize a propriedade profissao para um novo valor e exiba o objeto atualizado no console
pessoa.profissao = "Engenheiro de Software";
console.log(pessoa);

// Adicione uma nova propriedade telefone ao objeto pessoa e exiba o objeto atualizado no console
pessoa.telefone = "1234-5678";
console.log(pessoa);
