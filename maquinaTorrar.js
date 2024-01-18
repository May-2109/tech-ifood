//passar parametros quando quer que uma mesma função tenha resultados diferentes

torrar("pão de forma", "Mayara", 10.90)
torrar("pão integral", "Patricia")
torrar("pão de queijo", undefined, undefined)

function torrar(pao, nome = "cliente", valor = "cortesia"){
    console.log("Torrada feita com " + pao)
    console.log("Ela é um pedido de " + nome)
    console.log("O valor é " + valor)
}

