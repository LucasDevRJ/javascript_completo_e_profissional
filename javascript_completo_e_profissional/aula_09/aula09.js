// Operadores Pós incremento e Pré incremento
var a = 1;
console.log("Valor de a é igual a", a);

// Pós incremento
// Ele vem a direita do valor e incrementa mais um ao valor
// a = 2
a++;

console.log("Com o Pós incremento(a++) o valor de a passa a ser", a);

// Mas como é um Pós incremento, ele só passa a ter esse valor depois do incremento mesmo
// Logo esse trecho de código continuará sendo 2 como valor
console.log("Adicionando o Pós Incremento na mesma linha, o valor de a é", a++);

// Agora ele será 3
console.log("Chamando o valor de a após o Pós incremento, ele vale",a);

// Pré Incremento
// Ele adiciona o valor logo na declaração do mesmo, diferentemente do Pós incremento
// Esse valor será 4
// Não foi preciso colocar outro console.log() para exibir o novo valor de a
console.log("Adicionando no valor de a com Pré Incremento(++a) ele passa a ser", ++a);

// Aqui continuará sendo 4
console.log("Chamando o a após o Pré incremento, ele vale", a);

// Também temos o decremento
console.log("Com o decremento o valor de a passa a ser", --a);

// Somando com outros valores
var b = 5;
console.log("b =", b);
// Somando mais 5 ao valor de b
b+=5;
console.log("b + 5 =", b);

// Decrementando outros valores
console.log("Decrementando 2 do valor de b",(b -= 2));

// Invertendo o valor de b
b = -b;
console.log("O valor de b invertido é", b);

// Concatenção de valores
// Nesse caso se trata da soma de dois valores em variáveis
var c = 5;
var d = 3;
var e = c + d;
console.log(`${c} + ${d} = ${e}`);

// Mas caso tenha uma String misturada com valor númerico inteiro, o código se tratado como texto
// O resultado será 53
console.log(c + "" + d);