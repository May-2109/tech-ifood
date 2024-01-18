function calcularRanking(vitoria, derrota){
    return vitoria - derrota
}

let saldoVitorias = calcularRanking(vitoria, derrota)
let nivelPersonagem = ""

console.log(saldoVitorias)

if (saldoVitorias <= 10){
    nivelPersonagem = "Ferro"
}else if(saldoVitorias <= 20){
    nivelPersonagem = "Bronze"
} else if(saldoVitorias <= 50){
    nivelPersonagem = "Prata"
} else if(saldoVitorias <= 80){
    nivelPersonagem = "Ouro"
} else if(saldoVitorias <= 90){
    nivelPersonagem = "Diamante"
} else if(saldoVitorias <= 100){
    nivelPersonagem = "Lendário"
} else{
    nivelPersonagem = "Imortal"
}


console.log("O Herói tem de saldo de " + saldoVitorias + " vitórias e está no nível de " + nivelPersonagem + ".")