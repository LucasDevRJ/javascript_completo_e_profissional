/*
    Operadores Relacionais: servem para comparar valores no código.
    > maior
    >= maior ou igual
    < menor
    <= menor ou igual
    == igual
    != diferente
*/

let a = 2;
let b = 3;
let resposta;

console.log('a = ', a);
console.log('b = ', b);

resposta = a > b;
console.log('a é maior que b? ', resposta);

resposta = a < b;
console.log('a é menor que b? ', resposta);

let c = 3;
console.log('c = ', c);

resposta = b >= c;
console.log('b é maior ou igual c? ', resposta);

resposta = c <= b;
console.log('c é menor ou igual a b? ', resposta);

resposta = b == c;
console.log('b é igual a c? ', resposta);

resposta = a != c;
console.log('a é diferente de c? ', resposta);