const leia = require("prompt-sync")()
//Faça um progama aonde digite o nome e a nota do aluno 4 vezes. Além disso faça logo depois faça um boletim aonde fale o nome, a nota, e se ele foi aprovado ou reprovado..

let nomes = ["","","",""]
let notas = [0,0,0,0]
let situacao = ""

for(let x=0; x<nomes.length; x++){
    nomes[x] = leia("Digite o nome do aluno(a).. ")
    notas[x] = parseInt(leia("Digite a nota do aluno(a).. "))
}

console.log("....Boletim....")
console.log("NOME \t NOTA \t SITUAÇÃO")
for(let x=0; x<nomes.length; x++){
    if(notas[x]<5){
        situacao = 'Recuperação'
    }
    else{
        situacao = 'Aprovado'
    }
    console.log(nomes[x]+'\t'+notas[x]+'\t'+situacao)
}