const leia = require("prompt-sync")()

let codigos =["1","2","3","4","5"]
let produtos =["teclado","mouse","monitor","cadeira","cpu"]
let valor =[20,10,150,700,800]
let estoque=[0,0,0,0,0]
let vendas =[0,0,0,0,0]

// Progama principal
console.log("Bem vindos a loja \n")
console.log("Codigo\tNome\tEstoque")

for(let i=0; i<produtos.length; i++){
    console.log(codigos[i]+"\t"+produtos[i]+"\t"+estoque[i])
}
console.log(" \nVamos começar a colocar os estoques dos produtos..")
for(let i=0; i<produtos.length; i++){
    estoque[i]= parseInt(leia("\n Digite o estoque do "+produtos[i]+" :"))
    console.log("Codigo\tNome\tEstoque")
    console.log(codigos[i]+"\t"+produtos[i]+"\t"+estoque[i])
}
console.log("\n \n Agora vamos para a parte das compras.. \n Logo abaixo vai estar todos os produtos da loja com o valor.. \n \n")
for(let i=0; i<produtos.length; i++){
    console.log(i+"-"+"\t"+produtos[i]+"\t"+"R$"+valor[i]+",00")
}
console.log("6- "+"\t"+"Se deseja sair..")
escolha = parseInt(leia("Escolha qual opção você deseja..: "))
for(let i=0; i<codigos.length; i++){
    if(escolha == codigos[i]){
        console.log(codigos[i]+' - '+produtos[i]+' estoque '+estoque[i])
        vendas[i] = parseInt(leia("Digite a quantidade que deseja comprar: "))
        console.log("Total da compra: "+(vendas[i]*valor[i]))
        estoque[i]= estoque[i]-vendas[i] 
    }
}