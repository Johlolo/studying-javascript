// let spaceshipName = prompt("Qual o nome da nave?")
// let warpCount = 0
// let chosenOption = ""

// chosenOption = prompt("Você deseja entrar em dobra espacial?\n1- Sim\n2- Não")

// if(chosenOption == "1") {
//     warpCount += 1
//     while (chosenOption == "1") {
//         chosenOption = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
//         switch (chosenOption) {
//             case "1":
//                 warpCount += 1
//                 break;
//             case "2":
//                 break;
//             default:
//                 alert("Não foi possível identificar a opção desejada.")
//                 break;
//         }
//     }
    
// } else if(chosenOption == "2") {
//     alert("Nome da nave: " + spaceshipName + "\nNúmero de dobras: " + warpCount)
// } else {
//     alert("Não foi possível identificar a opção desejada.")
// }

// alert("Nome da nave: " + spaceshipName + "\nNúmero de dobras: " + warpCount)

/////////////////////////////////////////////////////////////////////////

let warpCount = 0
let chosenOption = ""

let spaceshipName = prompt("Digite o nome da nave")

chosenOption = prompt("Você deseja entrar em dobra espacial?\n1- Sim\n2- Não")

while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
}

alert("Nome da nave: " + spaceshipName + "\nNúmero de dobras: " + warpCount)
