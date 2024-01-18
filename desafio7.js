const  quantidadeGolpes = 4

let minerais = ["carvao", "ferro", "diamante", "pedra"]

for (let i = 1; i<= quantidadeGolpes;i++ ){
  let minaIndex = (i -1 )% minerais.length

  console.log(i + ": " + minerais[minaIndex])
} 

