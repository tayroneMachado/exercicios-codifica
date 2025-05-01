const prompt = require('prompt-sync')()

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let num1 = Number(prompt("Insira um valor: "))
let num2 = Number(prompt("Insira o segundo valor: "))

if(num1 === num2){
    console.log("Valores iguais.")
}else if(num1 < num2){
    console.log(`${num1}, ${num2}`)
}else{
    console.log(`${num2}, ${num1}`)
}