let pessoasCadastradas = []

function gerarID(){
    return Math.floor(Math.random() * 1000);
}

function cadastrarPessoa(pessoa){
    pessoa.id = gerarID();
    pessoasCadastradas.push(pessoa)
}

function atualizarPessoa(id, camposAtualizados){
    const pessoaIndice = pessoasCadastradas.findIndex(pessoa => pessoa.id === id)

    pessoasCadastradas[pessoaIndice] = { ...pessoasCadastradas[pessoaIndice], ...camposAtualizados };
}

function deletarPessoa(id) {
    pessoasCadastradas = pessoasCadastradas.filter(pessoa => pessoa.id !== id);
}

function listarPessoas() {
    return pessoasCadastradas;
}

cadastrarPessoa({ nome: "João", idade: 30, cidade: "São Paulo" });
cadastrarPessoa({ nome: "Maria", idade: 25, cidade: "Rio de Janeiro" });
cadastrarPessoa({ nome: "Mateus", idade: 18, cidade: "Passo Fundo" });

console.log("Lista de pessoas cadastradas:");
console.log(listarPessoas());

atualizarPessoa(pessoasCadastradas[0].id, { idade: 35 });
atualizarPessoa(pessoasCadastradas[2].id, { cidade: "Copenhage" });

console.log("Lista de pessoas após atualização:");
console.log(listarPessoas());

deletarPessoa(pessoasCadastradas[1].id);

console.log("Lista de pessoas após exclusão:");
console.log(listarPessoas());



