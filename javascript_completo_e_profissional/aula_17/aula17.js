// Loop While
// é um loop indefinido, porque ele é usado quando não se tem certeza da quantidade de iterações que queremos ter no loop
/*
    Sintaxe:
    while (condição) {
        códigos
    }
*/

// no momento que o n valer 10, a condição será falsa e não entrará mais no loop
var contador = 0;
while (contador < 10) {
    console.log(contador);
    contador++;
}

var numero = 5;
var fatorial = 1;

while (numero >= 1) {
    fatorial *= numero;
    numero--;
}

console.log(`5! = ${fatorial}`);