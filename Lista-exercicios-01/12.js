const prompt = require('prompt-sync')()
// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

let operacao = Number(prompt("Escolhe a operação desejada, [1] soma, [2] subtração, [3] divisão, [4] multiplicação"))
let num1 = Number(prompt("Insira um número: "))
let escolha



for(i = 1; i <= 10; i++){
    switch(operacao){
        case 1:
            escolha = num1 + i
            console.log(escolha)
            break
        case 2:
            escolha = num1 - i
            console.log(escolha)
            break
        case 3: 
            escolha = num1 / i
            console.log(escolha)
            break
        case 4:
            escolha = num1 * i
            console.log(escolha)
            break
        default:
            console.log("Opção inválida")
    }
}