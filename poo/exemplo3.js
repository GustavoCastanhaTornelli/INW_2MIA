class Pessoa{
    constructor(cpf,nome,anoNascimento){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    mostraIdade(){
        console.log("Sua idade é "+(2023-this.anoNascimento))
    }
}

//Progama principal

let cliente1 = new Pessoa("111.222.333-4","Antonio",2007)
console.log(cliente1.nome)
cliente1.mostraIdade()