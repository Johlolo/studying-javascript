let olderPersonName = prompt("Qual o nome da pessoa mais velha?")
let olderPersonAge = prompt("Qual a idade da pessoa mais velha?")

let youngerPersonName = prompt("Qual o nome da pessoa mais nova?")
let youngerPersonAge = prompt("Qual a idade da pessoa mais nova?")

let ageDifference = olderPersonAge - youngerPersonAge

alert(
    "Pessoa mais velha: " + olderPersonName + "\nIdade: " + olderPersonAge +
    "\n\nPessoa mais nova: " + youngerPersonName + "\nIdade: " + youngerPersonAge +
    "\n\nDiferença de idade: " + ageDifference + " ano(s).")