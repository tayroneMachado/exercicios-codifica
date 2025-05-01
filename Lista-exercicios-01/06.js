const prompt = require('prompt-sync')()
// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

let ladoA = Number(prompt("Insira o primeiro lado do triângulo: "))
let ladoB = Number(prompt("Insira o segundo lado do triângulo: "))
let ladoC = Number(prompt("Insira o terceiro lado do triângulo: "))

if((ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA)){
    if((ladoA != ladoB) && (ladoA != ladoC) && (ladoB != ladoC)){
        console.log("Triângulo Escaleno.")
    }else if((ladoA === ladoB) && (ladoA === ladoC) && (ladoB === ladoC)){
        console.log("Triângulo Equilátero.")
    }else{
        console.log("Triângulo Isósceles.")
    }
}else{
    console.log("As medidas não formam um triângulo")
}