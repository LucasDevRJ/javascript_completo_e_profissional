// Loop For
// Serve para iterar determinado trecho de código, para assim evitar repetições no código.
// O Loop pode definido ou indefinido.
// Definido: quando se sabe a quantidade de vezes que precisa iterar. Exemplo: Loop For
// Indefinido: quando não se sabe a quantidade de vezes que precisa iterar. Exemplos: While e Do While.
// Sintaxe:
// for(iterador; condição; controle) {
// códigos
//}


console.log("Início do Programa.");

// A variável local de incremento se chama i
// enquanto a condição de i for menor que será, essa condição será verdadeira, logo ela será verdade 10 vezes, pois vai de 0 até 10
// i++ significa o incremento, ou seja, enquanto o i for menor que 10 ele será acrescentado mais um ao seu valor
// Com isso, a frase irá se repetir 10 vezes
for (let i = 0; i < 10; i++) {
    console.log("Irei ser o melhor programador que eu puder ser!");
}

console.log("Fim do Programa.");

console.log("Numeros Pares e Ímpares:");

for (let i = 0; i < 10; i++) {
    let restoDaDivisao = i % 2;
    if (restoDaDivisao == 0) {
        console.log("O numero " + i + " é par.");
    } else {
        console.log("O numero " + i + " é ímpar.");
    }
}

console.log("Fim do Programa.");