let aviao = {
    marca: "Airbus",
    peso: 260000,
    nome: "Airbus A330",
    ligado: "desligado",
    velocidade: 0,
    velocidadeMax: 800,
    ligar:function(){
        aviao.ligado = "ligado"
        console.log("ligando o avião")
    },
    desligar:function(){
        if(aviao.velocidade = 0){
            aviao.ligado = "desligado"
            console.log("Avião está desligado") 
        }
    },
    acelerar:function(){
        console.log("Velocidade atual é de "+aviao.velocidade+"km")
        if(aviao.ligado = "ligado" && aviao.velocidade <= aviao.velocidadeMax){
            aviao.velocidade += 10
            console.log("Acelerando...")
        }
    },
    desacelerando:function(){
        console.log("Velocidade atual é de "+aviao.velocidade+"km")
        if(aviao.ligado = "ligado"){
            aviao.velocidade = aviao.velocidade - 10
            console.log("desacelerando...")
        }
    }
}

console.log("Avião está "+aviao.ligado)
aviao.ligar()
while(aviao.velocidade <= 200){
aviao.acelerar()
}
console.log("Avião está decolando na velocidade "+aviao.velocidade+"km")
while(aviao.velocidade <= 290){
    aviao.acelerar()
    }
console.log("Avião está em auto mar na velocidade "+aviao.velocidade+"km")
while(aviao.velocidade >= 210){
    aviao.desacelerando()
}
console.log("Avião está pousando na velocidade "+aviao.velocidade+"km")
while(aviao.velocidade >= 10){
    aviao.desacelerando()
}
console.log("A velocidade é "+aviao.velocidade+"km, desligando o avião...")
aviao.desligar()