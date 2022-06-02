let yearLight = prompt("Qual a distância em anos luz?")

let unity = prompt("Qual operação deseja realizar? \n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(km)\n\n(Digite o número da opção desejada)")

let chosenUnity
let convertedDistance

switch (unity) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = yearLight * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = yearLight * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = yearLight * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert("Distância em Anos-luz: " + yearLight + "\n" + chosenUnity + ": " + convertedDistance)

