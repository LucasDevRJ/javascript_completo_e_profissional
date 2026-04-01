var a = 10;
var b = 11;
var c = a & b;

// O resultado será 10, porque houve equivalencia entre os valores binários de 10 e 11
// 10 = 1010
// 11 = 1011
//      1010
console.log(c);

var d = 11;
var e = 14;
var f = d & e;

// O resultado será 10 também
// 11 em binário é 1011
// 14 em binário é 1110
//                 1010
// equivalencia retorna 1 não equivalencia retorna 0
console.log(f);

var g = a | b;
// Resultado será 11 pois independentemente da equivalencia será retornado 1 caso ele exista nos valores binários
// 10 = 1010
// 11 = 1011
//      1011
console.log(g);

var h = a ^ b;
// retornará 1, pois se tiver equivalencia retornará 0 e se não tiver equivalencia retornará 1
// 10 = 1010
// 11 = 1011
//      0001
console.log(h);

var i = 13;

var j = i ^ e;

// 13 = 1101
// 14 = 1110
//      0011
// retornará o número 3 porque o binário de 0011 equivale ao número 3 convertido
console.log(j);

// Isso significa que vai deslocar uma casa decimal a esquerda do valor binário, adicionando um zero a mais
// 10 = 1010
//      10100
// 10100 = 20
// Isso resultará em 20
var k = a << 1;
console.log(k);

// Basicamente, nesse caso de Bitwase ele dobra o valor quando deslocado uma casa a esquerda
var l = 5;
k = l << 1;
// Resultará em 10, pois
// 5 = 1010
// 1010 = 10
console.log(k);

// Também podemos fazer a operação inversa, deslocar para a direita
// O resultado será 7 pois
// 14 = 1110
// 0111 = 7
l = 14;
k = l >> 1;
console.log(k);

// O mesmo serve se for aumentado o número de dobramentos, tanto para esquerda ou direita
l = 10;
k = l << 2;
// Resultado será 40
// 10 = 1010
//      101000
//101000 = 40
console.log(k);

l = 40;
k = l >> 2;
// Voltará a ser 10, pois desloquei duas casas para a direita
// 101000
// 1010
console.log(k);
