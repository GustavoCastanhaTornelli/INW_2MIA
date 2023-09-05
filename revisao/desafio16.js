const leia = require("prompt-sync")()

let codigos =["GRP0X-1","GRP0X-2","GRP0X-3","GRP0X-4","GRP0X-5","GRP0X-6","GRP0X-7","GRP0X-8","GRP0X-9","GRP0X-10"]
let produtos =["Bone    ","Calça   ","Bermuda Afro","Bata    ","Camisa Afro","Saia Rodada","Saia Style","Macacão ","Camiseta Termica ","Calça Social Afro "]
let valor =[100.00,150.00,90.00 ,140.00,150.00,90.00 ,90.00 ,150.00,100.00,95.50 ]
let estoque=[10,10,10,10,10,10,10,10,10,10]
let carrinho =[0,0,0,0,0,0,0,0,0,0]
let opcao
let auxCodigo
// Progama principal
do{

    console.log("Bem vindos a loja \n\n\n")
    console.log("Codigo\t\tNome\t\t\t\tValor Unitario\t\tEstoque\n")
    for(let i=0; i<produtos.length; i++){
        console.log(codigos[i]+"\t\t"+produtos[i]+"\t\t\t"+valor[i]+"\t\t\t\t"+estoque[i])
    }
    opcao = leia("\nDeseja Fazer Compras?? (S/N): ").toUpperCase()
    if(opcao=='N'){
        break
    }

    //Laços Das Compras
    console.log("\nCompras")
    while(true){
        auxCodigo = leia("Digite o codigo do produto que deseja comprar: ").toUpperCase()
        for(let i=0; i<produtos.length; i++){
            if(auxCodigo == codigos[i]){
                console.log(codigos[i]+"\t\t"+produtos[i]+"\t\t"+valor[i]+"\t\t\t\t"+estoque[i])
                carrinho[i]= parseInt(leia("Digite a quantidade que deseja comprar: "))
                console.log("Sub-Total: R$"+(valor[i]*carrinho[i]))
            }
        }
        console.log("\nCarrinho De Compras\n")
        console.log("Codigo\t\tNome\t\t\t\tValor Unitario\t\tEstoque\t\tQTDE Comprada\n")
        for(let i=0; i<produtos.length; i++){
            if(carrinho[i]>0){
                console.log(codigos[i]+"\t\t"+produtos[i]+"\t\t\t"+valor[i]+"\t\t\t\t"+estoque[i]+"\t\t\t\t"+carrinho[i])
            }
        }
        let continua = leia("Continua comprando?? (S/N)").toUpperCase()
        if(continua=='N'){
            break
        }
    }

}while(opcao!="N")
console.log("Até em breve..")