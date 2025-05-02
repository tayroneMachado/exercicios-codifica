const prompt = require('prompt-sync')()
// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let num1 = parseInt(prompt("Insira um valor: "))
let contador = 0
while(contador < 10){
    console.log(num1)
    contador++
}