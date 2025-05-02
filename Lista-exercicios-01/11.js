const prompt = require('prompt-sync')()
// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let num1
let total = 0
for(let i = 0; i < 5; i++){
    num1 = Number(prompt("Insira um número"))
    total = num1 + total
    console.log(num1)   
}

console.log(`O valor total das somas é ${total}`)