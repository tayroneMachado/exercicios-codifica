const prompt = require('prompt-sync')()
// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let num1 = Number(prompt("Insira um número: "))
let total = 0
let i = 0
while(num1 != 0){    
    total = total + num1
    i++
    console.log(total)
    num1 = Number(prompt("Insira um número: "))
}
console.log(total / i)