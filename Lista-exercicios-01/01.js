const prompt = require('prompt-sync')()
// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let num = Number(prompt("Insira um número: "))
if(num % 2 === 0){
    console.log(`${num} é par.`)
}else{
    console.log(`${num} é ímpar.`)
}