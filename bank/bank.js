//Classes
//npm install prompt-sync
class Conta{
    constructor(numero, cpf, saldo, ativa){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativa = ativa;
    }

    ativar(){
        this.ativa = true
    }

    credito(valor){
        if(this.ativa){
            if(valor<0){
                console.log("Impossivel realizar valor negativo ou zerado...")
            }
            else if(valor == 0){
                console.log("Impossivel realizar valor zerado...")
            }
            else{
                this.saldo = this.saldo + valor
            }
        }
        else{
            console.log("Conta está inativa...")
        }
    }

    debito(valor){
        if(this.ativa){
            if(valor<0){
                console.log("Impossivel realizar valor negativo ou zerado...")
            }
            else if(valor == 0){
                console.log("Impossivel realizar valor zerado...")
            }
            else if(this.saldo<valor){  
                console.log("Saldo insuficiente...")
            }
            else{
                this.saldo = this.saldo - valor
            }
        }
        else{
            console.log("Conta está inativa...")
        }
    }

}

class Poupanca extends Conta{ //José
    constructor(numero, cpf, saldo, ativa, diaAniversarioPoupanca){
        super(numero,cpf,saldo,ativa),
        this.diaAniversarioPoupanca = diaAniversarioPoupanca
    }

    correcao(dia){
        if(dia == this.diaAniversarioPoupanca){
            this.credito(this.saldo*0.05)
        }
        else{
            console.log("O dia não é o mesmo da conta...")
        }
    }
}

class Corrente extends Conta{ // Gustavo
    constructor(numero, cpf, saldo, ativa, contadorTalao){
        super(numero,cpf,saldo,ativa),
        this.contadorTalao = contadorTalao
    }

    pediTalao(){
        this.contadorTalao = 3;
        if(this.contadorTalao >= 1){
            for(let y=1; y<2; y++){
                do{
                    this.saldo = this.saldo - 30
                    this.contadorTalao = this.contadorTalao - 1
                    console.log("\n O saldo da sua conta é de "+ this.saldo +". E você ainda bode retirar mais "+ this.contadorTalao +" talão(ões) da sua conta.. \n")
                    talao = leia(console.log(" \n Você gostaria de retirar um talão de cheque? \n (Se sim digite S, se não digite N)")).toUpperCase()
                }while(talao == "S" && this.contadorTalao >= 1 && this.saldo >= 0)
                if(this.contadorTalao == 0){
                    console.log("nNão foi possivel realizar a operação, por causa que você não tem mais talões disponiveis.. \n \n")
                }
            }
        }
        else if(this.contadorTalao <= 0 || this.saldo == 0){
            console.log("Você não pode retirar mais talões, por causa que é possivel retirar 3 apenas..")
            console.log("Saldo da conta R$: "+cp.saldo)
        }
    }
}

class Especial extends Conta{ //kauai
    constructor(numero, cpf, saldo, ativa, contadorTalao, limite){
    super(numero,cpf,saldo,ativa),
    this.limiti = limiti
    }

    usarLimite(valor){
        if(this.saldo>this.limite){
            console.log("impossivel realizar, limite indisponivel....")
        }
        else{
            this.limite = this.limite - saldo
            this.credito(saldo)
        }
        console.log("Limite atual : "+this.limite)
        console.log("Saldo atual conta R$ : "+this.saldo)
        }
}

//Progama Final

const leia = require("prompt-sync")()
let op = ""
let valor = 0

console.log("Flor Do Din Din")
console.log("Banco que rouba mais do que o da arminha e o do nove dedos :D \n")
console.log("1 - Conta Poupança")
console.log("2 - Conta Corrente ")
console.log("3 - Conta Especial ")
console.log("3 - Sair \n")
tipo = leia("Digite o numero do tipo de conta a ser aberta: ")

let numero = parseInt(leia("\n \n \n \n \n Digite o numero da conta: "))
let cpf = leia("Digite o cpf: ")


if (tipo=="1"){
    do{
        console.log("\n \n \n \n \nConta Poupança")

        let diaAniversarioPoupanca = leia("Digite o dia de criação da conta: ")
        let cp = new Poupanca(numero,cpf,0,false, diaAniversarioPoupanca)
        cp.ativar()

        for(let x=1; x<=10; x++){
            console.log("\n \n Movimento "+x+"\n")
            console.log("Saldo da conta R$: "+cp.saldo)
            valor = parseInt(leia("Digite o valor: "))
            op = leia("Digite D - débito ou C - crédito: ").toUpperCase()
            if(op=="C"){
                cp.credito(valor)
            }
            else if(op=="D"){
                cp.debito(valor)
            }
        }
        console.log("\n \n Saldo final da conta R$: "+cp.saldo)
        let dia = leia("Digite qual é o dia hojé: ")
        cp.correcao(dia)
        console.log("\n Saldo final da conta R$: "+cp.saldo)
        continuar = leia(console.log(" \n Deseja continuar com as operações na conta?? \n (Se sim digite S, se não digite N)"))
    } while(continuar == "S")
}

else if(tipo=="2"){
    do{
        console.log("\n \n \n \n \nConta Corrente")

        let cc = new Corrente(numero,cpf,0,false)
        cc.ativar()

        for(let x=1; x<=10; x++){
            console.log("\n \n Movimento "+x+"\n")
            console.log("Saldo da conta R$: "+cc.saldo)
            valor = parseInt(leia("Digite o valor: "))
            op = leia("Digite D - débito ou C - crédito: ").toUpperCase()
            if(op=="C"){
                cc.credito(valor)
            }
            else if(op=="D"){
                cc.debito(valor)
            }
        }
        talao = leia(console.log(" \n \n Você gostaria de retirar um talão de cheque? \n (Se sim digite S, se não digite N)")).toUpperCase()
        if(talao == "S"){
                cc.pediTalao()
        }
        else{
            console.log("Saldo final da conta R$: "+cc.saldo+"\n")
        }
        console.log("\n Saldo final da conta R$: "+cc.saldo)
          continuar = leia(console.log(" \n \n \n \n \n \n Deseja continuar com as operações na conta?? \n (Se sim digite S, se não digite N)"))
    } while(continuar == "S")
}

else if(tipo=="3"){
    do{
        console.log("\n \n \n \n \nConta Especial")

        let cs = new Corrente(numero,cpf,0,false, 1000)
        cs.ativar()

        for(let x=1; x<=10; x++){
            console.log("\n \n Movimento "+x+"\n")
            console.log("Saldo da conta R$: "+cs.saldo)
            valor = parseInt(leia("Digite o valor: "))
            op = leia("Digite D - débito ou C - crédito: ").toUpperCase()
            if(op=="C"){
                cs.credito(valor)
            }
            else if(op=="D"){
                cs.debito(valor)
            }
        }
        console.log("\n Saldo final da conta R$: "+cs.saldo)
          continuar = leia(console.log(" \n \n \n \n \n \n Deseja continuar com as operações na conta?? \n (Se sim digite S, se não digite N)"))
    } while(continuar == "S")
}

else if(tipo=="3"){
    console.log("Você escolheu encerrar o atendimento.. Tchau!!")
}