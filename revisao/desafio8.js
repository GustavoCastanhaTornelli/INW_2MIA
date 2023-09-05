// faça um progama que use loop, que escreva que escreva 100 vezes, mas so pode mostrar numeros impares multiplos de 3, e mostrar a soma destes numeros.
let y = 0
for(let x=1; x<=100; x++){
    if( (x%2)==1 ){
        if( (x%3)==0 ){
            console.log(x)
            y = y+x
        }
    }
}
console.log("A soma é de todos os nuemros é - "+y+"\n \n \n \n")

//  Ou

let w = 0
for(let x=1; x<=100; x++){
    if( (x%2)==1 &&  (x%3)==0 ){
            console.log(x)
            w += x
    }
}
console.log("A soma é de todos os nuemros é - "+y)