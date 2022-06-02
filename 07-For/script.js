let spaceship = prompt("Digite o nome da nave")
let newSpaceship = ""

let char = prompt("Qual caractere você deseja substituir?")
let newChar = prompt("Deseja substituir o caractere escolhido por qual caractere?")

for (let i = 0; i < spaceship.length; i++) {
    if (spaceship[i] == char) {
        newSpaceship += newChar
    } else {
        newSpaceship += spaceship[i]
    }
    
}

alert("O novo nome da nave é: " + newSpaceship)