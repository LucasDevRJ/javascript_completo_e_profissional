// Operador Spread
// Serve para quebrar um vetor de elementos devolvendo elemento por elemento

// Criando vetores numericos e um vetor indefinido
var numeros1 = [23, 45, 11];
var numeros2 = [3, 45, 98, 12];
var numeros3;

// Exibindo via terminal os valores de todos os vetores
console.log("numeros1 =", numeros1);
console.log("numeros2 =", numeros2);
console.log("numeros3 =", numeros3);

// Copiando valores de um vetor para o outro
numeros3 = numeros1;

console.log("numeros3 =", numeros3);

// Também podemos copiar usando o Spread
numeros3 = [...numeros2];
console.log("numeros3 =", numeros3);

// Da para copia os dois vetores
numeros3 = [numeros1, numeros2];
console.log(numeros3);

// Lembrando que o vetor é um Objeto
console.log(typeof numeros3);

// Usando o Spread para copiar elementos
// O resultado do terminal será distinto, pois os valores copiados foram jutandos em um só vetor
numeros3 = [...numeros1, ...numeros2];
console.log(numeros3);
console.log(typeof numeros3);

// Criando Objetos
const jogador1 = {
    nome: 'Lucas',
    energia: 100,
    vidas: 3,
    magia: 150,
};
const jogador2 = {
    nome: 'Bruno',
    energia: 100,
    vidas: 3,
    velocidade: 80,
};
// Concatenando valores dos jogadores 1 e 2 no 3
const jogador3 = {
    ...jogador1,
    ...jogador2,
};
// Como tem valores em comum nos dois Objetos, ele vai colocar esses valores e repetir o valor diferente mais recente
// Como também se tiver atributos distintos entre os Objetos, ele irá pegar os atributos distintos também
console.log(jogador3);

// Funciona normalmente
const soma = (valor1, valor2, valor3) => {
    return valor1 + valor2 + valor3;
}

console.log(soma(1, 4, 5));

// Mas se colocar em vetor
const numerosParaSomar = [1, 4, 5];
// 1,4,5undefinedundefined
// esse será o retorno do console, pois os valores não foram espalhados
console.log(soma(numerosParaSomar));

// Para resolver basta usar o Spread
// Pois espalha os valores, cada valor para cada parâmetro da função
console.log(soma(...numerosParaSomar));

// Retorna coleção de elementos HTML via o nome
const objetoHtml1 = document.getElementsByTagName("div");

// Retorna o HTML Collection
// Lembrando que o Node não conhece o document, pois ele é do DOM
console.log(objetoHtml1);

// Array de elementos HTML
// A diferença dele para a Coleção é que o Array aceita Objetos de outros tipos
// O Array possui mais funções a serem usadas
const objetoHtml2 = [...document.getElementsByTagName("div")];

console.log(objetoHtml2);

// Percorrer o Array
objetoHtml2.forEach(elemento => {
    console.log(elemento);
})