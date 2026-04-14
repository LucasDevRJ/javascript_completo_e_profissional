// Condicional
// Serve para dar mais de um fluxo no programa
// Os fluxos alternativos acontecem se forem verdadeiros dentro do bloco condicional ou até mesmo falso, dependendo da lógica
// Sintaxe:
// if (condição) {
// códigos
//}

var numero = 10;

if (numero > 10) { //não vai entrar nesse bloco, pois a condição é falsa
    console.log("Número maior que 10.");
}
//Obs: chaves são opcionais quando temos somente uma instrução dentro da condicional

// Caso a primeira condicional não seja atendida, o programa irá dar como verdadeira a segunda, que é o else
if (numero > 10) {
    console.log("Número maior que 10.");
} else {
    console.log("Número menor ou igual a 10.");
}

// Podemos colocar mais de uma condição com o else if
if (numero > 10) {
    console.log("Número maior que 10.");
} else if (numero == 10) {
    console.log("Número igual a 10.");
} else {
    console.log("Número menor que 10.")
}

numero = 60;
// Também tem como ter uma condição dentro de outra
if (numero > 10) {
    console.log("Número maior que 10.");
    if (numero > 50) {
        console.log("Número maior que 50.");
    }
} else if (numero == 10) {
    console.log("Número igual a 10.");
} else {
    console.log("Número menor que 10.")
}


var estaChovendo = false;
var clima = 28;

if (estaChovendo == false && clima > 20) {
    console.log("Eu irei a praia.");
} else {
    console.log("Não irei a praia.")
}

clima = 18;

if (estaChovendo == false && clima > 20) {
    console.log("Eu irei a praia.");
} else {
    console.log("Não irei a praia.")
}


console.log("Fim");