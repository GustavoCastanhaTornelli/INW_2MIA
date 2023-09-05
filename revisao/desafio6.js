const leia = require("prompt-sync")()
//Faça um progama aonde pede o nome do aluno e a nota para ver se ele pasosu de ano, sendo que a media é 5
let aluno = leia("\n \n \n \n \n \n \n \n \n \n \n Digite o nome do aluno: ")
let sexo = leia("Qual é seu sexo, (H, M, LGBTQIA+): ")

if(sexo == "H"){
    do{
        let nota = parseInt(leia("Digite a nota do aluno: "))
        if(nota <= 5){
            console.log("Oi aluno "+aluno+". Ainda não, você está de recuperação..")
        }
        else{
            console.log("Oi "+aluno+". Parabens, você passou direto..")
        }
        pergunta = leia("Quer perguntar sobre outra nota?(sim = S; não = N)")
    }while(pergunta == "S")
}

else if(sexo == "M"){
    do{
        let nota = parseInt(leia("Digite a nota do aluno: "))
        if(nota <= 5){
            console.log("Oi aluna "+aluno+". Ainda não, você está de recuperação..")
        }
        else{
            console.log("Oi "+aluno+". Parabens, você passou direto..")
        }
        pergunta = leia("Quer perguntar sobre outra nota?(sim = S; não = N)")
    }while(pergunta == "S")
}

else if(sexo == "LGBTQIA+"){
    do{
        let nota = parseInt(leia("Digite a nota do aluno: "))
        if(nota <= 5){
            console.log("Oi LGBTQIA+ "+aluno+". Ainda não, você está de recuperação..")
        }
        else{
            console.log("Oi "+aluno+". Parabens, você passou direto..")
        }
        pergunta = leia("Quer perguntar sobre outra nota?(sim = S; não = N): ")
    }while(pergunta == "S")
}