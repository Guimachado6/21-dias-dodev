let nome = prompt("Insira seu nome");
let idade = prompt("insira sua idade");
let altura = prompt("insira sua altura");
let peso = prompt("insira o seu peso");
console.log(nome, idade, altura, peso);

nome = "Guilherme";
idade = 26;
altura = 1.82;
peso = 96;

let anoDeNascimento = (2023 - idade)
console.log(anoDeNascimento)

let imc = (peso / (altura * altura));
console.log(imc)

console.log("Olá" + nome +  ", você tem" + idade + " anos, nasceu em" + anoDeNascimento + ", tem" + altura + " de altura, pesa" + peso + "kg seu IMC é" + imc + " Kg/m2")

