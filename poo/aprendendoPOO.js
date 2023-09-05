//Criando obijetos com atributos
let carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2018,
    preco: 45000,
    motor:{
        cilindradas: 1.4,
        potencia:100
    },
    //Criando metodo
    acelerar:function(){
        console.log("Acelerando...");
    }
};
let pessoa = {
    nome: "Epaminondas",
    anoNascimento: 1980,
    //Criando metodo
    mostraIdade:function(){
        console.log("A idade do dono do carro é "+(2023 -   pessoa.anoNascimento));
    }
}

//progama dos veiculos
console.log("A marca do carro é "+carro.marca.toLocaleLowerCase())
console.log("A marca do carro é "+carro.marca.toUpperCase())
//toLocaleLowerCase() ou toUpperCase(), são metodos já criados...
console.log("Tempo de fabricação é de "+(2023 - carro.ano)+" anos")

//Mudar valor do atributo no objeto
carro.motor.cilindradas = 1.0

//Ver se o veiculo é potente ou não
if(carro.motor.cilindradas < 1.0){
    console.log("Seu carro não é potente :(")
}
else{
    console.log("Seu carro é poente fiu :D")
}

//diga que é o nome da pessoa e o veiculo
console.log("O carro "+carro.modelo.toUpperCase()+" é do "+pessoa.nome.toUpperCase())

//Usando metodo que criei
console.log("Ligando o carro e saindo...")
carro.acelerar()
//Usando metodo de pessoa
pessoa.mostraIdade()