const prompt = require('prompt-sync')()

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
let opcao = Number(prompt("Escolha [1] para viajar para Tokyo, [2] Para viajar para Nova York ou [3] para viajar para Mogi"))
switch(opcao){
    case 1:
        console.log("Viajar para Tokyo")
        break
    case 2:
        console.log("Viajar para Nova York")
        break
    case 3:
        console.log("Viajar para Mogi")
        break
    default:
        console.log("Opção inválida.")
}