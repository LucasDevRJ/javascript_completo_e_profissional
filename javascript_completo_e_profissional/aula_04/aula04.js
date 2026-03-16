/*
    Operadores Aritméticos
    + adição
    - subtração
    / divisão
    % resto
    * multiplicação
    ++ += incremento
    -- -= decremento
*/

let numero1 = 0, numero2 = 0, resultado = 0;

numero1 = 20;
numero2 = 10;

resultado = numero1 + numero2;
console.log(numero1 + "+" + numero2 + "=" + resultado);

resultado = numero1 - numero2;
console.log(numero1 + "-" + numero2 + "=" + resultado);

// a ordem é a mesma da matemática
resultado = (numero1 + numero2) * 2;
console.log(numero1 + "+" + numero2 + "x2=" + resultado);

resultado = numero1/ numero2;
console.log(numero1 + "/" + numero2 + "=" + resultado);

resultado = numero1 % numero2;
console.log(numero1 + "\\" + numero2 + "=" + resultado);

// incremento
numero1++;
console.log("Número 1 após o incremento = " + numero1);

numero2 += 2;
console.log("Número 2 após o incremento com mais 2 = " + numero2);

// decremento
numero1--;
console.log("Número 1 após o decremento = " + numero1);

numero2 -= 2;
console.log("Número 2 após o decremento com menos 2 = " + numero2);