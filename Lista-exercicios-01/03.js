const prompt = require('prompt-sync')()
// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = Number(prompt("Insira sua nota: "))
if(nota >= 7){
    console.log("Aprovado")
}else if(nota >= 5){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}