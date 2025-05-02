const prompt = require('prompt-sync')()
// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let num1 = Number(prompt("Insira um número: "))
let contador = num1

let total = 1

for(contador; contador > 0; contador--){
    total = total * contador    
}
console.log(`O fatorial de ${num1} é ${total}`)