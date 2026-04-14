// Loop For in e Loop For of

var numeros = [32, 12, 9, 0, 13];

console.log("Vetor numeros = " + numeros);
console.log("Imprimindo todos os elementos do vetor numeros com Loop normal:");
// Esse é o Loop normal
// Imprimindo no terminal os elementos do vetor numeros
for (let i = 0; i < numeros.length; i++) {
    // o vetor é o numeros, mas junto a ele temos a variável i que vai pegando os elementos via o indice dela
    console.log(numeros[i]);
}

console.log("Fim da impressão de todos os elementos de numeros com Loop Normal.");

console.log("Imprimindo todos os elementos do vetor numeros com Loop for in:");
// Loop for in
// in numeros significa que quer percorrer e retonar os elementos do vetor
// já o i vai percorrer elemento por elemento
for (i in numeros) {
    console.log(numeros[i]);
}
console.log("Fim da impressão de todos os elementos de numeros com Loop for in.");


console.log("Imprimindo todos os elementos do vetor numeros com Loop for of:");
// Loop for of
// Itera diretamente os elementos do vetor
// Essa é a diferença do for in para o for of. o for of itera diretamente, mas o for in não.
for (numero of numeros) {
    console.log(numero);
}
console.log("Fim da impressão de todos os elementos de numeros com Loop for of.");

const objetoJavaScript = document.getElementsByTagName("div");

console.log("Imprimindo todos os elementos HTML usando o for normal:");
for (let i = 0; i < objetoJavaScript.length; i++) {
    console.log(objetoJavaScript[i]);
}
console.log("Fim da impressão de todos os elementos HTML usando o for normal.");

console.log("Imprimindo todos os elementos HTML usando o for in:");
for (div in objetoJavaScript) {
    console.log(objetoJavaScript[div]);
}
console.log("Fim da impressão de todos os elementos HTML usando o for in.");

console.log("Imprimindo todos os elementos HTML usando o for of:");
for (div of objetoJavaScript) {
    console.log(div);
}
console.log("Fim da impressão de todos os elementos HTML usando o for of.");