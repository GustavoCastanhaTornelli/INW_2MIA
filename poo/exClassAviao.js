class Aviao{
    constructor(marca,peso,nome,ligado,velocidade,velocidadeMax){
        this.marca = marca;
        this.peso = peso;
        this.nome = nome;
        this.ligado = ligado;
        this.velocidade = velocidade;
        this.velocidadeMax = velocidadeMax;
    }
    ligar(){
        console.log("ligando...")
        this.ligado = true
    }
}

//Codigo Principal

let aviao1 = new Aviao("Airbus",260000,"Airbus A330",false,0,500)
let aviao2 = new Aviao("Air",270000,"Air 2331",false,0,700)

aviao1.ligar()
console.log(aviao1)