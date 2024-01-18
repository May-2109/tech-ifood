let nomePersonagem = ""
let nivelXp = ""
let nivelPersonagem = ""



if (nivelXp <= 1000){
    nivelPersonagem = "Ferro"
}else if(nivelXp <= 2000){
    nivelPersonagem = "Bronze"
}else if(nivelXp <= 5000){
    nivelPersonagem = "Prata"
}else if(nivelXp <= 7000){
    nivelPersonagem = "Ouro"
}else if(nivelXp <= 8000){
    nivelPersonagem = "Platina"
}else if(nivelXp <= 9000){
    nivelPersonagem = "Ascendente"
}else if(nivelXp <= 10000){
    nivelPersonagem = "Imortal"
}else{
    nivelPersonagem = "Radiante"
}

console.log("O Herói de nome " + nomePersonagem + " está no nível de " + nivelPersonagem)