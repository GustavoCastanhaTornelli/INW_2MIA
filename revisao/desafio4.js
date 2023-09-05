const leia = require("prompt-sync")()
//Escreva um sistema quue leia três números inteiros e positivos (A,B,C) e calcule a seguinte expressão.. D=R+S/2, aonde R=(A+B)², e S=(B+C)²
A = parseInt(leia("\n \n \n \n \n \n \n \n \n \n Digite o primeiro numero: "))
B = parseInt(leia("Digite o segundo numero: "))
C = parseInt(leia("Digite o terceiro numero: "))
let R = Math.pow((A+B), 2)
console.log("\n \n \n \n \n \n \n \n \n \n A letra R equivale á: "+R)
let S = Math.pow((B+C), 2)
console.log("A letra S equivale á: "+S)
let D = (R+S)/2
console.log("A letra D equivale á: "+D)