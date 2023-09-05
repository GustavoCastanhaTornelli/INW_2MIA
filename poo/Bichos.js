class Animal{
    constructor(tipo,porte,femea,nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento;
    }
    fazerBarulho(){
        console.log("fazendo barulho...")
    }
    retornarIdade(anoAtual){
        return anoAtual - this.nascimento
    }
}

class Gato extends Animal{
    constructor(tipo, raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor;
    }
    miar(){
        console.log("miauuu...")
    }
}

class Cachorro extends Animal{
    constructor(tipo, raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("au au...")
    }
}

//Progama Principal
let bicho1 = new Animal("mamifero", "medio", false, 2022)
let frajola = new Gato("felino", "sphynx", "preto")
let trovao = new Cachorro("canino", "budog", "branco")

console.log(bicho1)
console.log("Porte do bicho é "+bicho1.porte)
bicho1.fazerBarulho()

frajola.fazerBarulho()
frajola.miar()
frajola.nascimento = 2020
console.log("A idade do animal é de "+frajola.retornarIdade(2023)+" anos...")

trovao.fazerBarulho()
trovao.latir()
trovao.nascimento = 2021
console.log("A idade do animal é de "+trovao.retornarIdade(2023)+" anos...")