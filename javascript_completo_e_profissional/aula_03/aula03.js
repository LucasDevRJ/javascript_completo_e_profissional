"use strict";

// variáveis servem para armazenar valores, podendo ser alterados ou não.
//  São criados espaço em memória no computador para cada variável definida.
// Escopo Global, pois essa variável existe no programa inteiro.
var videogame = "PlayStation 3";

// Essa variável só existe dentro dessa condição.
// Escopo local.
if (true) {
    var outroVideogame = "Xbox 360";
}

console.log(videogame);

// essa variável local consegue ser acessada mesmo não tendo o escopo Global, por ser uma "var"
console.log(outroVideogame);

if (true) {
    let maisOutroVideogame = "PlayStation 4";
}

// não será possível acessar essa variável por ela ser local e "let" ao invés de "var"
//console.log(maisOutroVideogame);

function teste() {
    let nome = "Lucas";

    if (true) {
        console.log("dentro do if do teste: " + nome);
    }

    console.log("dentro do teste: " + nome);
}

teste();

// vai dar erro pois é escopo local
//console.log("Fora do teste: " + nome);

// alterando valor de variável
videogame = "PlayStation 5";

console.log(videogame);

// uma constante é um valor armazenado em memória que não irá ser alterado
const fruta = "Maça";

console.log(fruta);

// vai dar erro porque constante não se altera valor
//fruta = "Banana";