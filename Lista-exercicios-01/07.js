const prompt = require('prompt-sync')()
// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let macas = Number(prompt("Insira o número de maçãs que deseja comprar: "))

if(macas >= 12){
    console.log(`Você comprou ${macas} maçãs e terá que pagar R$ ${(macas * 0.25).toFixed(2)}`)
}else{
    console.log(`Você comprou ${macas} maçãs e terá que pagar R$ ${(macas * 0.35).toFixed(2)}`)
}