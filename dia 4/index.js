nome = prompt("Seu nome?")
idade = parseInt(prompt("Sua idade?"))
let opcaoCarta = prompt("Possui carteira de motorista?")
if(possuiCarta === "sim"){
    possuiCarta = true
}
let opcaoCarro = prompt("Possui algum carro ?")
if(possuiCarro === "sim"){
    possuiCarro = true
}


if(idade < 18 || possuiCarta){
    console.log(nome + ", voce não pode dirigir")
}

else if(idade >= 18 && !possuiCarta && !possuiCarro){
    console.log(nome + ", voce pode dirigir mas não tem um carro.")
}

else(console.log(nome + ",voce será o motorista!"))