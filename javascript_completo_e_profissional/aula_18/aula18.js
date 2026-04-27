/*
    While e Do While
    Ambos executam enquantoa a condição lógica for verdadeira, como também são usadas em situações indefinidas, ou seja, quando não sabemos
    o número de incrementos que teremos de dar.

    Sintaxes:
    While (expressão) {
        enquanto a expressão for verdadeira, o código será executado
        mas só será executado se a expressão for verdadeiro
    }

    Do {
        vai executar mesmo se a expressão for falsa
        caso verdadeira, vai entrar novamente nessa execução
    } While (expressão);
*/

console.log("Início do Loop While.")
var incremento = 0;
while (incremento < 10) {
    console.log("Irei ser o melhor programador que eu conseguir!");
    incremento++;
}
console.log("Fim do Loop While.");


console.log("Início do Loop Do While.")
do {
    console.log("Irei ser o melhor programador que eu conseguir!");
} while (incremento < 10);
console.log("Fim do Loop Do While.");