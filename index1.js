//nome de função não começa com numeros
//evitar nomes compostos
//funções são ações, desta forma ao nomear coloque verbos
//uma função apenas uma coisa, se fizer mais do que uma crie mais de uma função

//função responsável por chamar as funções

main()

function main(){
    getData()
    cheakValues()
    sendToDataBase()

}


//função que pega todos os dados 
function getData(){
    console.log("solicitando os dados")
}

//função que checa os dados
function cheakValues(){
    console.log("cadastrando os dados do usuário")

}

//função que envia os dados para o banco de dados 
function sendToDataBase(){
    console.log("enviando os dados do usuário")
}
