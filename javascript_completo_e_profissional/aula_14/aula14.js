// Switch Case
// Serve para avaliar uma expressão e encaminha para o fluxo de acordo ao valor dela
// Sintaxe:
// switch(condição) {
//     case condição:
//          instruções
//      break;
//     case condição:
//          instruções
//      break;
//      default:
//          não atingiu a condição necessária
//      break;
//}

var colocacao = 1;

switch (colocacao) {
    case 1:
        // a condição irá cair aqui, pois a colocação tem o valor de 1 que é o mesmo valor de case 1
        console.log("Primeiro Lugar");
        break;
    case 2:
        console.log("Segundo Lugar");
        break;
    case 3:
        console.log("Terceiro Lugar");
        break;

    default:
        console.log("Não alcançou o pódio.");
        break;
}

colocacao = 4;
switch (colocacao) {
    case 1:
        console.log("Primeiro Lugar");
        break;
    case 2:
        console.log("Segundo Lugar");
        break;
    case 3:
        console.log("Terceiro Lugar");
        break;

    default:
        // cairá aqui pois não tem case para a colocacao com valor de 4
        console.log("Não alcançou o pódio.");
        break;
}


switch (colocacao) {
    case 1:
        console.log("Primeiro Lugar");
        break;
    case 2:
        console.log("Segundo Lugar");
        break;
    case 3:
        console.log("Terceiro Lugar");
        break;

    case 4: case 5: case 6: case 7: case 8: case 9: case 10:
        // Cairá aqui pois vale 4
        console.log("Ficou entre os TOP 10");
        break;

    default:
        console.log("Não alcançou o pódio.");
        break;
}