const leia = require("prompt-sync")()
//faça um progama aonde receba numeros do usuario, até que o um usuario digite um numero negativo, ao final mostrar a soma de todos os nuemros, e a quantidade de nuemros lidos, e o maior nuemro..
//Com o Loop WHILE
let total = 0
let numero = 0
let maior = 0
let contador = -1
while(numero >= 0){
    total += numero
    if(numero >maior){
        maior = numero
    }
    contador++
    numero = parseInt(leia("Digite um numero: "))
}
console.log("O total de numeros digitados é.. "+total)
console.log("O maior numero é.. "+maior)
console.log("O total de nuemros escritos positivos.. "+contador)
console.log("Fim de progama...")