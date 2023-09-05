//npm install prompt-sync   ou    npm i prompt-sync

// console.log("oi \n \n mundo")

// console.log("NOME\tNOTA")
// console.log("Eduardo\t5,5")
// console.log("Maria\t10")

// let nome = "José Diogo"
// let valor1 =0
// let valor2 =0
// console.log(valor1+valor2)
// console.log(nome)
// console.log("Oi "+nome+" o valor 1 é "+valor1)
// console.log("A soma dos dois valores é "+(valor1+valor2))

// const leia = require("prompt-sync")()
// let valor1 = 0
//let valor2 = 0
// let nome = leia("Digite o seu nome: ")
// valor1 = parseInt(leia("Digite o valor 1: "))
// valor2 = parseInt(leia("Digite o valor 2: "))
// console.log("Oi "+nome+". A soma é igual "+(valor1+valor2))

//Desafio

const leia = require("prompt-sync")()
let nome = leia("Digite o seu nome: ")
let graus = parseInt(leia("Digite quantos graus está fazendo agora.. : "))
let Kelvin = (273+graus)
console.log("Olá "+nome+" agora está fazedo "+Kelvin+"°k..")