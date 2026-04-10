// Operador Ternário: forma de reduzir uma condicional
// Sintaxe:
// variável/constante nomeDaVariavel = condição ? caso verdadeiro : caso falso
//                                              ? = if {}         : = else
var numero = 10;
var resto = numero % 2;
var imparOuPar = resto === 0 ? "Par" : "Ímpar";

console.log(`O numero ${numero} sendo dividido por 2 tem o resto da divisão igual a 0. Logo ele é um numero ${imparOuPar}.`);

numero = 7;
resto = numero % 2;
imparOuPar = resto ? "Ímpar" : "Par"; //0 = false e 1 = true

console.log(`O numero ${numero} sendo dividido por 2 tem o resto da divisão diferente de 0. Logo ele é um numero ${imparOuPar}.`);

numero = 4;
resto = numero % 2;
imparOuPar = !resto ? "Par" : "Ímpar"; //!resto = true

console.log(`O numero ${numero} sendo dividido por 2 tem o resto da divisão igual a 0. Logo ele é um numero ${imparOuPar}.`);