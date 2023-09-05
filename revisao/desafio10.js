const leia = require("prompt-sync")()

// Faça um progama aonde escreva os numero de 233 a 496, sendo que os nuemros de 300 a 400 devem ser de 5 em 5, e o resto de 3 em 3..
// Use Loop WHILE

let nuemro = 233
while(nuemro<=496){
    if(nuemro >= 300 && nuemro <= 400 ){
        nuemro = nuemro + 5
        console.log(nuemro+" - nuemro saltando de 5 em 5..")
    }
    else{
        nuemro = nuemro + 3
        console.log(nuemro+" - nuemro saltando de 3 em 3..")
    }
}
console.log("Fim de progama..")