// Operador Typeof
// Retorna o tipo da variável ou elemento desejado.

var valor1, valor2, valor3, valor4;

valor1 = 3; // variável numerica
valor2 = "Olá Mundo!"; //variável textual
valor3 = 4 === "4"; //variável booleana
valor4 = { //variável Objeto
    nome: "Lucas",
    nacionalidade: "brasileiro",
};

console.log(`A variável 1 que tem o valor de ${valor1} possui o tipo ${typeof valor1}`);
console.log(`A variável 2 que tem o valor de ${valor2} possui o tipo ${typeof valor2}`);
console.log(`A variável 3 que tem o valor de ${valor3} possui o tipo ${typeof valor3}`);
console.log(`A variável 4 que tem o valor de ${valor4} possui o tipo ${typeof valor4}`);