class Retangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    mostrarArea(){
        console.log("A area é :"+(this.altura * this.base))
    }
}

//Progama principal

let objeto1 = new Retangulo(5,3)
let objeto2 = new Retangulo(4,2)

console.log("Area Dos Retangulos")
console.log("Retangulo 1 ")
objeto1.mostrarArea()
console.log("Retangulo 2 ")
objeto2.mostrarArea()