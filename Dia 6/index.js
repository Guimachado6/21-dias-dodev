/*
let numero = parseInt(prompt("Escolha um número inteiro e positivo."))

for(i = 0; i <= numero; i++){
    console.log(i)
} */

/* for(i = 0; i <= 50; i += 5){
    console.log(i)
} */

/*
for(i = 50; i >= 0; i-= 5){
    console.log(i)
} */

let numero = parseInt(prompt("Escolha um numero inteiro e positivo"))

for(i = numero; i <= numero + 2; i++){
    console.log("Tabuada do número:" + i)

 for(j = 0; j <= 10; j++){
    console.log(i + " X " + j + " = " + (i * j))
 }   
}

