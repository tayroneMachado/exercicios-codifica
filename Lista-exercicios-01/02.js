const prompt = require('prompt-sync')()
// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

let idade = parseInt(prompt("Insira sua idade: "))
if(idade <= 10){
    console.log(`Você tem ${idade} anos e é uma criança.`)
}else if(idade < 18){
    console.log(`Você tem ${idade} anos e é um adolescente.`)
}else if(idade < 60){
    console.log(`Você tem ${idade} anos e é um adulto`)
}else{
    console.log(`Você tem ${idade} anos e é um idoso`)
}