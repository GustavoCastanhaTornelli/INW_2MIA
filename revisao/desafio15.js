//aprendendo Classes
//Crie uma clase aonde tenha cpf, nome e anoNascimento
class Pessoa{
    constructor(cpf,nome,anoNascimento){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    mostraIdade(){
        console.log("Idade: "+(2023-this.anoNascimento))
    }
}

//Progama Principal
const leia = require("prompt-sync")()
let p1 = new Pessoa("000.111.222-33","José Diogo",2007)
console.log(p1)
p1.mostraIdade()