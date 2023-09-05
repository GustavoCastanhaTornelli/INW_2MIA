// npm i prompt-sync
const leia = require("prompt-sync")()
let matricula = ["M01", "M02", "M03", "M04"]
let nome = ["Paulo", "Mario", "Pedro", "Marcos"]
let nota = [0, 0, 0, 0]
let auxMat 
let indici = -1

//Lista os dados na tela
console.log("\nMatricula\tNome\t\tNota")
for(let i = 0; i < matricula.length; i++){
    console.log(matricula[i]+"\t\t"+nome[i].toUpperCase()+"\t\t"+nota[i])
}

auxMat = leia('\nDigite a Matrícula do Aluno: ').toUpperCase()
console.log(auxMat)
for(let i = 0; i < matricula.length; i++){
    if(auxMat == matricula[i]){
        indici = i
    }
}
if(indici!=-1){
    console.log("O aluno escolhido foi: "+nome[indici])
    nota[indici] = leia("Digite a nota do aluno entre 1 e 10: ")
    if(nota[indici]<6){
        console.log(nome[indici]+" Sua nota é "+nota[indici]+". Você está de rec..")
    }
    else{
        console.log(nome[indici]+" Sua nota é "+nota[indici]+". Você está aprovado")
    }
}
//Cadastrar uma nota de aluno especifico