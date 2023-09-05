//Estudando Laços De Repetição

const leia = require("prompt-sync")()
// faça um progama que escreva 5 vezes alguma coisa
//console.log("Oi pessoal")
//console.log("Oi pessoal")
//console.log("Oi pessoal")
//console.log("Oi pessoal")
//console.log("Oi pessoal")

// faça um progama que use loop, que escreva X vezes alguma coisa
//usando laço PARA(FOR)
//for(let x=1; x<=5; x++){
//    console.log(x+"- Oi pessoal")
//}

// faça um progama que use loop, que escreva X que o usuario escrever
//usando laço PARA(FOR)

//let limite = parseInt(leia("Digite um numero de vezes: "))
//for(let x=1; x<=limite; x++){
//   console.log(x+"- Oi pessoal")
//}

// faça um progama que use loop, que escreva que escreva X quantidades, mas quando for par escreva par no lado, quando for impar, escreva no lado impar..
//usando laço PARA(FOR)
let limite = parseInt(leia("Digite um numero de vezes: "))
for(let x=1; x<=limite; x++){
   if( (x%2)==0 ){
    console.log(x+" - Numero Par")
   }
   else{
    console.log(x+" - Numero Impar")
   }
}