const leia = require("prompt-sync")();

//Variaveis
let cod = ["C1", "C2", "C3"];
let descricao = ["Calça", "Saia", "Camisa"];
let valor = [100.0, 60.5, 200.25];
let estoque = [0, 0, 0];
let movimento = [0, 0, 0];
let opcaoMenuPrincipal = "";
let opcaoSubMenu = "";
let posicao = -1;

//Progama Pricipal
while (opcaoMenuPrincipal != "2") {
  //Menu
  console.log("Loja XXX\n\n");
  console.log("Menu Principal");
  console.log("1 - Opções");
  console.log("2 - Sair");
  opcaoMenuPrincipal = leia("Digite o numero da sua opção: ");
  auxCod = ""

  if (opcaoMenuPrincipal == "1") {
    //Sub_Menu referente as opções
    opcaoSubMenu = "";
    while (opcaoSubMenu != "6") {
      console.log("Sub-Menu\n");
      console.log("1 - Mostrar os registros");
      console.log("2 - Alterar os registros");
      console.log("3 - Cadastrar os registros");
      console.log("4 - Excluir os registros");
      console.log("5 - Carrinho de compras");
      console.log("6 - sair");
      opcaoSubMenu = leia("Digite o numero da sua opção: ");

      if(opcaoSubMenu == "1"){
        console.log("COD\tDESCRIÇÃO\tVALOR\tESTOQUE")
        for(let x = 0; x<cod.length; x++){
            console.log(cod[x]+"\t"+descricao[x]+"\t\t"+valor[x]+"\t"+estoque[x])
        }
      }
      else if(opcaoSubMenu == "2"){
        auxCod = leia("Digite o codigo do produto que deseja alterar: ").toUpperCase()
        for(let x =0; x<cod.length; x++){
          if(auxCod==cod[x]){
            posicao = x
          }
        }
        if(posicao == -1){
          console.log("Produto não encontrado..")
        }
        else{
          cod[posicao] = ("Digite o novo codigo: ")
          descricao[posicao] = leia("Digite a nova descrição: ")
          descricao[posicao] = parseFloat(leia("Digite o novo preço: "))
          descricao[posicao] = parseInt(leia("Digite o novo estoque: "))
        }
      }
    }
  }
}

//Fim De Progma