//.split -> irá quebrar a variavel de acordo com parametro determinado

let userName = getFirstName("Mayara-Oliveira-da-Silva", "-")


console.log("Welcome "+ userName)

userName = getFirstName("Patricia Aparecida Fernandes", " ")
console.log("Welcome "+ userName)


function getFirstName(name, splitChar){
    let firstName  = name.split(splitChar)[0]
    return firstName
}