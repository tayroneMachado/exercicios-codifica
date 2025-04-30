const prompt = require('prompt-sync')()
// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let peso = Number(prompt("Insira seu peso: "))
let altura = Number(prompt("Insira sua altura: "))
let imc = peso / (altura * altura)

if(imc < 16){
    console.log(`IMC de ${imc} = Magreza grave`)
}else if(imc < 17){
    console.log(`IMC de ${imc} = Magreza moderada`)
}else if(imc < 18.6){
    console.log(`IMC de ${imc} = Magreza leve`)
}else if(imc < 25){
    console.log(`IMC de ${imc} = Peso ideal`)
}else if(imc < 30){
    console.log(`IMC de ${imc} = Sobrepeso`)
}else if(imc < 35){
    console.log(`IMC de ${imc} = Obesidade grau I`)
}else if(imc < 40){
    console.log(`IMC de ${imc} = Obesidade grau II ou severa`)
}else{
    console.log(`IMC de ${imc} = obesidade grau III2 ou mórbida`)
}