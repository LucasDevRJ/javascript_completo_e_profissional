// Operadores Lógicos, servem para adicionar lógicas alternativas ou adicionais no código
// && = e ou and
// || = ou ou or
// ! = não ou not

var a, b, c, d;

a = 2;
b = 6;
c = 1;
d = 9;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);


// Operador lógico && precisa que todas as condições sejam verdadeiras para seu resultado ser true

// Essa condição é true pois as duas condições são verdadeiras
console.log("a < b e b > c? ",(a < b) && (b > c));

// Essa condição dará false pois só uma condição é verdadeira
console.log("a > b e b > c? ", (a > b) && (b > c));

// Operador Lógico || precisa apenas que uma condição seja verdadeira para seu resultado ser verdadeiro

// Só uma condição é verdadeira, então seu resultado é true
console.log("c > a ou d > c? ", (c > a) || (d > c));

// Já o Operador Lógico de ! é usado para negar a condição resultante

// Essa condição irá dar true porque o seu resultado é false, mas como estamos negando o false, o resultado é true
console.log("c não é maior que d? ", !(c > d));