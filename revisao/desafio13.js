const leia = require("prompt-sync")()

//Faça um progama aonde a pessoa coloque 2 alunos e duas notas, e fale que passou se for maior que 5, e que roprovou se for menor que 5..
//Modo Dificil

//let aluno1
//let aluno2
//let nota1
//let nota2

//aluno1 = leia("Nome do aluno 1: ")
//nota1 = parseInt(leia("Nota do aluno 1: "))

//aluno2 = leia("Nome do aluno 2: ")
//nota2 = parseInt(leia("Nota do aluno 2: "))

//if(nota1>5){
//    console.log("Oi "+aluno2+", Aprovado")
//}
//else{
//    console.log("Oi"+aluno2+", Recuperação")
//}

//Modo Facil
let alunos =["Marcos", "Paulo", "Maria"]
let matriculas =["MAT1", "MAT2", "MAT3"]
let notas =[0,0,0]

//Colocando as notas no jeito dificil :(
//notas[0] =5
//notas[1] =6
//notas[2] =9

for(let i=0; i<3; i++){
    notas[i] = parseInt(leia("Digite a nota do aluno: "))
}

console.log("\n\n\n MAT\tAluno\tNota")
for(let i=0; i<alunos.length; i++){
    if(notas[i]>=5){
        situacao='Aprovado'
    }
    else{
        situacao='Reprovado'
    }
    console.log(matriculas[i]+alunos[i]+"\t"+notas[i]+'\t'+situacao)
}

escolha = leia("Você gostaria de arrumar alguma nota?? S/N: ").toUpperCase()
while(escolha == "S"){

    console.log(" \n \n \nMudando a nota do aluno")
    let auxMat = leia("Digite a matricula do aluno: ")
    for(let i=0; i<alunos.length; i++){
        if(auxMat == matriculas[i]){
            console.log("Aluno escolhido: "+alunos[i])
            notas[i] = parseInt(leia("Digite a nova nota do aluno: "))
        }
    }

    console.log("\n\n\n MAT\tAluno\tNota")
    for(let i=0; i<alunos.length; i++){
        if(notas[i]>=5){
            situacao='Aprovado'
        }
        else{
            situacao='Reprovado'
        }
        console.log(matriculas[i]+alunos[i]+"\t"+notas[i]+'\t'+situacao)
    }
    escolha = leia("Você gostaria de arrumar alguma nota?? S/N: ").toUpperCase
}