const nome = "Rafael Reis"
let nome2 = "";
let pessoa = {
    nome: "Rafael Reis",
    idade:"29",
    trabalho: "Programador"
}

let nomes = ["Rafael Reis", "Maria Silva", "Pedro Silva"];
let pessoas = [
    {
        nome: "Rafael Reis",
        idade: "29",
        trabalho: "Programador"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    }
];



function alterarNome(){
    nome2 = "Maria Silva"
    console.log("Valor Alterado:");
    console.log(nome2);
}


function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoa.push(pessoa);
}

function imprimirPessoa(){
    console.log("-----IMPRIMIR PESSOAS-----");
    pessoas.forEach(item)
}
